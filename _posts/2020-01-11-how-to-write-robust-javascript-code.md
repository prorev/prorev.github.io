---
id: 3084
title: How to write robust JavaScript code
date: 2016-09-08 21:40:36
author: taimane
layout: post
permalink: /javascript/robust/
redirect_from : /how-to-write-robust-javascript-code/
published: true
categories:
   -
tags:
   -
---
JavaScript has syntax that is so liberal since JavaScript developers can do all kinds of ~~crazy~~ and wonderful things at the same time.

There are few tricks for writing <em>robust JavaScript</em> <em>code</em>, catching those who grow up in more restrictive class based programming systems.

## Hide from the global scope

Put your code inside closures to hide from global "scope" or don't use global namespace to define variables

```js
function(){ 
 local_scope=1;
}
```

Technically, all JavaScript functions are closures. The advice in here is to define variables inside functions, and not to _"pollute"_ the global namespace.



## Don't modify Object class prototype

JavaScript object also inherits the properties of another object, called "<strong>prototype</strong>". The

methods of an object are typically inherited properties, and this "_prototypal inheritance_" is a key feature of JavaScript.



If you modify JavaScript objects prototype, this is may be considered a bad practice. Why? Well, it depends, this may be the anti-pattern in case other code relay on that original prototype. However, sometimes this feature is essential, for so called JavaScript inheritance. So in general, it depends on case.

## Don't use JavaScript inline

This is not considered as flexible. However, this also depends on case. 

## Make sure DOM is ready

Make your events are bombed once the document model is ready. You have these two notations, and the second is `$(document).ready` shorthand.

```js
$(document).ready(function(){
 $('#mybutton').on('click', function(){
 alert('Hello World!');
 });
});
```

```js
$(function(){
 $('#mybutton').on('click', function(){
 alert('Hello World!');
 });
});
```

## Use `var` for global variables

Variables in JavaScript can be **global** or **local**.

Global are those variables declared in JavaScript, outside of a function.

Variables declared in JavaScript inside a function can be both <strong>global</strong> and <strong>local</strong>.


When a variable is declared inside a function, <em>without</em> the  `var` keyword, it will be local.

If you declare a variable <em>with</em> <strong>var</strong> it is <strong>global,</strong> regardless of where you defined it.


This will make your JavaScript code more <strong>robust</strong>.

## Use Strict mode

Strict mode in JavaScript is <strong>more robust.</strong> It defines a subset of the language. There are no silent errors, not global objects leakage, and static scoping rules are applied. Also in <strong>strict</strong> mode you cannot delete the variable:

```js
delete x; // cannot work
```

## Insert Semicolons

Common sense.

## Try not to use `eval`

There are many bugs that you can achieve using the <strong>eval</strong>. If there is a workaround not to use it, do not use it. Also note that passing strings rather than functions to either <code>setTimeout</code> or <code>setInterval</code> as this triggers the use of <code>eval()</code> internally.

## Avoid document.write()

When you can use <em>native DOM</em> <code>document.createElement</code>.

`document.write` if not used right can _overwrite_ your page, while `document.createElement` cannot.



