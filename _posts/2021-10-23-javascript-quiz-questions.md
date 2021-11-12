---
id: 2987
title: Javascript Quiz and Answers
date: 2020-12-05 17:02:58
author: taimane
layout: post
permalink: /javascript/quiz/
published: true
categories:
   - javascript
tags:
   - quiz
   - answers
---
_Table of Contents:_


## 1. Who created JavaScript language?

☑ **Brendan Eich** ☐ Douglas Crockford ☐ James Gosling ☐ Ryan Dahl 

**Brendan Eich** created the very first JavaScript engine for the Netscape Navigator Web browser.

**Douglas Crockford** specified JSON format. **James Gosling** originally developed Java programing language. 

**Ryan Dahl** wrote Node.js.


## 2. JavaScripts works inside web browsers only?

☐ YES  ☑ **NO**

No. It works not only inside web browsers.

Today, JS engines are embedded in many other types of host software, including server-side in web servers and databases, and in non-web programs such as word processors and PDF software.

Today you can also write mobile and desktop applications in JavaScript.


## 3. What is JavaScript?

☐ Language that follows ECMAScript standard ☐ Client-side scripting language (web browsers) ☐ Server-side scripting language ☑ **All these**

ECMAScript is presents standard or set of rules that JavaScript follows, and tries to adopt over time.

Since JavaScript works inside browsers (Firefox, Chrome, Microsoft Edge), developer teams working on browsers are responsible for adopting ECMAScript standards.

Also JavaScript is the scripting language on the server-side (Node.js).


## 4. Developers first reference on JavaScript should be MDN (Mozilla Developer Network)

☑ **True** ☐ False

True. MDN (Mozilla Developer Network) is a resource for developers, maintained by the community of developers and technical writers.

MDN has many documents on a wide variety of subjects, such as: HTML5, JavaScript, CSS, Web APIs and more.




## 5. Is JavaScript Object Oriented language?
☑ **YES** ☐ NO

Yes. JavaScript supports Object Oriented Programming (OOP) because it supports inheritance through prototyping.

JS can create polymorphism, encapsulation and many sub-classing paradigms.



## 6. JavaScript is scripting language of Java?
☐ True ☑ **False**


JavaScript should not be confused with the Java programming language.

The two programming languages have similar syntax, but one cannot say JavaScript is the scripting language of Java. They are not that related.




## 7. JavaScript has primitive (immutable) data types and mutable object type.

☑ **YES** ☐ NO

Yes. In JavaScript, there are 6 primitive data types: `string`, `number`, `boolean`, `null`, `undefined`, and `symbol`.

Primitive types define immutable values. For example, if we set:

`var a = 1;`

and later on we set

`a = 2;`

Inside JavaScript runtime, variable `a` that is first equal to 1 will be destroyed and new variable `a` will be created to hold the value of 2.

Objects on the other side are mutable. You can set a property to the object, but it will not be destroyed.




## 8. Inside what HTML tag you would put JavaScript code?
☐ `<js>` ☐ `<scripting>` ☑ **`<script>`** ☐ `<javascript>`

The HTML `<script>` tag is used to embed or reference JavaScript code.

Tags: `<js><scripting><javascript>` are fake.



## 9. Where is the correct place to insert JavaScript on a web page?

☐ Inside `<body>`<br>
☐ Inside `<head>`<br>
☑ **Inside `<head>` and `<body>`**<br>
☐ None of these

The correct place to insert JavaScript on the web page is both:

`<head>` section and
`<body>` section.



## 10. What is the correct syntax to use an external script called "new.js"?

☑ **`<script src="new.js">`**<br>
☐ `<script name="new.js">`<br>
☐ `<script href="new.js">`<br>
☐ `<script content="new.js">`


The correct answer is:
`<script src="new.js"></script>`

If the `"src"` attribute is present, content inside the  `<script></script>` tags must be empty.

`<script name="new.js">`<br>
`<script href="new.js">`<br>
`<script content= "new.js">`
are fake.

The `name, href, content` are not `<script>` tag attributes.


## 11. The external JavaScript file must contain the `<script></script>` tags.
☑ **False** ☐ True

External file is called like this:
`<script src="new.js"></script>`

We don't need to have a wrapper `<script></script>` in `new.js`.

Note: External JavaScript files need to have **.js** extension.


## 12. What is correct commenting in JavaScript?

☑ **`/*This is a comment*/`**<br>
☐ `<!--This is a comment-->`

In JavaScript you can write single line comments with `//` or multiline comments with `/* */`.

For example:

