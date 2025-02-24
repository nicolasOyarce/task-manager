from django.test import TestCase
from ..forms import CustomUserCreationForm, CustomUserChangeForm

class CustomUserCreationFormTest(TestCase):

    def test_valid_form(self):
        form_data = {
            "first_name": "Charlie",
            "last_name": "Brown",
            "email": "charlie@example.com",
            "password1": "SecurePass123",
            "password2": "SecurePass123"
        }
        form = CustomUserCreationForm(data=form_data)
        self.assertTrue(form.is_valid())

    def test_invalid_form(self):
        form_data = {
            "first_name": "Charlie",
            "last_name": "Brown",
            "email": "charlie@example.com",
            "password1": "SecurePass123",
            "password2": "WrongPass123"
        }
        form = CustomUserCreationForm(data=form_data)
        self.assertFalse(form.is_valid())

class CustomUserChangeFormTest(TestCase):

    def test_valid_change_form(self):
        form_data = {
            "first_name": "Charlie",
            "last_name": "Brown",
            "email": "charlie@example.com"
        }
        form = CustomUserChangeForm(data=form_data)
        self.assertTrue(form.is_valid())