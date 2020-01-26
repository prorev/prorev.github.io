---
id: 12971
title: Setting Flask web app on Heroku
date: 2020-01-24
author: taimane
layout: post
permalink: /python/flask-heroku/
published: true
image: 
categories: 
   - python
tags:
   - flask
   - heroku
---
- [About Flask](#about-flask)
- [Flask original components](#flask-original-components)
- [Start with Flask](#start-with-flask)
- [More complex Flask application](#more-complex-flask-application)
  - [Comments in the code](#comments-in-the-code)
- [Heroku](#heroku)
  - [Most important on Heroku](#most-important-on-heroku)
  - [Example of requirements.txt file](#example-of-requirementstxt-file)
  - [Example of Procfile](#example-of-procfile)
- [Gunicorn in Flask!? Why?](#gunicorn-in-flask-why)

---
## About Flask
[Flask project on GitHub](https://github.com/pallets/flask){:rel="nofollow"} was created in April 2010. The original idea was to create framework for dealing with _simple_ web apps. 

> In early stage flask authors original idea was to create a bulletin board in Python.

## Flask original components
I will list in here just the two to keep it simple:

* Werkzeug
* Jinja

Werkzeug means "toolbox" in Geraman. This further means the toolbox for the WSGI web server.

Werkzeug includes a debugger dealing with requests, cookies, HTTP headers, web request parameters, ...

Werkzeug also includes HTTP _request_ and _response_ objects, and _the routing system_ -- what function to execute on specific URL.

In other words, Werkzeug is **WSGI web server**.

The other took called Jinja, which is in Jinja2 stage
is a template engine. It is very similar to Liquid template engine.

## Start with Flask 

To start with Flask you don't need much. Create a single file with the `.py` extension and drop these lines:

```python
from flask import Flask

app = Flask(__name__)

@app.route("/")
def index():
   return "Hello from Flask"
```

> The upper code would just work on Heroku. This would be a minimal Flask application.

## More complex Flask application

Digging it further, we may run Flask applications with little more code (more control). 

```python
# most most frequent functions we need in Flask.
from flask import Flask, jsonify, request, render_template, redirect

app = Flask(__name__)

@app.route("/")
def index():
    return "Help me World!"

@app.route("/other/", methods=["GET", "POST"])
def other():
    return "Other world"

@app.route("/get_my_ip/" methods=["GET"])
def get_my_ip():
    return jsonify({'ip': request.remote_addr}), 200

@app.route('/projects/')
def projects():
    rdata = str(request.args)
    return jsonify({'rdata': rdata}), 200

app.config["SECRET_KEY"] = "sec_999"

import multiprocessing 

p = multiprocessing.Process(
   target=app.run, 
   kwargs={'host':'0.0.0.0','port':80}
)
p.start()
```
### Comments in the code

This example used the Flask class `flask.app.Flask` that has the most important method called `run()` to rune the Flask application.

Then we used `jsonify` method from flask to convert objects to json format.

Method `request` is there in Flask also but usually if you used to do `import requests`, you may use `requests`.

Very important method is the `render_template` where you can call into template, usually .html file with Jinja2 templates inside. 

And `redirect` from flask is also there to redirect HTTP requests.

After creating the application `app = Flask(__name__)` we are ready to set HTTP traffic dispatchers.

Lastly we create a process and we call `app.run` and our web application will run  on post 80, host 0.0.0.0.

The benefit of creating a process, instead of thread is simple. You can always, kill a process in Python. Sadly but this is not supper easy for the threads.

```php
# check if the process is alive
if p.is_alive(): 
    print('Still running') 
else: 
    print('Completed') 
    
p.terminate() # kill the process
```

To check if our server is running we can use this code:
```python
import requests
r = requests.get("http://0.0.0.0:80/")

print(r.status_code)
print(r.encoding)
print(r.apparent_encoding)
print(r.text)
```
Output:
```
200
utf-8
ascii
Help me World!
```

> Never, name you flask application python flask.py, because this will conflict with flask.


## Heroku

Heroku is a platform for hosting Python applications :)

Well, not **just** Python applications. It is actually possible to host apps in Java, Node.js, Clojure, PHP, Ruby, Go, and probable some more languages.

It started relatively early in 2007 with Ruby, and from there on project affiliated with Salesforce and with Facebook.

### Most important on Heroku

Actually I wrote this article just to explain what is the most important when publishing Python apps on heroku.

The most important to note when publishing Heroku projects is to have _requirements.txt_ file and file called _Procfile_. (uppercase P)

The file requirements.txt should have all the Pyton project requirements.

Procfile should have the entry point.

### Example of requirements.txt file

It is hard to live without the examples. Here is the example content of the requirements.txt file:
```
flask 
requests
dateparser
gunicorn
```
What will happen when we push the Heroku app, all these will be converted into:

```
import flask
import requests
import dateparser
import gunicorn
```
Without these the Heroku project will fail to work.

### Example of Procfile

As we said we need to create the entry point for our Heroku app. In case we create the web application Procfile may look exactly like this:
```
web: gunicorn index:app --log-file -
```
In here we are telling that we first start the web application. We use the gunicorn, instead of flask because flask doesn't support concurrent requests (multiple requests at the same time). 

Then we will start _index.py_ file first, this is the name of our initial python file.

## Gunicorn in Flask!? Why?

With the single flask `app.run()` you get a single process where single request is being processed at a time, and other requests, will be dispatched for later.

The other requests will run but in synchronous manner:  One by one.

This is normal flask operation in single-threaded mode. It is also possible to run multi-threaded mode like this:

```python
app.run(host=HOST, port=PORT, threaded=True)
```

Still some prefer [gunicorn](https://gunicorn.org/){: rel="nofollow" target="_blank"}, Python WSGI HTTP server since it even better than flask _threaded=True_.




