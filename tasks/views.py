from drf_spectacular.utils import extend_schema
from rest_framework import viewsets
from .serializer import TaskSerializer
from .models import Task

# Create your views here.
class TaskViewSet(viewsets.ModelViewSet):
    serializer_class = TaskSerializer 
    queryset = Task.objects.all()

    @extend_schema(summary="Get all tasks", description="Returns a list of tasks registered in the system")
    def list(self, request, *args, **kwargs):
        return super().list(request, *args, **kwargs)
