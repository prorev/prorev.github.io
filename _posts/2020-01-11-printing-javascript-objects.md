---
id: 2368
title: Printing JavaScript objects
date: 2014-08-09 13:54:01
author: taimane
layout: post
permalink: /javascript/printing-objects/
published: true
categories:
   -
tags:
   -
---
Found these useful:

```js
// method 1
console.log(obj);



// method 2
var output = '';
for (var property in obj) {
 output += property + ': ' + object[property]+'; ';
}


//method 3	
s = JSON.stringify(obj);</code>
```
