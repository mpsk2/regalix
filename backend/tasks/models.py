from django.db import models


class Task(models.Model):
    name = models.CharField(max_length=256)
    completed = models.BooleanField(default=False)