```
// This is single line comment

/*This comment is
multiline*/
````

Note: `<!--This is also a comment-->` is how you comment in HTML.



## 13. How do you declare a JavaScript variable x?

☐ `define x;` <br>
☐ `variable x;` <br>
☑ **`var x;`**<br> 
☐ `def x;`

Correct is to use `var x;`

The `var` statement declares a variable, optionally initializing it to a value.

Note: In `var x;` we just declared a variable `x`. We haven't initialized it.

To initialize a variable `x` you would write like this:

`var x = "quiz";`



## 14. To get the data type of some variable you will use:

☐ `dataType`
☑ `typeof`

The `typeof` operator is used to get the data type. The operand can be either a literal or a data structure such as a variable, a function, or an object. The operator `typeof` returns the string.

Following lines are both correct:<br>
`typeof operand`<br>
`typeof(operand)`



## 15. When we don't assign a value to a variable it will be?

☐ `null` <br>
☑ **`undefined`** <br>
☐ `""` <br>
☐ `NaN`

A variable that has not been assigned a value holds the value `undefined`.

Expression `null` represents the intentional absence of any object value or type.

If we write: `var x = null;`

We can say is: `x` is known to exist, but it has no type or value.




## 16. In JavaScript can we pass functions as arguments to other functions?

☑ **YES** ☐ NO

Yes. This means JavaScript supports passing functions as arguments to other functions, returning them as the values from other functions, and assigning them to variables or storing them in data structures.

This feature is called **first-class** functions.



## 17. Would the next code cause the error?

```javascript
var y;
y = 9;
y = "Dog";
```
☐ YES ☑ **NO**

No. JavaScript supports **dynamic** types. This means that the same variable can be used to hold different data types.

In our case:

```javascript
var y;
y = 9;
typeof y; // returns "number"
y = "Dog";
typeof y; // returns "string"`
```

The variable `y` will first hold the number data type variable and later the string.

This is why we also say JavaScript is **loosely typed**.




## 18. Can you guess the return of the following code:

```javascript
Boolean(10>9)
```

☑ **`true`**<br>
☐ `NaN` <br>
☐ `false` <br>
☐ `Undefined`

It will return `true`.

Note: In JavaScript primitive boolean values `true` and `false` are not the same as Boolean object values `true` and `false`.

The Boolean object is an object representation of a primitive boolean type.

The value passed as the first parameter will be converted to Boolean object `true` or `false`.

`Boolean(arg)` will return `true` if arg is either one of these:
```
omitted 
0 
-0 
null 
false 
NaN 
undefined 
the empty string ("").
```

Else, Boolean object will be initialized as `false`.




## 19. How do you write "Eureka" in an alert box?

☐ `msg("Eureka");`<br>
☑ **`alert("Eureka");`**<br>
☐ `msgBox("Eureka");`<br>
☐ `alertBox("Eureka");`

The `alert()` method displays an alert box with a specified message and the OK button.

Note: The alert box takes the focus away from the current window, and forces the browser to read the message.

Do not overuse this method, as it prevents the user from accessing other parts of the page until the box is closed.


## 20. What is the correct way to write a JavaScript array?

☑ `var num=[1,2,3];`<br>
☐ `var num=(1,2,3);`

In JavaScript we create arrays in two ways:

Array literal syntax:
`var arr = [item1, item2, ...];`

Using the `new` keyword:
`var arr = new Array(item1, item2, ...);`

Array items typically have different data types.


## 21. `var x = 3 + 4 + "7"`

The value of x is :<br>
☐ `14`<br>
☑ **`"77"`** <br>
☐ `"347"` <br>
☐ `77`

The correct result is `"77"`.

Inside `var x = 3 + 4 + "7"` the first `+` is an addition operation 3+4=7, and the other `+` is a concatenation `7+"7"` that returns the string `"77"`.


 
## 22. What is the result of the comparison?

```js
var x = "Ted";
var y = new String("Ted");
x === y
```

☐ True ☑ **False**

The operator `===` returns true if the operands are equal by value and by type.

The variables `x` and `y` have different types.

The type of variable `x` is **string**.
The type of the variable `y` is **object**.


## 23. What will be the variable lastNum?

```js
var num = [1, 2, 3];
var lastNum = num[num.length];
```

☐ `3` ☑ **`undefined`**

The variable `lastNum` will be `undefined`.

Note: In JavaScript indexing starts from 0.
`num.length` will return 3, because there are 3 elements.

To get the last element of the array we should write:
`num[2];` or
`num[num.length - 1];`


## 24. Which JavaScript event occurs when the user clicks HTML element?

☑ **`onclick`** ☐ `onmouseclick`

`onclick` - the event occurs when the user clicks the element.
`onmouseclick` - doesn't exist



## 25. What is the intruder?
☐ `mouseover` <br>
☐ `mouseout` <br>
☑ `mousein` <br>
☑ `mousemove`

The `mousein` is not a standard event in JavaScript.


`mousemove` - the event occurs when the pointer is moving while it is over an element

`mouseout` - the event occurs when a user moves the mouse pointer out of an element, or out of one of its children

`mouseover` - the event occurs when the pointer is moved onto an element, or onto one of its children



## 26. Can you test JavaScript code inside web browsers like Firefox, Chrome, Microsoft Edge?

☑ **YES** ☐ NO

Yes. All you need is:

1. Press F12 to open the Inspector
2. Select the Console tab
3. Start typing your JavaScript and press Enter when done.







## 27. What is the return of the next comparison:

`null === undefined`

☐ True ☑ **False**

The operator `===` returns `true` if the operands are equal by value and by type.

The `null` and `undefined` are equal by value but not by type.

```js
typeof(null) // returns "null"
typeof(undefined) // returns "undefined"
```




## 28. Is this correct?

`var int number = 12;`

☐ YES ☑ **NO**

JavaScript does not define different number types (integers, short, long, floating-point etc). There is only single "number" type.

Numbers can be written with or without decimals.

JavaScript numbers are always stored as double precision floating point numbers (64 bit representation).

## 29. Are semicolons required at the end of JavaScript line?

☐ YES ☑ **NO**

No, semicolons are not needed at the end of line.

A semicolon at the end of a line indicates where a statement ends.
If you need to separate statements on a single line they are required.

Some people believe that it is a good practice to put them at the end of each statement.


## 30. To add an element to the end of an array you use:

☐ `pop()`<br>
☐ `add()`<br>
☑ **`push()`**<br>
☐ `addToEnd()`

The `push()` method adds a new element to the end of an array.

The `pop()` method removes the last element from an array.

The methods `add()` and `addToEnd()` are not standard commands in JavaScript.



## 31. Which of the following events you will add in `addEventListener()` method?

☑ **`click`**<br> 
☐ `onclick`

The `click` is an event listener used for the `addEventListener()` method.

Example: `object.addEventListener("click", myFunction);`

The `onclick` is an event handler.

The syntax for `onclick` is like this:
`object.onclick = function(){ ... };`


## 32. A string can be converted to an array using which method:

☑ **`split()`**<br>
☐ `slice()` <br>
☐ `splice()` <br>
☐ `piece()`

The method to convert string to an array is called `split()`.

Here is the example:
```js
var text= "a,b,c,d,e";
var arrText = text.split(",");
// The variable arrText is array object.
// arrText=["a","b","c","d","e"];
```


## 33. Does the `addEventListener()` method allow you to add many events to the same element?

☑ **YES** ☐ NO

Yes, the `addEventListener()` method allows you to add many events to the same element, without overwriting existing events.

```js
x.addEventListener("mouseover", func1);
x.addEventListener("click", func2);
x.addEventListener("mouseout", func3);`
```





