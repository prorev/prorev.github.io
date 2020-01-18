---
id: 12971
title: Overview of Swift programming language
date: 2020-01-08
author: taimani
layout: post
permalink: /swift/overview/
published: true
image: 
categories:
   - swift
tags:
   - intro
---
_Table of Contents:_

- [Swift history](#swift-history)
  - [Swift promise](#swift-promise)
  - [Swift online info is often outdated](#swift-online-info-is-often-outdated)
- [Why Swift is fast?](#why-swift-is-fast)
  - [ARC](#arc)
  - [No garbage collection](#no-garbage-collection)
  - [Value type semantics for all structures](#value-type-semantics-for-all-structures)
  - [Immutable objects tracking](#immutable-objects-tracking)
  - [Copy On Write (COW)](#copy-on-write-cow)
  - [Unsafe mode](#unsafe-mode)
- [Swift is hackable](#swift-is-hackable)
  - [Calling into Python from Swift](#calling-into-python-from-swift)
  - [Calling into C from Swift](#calling-into-c-from-swift)
- [Where can I try Swift fast?](#where-can-i-try-swift-fast)
- [Tour of Swift](#tour-of-swift)

Swift can easily become the most dominant language soon, beating the Python codding efficiency and the speed of C programming language.

In here, I wanted to provide an overview, focusing on what is possible in Swift 5+.

## Swift history

Chris Lattner, creator of [LLVM](https://llvm.org/){:rel="nofollow" target="_blank"} compiler, created Swift as an *ambitious* programming language. 

From the very start Swift was designed as full stack programming language, that is expressive, flexible, and fast at the same time, but also that can deal with hardware and low level system stuff. Yes, you can write bootloaders in Swift.

In 2014 Apple released Swift version 1.2 to develop iOS and macOS applications. The plan was that Swift should replace _Objective C_ one day.  

> Today Swift is definite replacement for Objective-C. 

Swift is also open source, and you can contribute [here](https://github.com/apple/swift){:rel="nofollow"}.

Beside writing native iOS and macOS applications, you can create Linux applications in Swift, or install it using **conda** on almost any system and write _efficient_ machine learning software.

> To write efficient machine learning software recently, Swift added _Automatic Differentiation Engine_ from Fortran.

To add more accent on machine learning, Swift creator Chris Lattner joined Google team. Together they are building S4TF (Swift for TensorFlow) -- carefully planned and possible future dominant machine learning platform.


### Swift promise

Swift promise is to be infinitely hackable platform. 
This means you can do anything in Swift, but to achieve this Swift often need to improve the syntax, and evolve.

### Swift online info is often outdated

Since Swift is evolving so fast online Swift information is frequently out-of-date.



## Why Swift is fast?

Reasons why Swift is fast:
* ARC
* no garbage collection
* smart usage of value types
* immutable objects tracking
* copy on write (COW)
* smart machine optimization module (LLVM)
* unsafe mode


> Swift can often get the same performance as carefully optimized C code.


### ARC

[Swift Programming Language](https://docs.swift.org/swift-book/LanguageGuide/AutomaticReferenceCounting.html){:rel="nofollow" target="_blank"} states:

![ARC](/wp-content/uploads/2020/01/arc.jpg)

Reference counting is not a new concept, it is also used in Python. However, Python is _interpreted language_, where Swift is compile time language.

It is _unique_ for a compile time language to have reference counting.


### No garbage collection

Because Swift has ARC it doesn't need _garbage collection_. Garbage collection would occur at a specific time. In fact you may call the reference counting as a specific type of garbage collection, but it is not. Java or .NET garbage collection principles are fundamentally different.

> .NET took Java garbage collection since early releases of .NET were nothing but Java cloning.

### Value type semantics for all structures

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

Let's compare Python and Swift working with integer.

_Swift example:_
```swift
// working with Int
// working with Int
var a=1
var b=a
a+=1
print(a)
print(b)

// working with Array
var x: [Int] = [1]
var y=x
x.append(2)
print(x)
print(y)
```
_Output:_
```
2
1
[1, 2]
[1]
```
In case of Swift everything looks good. Working with Int or Array<Int> will provide the correct output.

Let's check the same results for Python.

_Python example:_
```python
# Working with Integer
a = 1
b = a
a+=1
print(a)
print(b)
# Working with array
x = [1]
y = x
x.append(2)
print(x)
print(y)
```
Output:
```
2
1
[1, 2]
[1, 2]
```
You may be familiar with Python reference semantics and understand the if you alter x, y will also be altered.

So to be correct, Python solution would be to use `copy` function like this:

```python
# Working with array
x = [1]
y = x
y=y.copy()
x.append(2)
print(x)
print(y)
```
Output:
```
[1, 2]
[1] 
```
This will provide the correct output, just as Swift.

> You may be familiar with C#. In C# `struct` will give _value type_,and `class` will give _reference type_.

> In Swift all `struct` types are _value types_.

### Immutable objects tracking

Swift also tracks _immutable objects_, objects assigned with the `let` keyword. You can call it again part of the _ARC procedure_, but it also involves LLVM complier work to avoid aliasing, to minimize locking.


### Copy On Write (COW)

Often referred as COW. Here is how COW works.

_Example COW on array:_
```swift
import Foundation

func addr(of object: UnsafeRawPointer) -> String {
    let addr = Int(bitPattern: object)
    return String(format: "%p", addr)
}

var a1 = [1, 2, 3]
var a2 = a1
var a3 = a1

print(a1, addr(of: a1))
print(a2, addr(of: a2))
print(a3, addr(of: a3))

a3.append(5)

print(a1, addr(of: a1))
print(a2, addr(of: a2))
print(a3, addr(of: a3))
```
Output
```
[1, 2, 3] 0x7ff13ef0d898
[1, 2, 3] 0x7ff13ef0d898
[1, 2, 3] 0x7ff13ef0d898
[1, 2, 3] 0x7ff13ef0d898
[1, 2, 3] 0x7ff13ef0d898
[1, 2, 3, 5] 0x106e200
```
![COW](/wp-content/uploads/2020/01/cow.jpg)

As you may Swift knows objects a1, a2, a3 will have the same memory address. But at the specific moment, after using the mutating method `append` a3 will become different. This is why internally Swift creates a new copy for object a3, and the address of a3 will be different.


### Unsafe mode

There is a special Swift unsafe mode where Swift doesn't check bounds of arrays, dicts, ranges. This mode is usually twice as fast as the safe mode, in some cases even more faster.



## Swift is hackable

Meaning you can add your own methods and operators on any type, your custom types or types from the standard library.


### Calling into Python from Swift

```swift
%include "EnableIPythonDisplay.swift"
IPythonDisplay.shell.enable_matplotlib("inline")

import Python
public let np = Python.import("numpy")
public let plt = Python.import("matplotlib.pyplot")

let nparray = np.array([1,2,5,1])
print(nparray)

plt.plot(nparray)
plt.show()
plt.close()
```
Output:
![import python](/wp-content/uploads/2020/01/import-python.jpg)


Yes, this is possible. Just import Python in Swift (`import Python`), and from there import all the libraries you use to work with.

### Calling into C from Swift

Similar approach would be to call into C from Swift. 

When Python code needs to call into C, it performs slow, and Swift is made to work with C-like languages _by design_.

This is because Python has GIL (Global Interpreter Lock) problem. 

Swift can deal with C header files thanks to the _Clang engine_ part of [LLVM](https://llvm.org/){:rel="nofollow" target="_blank"}.

_Clang_ can deal with C/C++/Objective C and even CUDA.

Long term, Swift is trying to subtract C/C++ code out of the picture, because Swift is the new C.

## Where can I try Swift fast?

You can start using Swift from [Google Colab](https://colab.research.google.com/notebook#create=true&language=swift){:rel="nofollow" target="_blank"}

The other resource is the [Online Swift Playground](http://online.swiftplayground.run/){:ref="nofollow" target="_blank"}

## Tour of Swift

Here is the [detailed guided tour](https://docs.swift.org/swift-book/GuidedTour/GuidedTour.html){:rel="nofollow" target="_blank} to Swift.