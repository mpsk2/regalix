from rest_framework import generics
from tasks.models import Task
from tasks.serializers import TaskSerializer


class TasksListCreate(generics.ListCreateAPIView):
    serializer_class = TaskSerializer
    queryset = Task.objects.all()


class TaskUpdate(generics.RetrieveUpdateAPIView):
    serializer_class = TaskSerializer
    queryset = Task.objects.all()