## 34. Can we convert the string 
`"5 dogs"` to number with the method: `parseInt("5 dogs");`?


☑ **YES** ☐ NO

Yes, in this case it is possible.

The function `parseInt()` parses a string and if it is possible converts to number, otherwise returns `NaN` (Not a Number).

For instance:

`parseInt("dogs 5"); // will return NaN`


## 35. What is the output of this code?

```js
var letters = ['a', 'b'];
letters.slice(1);        
console.log(letters);  
```

☐ `Array['b']` <br>
☑ `Array['a','b']`

The statement `letters.slice(1)` slices out a part of the array letters starting from array element 1.

```js
console.log(letters.slice(1));
//returns Array['b']
```

The `slice()` method creates a new array.
It will not remove any elements from the source array.

```js
console.log(letters);
//returns Array ['a','b']
```


## 36. Can we declare a variable if we have used it before?

☑ **YES** ☐ NO

A variable can be declared after it has been used.
```js
a = 3;
var a;
```

Note: Variables declared without the `var` keyword are global. Variables that are defined using the `var` keyword will be local to the scope. If they have been declared inside the function they will be local for that function.

Generally, the coding style above is not a good practice. We should always tend to declare variables early and initialize them early.


## 37. Moving declarations to the top of the script is called hoisting

☑ **YES** ☐ NO

Yes. Hoisting is JavaScript's default behavior of moving all declarations to the top of the current scope (to the top of the current script or the current function).




## 38. If a function is called with a missing argument, the value of the missing argument is set to undefined.

☑ **YES** ☐ NO

