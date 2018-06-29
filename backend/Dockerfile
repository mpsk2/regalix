FROM python:slim
ENV PYTHONUNBUFFERED 1
RUN mkdir /code
WORKDIR /code/
ADD requirements.txt /code/
ADD requirements-docker.txt /code/
RUN pip install -r requirements-docker.txt
ADD . /code/
WORKDIR /code/backend/

EXPOSE 8000