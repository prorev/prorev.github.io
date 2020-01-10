---
id: 12971
title: Why JavaScript strict mode is nice?
date: 2020-01-10
author: taimani
layout: post
permalink: /javascript/strict-mode
published: true
image: 
categories: 
   - javascript
tags: 
   - strict
---
Just an example why JavaScript strict model is great. Just great.
```
function f() {
 "use strict"; // Use ECMAScript 5 strict mode in browsers that support it
 var xfoo;
 xFoo = 1; 
}
```
There will be an error : assigning to an undeclared variable, since inside the function f you cannot use undeclared variables.
```
"use strict"; function f(eval) {}
```
You cannot have _eval_ as variable name. Actually you can but not in a strict mode. This is why strict mode is nice.



