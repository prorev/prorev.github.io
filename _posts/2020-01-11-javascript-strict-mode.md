---
id: 3087
title: JavaScript strict mode advantages. Why is it there?
date: 2016-09-08 21:54:20
author: taimane
layout: post
permalink: /javascript-strict-mode/
published: true
categories:
   -
tags:
   -
---
Just a few examples why JavaScript strict model is great. Just great.
<pre>function f() {
 "use strict"; // Use ECMAScript 5 strict mode in browsers that support it
 var xfoo;
 xFoo = 1; 
}</pre>
There will be an error : assigning to an undeclared variable, since inside the function <strong>f </strong>you cannot use<strong> undeclared</strong> variables.
<pre>"use strict"; function f(eval) {}</pre>
You cannot have eval as variable name. Actually you can but not in a <strong>strict</strong> mode. This is why <strong><em>strict mode</em></strong> is so nice.

&nbsp;  

