---
id: 772
title: REST vs. SOAP what is the trick?
date: 2012-08-19 18:18:28
author: taimane
layout: post
permalink: /rest-vs-soap-what-is-the-trick/
published: true
categories:
   -
tags:
   -
---
Myriad of technologies we have today for the web developers. REST, SOAP, XML RPC, JavaScript, ATOM.

SOAP, the granddaddy of all web services will retire soon.
The reason SOAP is going to retire is the simplicity of REST.

Don't be confused. SOAP will still be used for:
* Asynchronous processing and invocation 
* Formal contracts 
* Stateful operations 
* XML based traffic (remember SOAP relies on XML)

Because SOAP contains many standards inside for the state-full and reliable communication - needed for instance in E-commerce. 

REST is good for:
* Limited bandwidth traffic 
* Simple GET, PUT, POST, and DELETE verbs HTTP traffic.
* XMLHttpRequest object traffic support needed for AJAX. (All modern browsers support it today.)
* Totally stateless operations perfect for stateless CRUD (Create, Read, Update, and Delete) operations.

This doesn't mean REST cannot be used for E-commerce, but you will need to adhere to some standards or have your own state-full organization.  

