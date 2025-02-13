from django.test import TestCase
from authentication.models import UserAccount

class UserAccountModelTest(TestCase):

    def setUp(self):
        self.user = UserAccount.objects.create_user(
            email="user@example.com",
            username="user123",
            password="SecurePass123"
        )
        self.superuser = UserAccount.objects.create_superuser(
            email="admin@example.com",
            username="admin123",
            password="AdminPass123"
        )

    def test_create_user(self):
        self.assertEqual(self.user.email, "user@example.com")
        self.assertEqual(self.user.username, "user123")
        self.assertTrue(self.user.is_active)
        self.assertFalse(self.user.is_staff)
        self.assertFalse(self.user.is_superuser)
        self.assertTrue(self.user.check_password("SecurePass123"))

    def test_create_superuser(self):
        self.assertEqual(self.superuser.email, "admin@example.com")
        self.assertEqual(self.superuser.username, "admin123")
        self.assertTrue(self.superuser.is_active)
        self.assertTrue(self.superuser.is_staff)
        self.assertTrue(self.superuser.is_superuser)
        self.assertTrue(self.superuser.check_password("AdminPass123"))

    def test_user_string_representation(self):
        self.assertEqual(str(self.user), "user@example.com")
        self.assertEqual(str(self.superuser), "admin@example.com")

    def test_user_without_email_raises_error(self):
        with self.assertRaises(ValueError):
            UserAccount.objects.create_user(email=None, username="noemail", password="password")