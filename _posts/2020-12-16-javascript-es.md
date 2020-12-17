---
id: 2987
title: ECMAScript Basics
date: 2020-12-16 
author: taimane
layout: post
permalink: /javascript/es
published: false
categories:
   - javascript
tags:
   - await
---
- [From JS history](#from-js-history)
- [ES6 (ES2015)](#es6-es2015)
  - [Array](#array)
  - [Object](#object)
  - [Function](#function)
  - [Arrow Function](#arrow-function)
  - [Class](#class)
  - [Set](#set)
  - [Map](#map)
  - [`for...of` loops](#forof-loops)
- [ES2017](#es2017)
  - [`Object.values()`](#objectvalues)
  - [`Object.entries()`](#objectentries)
  - [async/await](#asyncawait)
- [Appendix](#appendix)
  - [String Methods](#string-methods)
  - [Global Methods](#global-methods)

![ESMAScript](/wp-content/uploads/2020/12/javascript.jpg)

In here you will find brief history of ECMAScript and we will cover what was new in ES6 and ES2017. Still, the idea of this article is to cover basic JavaScript features and to provide examples.

## From JS history

_Mozilla Firefox_ was the first browser ever, but at that time it was called _Netscape_.

Netscape created _JavaScript_ first version, and they submit the language to ECMA (European Computer Manufacturers Association) for standardization.

There was a problem with the language name _JavaScript_, because _Sun Microsystems_ (now Oracle) created language Java, so they had to use the name it **ECMAScript** instead.

You can find ECMAScript short name is ES, but we all simple use JavaScript.

The two major impact releases of ES were ES5 (2010) and ES6 (2015). After ES6 we had: ES2016, ES2017, ES2018, ES2019, and ES2020. The trend may continue...

[New ES releases](https://en.wikipedia.org/wiki/ECMAScript){:rel="nofollow"} should bring new features and better security with improved simplicity. At least this is the idea.

European Computer Manufacturers Association last standalone version was ES3, after the version 3 Yahoo, Microsoft, Google, and others bigger players joined and helped to define the ES standard.

## ES6 (ES2015)

Since ES6 currently is very popular (**widely supported**). This release brought:

* `for...of` loops, before that we had C style `for` loops
* Python-style generators
* arrow function expression `(() => {...})`
* `let` keyword for local declarations 
* `const` keyword for constant local declarations
* new collections (maps, sets and WeakMap)
* promises


We can use any browser to write JavaScript. With FireFox use _Inspect Element_ -> _Console_ and start typing/executing JavaScript.

Use `console.log()` method to print.

### Array

Arrays were part of JavaScript from the early days, but in here we use the new ES6 `let` and `const` keywords to define them.

```js
let a=[]
a.push("asdf")
a.push("asdf")
console.log(a)
```
Out:
```
Array [ "asdf", "asdf" ]
```

> Before `let` keyword (ES6) there was `var` in older releases. 

> To define constants `const` keyword will suffice `const PI = 3.141593`.


Most frequent property is `.length`. You would use it like: `a.length`.

Core Array methods:

method | desc
---|---
`concat()` | Joins two or more arrays, and returns a copy of the joined arrays
`indexOf()` | Searches array for an element, and returns element's position
`join()` | Joins all elements of an array into a string 
`lastIndexOf()` | Searches array for an element, starting at the end, and returns element's position
`pop()` | Removes last element of an array, and returns that element
`push()` | Adds new element to the end of an array, and returns the new length
`reverse()` | Reverses the order of elements in an array
`shift()` | Removes the first element of an array, and returns that element
`slice()` | Selects part of an array, and returns the new array
`sort()` | Sorts the elements of an array
`splice()` | Adds/Removes elements from an array
`toString()` | Converts an array to a string, and returns result
`unShift()` | Adds new elements to the beginning of an array, and returns the new length
`valueOf()` | Returns the primitive value of an array
`map()` | Creates a new array with the results of calling a provided function on every element in this array
`filter()` | Creates a new array with all elements that pass the test implemented by the provided function
`every()` | Tests whether all elements in the array pass the test implemented by the provided function
`foreach()` | Executes a provided function once per array element 
|



### Object

Fist we will create an empty object.

```js
const empty = {}
```

The problem with this object, we cannot alter it, because it is `const`.

```js
let ob = {
    type : "string",
    value : "asdf"
}
```

We will get:
```
Object { type: "string", value: "asdf" }
```

*Example: An array of objects*
```js
let ao = []
ao.push({},{},{})
ao[0] = {
    type : "int",
    value : 12
}
ao[1] = {
    type : "string",
    value : "asdf"
}
ao[2] = {
    type : "object",
    value : ao[1]
}
console.log(ao)
```

_Output:_
```
(3) […]
0: Object { type: "int", value: 12 }
1: Object { type: "string", value: "asdf" }
2: {…}
type: "object"
value: Object { type: "string", value: "asdf" }
<prototype>: Object { … }
length: 3
```


### Function

A function are block of JavaScript code we invoke.

```js
const square = function(x){
    return x*x;
}
```

### Arrow Function

This is new ES6 feature. The same function from above can be achieved using the alternative function syntax (arrow function syntax):

```js
const square = (x) => x*x
```

Typically, I avoid using the arrow function from the same reason I avoid the lambda functions in Python, but they are possible.


### Class

A JavaScript class is not an object, officially it is a _function_ under the ~~wood~~ hood.

```js
class Browser {
  constructor(name, version) {
    this.name = name;
    this.version = version;
  }
  print(){
      console.log(`${this.name} version ${this.version}`  )
  }
}

console.log(typeof Browser) // function
let ff85 = new Browser("Firefox", 85);
console.log(typeof ff85) // object
console.log(ff85) // Object { name: "Firefox", version: 85 }
ff85.print() // Firefox version 85
```

> `class` keyword is new in ES6. Before we used `function` keyword to [create classes](/javascript/classes) in ES5.


### Set 

Sets are Arrays where all elements are unique. Sets are new in ES6.

```js
let s = new Set()
s.add("hello").add("goodbye").add("hello")
console.log(s) // Set [ "hello", "goodbye" ]
console.log(s.size === 2) // true
console.log(s.has("hello") === true) // true
for (let key of s.values()) 
    console.log(key) // insertion order first hello then goodbye
```
Use method `add()` to append element to a Set.
We also used in here the new ES6 `for...of` syntax.

###  Map

Map is a collection of elements, where each element of a Map is _key/value_ pair.

Map is very similar to dict in Python, except we can iterate over Map in the order of insertion. For Python dict this is not true, unless we use ordered dicts.

_Example: Map_

```js
let m = new Map()
m.set("hello", 42)
m.set(53, "world")
console.log(m.size === 2)
for (let [ key, val ] of m.entries())
    console.log(key + " = " + val)
```

_Out:_
```
true 
hello = 42 
53 = world
```

So far we explained what is new in ES6 compared to eS5 except we haven't explained ES6 Promises. The next section will cover that inside async/await section.

### `for...of` loops

Iterators and Generators bring the concept of iteration into JavaScript. You can iterate them using `for...of` loops.

_Example: Iterator_

Iterator is any JavaScript object that implements `next()` method and returns an object with two properties **value** and **done**.

`value` means the next value in the iteration.sequence.
`done` is true if the last value in the sequence has already been consumed, else false.


```js
function makeRangeIterator(start = 0, end = Infinity, step = 1) {
    let nextIndex = start;
    let iterationCount = 0;

    const rangeIterator = {
       next: function() {
           let result;
           if (nextIndex < end) {
               result = { value: nextIndex, done: false }
               nextIndex += step;
               iterationCount++;
               return result;
           }
           return { value: iterationCount, done: true }
       }
    };
    return rangeIterator;
}
const it = makeRangeIterator(1, 10, 2);

let result = it.next();
while (!result.done) {
 console.log(result.value); // 1 3 5 7 9
 result = it.next();
}
console.log("Iterated over sequence of size: ", result.value); 
```
_Out:_
```
1
3
5
7
9
Iterated over sequence of size: 5 
```


_Example: Generator_

```js
function* simpleGenerator() {
    yield 1;
    yield 3;
    yield 5;
} 
var g = simpleGenerator();
 
for (let i=0; i<4; i++){
console.log(g.next()); 
}
```
_Out:_
```
Object { value: 1, done: false }
Object { value: 3, done: false }
Object { value: 5, done: false }
Object { value: undefined, done: true }
```


> String, Array, TypedArray, Map and Set are all built-in iterables, because their prototype objects all have a `Symbol.iterator` method.

JavaScript supports 5 types of loops:

type | desc
---|---
for | loops through a block of code a number of times
for/in | loops through the properties of an object
for/of | loops through the values of an iterable object
while | loops through a block of code while a specified condition is true
do/while | also loops through a block of code while a specified condition is true
|



## ES2017

ES2017 or ECMAScript 2017 new features include the `Object.values`, `Object.entries` and `Object.getOwnPropertyDescriptors` functions for easy manipulation of Objects and my favorite `async/await` constructions which use generators and promises for concurrency.


### `Object.values()`

This is a method that should return iterator.

_Example:_
```js
const ob = {
  a: 'asdf',
  b: 53,  
};
console.log(Object.values(ob)); // Array [ "asdf", 53 ]
```

### `Object.entries()`

This method is similar as `Object.values()` except it returns an object containing all elements (entries).


_Example:_
```js
const ob = {
  a: 'asdf',
  b: 53,  
};
console.log(typeof Object.entries(ob));
console.log(Object.entries(ob));
```

_Out:_
```
object
0: Array [ "a", "asdf" ]
1: Array [ "b", 53 ]
length: 2
```




### async/await

There is new syntax to work with promises called async/await.

```js
async function f() {
  return 1;
}
```

The keyword `async` means the function _always_ returns a promise.

This is exactly equivalent to this code:

```js
async function f() {
  return Promise.resolve(1);
}
```

_Example: Promise_

```js
// promise p
let p = new Promise(function(myResolve, myReject) {
  setTimeout(function() { myResolve("I love You !!"); }, 3000);
});

myPromise.then(function(value) {
  document.getElementById("demo").innerHTML = value;
});
```


## Appendix

### String Methods

Since working with strings is one of the most frequent action in JavaScript here are the string methods outlined:

method | desc
---|---
`charAt()` | Returns the character at the specified index
`charCodeAt()` | Returns the Unicode of the character at the specified index
`concat()` | Joins two or more strings and returns a copy of the joined strings
`fromCharCode()` | Converts Unicode values to characters
`indexOf()` | Returns the position of the first found occurrence of a specified value in a string
`lastIndexOf()` | Returns the position of the last found occurrence of a specified value in a string
`match()` | Searches for a match between a regular expression and a string, and returns the matches
`replace()` | Searches for a match between a substring (or regular expression) and a string, and replaces the matched substring with a new substring
`search()` | Searches for a match between a regular expression and a string, and returns the position of the match
`slice()` | Extracts a part of a string and returns a new string
`split()` | Splits a string into an array of substrings
`substr()` | Extracts the characters from a string, beginning at a specified start position, and through the specified number of characters
`substring()` | Extracts the characters from a string, between two specified indices
`toLowerCase()` | Converts a string to lowercase letters
`toUpperCase()` | Converts a string to uppercase letters
`valueOf()` | Returns the primitive value of a String object 
|


### Global Methods

These are the JavaScript global methods

method | desc
---|---
`decodeURI()` | Decodes a URI
`decodeURIComponent()` | Decodes a URI component
`encodeURI()` | Encodes a URI
`encodeURIComponent()` | Encodes a URI component
`eval()` | Evaluates a string and executes it as if it was script code
`isFinite()` | Determines whether a value is a finite, legal number
`isNaN()` | Determines whether a value is an illegal number
`Number()` | Converts an object's value to a number
`parseFloat()` | Parses a string and returns a floating point number
`parseInt()` | Parses a string and returns an integer
`String()` | Converts an object's 
|