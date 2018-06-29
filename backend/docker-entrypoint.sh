#!/bin/bash

echo "Apply database migrations"
python3 manage.py migrate --settings=regalix.settings.docker

echo "Start server"
python3 manage.py runserver 0.0.0.0:8000 --settings=regalix.settings.docker

