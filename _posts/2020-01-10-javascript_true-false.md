---
id: 12971
title: True and false in JavaScript
date: 2020-01-08
author: taimani
layout: post
permalink: /javascript/concepts
published: true
image: 
categories:
   - github
tags:
   - ssh
---
### In JavaScript there are `true` and `false`

These all will *eval* to `false`:

* undefined
* null
* false
* 0
* NaN

All these will be `true`:

* true
* 1
* 123 // any number
* ‘any string’ // non-empty
* [] // even empty arrays
* {} // even empty objects, except null

### There are no classes in JavaScript, only objects

You can use the following shorthand to create object.

    var obj = new Object();

But you can `forget var obj = new Object();` if you use `{}` like this:

    var obj = {};

Similar no need to use `var arr = new Array();`

    var arr = []; 

looks more compact.

You can even use `var regex = new RegExp('something');` alternative:

    var regex = /something/;


### How to create an anonymous function and executes it?    

    (function(){})();

This single-liner first defines anonymous function in JavaScript `function(){}` and then executes it `()`. Currently this function does nothing, but you can set _something_ inside the `{}`.    