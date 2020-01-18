---
id: 12971
title: struct vs. class in Swift
date: 2020-01-15
author: taimani
layout: post
permalink: /swift/struct-class/
published: false
image: 
categories:
   - swift
tags:
   - class
---
_Table of Contents:_

- [The `struct` keyword](#the-struct-keyword)
  - [Single init method](#single-init-method)
  - [No init method](#no-init-method)
  - [Multiple init methods](#multiple-init-methods)
- [The `class` keyword](#the-class-keyword)
- [Differences between `class` and `struct`](#differences-between-class-and-struct)

---

Possible the first thing you learned in Swift is the difference between the `let` and `var` keyword. 

The next thing _on conceptual level_ to learn would be the difference between Swift `struct` and `class` keyword, and what they create.

**In Swift `class` is a reference type, and `struct` is a value type.**

While the difference between `let` and `var` is very obvious, the difference between `struct` and `class` is harder to guess, and requires digging into the code.


## The `struct` keyword
This would be the simplest way to define a struct in Swift and to create an instance at the same time.

_Example simple struct:_
```swift
struct Person {
    var name: String?
    var age: Int?    
}
var p = Person()
print(p)
```
_Output:_
```
Person(name: nil, age: nil)
```
In here `nil` represents no value.

> It is very important to specify a person, even if we haven't identified her/his name or age. This is why we set the optional `String?` type -- meaning it may have the value, but also the value may be `nil`.

### Single init method
_Example struct with the `init` method:_
```swift
struct Person {
    var name: String?
    var age: Int?
    init() {
         name="Joe"
         age = 18
    }
}
var p = Person()
print(p)
```
_Output:_
```
Person(name: Optional("Joe"), age: Optional(18))
```

The `init` method takes no parameters in here. The exact same effect would be to write struct without the `init` method:

### No init method
```swift
struct Person {
    var name: String? = "Joe"
    var age: Int? = 18
}
var p = Person()
print(p)
```
_Output:_
```
Person(name: Optional("Joe"), age: Optional(18))
```
> The previous code indicates there is a default `init` method.

What if we write multiple init methods?

### Multiple init methods
_Example multiple init methods:_
```swift
struct Person {
    var name: String? = "Joe"
    var age: Int? = 18
    init() {
         name = "Joe"
         age = 18
    }
    init(_ n:String){
        name = n
    }
    init(n: String, a: Int ) {
         name = n
         age = a
    }
}
var p1 = Person()
var p2 = Person("Tom")
var p3 = Person(n:"Eric", a:23)
print(p1)
print(p2)
print(p3)
```
_Output:_
```
Person(name: Optional("Joe"), age: Optional(18))
Person(name: Optional("Tom"), age: Optional(18))
Person(name: Optional("Eric"), age: Optional(23))
```
We have everything in here, the `init` method taking no parameters, one parameter, and two parameters.
Also for the init method taking one parameter, we used the `_` which means we can create a person even without specifying the parameter name: `Person("Tom")`.

## The `class` keyword

The previous example will just work if we replace the `struct` keyword and set `class`. Also `class` definition again may have:

* no init method
* single init method
* multiple init methods

_Example class with multiple init methods:_
```swift
class Person {
    var name: String? = "Joe"
    var age: Int? = 18
    init() {
         name = "Joe"
         age = 18
    }
    init(_ n:String){
        name = n
    }
    init(n: String, a: Int ) {
         name = n
         age = a
    }

}
var p1 = Person()
var p2 = Person("Tom")
var p3 = Person(n:"Eric", a:23)
print(p1)
print(p2)
print(p3)
```

_Output:_
```
__lldb_expr_321.Person
__lldb_expr_321.Person
__lldb_expr_321.Person
```

You may spot the first difference. The output is different. What just happened?


## Differences between `class` and `struct`

In short: the `struct` creates objects that are values (values syntax), and,`class` creates objects that are references (reference syntax).




