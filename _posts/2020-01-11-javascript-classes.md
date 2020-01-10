---
id: 3112
title: JavaScript "class" and creating objects
date: 2016-09-11 19:35:36
author: taimane
layout: post
permalink: /javascript-classes/
published: true
categories:
   -
tags:
   -
---
<h2>JavaScript doesn't have classes</h2>
Classes can be only simulated using functions.

The approach to achieving this is by defining a JavaScript function where we then create an object using the <strong>new</strong> keyword. This can be used to define new properties and methods for the object as follows:
	
<pre>// Album "class" example 1
function Album( name , year) {
  this.name = name; 
  this.year = year;
 
  this.getInfo = function () {
    return this.name + " " + this.year;
  };
 
}

var album = new Album("Hello", 2016);
console.log( album.getInfo() );
</pre>

or one another way to do the same, but just a touch different:

<pre>// Album "class" example 2
function Album( name , year) {
  this.name = name; 
  this.year = year; 
}

Album.prototype.getInfo = function(){
  return this.name + " " + this.year;
}

var album = new Album("Hello", 2016);
console.log( album.getInfo() );
</pre>

The different approach is: we use <code>Album.prototype</code> or <code>Object.prototype</code> to define the new function inside of the object. We can refer to the <strong>prototype</strong> as to the <em>object constructor function</em>. And we can use prototype again and again to add new functions to the object if we wish. In the first approach we defined function <code>getInfo</code> inside of the function <code>Album</code> representing the object.

However, this is not all, the equivalent to the previous would be: 

<pre>// Album "class" example 3
var album = {
  name : "Hello", 
  year : 2016, 
  getInfo : function () {
    return this.name + " " + this.year;
  };
};</pre>

anytime we could say:
<pre>album.name="Good bye";</pre>

and call 
<pre> album.getInfo();</pre>

But, even this is not all. We can say something a touch different:

<pre>// Album "class" example 4
var album = new function(){
  this.name = "Hello"; 
  this.year = 2016; 
  this.getInfo = function () {
    return this.name + " " + this.year;
  };
};

console.log( album.getInfo() );</pre>

All these are subtle differences, and provide us a way to create objects in JavaScript from so called classes.

<summary>JavaScript (ECMAScript=ES) may be confusing for the developers that used to work with classes at first, but then JavaScript uses <strong>objects</strong> only and achieves the object creation using functions from objects (prototypes).</summary>  

