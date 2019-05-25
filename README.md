# nosql1h-football-stats

## Инструкция по локальному запуску

* установить виртуальную среду
```
python -m venv venv
```
* создать виртуальную среду
```
virtualenv venv
```
* активировать виртуальную среду
```
venv\Scripts\activate
```
* установка нужных пакетов
```
pip install flask
pip install pymongo
pip install numpy
```
* импортирование flask
```
python
import flask
exit()
```
* установка переменной среду FLASK_APP
```
set FLASK_APP=nosql.py
```
* запуск приложения
```
flask run
```

* Перейти по адресу http://localhost:5000/
