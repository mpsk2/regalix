# Regalix recrutation task

## Task

Create one-page-application with python backend. It should provide tasks list with posibility to: 
edit, toggle completed, add new one and see lists of old.

## Python server run

```sh        
        cd backend
        virtualenv -p python3 venv
        source venv/bin/activate
        pip install -r requirements.txt
        ./manage.py migrate
        ./manage.py runserver
```

## JS server run

```sh
        cd frontend
        npm install
        npm build dist:dev
        npm start
```

## Docker run


```sh
        docker-compose up
```

