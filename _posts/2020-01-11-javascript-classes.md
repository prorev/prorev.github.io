---
id: 3112
title: JavaScript "classes" in ES5
date: 2016-09-11 19:35:36
author: taimane
layout: post
permalink: /javascript/classes-es5/
redirect_from: /javascript-classes/
published: true
categories:
   -
tags:
   -
---
> This document is relevant for ES5, in ES6 there is a `class` keyword to [define classes](/javascript/ec6/#class).

## JavaScript doesn't have classes

In ES5 classes can be only **simulated** using functions.
The approach to achieving this is by defining a JavaScript function where we then create an object using the **new** keyword. This can be used to define new properties and methods for the object as follows:

	

```js
// Album "class" example 1
function Album(name, year) {
  this.name = name; 
  this.year = year;
  this.getInfo = function () {
    return this.name + " " + this.year;
  };
}

var album = new Album("Hello", 2016);
console.log( album.getInfo() );
```

or one another way to do the same, but just a touch different:



```js
// Album "class" example 2
function Album( name , year) {
  this.name = name; 
  this.year = year; 
}

Album.prototype.getInfo = function(){
  return this.name + " " + this.year;
}

var album = new Album("Hello", 2016);
console.log( album.getInfo() );
```

The different approach is: we use <code>Album.prototype</code> or <code>Object.prototype</code> to define the new function inside of the object. We can refer to the <strong>prototype</strong> as to the <em>object constructor function</em>. And we can use prototype again and again to add new functions to the object if we wish. In the first approach we defined function <code>getInfo</code> inside of the function <code>Album</code> representing the object.



However, this is not all, the equivalent to the previous would be: 



```js
// Album "class" example 3
var album = {
  name : "Hello", 
  year : 2016, 
  getInfo : function () {
    return this.name + " " + this.year;
  };
}
```

anytime we could say:

```js
album.name="Good bye";
album.getInfo();
```

We can say it different:

```js
// Album "class" example 4
var album = new function(){
  this.name = "Hello"; 
  this.year = 2016; 
  this.getInfo = function () {
    return this.name + " " + this.year;
  }
}

console.log( album.getInfo() );</pre>
```

These are small differences to create objects in JavaScript from so called classes.

<summary>JavaScript (ES5) may be confusing for the developers that used Java or other high-level-language classes.</summary>

