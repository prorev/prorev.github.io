---
id: 2359
title: JavaScript function closure
date: 2014-08-09 13:08:08
author: taimane
layout: post
permalink: /javascript-function-closure/
published: true
categories:
   -
tags:
   -
---
In JavaScript you see the function reside in another function. Well, the inner function has access to variables in the outer function.
A closure is a way to access and manipulate external variables from within a function. 
In other words, the function defined in the closure knows the environment in which it was created. 

Example

<code>function f1(x) {
  var a = 3;
  function f2(y) {
    alert(y + (a)); 
  }
  f2(0);
}
f1(2);
</code>

Thanks

via https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Closures  

