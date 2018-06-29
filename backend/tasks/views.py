from rest_framework import generics
from tasks.models import Task
from tasks.serializers import TaskSerializer


class TasksListCreate(generics.ListCreateAPIView):
    serializer_class = TaskSerializer
    queryset = Task.objects.all()


class TaskUpdate(generics.UpdateAPIView):
    serializer_class = TaskSerializer
    queryset = Task.objects.all()
