from django.db import models
from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin, BaseUserManager
from django.core.validators import RegexValidator
from django.utils.timezone import now

class UserAccountManager(BaseUserManager):
    def create_user(self, email, username, password=None):
        if not email:
            raise ValueError('Users must have an email address')
        
        email = self.normalize_email(email)
        user = self.model(
            email = self.normalize_email(email),
            username = username
        )

        user.set_password(password)
        user.save(using=self._db)
        return user
    
    def create_superuser(self, email, username, password):
        user = self.create_user(email, username, password)
        user.is_staff = True
        user.is_superuser = True
        user.save(using=self._db)
        return user
    
class ActiveUserManager(UserAccountManager):
    def get_queryset(self):
        return super().get_queryset().filter(is_active=True)
    
class SuperUserManager(UserAccountManager):
    def get_queryset(self):
        return super().get_queryset().filter(is_superuser=True)

class UserAccount(AbstractBaseUser, PermissionsMixin):
    email = models.EmailField(
        max_length=255, 
        unique=True,
        error_messages={
            'unique': 'A user with that email already exists.'
        }
    )
    username = models.CharField(
        max_length=255,
        unique=True,
        validators=[
            RegexValidator(
                regex='^[a-zA-Z0-9_]*$',
                message='Username can only contain letters, numbers, dots, hyphens, and underscores',
                code='invalid_username'
            )
        ]
    )
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)
    is_superuser = models.BooleanField(default=False)
    date_joined = models.DateTimeField(default=now)

    objects = UserAccountManager()

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['username']

    def get_full_name(self):
        return self.username
    
    def get_short_name(self):
        return self.username
    
    def __str__(self):
        return self.email