from drf_spectacular.utils import OpenApiExample, extend_schema
from rest_framework import serializers
from .models import Task

class TaskSerializer(serializers.ModelSerializer):
    class Meta:
        model = Task
        fields = '__all__'

    @extend_schema(
        examples=[
            OpenApiExample(
                name="Example Task",
                value={"id": 1, "title": "Buy phone", "completed": False},
                request_only=False,  
                response_only=True,  
            ),
        ]
    )
    def to_representation(self, instance):
        return super().to_representation(instance)