Yes. Sometimes it is a good habit to assign default values to arguments.
For example:

```js
function sum(a, b){
    return a + b;
}
```

If we call `sum(0,)` we will get `NaN`.

`0+undefined` will evaluate to `NaN`.


## 39. What is the result of the comparison using `==` operator ?

```js
var a = 5;
var b = "5";
a==b
```

☑ **`true`** ☐ `false`

In regular comparison `==`, data type does not matter.

Variables `a` and `b` are equal by value and the result of this comparison is `true`.



## 40. What is the result of the comparison using `===` operator ?

```js
var a = 5;
var b = "5";
a===b
```

☐ True ☑ **False**

In `===` comparison, data type does matter.

Variables `a` and `b` are not equal by type and the result of this comparison is `false`.






## 41. Variables created without the keyword `var`, are always global, even if they are created inside a function.

☑ **YES** ☐ NO

To make sure that the variable belongs to the desired scope, always use the keyword `var`.

```js
function x() {
a = 5;
var b = 10;
}
```

Since it is defined without the keyword var the variable a is global although it is in the function.



## 42. Can we define the function as follows?

```js
var x = function(a, b){
   return a*b;
}
```

☑ **YES** ☐ NO

This is an example of an **anonymous** function where the function name is omitted.

Note: Variable `x` holds the function object.

Recall that in JavaScript you can put a function into a variable and pass that variable to another function.



## 43.  Which of the following properties return the URL of the current page.

☐ `location.URL`  <br>
☐ `URL.location`  <br>
☑ **`window.location.href`** <br>
☐ `window.location.hostname`

The `window.location.href` property returns the URL of the current page.

The `window.location.hostname` property returns the domain name of the web host.

The `location.URL` and the `URL.location` are fake.



## 44. How can you detect the client's browser type?

☐ `navigator.platform` <br>
☐ `navigator.appName` <br>
☑ `navigator.userAgent` <br>
☐ `browser.appName`

The `navigator` object contains information about the browser.

The `navigator.userAgent` property returns type of the browser.

Here is how it looks for Mozilla Firefox version 60: 
```
Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:60.0) Gecko/20100101 Firefox/60.0
```

The `navigator.appName` property returns the traditional name of the browser application.
Typical appNames: 

```
Opera, Netscape, Microsoft Internet Explorer
```

The `navigator.platform` property returns the browser platform.
Typical platforms are: 
```
HP-UX
Linux i686
Linux armv7l
Mac68K
MacPPC
MacIntel
SunOS
Win16
Win32
WinCE
```

The `browser.appName` is fake.


## 45. You need to check the Internet connectivity status in a browser. Which method should you use?


☐ `navigator.isOnline` 
☑ **`navigator.online`**

The navigator object contains information about the browser.

The `navigator.online` property detect if browser is in online.
It returns boolean `true` if browser is online, otherwise `false`.



## 46. Find the intruder:
☐ `Function()`<br> 
☐ `Number()`<br>
☑ **`Math()`**<br>
☐ `Boolean()`

`Math()` is not a constructor. The `new` keyword cannot be used on `Math` class.

All properties and methods of `Math` are static.

`Function()`, `Number()` and `Boolean()` are built-in constructors.


## 47. The method `confirm('message')` will show:

☑ **dialog box**
☐ input field

The `confirm()` method displays a dialog box with a specified message and buttons `OK` and a `Cancel`.


## 48. Which timing event is used to delay the execution of the function?

☐ `timer()`
☑ **`setTimeout()`**

We use `setTimeout()` to create a delay.

Here is how we call the function:

`setTimeout(function, milliseconds);`

The first parameter is a function we plan to execute.

The second parameter indicates the number of milliseconds before execution.


## 49. What would be the result?
`document.getElementsByTagName("p");`

☐ array <br>
☑ HTMLcollection <br>
☐ number <br>
☐ paragraph

The `getElementsByTagName()` method returns an `HTMLCollection` object.

This collection will represent all paragraphs(`<p>` tags) on the web page.

## 50. Choose a way to add a new property "price" to the constructor "Shoes".

```js
function Shoes(color, size) {
   this.color = color;       
   this.size = size;         
}
```

☑ **`Shoes.prototype.price=100;`**
☐ `Shoes.price=100;`

All JavaScript objects inherit properties and methods from a prototype.

The JavaScript prototype property allows you to add new properties to object constructors.

```js
function Shoes(color, size) {
    this.color = color;
    this.size = size;
}

Shoes.prototype.price = 100;
var myShoes = new Shoes("blue", 10);
Console.log(myShoes.color); //returns "blue"
Console.log(myShoes.price); //returns 100
```





