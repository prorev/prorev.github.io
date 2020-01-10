---
id: 12971
title: JavaScript classes
date: 2020-01-10
author: taimani
layout: post
permalink: /javascript/classes
published: true
image: 
categories:
   - javascript
tags:
   - class
---
JavaScript doesn't have _classes_.
Classes can be only simulated using _functions_.

The approach to achieving this is by defining a JavaScript function where we then create an object using the **new** keyword. This can be used to define new properties and methods for the object as follows:
```
// Album "class" example 1
function Album( name , year) {
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
```
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

The different approach is: we use `Album.prototype` or `Object.prototype` to define the new function inside of the object. We can refer to the prototype as to the object constructor function. And we can use prototype again and again to add new functions to the object if we wish. In the first approach we defined function getInfo inside of the function Album representing the object.

However, this is not all, the equivalent to the previous would be:
```
// Album "class" example 3
var album = {
  name : "Hello", 
  year : 2016, 
  getInfo : function () {
    return this.name + " " + this.year;
  };
};
```
anytime we could say:
```
album.name="Good bye";
```
and call
```
album.getInfo();
```
But, even this is not all. We can say something a touch different:
```
// Album "class" example 4
var album = new function(){
  this.name = "Hello"; 
  this.year = 2016; 
  this.getInfo = function () {
    return this.name + " " + this.year;
  };
};

console.log( album.getInfo() );
```

All these are small differences, and provide us a way to create objects in JavaScript from so called classes.

JavaScript (ECMAScript=ES) may be confusing for the developers that used to work with classes at first, but then JavaScript uses objects only and achieves the object creation using functions from objects (prototypes).