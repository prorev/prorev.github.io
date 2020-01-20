---
id: 2357
title: JavaScript prototype
date: 2014-08-09 12:19:58
author: taimane
layout: post
permalink: /javascript/prototype/
published: true
categories:
   -
tags:
   -
---
In Java, you start by creating a classes for your objects and then you can create new objects.

In JavaScript you create an object (there is no concept of class), then you can use it to create new objects from it. 

```js
var King = function(name) {
    this.name = name;
};

//Add getter

King.prototype.getName = function() {
    return this.name;
};

//Add setter
King.prototype.setName = function(name) {
    this.name = name;
};

//New obj

var king = new King("David");
alert(king.getName());

```

