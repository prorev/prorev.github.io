---
id: 12971
title: How to write robust code in JavaScript?
date: 2020-01-10
author: taimani
layout: post
permalink: /javascript/robust-code/
published: true
image: 
categories:
   - javascript
tags:
   - code
---
> JavaScript syntax is liberal since JavaScript developers can do all kinds of crazy and wonderful things at the same time. 

There are few tricks for writing robust JavaScript code.


### Don't use global namespace to define variables

Variables defined globally may simple collide.

To achieve that put your code inside closures. This will hide your variable from the global "scope".

```js
function(){ 
 local_scope=1;
}
```

Technically, all JavaScript functions are closures. The advice in here is to define variables inside functions, and not to "pollute" the global namespace.


### Don't modify the `<Object>` class prototype

JavaScript object inherits the properties of a basic object, called "prototype". 

The methods of an object are typically inherited properties, and this "prototypal inheritance" is a key feature of JavaScript.

If you modify JavaScript objects prototype, this is may be considered a bad practice. Why? Well, it depends, this may be the anti-pattern in case other code relay on that original prototype. However, sometimes this feature is essential, for so called JavaScript inheritance. So in general, it depends on case.

### Don't use JavaScript in an inline form

This is not considered as flexible. However, this also depends on case. So, keep in mind these are the general rules.
Make sure DOM is ready

Make your events are bombed once the document model is ready. You have these two notations, and the second is  `$(document).ready` shorthand.
```js
$(document).ready(function(){
 $('#mybutton').on('click', function(){
 alert('Hello World!');
 });
});

$(function(){
 $('#mybutton').on('click', function(){
 alert('Hello World!');
 });
});
```
### Use `var` for global variables

Variables in JavaScript can be **_global_** or **_local_**.

Global are those variables declared outside of a function. Variables declared in JavaScript inside a function are **_local_** but can also be** _global_**.

When a variable is declared inside a function, without the `var` keyword, it will be **_local_**.
If you declare a variable with `var` it is **_global_**, regardless of where you defined it.


### Use the Strict mode

Strict mode in JavaScript is more robust. It defines a subset of the language. There are no silent errors, no global objects leakage, and static scoping rules are applied. Also in strict mode you cannot delete the variable:

```js
delete x;
```

### Try not to use eval

There are many bugs and security problems you may have when using `eval`. If there is a workaround not to use it, try to avoid it.

Note that passing strings rather than functions to either `setTimeout` or `setInterval` triggers the use of `eval()`.

