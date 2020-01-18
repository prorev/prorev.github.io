---
id: 12971
title: Swift Strings
date: 2020-01-15
author: taimani
layout: post
permalink: /swift/strings/
published: true
image: 
categories:
   - swift
tags:
   - strings
---
_Table of Contents:_
- [String Literals](#string-literals)
  - [Basic operations with strings](#basic-operations-with-strings)
- [Concatenating Strings](#concatenating-strings)
  - [Special characters](#special-characters)
  - [String Interpolation](#string-interpolation)
- [The length of a String](#the-length-of-a-string)
- [Split a string into an array](#split-a-string-into-an-array)
  - [Split a string by single delimiter](#split-a-string-by-single-delimiter)
  - [String splitting by multiple delimiters](#string-splitting-by-multiple-delimiters)
  - [String splitting by word delimiter](#string-splitting-by-word-delimiter)
- [Join the string from array of strings (characters)](#join-the-string-from-array-of-strings-characters)
- [Reverse the string](#reverse-the-string)
- [Check if string contains the substring](#check-if-string-contains-the-substring)

---

> This article explains Swift String type. You can experiment and test this code on [swiftplayground](http://online.swiftplayground.run/){:rel="nofollow" target="_blank"}. All experiments are doable in Swift 5 and later.

![Swift Strings Literal](/wp-content/uploads/2020/01/swift-string-literal.jpg)

## String Literals 

The `String` literal in Swift is text within a pair of double quotes.

```swift
"This is a string literal in Swift"
```

>In some programming languages you can use single quotes to create a string literal. This is still not possible in Swift.

Once you have a string literal, it needs to be assigned to a _constant_ or to a _variable_. If you don't assign, the compiler will ignore the string literal.

### Basic operations with strings

_Example:_
```swift
// assignment to a constant
let const = "This is a string literal in Swift"

// assignment to a variable
var str = "This is a string literal in Swift"

// printing the variable
print(str)

// get the number of characters
print(str.count)

// get the type of variable
print(type(of: str))

// appending to a variable
str.append(".")

// printing the new number of characters
print(str.count)

// final variable print
print(str)
```
_Output:_
```
This is a string literal in Swift
33
String
34
This is a string literal in Swift.
```
This code shows basic operations of assignment, printing, counting, and appending a string variable.

> Don't forget that Swift is very opinionated and requires named parameter `of:` when getting the type.

_This will work:_

```swift
print(type(of: str)) // works
```

_This will not work:_
```swift
print(type(str)) // not working
```

In our case we assigned string literal to a variable `str`.

```swift
var str = "This is a string literal in Swift"
```
Similarly we could assign a string literal to a constant, but then we could not `append` the constant.

```swift
// just for assign
let const = "This is a string literal in Swift"
```
If you try to append a value to a String constant you will get the error:

```swift
const.append(".")
//error: cannot use mutating member on immutable value 
//note: change 'let' to 'var' to make it mutable
```

## Concatenating Strings

We already concatenated stings using the `append` method, however, concatenation is also possible using the _addition_ operator (`+`).

``` swift
let immutable_question = "How" + " are " + "you?"
```

> In Swift, strings are mutable. However, if you declare a string to be a constant (keyword `let`), then it is immutable.

 
### Special characters

The following special characters can be used to append to a String variable.


| Char | Meaning                   |
| ---- | ------------------------- |
| \n   | Newline character         |
| \r   | Carriage return character |
| \t   | Tab character             |
| \\"  | Double quotation mark     |
| \\'  | Single quotation mark     |
| \\\\ | Backslash character       |
| \0   | Null character            |
  


> **Double quotation mark** helps writing a double quote inside a string literal without closing the literal.

_Example:_
```swift
let force = "He said: \"May the Force be with you\"."
print(force)
```
Output:
```
He said: "May the Force be with you".
```

Frequently you concatenate a newline to a string literal as follows:
```swift
let output = "123 Street" + "\n"
```

> Concatenation works only for the String type. It is why we need String _interpolation_ if we plan to add some other literal type such as Int.

```swift
let output = "123 Street" + 3
// error: binary operator '+' cannot be applied to operands of type 'String' and 'Int'
```

### String Interpolation

String _interpolation_ is the process of inserting string literals or other data into an existing string literal. 

The syntax for string interpolation is a backslash followed by a set of parentheses -- `\()`. 

Anything inserted inside the parentheses are interpolated into the existing string literal.

_Example:_
```swift
let pens = 3
let out = "I have \(pens) pens."
print(out)
```
_Output:_
```
I have 3 pens.
```
With string interpolation you can combine different data types to generate new string literals.

_Example:_
```swift
let str = "The year is \(2014) and Swift is at version \(1.2)"
```


## The length of a String

We already mentioned the `count` property.

_Example:_
```swift
var str = "This is a string literal in Swift"
print(str.count)
```
However, this works in Swift 4+ and 5+

Swift 2 and Swift 3 would use `str.characters.count`.
Swift 1 used the global method `count(str)`

## Split a string into an array

### Split a string by single delimiter
_Example:_
```swift
let line = "We will explode the Swift string";
let res1 = line.split(separator: " ")
let res2 = line.split(separator: "e")
print(res1, res2)
```
_Output_:
```
["We", "will", "explode", "the", "Swift", "string"]
["W", " will ", "xplod", " th", " Swift string"]
```

One another consideration is needed. What if we have multiple white spaces and we would like to split with the white space as separator? 

Usually we ignore the white spaces, but there is an optional parameter `omittingEmptySubsequences`. If we set that to `false` the returned array will have empty space elements. 

By default, `omittingEmptySubsequences` is set to `true`.

_Example:_
```swift
let line = "I   don't   need white spaces I need words!"
print(line.split(separator: " "))
print(line.split(separator: " ", omittingEmptySubsequences: false))
```
_Output:_
```
["I", "don\'t", "need", "white", "spaces", "I", "need", "words!"]
["I", "", "", "don\'t", "", "", "need", "white", "spaces", "I", "need", "words!"]
```

### String splitting by multiple delimiters

In Swift, `split` method works just for single character separator or delimiter. 

To split by multiple delimiters we will use `components`, from the `Foundation` framework:


_Example:_
```swift
import Foundation
let line = "Uh, smart explode Swift string";
let res = line.components(separatedBy: CharacterSet(charactersIn: "aeiou"))
print(res)
```
_Output:_
```
["Uh, sm", "rt ", "xpl", "d", " Sw", "ft str", "ng"]
```
We used [`import Foundation`](https://developer.apple.com/documentation/foundation){:rel="nofollow"}, because it contains the [CharacterSet class](https://developer.apple.com/documentation/foundation/characterset){:rel="nofollow"}.


### String splitting by word delimiter

_Example:_
```swift
import Foundation
let line = "We program in Swift!"

let splits = line.components(separatedBy: "in")
print(splits)
```
_Output:_
```
["We program ", " Swift!"]
```

Code will break the line: `We program in Swift!` and we will get two parts:
* "We program "
* " Swift!"

> String split _by word_ when word is just _a single character_ is also a valid option.

_Example:_
```swift
import Foundation
let line = "We program in Swift!"
let splits = line.components(separatedBy: "i")
print(splits)
```
_Output:_
```
["We program ", "n Sw", "ft!"]
```
## Join the string from array of strings (characters)

For this job in Swift you may use [`joined`](https://developer.apple.com/documentation/swift/collectionofone/3017722-joined){:rel="nofollow" target="_blank" } method from Swift Standard Library.

```swift
let array = ["May", "the", "force", "be", "with", "you", "!"]
let joined = array.joined(separator: " ")
print(joined)
```
_Output:_
```
May the force be with you!
```
There is one interesting case to convert an array of characters to a string:

_Example:_
```swift
let chars: [Character] = ["J", "o", "i", "n"]
var string = String(chars)
print(string)
```
Output:
```
Join
```

For this purpose, `joined` method is not needed.

## Reverse the string

In Swift 4 and later, there is [`reversed`](https://developer.apple.com/documentation/swift/reversedcollection/1786680-reversed){:rel="nofollow" target="_blank" } collections method.

```swift
let str = "Reverse me!"
var rev = String(str.reversed())
print(reversed)
```
_Output:_
```
!dlrow ,olleH
```

## Check if string contains the substring

One very useful thing operation in Swift would be to check if a substring is part of a string. For that Swift has the `contain` method.

```swift
import Foundation
var force = "May the force be with you!"
print(force.contains("yoda"))
print(force.contains("force"))
```

_Output:_
```
false
true
```