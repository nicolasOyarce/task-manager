from django.test import TestCase
from ..models import User

class UserModelTest(TestCase):

    def setUp(self):
        self.user = User.objects.create_user(
            first_name="John",
            last_name="Doe",
            email="johndoe@example.com",
            password="StrongPass123"
        )

    def test_user_creation(self):
        self.assertEqual(self.user.first_name, "John")
        self.assertEqual(self.user.last_name, "Doe")
        self.assertEqual(self.user.email, "johndoe@example.com")
        self.assertTrue(self.user.check_password("StrongPass123"))

    def test_get_full_name(self):
        self.assertEqual(self.user.get_full_name, "John Doe")