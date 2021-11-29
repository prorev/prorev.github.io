---
id: 12971
title: Go by example
date: 2021-06-29
author: taimane
layout: post
permalink: /go/examples
published: true
image: 
categories: 
   - golang
tags:
   - examples
---

_Table of Contents:_

- [Print a line](#print-a-line)
- [Comments](#comments)
- [Import Packages](#import-packages)
- [Define variables](#define-variables)
- [Exported variables](#exported-variables)
- [Constants](#constants)
- [Types](#types)
- [Reflect types](#reflect-types)
- [Convert values](#convert-values)
- [Looping](#looping)
- [Branching statements](#branching-statements)
- [Arrays, slices and maps](#arrays-slices-and-maps)
- [Sorting arrays](#sorting-arrays)
- [Functions](#functions)
- [Closures](#closures)
- [String builder](#string-builder)
- [Concurrency](#concurrency)
  - [Defer](#defer)
  - [Goroutines](#goroutines)
  - [Channels](#channels)
  - [Select (await)](#select-await)

Here I created a list of Go examples for fast dive in:

## Print a line

To print a line use `Println` from `fmt`.

```go
package main

import "fmt"

func main() {
    fmt.Println("Hello Go")
}
```

**Explanation of the fist Go program:**

Every Go program is made up of packages and the Go program start running in package `main`. 

From the package `main` another package `fmt` is imported.

The package `fmt` is defined _somewhere_ and it starts with: 

```go
package fmt
```


## Comments

Multiline
```go
/*
comments 
here
*/
```

Inline
```go
// comments here
```


## Import Packages

Every Go program is made up of packages. You can import multiple packages line by line:

```go
import "fmt"
import "math"
```

or from once:
```go
import (
   "fmt"
   "math"
)
```

## Define variables

```go
var a = "apple"
var b, c int = 1, 2
var d = true
var e int
f := "apple"
```

The `:=` syntax will declare and initialize a variable, equivalent to:

```go
var f string = "apple"
```

It is possible to use short notation for multiple variables:

```go
golang, python, sql := true, false, "no!"
```

Variables declared without an explicit initial value are by default set to zero:

* `0` for numeric types,
* `false` for the boolean type, and
* `""` (the empty string) for strings.


## Exported variables

There is a simple rule in Go. A name is exported if it begins with a capital letter. For example, Pi is exported from the `math` package.

After you import a package, you can refer only to package exported names. 

## Constants

Just like variables but defined with the `const` keyword. 

Constants cannot use the `:=` syntax.

**Example:**

```go
const Pi = 3.14
```

## Types

The following types are very commonly used:

```go
bool
string
int  int8  int16  int32  int64
uint uint8 uint16 uint32 uint64 uintptr
float32 float64
complex64 complex128
byte // same as uint8
rune // same as int32
```

The `int`, `uint`, and `uintptr` types are usually 32 bits wide on 32-bit systems and 64 bits wide on 64-bit systems.


## Reflect types

**Example:** get a type

```go
package main

import (
    "fmt"
    "reflect"
)

func main() {

    o1 := "string"
    o2 := 10
    o3 := 1.2

    fmt.Println(reflect.TypeOf(o1))
    fmt.Println(reflect.TypeOf(o2))
    fmt.Println(reflect.TypeOf(o3))

}
```

Out:
```
string
int
float64
```

## Convert values

In Go assignment between items of different type must be explicit. 

**Example:**

```go
var i int = 42
var f float64 = float64(i)
```


## Looping

In go you create forever loop using `for`:

```go
for {}
```

You create while loop using `for`:

```go
i:=1
for i<10 {
   i++
}
```

You create `for` loop:

```go
for i := 0; i < 10; i++ {
   // something
}
```

where there are three parts:


* first part is the the init statement executed before the first iteration
* the condition expression is evaluated before every iteration
* the post statement is executed at the end of every iteration

## Branching statements

**Example:**

```go
var i := 10

if i%2 == 0 { 
   // if i is even
}


var i := 11
if i%2 == 0 { 
   // if i is even
} else{
   // else i is odd
}

var i := -2
switch i {
    case 1:
        fmt.Println("one")
    case 2:
        fmt.Println("two")
    case 3:
        fmt.Println("three")
    }
    default:
        fmt.Println("something else")
```

## Arrays, slices and maps

This is an array of 10 elements of type `int`:

```go
var a [10]int
```
You can print it:

```go
package main

import "fmt"

func main() {
   var a [10]int
   fmt.Println(a)
}
```

Out:
```
[0 0 0 0 0 0 0 0 0 0]
```
By default arrays are initialized as zeros.


A slice, is flexible view into the elements of an array.

```go
package main

import "fmt"

func main() {
   primes := [6]int{1, 2, 3, 4, 5, 6}

   var s []int = primes[1:4]
   fmt.Println(s)
}
```

Out:
```
[2 3 4]
```

Maps are built-in associative data type (also called hashes or dicts in other languages).

**Example:**


```go
package main
import "fmt"
func main() {

   m := make(map[string]int)

   m["k1"] = 7
   m["k2"] = 13

   fmt.Println("map:", m)

   v1 := m["k1"]
   fmt.Println("v1: ", v1)

   fmt.Println("len:", len(m))
```

Out:
```
map: map[k1:7 k2:13]
v1:  7
len: 2
```


## Sorting arrays

**Example:**
```go 
package main

import (
  "fmt"
  "sort"
)

func main() {
  numbers := []int{1, 11, -5, 7, -2, 0, 12}
  sort.Ints(numbers)
  fmt.Println("Sorted:", numbers)
}
```

Output:
```
Sorted: [-5 -2 0 1 7 11 12]
```

## Functions

A function can take zero or more arguments.

```go
func add(x int, y int) int {
   return x + y
}
```

This function returns `int` and it takes two parameters of type `int`.

**Notice: that the type comes after the variable name.**


When two or more consecutive named function parameters share a type, there is a short notation.

```go
x int, y int
```

_Shorter notation:_
```go
x, y int
```

A function can return multiple results:

```go
func addsub(x , y int) (int, int) {
   return x + y, x-y
}
```

## Closures

Go supports anonymous functions, which are used to create losures.

**Example:** Anonymous function

```go
func(parameter_list)(return_type){
// code..
return // can be omitted
}()
```

A closure uses anonymous function to reference outside variables.


**Example:** Closure
```go
package main

import "fmt"

func getLimit() func() int {
    limit := 100
    return func() int {
        limit -= 1
        return limit
    }
}

func main() {
    limit := getLimit()
    fmt.Println(limit())
    fmt.Println(limit())
}
```

Output:
```
99
98
```



## String builder

Example using the `for` loop:

How to create a big string from all the numbers less than 1000.

```go
package main

import (
    "strings"
    "fmt"
    "strconv"
)

func main() {
    var sb strings.Builder

    for i := 0; i < 1000; i++ {
        sb.WriteString(strconv.Itoa(i))
    }

    fmt.Println(sb.String())
}
```
## Concurrency

### Defer

Go is designed at Google with CSP-style concurrency in mind (Communicating Sequential Processes).

Much of Go success is thanks to the `defer` statement.

When you call a function you can have a defer part.

```go
func main() {
   defer fmt.Println("world")
   fmt.Println("hello")
}
```

This will print:

```
hello
world
```

You can stack `defer` statements:

```go
func main() {
   fmt.Println("start")
   for i := 0; i < 10; i++ {
      defer fmt.Println(i)
   fmt.Println("end")
}
```

Out:

```
start
end
9
8
7
6
5
4
3
2
```

### Goroutines

Another Go trump is **goroutine** achieved with the `go` keyword.

Goroutine is a lightweight thread managed by the Go runtime.

Whenever you call `go` with some func name a new goroutine will be created.

```go
package main

import (
   "fmt"
   "time"
)

func fnc(s string) {
   for i := 0; i < 5; i++ {
      time.Sleep(100 * time.Millisecond)
      fmt.Println(s)
   }
}

func main() {
   go fnc("world")
   fnc("hello")
}
```

### Channels

Channels are the pipes that connect concurrent goroutines.

**Examples:**

```go
int_ch := make(chan int)
messages_ch := make(chan string)
```

First channel is `int` and the second is `string`.


You send values into channels from one goroutine and receive those values into another goroutine.

```go
go func() { messages_ch <- "abc" }()
msg := <- messages_ch // get the message
fmt.Println(msg) // print the message
```

When you create a channel you set the max number of elements it can have:

```go
int_ch := make(chan int, 2)
```

Now, channel `int_ch` cannot take more than 2 elements.

You can close a channel with `close` command:

```go
close(int_ch)
```

### Select (await)

Using select you can wait on multiple channel operations. 

```go
package main

import (
   "fmt"
   "time"
)

func main() {

   c1 := make(chan string, 2)
   c2 := make(chan string)

   
   go func() {
      time.Sleep(1 * time.Second)
      c1 <- "one"
      time.Sleep(1 * time.Second)
      c1 <- "one"
      
   }()
   go func() {
      time.Sleep(2 * time.Second)
      c2 <- "two"
   }()

   for i := 0; i < 3; i++ {
      // select is awaiting
      select {
      
      case msg1 := <-c1:
         fmt.Println("received", msg1)

      case msg2 := <-c2:
         fmt.Println("received", msg2)
```

Output:
```
received one
received one
received two
```