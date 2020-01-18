---
id: 12971
title: Fast intro to Swift programming
date: 2020-01-15
author: taimani
layout: post
permalink: /swift/hello/
published: true
image: 
categories:
   - swift
tags:
   - intro
---
_Table of Contents:_

- [Meet `let` and `var`](#meet-let-and-var)
- [Literal types](#literal-types)
- [Swift type inference](#swift-type-inference)
- [Swift tuples](#swift-tuples)
- [For loop](#for-loop)
- [Swift functions](#swift-functions)
- [Arrays](#arrays)
  - [Array map](#array-map)
  - [Array Filter](#array-filter)
- [***](#hr)
  - [Meat *var* and *let*](#meat-var-and-let)
  - [Arrays and dict](#arrays-and-dict)
  - [Functions](#functions)

---

This should be a short introduction with hello world Swift examples.

## Meet `let` and `var` 
Swift uses _constant_ and _variables_ to assign literals:

**`Int` literals**
```swift
let a = 1 // constant
var b = 1 + (2 * a) // variable
print("a and b:", a, "and", b)
```
_Output:_
```
a and b: 1 and 3
```

**`Float` literals**
```swift
let π = Float.pi // constant
var π_var = 3*π/2 + 1 // variable
print("floats:", π, π_var)
```
_Output:_
```
floats: 3.1415925 5.712389
```

**`String` literals**
```swift
// string literal
let str = "A new day for Swift!" 
// emoji variable as string literal
var 👍 = "ok"
print(str, 👍)
👍 = "👍"
print(str, 👍)
```
_Output:_
```
A new day for Swift! ok
A new day for Swift! 👍
```

**You cannot assign to a constant.**

_Example that won't work:_
```swift
let a = 1 
a = 10
```
_Output:_
```
error: cannot assign to value: 'a' is a 'let' constant
note: change 'let' to 'var' to make it mutable
```

## Literal types

We already meat String literals. But there are also:
* Int
* Double
* Float
* Boolean

literals.

You can check the type of the literal using `type` function.
```swift
var fce : Float = 3
print(type(of: "👍"), type(of: 1), type(of: 3.0), type(of: fce), type(of: true))
```
_Output:_
```
String Int Double Float Bool
```


## Swift type inference

_Example:_
```swift
var fce : Float = 1 + 2
print(fce)
```
_Output:_
```
3.0
```

## Swift tuples
Tuples exists also in Swift.

_Example:_
```swift
let tuple = ("1", 2, (Float)(1+2))
print(tuple)
```
_Output:_
```
("1", 2, 3.0)
```

## For loop

Custom `for` loop would involve Swift slicing `...` operator. (`..<` as well)
```swift
for x in 1...3 {
    print(x)
}
```
_Output:_
```
1
2
3
```

## Swift functions

In short, use the `func` keyword to define custom functions.

_Example:_
```swift
import Foundation
func sc(val: Float) -> (Float, Float) {
    return (sin(val), cos(val))
}
print(sc(val: 1))
```
_Output:_
```
(0.84147096, 0.5403023)
```

**Function can have optional parameters**

Note the parameter `val` we have to specify.
We may omit the parameter if we use `_` like this:
```swift
import Foundation
func sc(_ val: Float) -> (Float, Float) {
    return (sin(val), cos(val))
}
print(sc(1))
```
The output will be equivalent.

**We can assign functions to tuples**

_Example:_
```swift
let (s, c) = sc(1)
```
## Arrays

To define an _empty array_ you need to set the type.
```swift
var array = [] // won't work
```
would simple output the error:
```
empty collection literal requires an explicit type
```

This would be correct way to define an empty integer array:

```swift
var array : [Int] = []
```
Exact same array you can get with the following line:
```swift
var array : Array<Int> = []
```

> `[Int]` is a syntactic sugar for `Array<Int>`

Let's print array and it's type:
```swift
print(array, type(of: array))
```
_Output:_
```
[] Array<Int>
```
Once we have an empty array we can start adding elements using the `append` method:
```swift
array.append(1)
```

We could start with the non empty array:

_Example:_
```swift
let array = [1,2,3]
print(array)
```
_Output:_
```
[1, 2, 3]
```
Note how array elements are inside `[]` brackets.

### Array map

There is also a `map` function you will use with arrays. `map` applies a function to every element in array.

_Example:_
```swift
var array = [1,2,3]
print(array)
array = array.map({ el in el * 2 })
print(array)
```

_Output:_
```
[1, 2, 3]
[2, 4, 6]
```

### Array Filter

Filter returns the new array where the condition inside the filter evaluates to `true`. In our case elements that are odd. `$0` represents the current element.

_Example:_
```swift
var array = [1,2,3]
print(array)
array = array.filter({ $0 % 2 == 1})
print(array)
```

_Output:_
```
[1, 2, 3]
[2, 3]
```
***
---


### Meat *var* and *let*

If you are new to Swift you will first meat two keywords:

* `var` -- to define a variable 
* `let` -- to define a constant

What happens to be a good practice, is a must in Swift. Here is how you initialize:

```swift
let implicitInteger = 42
let implicitDouble = 42.0
let explicitDouble: Double = 42
```
Initialization is needed for the _compiler_ to infer (understand) the _variable type_.

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



