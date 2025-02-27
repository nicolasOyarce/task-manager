from django.test import TestCase
from django.contrib.auth import get_user_model
from ..models import Task

User = get_user_model()

class TaskModelTest(TestCase):
    
    def setUp(self):
        self.user = User.objects.create_user(username="testuser", password="password123")
        self.task = Task.objects.create(
            user=self.user,
            title="Test task",
            description="Test description"
        )

    def test_task_creation(self):
        self.assertEqual(self.task.title, "Test task")
        self.assertEqual(self.task.description, "Test description")
        self.assertFalse(self.task.done)
        self.assertEqual(self.task.user, self.user)

    def test_task_str_representation(self):
        self.assertEqual(str(self.task), "Test task")

    def test_mark_as_done(self):
        self.task.mark_as_done()
        self.assertTrue(self.task.done)

    def test_task_ordering(self):
        task2 = Task.objects.create(user=self.user, title="Other task", done=True)
        tasks = Task.objects.all()
        self.assertEqual(tasks.first(), self.task)  
        self.assertEqual(tasks.last(), task2)  