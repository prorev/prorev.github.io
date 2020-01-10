---
id: 12971
title: True and false in JavaScript
date: 2020-01-08
author: taimani
layout: post
permalink: /javascript/tips
published: true
image: 
categories:
   - javascript
tags:
   - ssh
---
Here are some JavaScript simple tips.

### In JavaScript there are `true` and `false`

These all will *eval* to `false`:

```
undefined
null
false
0
NaN
```
All these will be `true`:

```
true
1
123 // any number
`any string` // non-empty
[] // even empty arrays
{} // even empty objects, except null
```

### There are no classes in JavaScript, only objects

You can use the following shorthand to create object.

    var obj = new Object();


### How not to  use `new Object()`
You can forget the syntax `var obj = new Object();` if you use `{}` like this:

    var obj = {};

Similar no need to use `var arr = new Array();`

    var arr = []; 

looks more compact.

You can use `var regex = new RegExp('something');` alternative:

    var regex = /something/;


### How to create an anonymous function and execute it?    

    (function(){})();

This single-liner first defines anonymous function in JavaScript `function(){}` and then executes it `()`. Currently this function does nothing, but you can set _something_ inside the `{}`.    