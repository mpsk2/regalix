from django.urls import path
from rest_framework.urlpatterns import format_suffix_patterns
from tasks.views import TasksListCreate, TaskUpdate


urlpatterns = [
    path('', TasksListCreate.as_view()),
    path('<int:pk>', TaskUpdate.as_view()),
]

urlpatterns = format_suffix_patterns(urlpatterns)