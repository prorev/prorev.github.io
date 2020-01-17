---
id: 12971
title: Intro to Swift programming language
date: 2020-01-08
author: taimani
layout: post
permalink: /swift/overview/
published: false
image: 
categories:
   - swift
tags:
   - intro
---
_Table of Contents:_

- [Swift is evolving fast](#swift-is-evolving-fast)
- [Why Swift is fast?](#why-swift-is-fast)
  - [ARC](#arc)
  - [No garbage collection](#no-garbage-collection)
  - [Swift insists on value types](#swift-insists-on-value-types)
  - [Immutable objects tracking](#immutable-objects-tracking)
  - [No bounds checking mode](#no-bounds-checking-mode)
  - [Calling into C](#calling-into-c)
  - [Can we use Python scientific libraries from Swift?](#can-we-use-python-scientific-libraries-from-swift)
  - [Meat *var* and *let*](#meat-var-and-let)
    - [Constants cannot be altered](#constants-cannot-be-altered)
  - [Arrays and dict](#arrays-and-dict)
  - [Functions](#functions)
  - [Can I try Swift fast?](#can-i-try-swift-fast)

---
Chris Lattner, creator of [LLVM](https://llvm.org/){:rel="nofollow" target="_blank"} compiler, created Swift as an *ambitious* programming language. From the very start Swift was designed as a low level programming language -- to deal with hardware and to write bootloaders.

Apple drafted Swift in 2014 (Apple Swift) and released Swift version 1.2 to develop iOS and macOS applications with the plan that Swift should replace Objective C one day.  

> Today Swift is definite replacement for Objective-C. Also beside native iOS and macOS, you can create Linux applications in Swift, or install it using conda on almost any system, so Swift is growing as platform independent language.

Recently, and to compete with PyTorch, Swift added Automatic Differentiation engine from Fortran, that can be used after setting `@differentiable` keyword on any function.

Here is the [full detailed guided tour](https://docs.swift.org/swift-book/GuidedTour/GuidedTour.html){:rel="nofollow" target="_blank} to Swift.

Swift creator Chris Lattner later joined Google team, to introduce S4TF (Swift for TensorFlow) carefully planned and possible future dominant machine learning platform.

## Swift is evolving fast 

In fact Swift is evolving so fast that online Swift information is frequently out-of-date.

I wanted to provide Swift overview, focusing on Swift 5 and later version. 

Soon Swift can easily become the most dominant language, taking the Python codding efficiency and C speed.

## Why Swift is fast?

The reasons why Swift is fast:
* automatic reference counting
* no garbage collection
* smart usage of value types
* immutable objects tracking
* smart machine optimization module (LLVM)
* no bounds checking mode


> Swift can often get the same performance as carefully optimized C code.


### ARC

"Automatic Reference Counting -- ARC -- automatically frees up the memory used by class instances when those instances are no longer needed." -- <cite>The Swift Programming Language</cite> by Apple.

Reference counting is nothing new, it is used in Python -- interpreted language, but it is _strange and rare_ for a compile time language.


### No garbage collection

Because Swift has automatic memory object reference counting implemented (ARC) no classical garbage collection is needed that would occur at a specific time. In fact you may call the reference counting as a specific type of garbage collection, but it is not. The Java or .Net garbage collection principles are fundamentally different.


### Swift insists on value types

Computer languages data types are either:

* value types or
* and reference types
 
Swift uses _value types_, and _reference types_ according to [Wikipedia](https://en.wikipedia.org/wiki/Value_type_and_reference_type){:rel="nofollow" target="_blank"}

Value types are:
* all structures 
  * booleans 
  * characters
  * integers (Int) numbers
  * floating-point numbers
  * fixed-point numbers
  * immutable strings
  * tuples
  * lists
  * dictionaries
  * sets
  * stacks
  * queues
* enumerations (optionals)

Reference types are:
* classes
* functions
* interfaces

ARC is fundamental for both reference type objects and value type objects for sharing memory.

> You may be familiar with C#. In C# `struct` will give _value type_,and `class` will give _reference type_.

### Immutable objects tracking

Swift also tracks _immutable objects_, objects assigned with the `let` keyword. You can call it again _ARC procedure_, but it also involves LLVM complier work to avoid aliasing, which minimize the need for locking.


### No bounds checking mode

There is a special Swift mode when


### Calling into C

Python has GIL (Global Interpreter Lock) problem. When Python code needs to call into C, it performs slow, and Swift is made to work with C-like languages _by design_.

Swift can deal with C header files thanks to the _Clang engine_ part of [LLVM](https://llvm.org/){:rel="nofollow" target="_blank"}.

_Clang_ can deal with C/C++/Objective C and even CUDA. 

Long term, Swift is trying to subtract C/C++ code out of the picture, because Swift is the new C.

### Can we use Python scientific libraries from Swift?

Yes. This is possible. Just import Python in Swift (`import Python`), and from there import all the libraries you use to work with such as Numpy, Matplotlib and like.

```swift
public let np = Python.import('numpy)
```

### Meat *var* and *let*

If you are new to Swift you will first meat two keywords:

* `var` -- to define a variable 
* `let` -- to define a constant

Both of these need **initialization** at the very start. 

What happens to be a good practice, now is a must in Swift. Here is how you initialize:
```swift
let implicitInteger = 42
let implicitDouble = 42.0
let explicitDouble: Double = 42
```

Initialization is needed for the **compiler** to infer (understand) the _variable type_. 

#### Constants cannot be altered

The very first thing you may try in Swift is to check what you will get after errors. For example:

```swift
var myVariable = 42;
myVariable = 50;
let myConstant = 42; // cannot be altered 
myConstant = 50
```

Will output:
```
error: cannot assign to value: 'myConstant' is a 'let' constant myConstant = 50

note: change 'let' to 'var' to make it mutable
let myConstant = 42;
```


### Arrays and dict
```swift
var arr = [1,2,3,4]
var arr2 : [Int] = arr
var arr3 : Array<Int> = arr
```

In previous lines, `[Int]` was just a surger for `Array<Int>`. 
You can always do this:
```swift
arr[1] = 5
```
For the dictionary type you also use same `[]` (square brackets). 

```swift
    var dict = [
        "Malcolm": "Captain",
        "Kaylee": "Mechanic",
    ]
    dict["Jayne"] = "Public Relations"
```

Same as in Python arrays and dicts grows with `append`.
```swift
dict.append("Bruce": "Movie star")
```

Here is empty array and empty dict:
```swift
    arr = []
    dict = [:]
```

### Functions

Once you pass variables and constant the next Swift thing you will dig into will be functions. In Swift you use the `func` keyword.

> Note: In Python you sed `def` keyword for the same.

So a simple Swift function would be
```swift
func more42(x : Int) -> Int {
    return x+42
}
```

This function called `more42` would take and return an Integer value. You need to set clearly the input parameters name and type and the output parameter type.

So you will call the previous function like this:
```swift
more42(x=10)
```

> Swift uses `{}` (curly brackets) where Python uses indent to define the function body, just like C.

You could also write this:

```swift
func more42(_ x : Int) -> Int {
    return x+42
}
```

This means you can call the function `more42` without setting the parameter name:

```swift
more42(10)
```

If function needs to return a tuple it totally can, just like in Python. Here is how we can define this:
```swift
func more42(x : Int) -> (Int,Int) {
    return x+42, x+43
}
```

### Can I try Swift fast?

You can start using Swift from [Google Colab](https://colab.research.google.com/notebook#create=true&language=swift){:rel="nofollow"}