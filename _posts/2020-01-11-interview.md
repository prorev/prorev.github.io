---
id: 13
title: Csharp interview questions
date: 2011-02-28 09:08:00
author: taimane
layout: post
permalink: /csharp/interview/
redirect_from: /interview/
published: true
categories:
   - csharp
tags:
   - interview
---
_Table of contents:_
- [What is C#?](#what-is-c)
- [Value types and reference types in C#?](#value-types-and-reference-types-in-c)
  - [Why do we have value types and reference types?](#why-do-we-have-value-types-and-reference-types)
- [What is boxing in C#?](#what-is-boxing-in-c)
- [What is a class in C#?](#what-is-a-class-in-c)
  - [What can a C# class contain?](#what-can-a-c-class-contain)
  - [Why doesn't C# support multiple inheritance?](#why-doesnt-c-support-multiple-inheritance)
  - [Why there are indexers in C#?](#why-there-are-indexers-in-c)
- [What is a property in C#?](#what-is-a-property-in-c)
  - [Why there is a property in C#?](#why-there-is-a-property-in-c)

---

Some C# interview questions explained.

## What is C#?
C# is modern, object oriented, type-safe programming language. All C# types including primitive types (int, double, byte,…) inherit from a single root object type.

## Value types and reference types in C#?
In C# you create objects of value types or reference types. Objects of value types contain the actual data. Objects of reference type contain a reference to the data.

Value types are: simple types (sbyte, short, int, long, byte, ushort, uint, ulong, char, float, double, decimal, bool), enum types and struct types.

Reference types are: class types, interface types, array types, delegate types.

### Why do we have value types and reference types?

It is all about having big objects in memory and manipulating with big objects. If there would be no reference types we would copy big objects all the time. Having reference types is a memory saver, because you copy only a reference to an object instead of an object itself.

However, using value types can be faster when you need to work with large number of small objects. Consider the following example between a struct and a class representing a single point.

```c#
class Point {
  public int x,y;
  public Point(int x, int y)
  {
    this.x = x;
    this.y = y;
  }
}
struct Point {
  public int x,y;
  public Point(int x, int y)
  {
    this.x = x;
    this.y = y;
  }
}
class Program {
  public static void Main(string[] args)
  {
    Point[] points = new Point[100];
    for (int i = 0; i &lt; 100; i++) points[i] = new Point(i, i);
    for (int i = 0; i &lt; 100; i++) Console.WriteLine(points[i].x.ToString() + points[i].y.ToString()) ;
    Console.ReadKey(true);
  }
}
```
In case of a class there will be 101 object created. In case of a struct only 1. Working with a struct is faster here.

> Assignment operation in case of class Point and struct Point returns different results?

```c#
class Point {
 public int x,y;
 public Point(int x, int y){
 this.x = x;
 this.y = y;
 }
}

struct Point {
  public int x,y;
  public Point(int x, int y){
this.x = x;
 this.y = y;
 }
}

public static void Main(string[] args) {
 Point a = new Point(100,100);
 Point b = a;
 //Point b = new Point(100,100);
 a.x = 200;
 Console.WriteLine(b.x);
 Console.ReadKey(true);
}
```
In case of a class you will get 200 as a result. In a case of struct you will have 100.

## What is boxing in C#?

```c#
public static void Main(string[] args){
 long l = 999999;
 object o = l; // boxing
 long l = (int) o; // unboxing
 Console.WriteLine(j);
 Console.ReadKey(true);
 }
``` 
Boxing is conversion from any object type to type object.

<code>object o = l; // boxing</code>

Unboxing is quite the opposite and while unboxing you need to specify the conversion as defined:

<code>long l = (int) o; // unboxing.</code>

## What is a class in C#?
Classes are fundamental C# types.

A class is a mold for creating class instances — also known as objects. A class is a data structure combining all class members in a single unit.

### What can a C# class contain?

It contains class members. Class members are:
Constants, fields, methods, properties, indexers, events and types. There are special methods know as operators, constructors, destructors…

Each class member has an additional attribute know as accessibility: `public`, `protected`, `internal`, `private` and `protected internal`.

A special class that takes parameters is a generic.
```c#
class Generic {
 internal T t;
}
class Program {
 public static void Main(string[] args)
 {
   Generic i = new Generic();
   i.t=100;
   Console.WriteLine(i.t);
   Console.ReadKey(true);
 }
}
```

### Why doesn't C# support multiple inheritance?

As C# inventors said, the reason not to have multiple inheritance is to retain simplicity. Multiple-inheritance brings specific problems and breaks simplicity.

On the other hand, not having multiple inheritance introduced interfaces into C# world.
Unfortunately, over time inventors of C# noticed that the concept of interfaces brings additional complexity into C# world considering the interface specific problems.

### Why there are indexers in C#?

An indexer is a class member allowing class objects to be indexed similar as you have in an array. Indexers are often used, because they represent a convenient mechanism to index all class instances. In the next example generic class `List` is used and the notation `names[0]` would be impossible without an indexer.

```c#
public static void Main(string[] args) {
  List names = new List();
  names.Add("Mads Torgersen");
  names.Add("Anders Hejlsberg");
  names.Add("Mark Michaelis");
  Console.WriteLine(names[0]);
  Console.ReadKey(true);
}
``` 


## What is a property in C#?
The better question is why there is a property in C#?

### Why there is a property in C#?
Consider the following code.

```c#
class PropertyExample {
 private int counter=130;
 public int Counter{get; set;}
}
class Program{
  public static void Main(string[] args){
    PropertyExample pe = new PropertyExample();
    pe.Counter = 147;
    Console.WriteLine(pe.Counter);
    Console.ReadKey(true);
  }
}
```
You my note that `Counter` is a property, that is bound to `private int counter` field.
The advantage of properties becomes obvious from this example:

```c#
class PropertyExample {
  private int counter=130;
  public int Counter{
    get{
    if(counter < 0)
    DoLogCounterIsLow(counter);
    return counter;
    }
    set{
    if (counter < 0)
    DoLogCounterIsLow(counter);
    counter=value;
    }
  }
}

class Program {
  public static void Main(string[] args){
    PropertyExample pe = new PropertyExample();
    pe.Counter = 147;
    Console.WriteLine(pe.Counter);
    Console.ReadKey(true);
  }
}
```

* Properties introduce `getters` and `setters` methods.
* Properties can be _read-only_ or _write-only_.

```c#
public int Counter{ get; } //read-only
public int Counter{ set; } //write-only
```
When using fields you cannot set them write-only.
Note that property setters and getters should execute as fast as possible. There should be no reading from a file or similar operations.

