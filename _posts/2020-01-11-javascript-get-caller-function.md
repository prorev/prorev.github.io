---
id: 2376
title: JavaScript get caller function
date: 2014-08-13 18:19:25
author: taimane
layout: post
permalink: /javascript/get-caller-function/
published: true
categories:
   -
tags:
   -
---
Sometimes we need to know the function that called other function in JavaScript.

We can use arguments for that like this:

```js
function WhoIsMyCaller()
{
   console.log("caller = " + arguments.callee.caller.toString());
   // do something
}
```



