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

- [Objective C](#objective-c)
- [What maters about Swift](#what-maters-about-swift)
- [Calling C](#calling-c)
- [Can we use Python scientific libraries from Swift?](#can-we-use-python-scientific-libraries-from-swift)
- [Meat *var* and *let*](#meat-var-and-let)
  - [Constants cannot be altered](#constants-cannot-be-altered)
- [Arrays and dict](#arrays-and-dict)
- [Functions](#functions)
- [Can I try Swift fast?](#can-i-try-swift-fast)

---


https://github.com/apple/swift


>I will analyse Swift programming language and drop few lines how it connects to Python and C in here. This text is for those who haven't tried Swift before, but have some Python or C understanding. I will provide a brief overview of the basic Swift features, including variables, constants, arrays, and functions.
>The final note from this article you should have is: _Swift is the new C._


Swift
is a new language for the future of Apple software development
feels familiar to Objective-C developers
is friendly to new programmers
is as expressive and enjoyable as a scripting language
is optimized for development



### Objective C


If you are interested in Apple products and mobile application development, Swift is a good place to start. Announced by Apple in 2014, Swift is a relatively new programming language that is used to develop iOS and macOS applications. According to the Github State of Octoverse Report, Swift has grown rapidly, now it is ranked as the 13th most popular language by extraction request.

Developers use Swift to create native, powerful and high-performance iOS, macOS and Linux applications. Swift is thought to be faster, more agile and easier to debug than its predecessor Objective-C. Once iOS development was developed, Objective-C is now considered outdated and dated by many developers. In contrast, Swift has been optimized for performance and built from scratch to adapt to the realities of modern iOS development.

The development of Swift programming skills is a smart investment for aspiring software engineers. IOS not only runs on all iPhone and iPad, but it is also the basis for other operating systems such as watchOS (for Apple Watch) and tvOS (for Apple TV). In addition, Apple will not go anywhere, as the leader of the technology industry and iOS applications remain the most profitable in the mobile application market.




### What maters about Swift

Swift (Apple Swift) was built for performance. Chris Lattner* who created the LLVM compiler, created Swift in 2010 as an *ambitious* programming language.

Swift is low level programming language - means you can deal with hardware and write bootloaders in it.

Recently, and to compete with PyTorch, Swift added Automatic Differentiation engine from Fortran. We can use that engine just by setting `@differentiable` keyword on any function.

Here is the [full detailed guided tour](https://docs.swift.org/swift-book/GuidedTour/GuidedTour.html){:rel="nofollow"} to Swift.

---
> Chris Lattner later joined Google


### Calling C

Python has GIL (Global Interpreter Lock) problem. When Python code needs to call into C, it performs slow, and Swift is made to work with C-like languages _by design_.

Swift can deal with C header files thanks to the _Clang engine_ part of [LLVM](https://llvm.org/){:rel="nofollow"}.

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