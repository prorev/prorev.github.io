---
id: 3087
title: JavaScript strict mode advantages. Why is it there?
date: 2016-09-08 21:54:20
author: taimane
layout: post
permalink: /javascript/strict-mode/
redirect_from: /javascript-strict-mode/
published: true
categories:
   - javascript
tags:
   - strict mode
---
- [Rules:](#rules)
  - [Prevent using undeclared variables](#prevent-using-undeclared-variables)
  - [Prevent using keywords as variable name](#prevent-using-keywords-as-variable-name)
  - [Prevent deleting variables (objects or functions) using `delete`](#prevent-deleting-variables-objects-or-functions-using-delete)
  - [`eval()` not allowed to create variables](#eval-not-allowed-to-create-variables)
- [Details of "use strict"](#details-of-use-strict)
  - [Use string literal `"use strict";` to declare strict mode](#use-string-literal-use-strict-to-declare-strict-mode)
  - [Literal "use strict" must be at the beginning of a script, function or module](#literal-use-strict-must-be-at-the-beginning-of-a-script-function-or-module)



Just a few examples why JavaScript strict model is handy.
Strict mode helps write **cleaner** JavaScript code and more **secure** Javascript.

## Rules:

* Prevent using undeclared variables
* Prevent using JavaScript keywords as variable name
* Prevent deleting variables (objects or functions) using `delete`
* `eval()` not allowed to create variables



### Prevent using undeclared variables
```js
function f() {
 "use strict"; // Use ECMAScript 5 strict mode in browsers that support it
 var xfoo;
 xFoo = 1; 
}
```

> Without "use strict" there wold be no error. Strict mode eliminates JavaScript silent errors by changing them to throw errors.

There will be an error: assigning to an undeclared variable, since inside the function `f()` you cannot use **undeclared** variables.

### Prevent using keywords as variable name

```js
"use strict"; 
function f(eval) {}
```

You cannot have `eval` as variable name. Actually you can but not in a **strict** mode. This is why _**strict mode**_ is cleaner.



### Prevent deleting variables (objects or functions) using `delete`

*Example:* Syntax error
```js
'use strict';
var x;
delete x;
```

*Example:* Good
```js
'use strict';
var x;
x = null; // garbage collected
```


### `eval()` not allowed to create variables

```js
"use strict";
eval("var x = 53");
alert (x); // Error 
```


## Details of "use strict" 

Pay attention to these details:

* Use string literal `"use strict";` to declare strict mode
* Literal "use strict" must be at the beginning of a script, function or module


### Use string literal `"use strict";` to declare strict mode

Literal "use strict" is just a string. Old browsers cannot throw errors even if they don't understand what it means.

*Example:* No error
```js
"use strict";
var e
function myFunction() {
  e = 2.71;
  alert(e)
}
myFunction();
```


*Example:* Error
```js
"use strict";
function myFunction() {
  e = 2.71;
  alert(e)
}
myFunction();
```

### Literal "use strict" must be at the beginning of a script, function or module

*Example:* Error
```js
"use strict";
function myFunction() {
  e = 2.71;  
  "use strict";
  alert(e)
} 
myFunction();
```

*Example:* No error

```js
var e
function myFunction() {
  "use strict";
  e = 2.71;
  alert(e)
} 
myFunction();
```




