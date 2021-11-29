---
id: 12971
title: JavaScript tips
date: 2020-01-08
author: taimane
layout: post
permalink: /javascript/tips
published: true
image: 
categories:
   - javascript
tags:
   - ssh
---
_Table of Contents:_

- [In JavaScript there are `true` and `false`](#in-javascript-there-are-true-and-false)
- [There are no classes in JavaScript, only objects](#there-are-no-classes-in-javascript-only-objects)
- [Forget about `new Object()`](#forget-about-new-object)
- [How to create an anonymous function and execute it?](#how-to-create-an-anonymous-function-and-execute-it)

Here are few JavaScript simple tips.

## In JavaScript there are `true` and `false`

These all will *eval* to `false`:

```js
undefined
null
false
0
NaN
```

All these will be `true`:

```js
true
1
123 // any number
`any string` // non-empty
[] // even empty arrays
{} // even empty objects, except null
```

## There are no classes in JavaScript, only objects

You can use the following shorthand to create object.

```js
var obj = new Object();
```


## Forget about `new Object()`
You can forget the syntax `var obj = new Object();` if you use `{}` like this:

```js
var obj = {};
```

Similar no need to use `var arr = new Array();`

```js
var arr = []; 
```

looks more compact.

You can use `var regex = new RegExp('something');` alternative:

```js
var regex = /something/;
```

## How to create an anonymous function and execute it?    

```js
(function(){})();
```

This single-liner first defines anonymous function in JavaScript `function(){}` and then executes it `()`. Currently this function does nothing, but you can set _something_ inside the `{}`.    