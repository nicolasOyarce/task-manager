from django.contrib.auth.base_user import BaseUserManager
from django.core.exceptions import ValidationError
from django.core.validators import validate_email
from django.contrib.auth.password_validation import validate_password
from django.utils.translation import gettext_lazy as _
import re

class CustomUserManager(BaseUserManager):

    def email_validator(self, email):
        if not email:
            raise ValueError(_("An email address is required"))
        try:
            validate_email(email)
        except ValidationError as e:
            raise ValueError(_("Invalid email: ") + str(e))
        
    def validate_password_strength(self, password):
        if len(password) < 8 or not re.search(r'[A-Z]', password) or not re.search(r'\d', password):
            raise ValueError(_("Password must be at least 8 characters long, contain a number and an uppercase letter"))
        
    def create_user(self, first_name, last_name, email, password, **extra_fields):
        if not first_name:
            raise ValueError(_("Users must submit a first name"))
        
        if not last_name:
            raise ValueError(_("Users must submit a last name"))
        
        if email:
            email = self.normalize_email(email)
            self.email_validator(email)
        else:
            raise ValueError(_("Base User: and email address is required"))
        
        user, created = self.model.objects.get_or_create(
            email=email,
            defaults={
                "first_name": first_name,
                "last_name": last_name,
                **extra_fields
            }
        )

        if not created:
            raise ValueError(_("User with this email already exists"))

        self.validate_password_strength(password)
        extra_fields.setdefault("is_staff", False)
        extra_fields.setdefault("is_superuser", False)

        user.set_password(password)
        user.save()

        return user
    
    def create_superuser(self, first_name, last_name, email, password, **extra_fields):
        extra_fields.setdefault("is_staff", True)
        extra_fields.setdefault("is_superuser", True)
        extra_fields.setdefault("is_active", True)

        if extra_fields.get("is_superuser") is not True:
            raise ValueError(_("Superusers must have is_superuser=True"))
        
        if extra_fields.get("is_staff") is not True:
            raise ValueError(_("Superusers must have is_staff=True"))
        
        if not password:
            raise ValueError(_("Superusers must have a password"))

        if email:
            email = self.normalize_email(email)
            self.email_validator(email)
        else:
            raise ValueError(_("Admin User: and email address is required"))

        return self.create_user(first_name, last_name, email, password, **extra_fields)