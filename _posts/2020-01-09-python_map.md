---
id: 12971
title: Python functional programming | Map, Filter and Reduce
date: 2020-01-08
author: taimane
description: Python functions for functional programming, map(), filter() and functools.reduce()) explained examples
layout: post
permalink: /python/map/
published: true
image: 
categories:
   - python
tags:
   - built-in
   - map
   - filter
   - reduce
   - examples
   - explained
   - Answers
   - how to
   - operators
   - lambda
---
_Table of Contents:_

- [The built-in `map()` function in Python](#the-built-in-map-function-in-python)
  - [Using `map()` with the operator](#using-map-with-the-operator)
  - [Using `map()` with the lambda function](#using-map-with-the-lambda-function)
  - [`map()` takes a function](#map-takes-a-function)
  - [Using `map()` to return a tuple](#using-map-to-return-a-tuple)
  - [`map()` takes multiple iterators](#map-takes-multiple-iterators)
- [Using Python built-in `filter()` function](#using-python-built-in-filter-function)
- [Python `reduce()` function](#python-reduce-function)
- [Conclusion](#conclusion)

`map()`, `filter()` and `reduce()` are functions which facilitate a functional approach to programming in Python. 

## The built-in `map()` function in Python

Python `map()` function:
* takes two parameters: a function and an iterable
* returns a map object 
* applies a given function to each item of an iterable
* allows you to process the iterables without a loop

Let's create `map()` function example. To use the `map()` function we need to have:
* a function and
* an iterable (list, set, tuple, another map object, etc.)

### Using `map()` with the operator 

_Example: `map()` with the Operator_

```python
import operator
it = range(10) # iterable
fun = operator.neg # operator 
t2 = map(fun, it) 
list(t2)
```

_Out:_
```
[0, -1, -2, -3, -4, -5, -6, -7, -8, -9]
```

We can do another `map()` function on a map object:

### Using `map()` with the lambda function

_Example: `map()` with the lambda function_
```python
import operator
it = range(10) # iterable
fun = operator.neg # operator
t2 = map(fun, it) 
t3 = map(lambda o: o+100, t2)
list(t3)
```

_Out:_
```
[100, 99, 98, 97, 96, 95, 94, 93, 92, 91]
```

> Now it should be evident how it is possible to process the iterables without a loop. Of course, if we ue the `map()` function.

We used the operator in the above example, and after that we used the inline "lambda" function.
Here is the list of operators we can use with the `map()` function:

```python
['__abs__', '__add__', '__all__', '__and__', '__builtins__', '__cached__', '__concat__', '__contains__', '__delitem__', '__doc__', '__eq__', '__file__', '__floordiv__', '__ge__', '__getitem__', '__gt__', '__iadd__', '__iand__', '__iconcat__', '__ifloordiv__', '__ilshift__', '__imatmul__', '__imod__', '__imul__', '__index__', '__inv__', '__invert__', '__ior__', '__ipow__', '__irshift__', '__isub__', '__itruediv__', '__ixor__', '__le__', '__loader__', '__lshift__', '__lt__', '__matmul__', '__mod__', '__mul__', '__name__', '__ne__', '__neg__', '__not__', '__or__', '__package__', '__pos__', '__pow__', '__rshift__', '__setitem__', '__spec__', '__sub__', '__truediv__', '__xor__', '_abs', 'abs', 'add', 'and_', 'attrgetter', 'concat', 'contains', 'countOf', 'delitem', 'eq', 'floordiv', 'ge', 'getitem', 'gt', 'iadd', 'iand', 'iconcat', 'ifloordiv', 'ilshift', 'imatmul', 'imod', 'imul', 'index', 'indexOf', 'inv', 'invert', 'ior', 'ipow', 'irshift', 'is_', 'is_not', 'isub', 'itemgetter', 'itruediv', 'ixor', 'le', 'length_hint', 'lshift', 'lt', 'matmul', 'methodcaller', 'mod', 'mul', 'ne', 'neg', 'not_', 'or_', 'pos', 'pow', 'rshift', 'setitem', 'sub', 'truediv', 'truth', 'xor']
```

### `map()` takes a function

Now let's create another example where we use just a function (without an operator, and without lambda function).

_Example:_
```python
def fun(x):
   return x+100
it = range(10) # iterable
t2 = map(fun, it) 
list(t2)
```

_Out:_
```
[100, 101, 102, 103, 104, 105, 106, 107, 108, 109]
```
### Using `map()` to return a tuple

Next, we will define a function `fun()` and we will use that function to return more than one element.

_Example: Return a tuple_

```python
def fun(o):
   return (o, o+1)
it = range(10) # iterable
t = map(fun, it)
list(t)
```

_Out:_
```
[(0, 1),
 (1, 2),
 (2, 3),
 (3, 4),
 (4, 5),
 (5, 6),
 (6, 7),
 (7, 8),
 (8, 9),
 (9, 10)]
```

### `map()` takes multiple iterators

Now we will show `map()` can take more than one iterator.

_Example: Two iterators_
```python
r1 = range(10)
r2 = range(-10,0)
t = map(lambda t1, t2: t1+t2, r1, r2)
list(t)
```

_Out:_
```
[-10, -8, -6, -4, -2, 0, 2, 4, 6, 8]
```

## Using Python built-in `filter()` function

There is an extreme similarity:

* `filter()` and `map()` both take a function and an iterator (at least one iterator).


_Example: filter object_
```python
r = range(-10, 10) # range
f = filter(lambda x: x > -1, r) # filter object
print(f)
print(type(f))
list(f)
```

_Out:_
```
<filter object at 0x0000018FCA1701C0>
<class 'filter'>

[0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
```

In this case `filter()` is a way to replace the `for` loop with the single condition ` x > -1`.

We could rewrite the above example:

_Example: Using the for loop_
```python
r = range(-10, 10)
l = [] # empty list
for e in r:
    if e > -1:
        l.append(e)
print(l)
```

_Out:_
```
0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
```

## Python `reduce()` function

There is an extreme similarity:

* `reduce()` and `map()` both take a function and an iterator (at least one iterator).

Reduce will apply a _rolling computation_ to an iterator we set at the input.

_Example:_

```python
from functools import reduce
it = [1,2,3]
t = reduce((lambda x, y: x * y), it)
print(t)
```

_Out:_
```
6
```

The equivalent example in non functional programming would be:

```python
it = [1,2,3]
t = 1
for e in it:
   t = t*e
print(t)
```

## Conclusion

As conclusion, built-in funcitons `map()` and `filter()` and the `functools.reduce` are useful for those who like the functional programming style in Python.

