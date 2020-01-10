---
id: 3082
title: JavaScript Literal shorthands, object array and regex
date: 2016-09-08 20:45:43
author: taimane
layout: post
permalink: /javascript-literal-shorthands-object-array-and-regex/
published: true
categories:
   -
tags:
   -
---
There are no classes in JavaScript, only objects.
You can use following shorthand to create object. 

<code>var obj = new Object();</code>
But you can forget <code>var obj = new Object();</code>
Use <code>{}</code>
<code>var obj = {}; </code>


Similar no need to use <code>var arr = new Array();</code>
<code>var arr = []; </code> looks more compact.

You can even use <code>var regex = new RegExp('something');</code> alternative:

<code>var regex = /something/;</code>   

