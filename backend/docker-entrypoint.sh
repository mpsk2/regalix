#!/bin/bash

echo "Apply database migrations"
python3 manage.py migrate --settings=regalix.settings.docker

echo "Start server"
gunicorn --env DJANGO_SETTINGS_MODULE=regalix.settings regalix.wsgi

