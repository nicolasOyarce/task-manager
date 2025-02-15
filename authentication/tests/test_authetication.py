from django.test import TestCase
from django.contrib.auth import authenticate
from authentication.models import UserAccount

class AuthenticationTest(TestCase):

    def setUp(self):
        self.user = UserAccount.objects.create_user(
            email="user@example.com",
            username="user123",
            password="SecurePass123"
        )

    def test_authenticate_with_email(self):
        """Prueba autenticación usando el email"""
        user = authenticate(username="user@example.com", password="SecurePass123")
        self.assertIsNotNone(user)
        self.assertEqual(user.email, "user@example.com")

    def test_authenticate_with_username(self):
        """Prueba autenticación usando el username"""
        user = authenticate(username="user123", password="SecurePass123")
        self.assertIsNotNone(user)
        self.assertEqual(user.username, "user123")

    def test_authenticate_with_wrong_password(self):
        """Prueba autenticación con contraseña incorrecta"""
        user = authenticate(username="user@example.com", password="WrongPassword")
        self.assertIsNone(user)
