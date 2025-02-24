from django.test import TestCase
from ..models import User

class CustomUserManagerTest(TestCase):

    def test_create_user(self):
        user = User.objects.create_user(
            first_name="Alice",
            last_name="Smith",
            email="alice@example.com",
            password="TestPass123"
        )
        self.assertEqual(user.first_name, "Alice")
        self.assertEqual(user.last_name, "Smith")
        self.assertEqual(user.email, "alice@example.com")
        self.assertFalse(user.is_staff)
        self.assertFalse(user.is_superuser)

    def test_create_superuser(self):
        admin = User.objects.create_superuser(
            first_name="Admin",
            last_name="User",
            email="admin@example.com",
            password="AdminPass123"
        )
        self.assertTrue(admin.is_staff)
        self.assertTrue(admin.is_superuser)