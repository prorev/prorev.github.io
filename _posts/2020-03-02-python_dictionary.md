---
id: 12971
title: Python dictionaries
date: 2020-01-22
author: taimane
layout: post
permalink: /python/dict
published: true
image: 
categories: 
   - python
tags:
   - dictionary
   - dict
---
_Table of contents:_

- [Get the len of dictionary](#get-the-len-of-dictionary)
- [Get the value from the dictionary](#get-the-value-from-the-dictionary)
- [What is dictionary comprehension?](#what-is-dictionary-comprehension)
- [How to invert a dictionary (keys and values)?](#how-to-invert-a-dictionary-keys-and-values)
- [How to remove elements with specific keys, values?](#how-to-remove-elements-with-specific-keys-values)
- [Get dictionary keys and values](#get-dictionary-keys-and-values)
- [Convert two sequences (lists) into dictionary](#convert-two-sequences-lists-into-dictionary)
- [Sorting a dictionary](#sorting-a-dictionary)

---
Dictionaries are created using `{}` like this or using `dict()`.

_Example:_
```python
d = {'a':5, 'b':9, 'c':-1}
```

or you can convert them from tuples:

_Example:_
```python
t = ('a',5), ('b',9), ('c',-1), ('d',4)
print(type(t))
d2 = dict(t)
d2
```

_Output:_
```
<class 'tuple'>
{'a': 5, 'b': 9, 'c': -1, 'd': 4}
```

## Get the len of dictionary

_Example:_
```python
d = {'a':5, 'b':9, 'c':-1}
len(d)
```

_Output:_
```
3
```

## Get the value from the dictionary

_Example:_
```python
d = {'a':5, 'b':9, 'c':-1}
d['a']
```

_Output:_
```
5
```
## What is dictionary comprehension?

In dict comprehension we traverse all the elements and create a new dic `nd`.

_Example:_
```python
d = {'a':5, 'b':9, 'c':-1}
nd = {k:v*v for k,v in d.items()}
nd
```
_Output:_
```
{'a': 25, 'b': 81, 'c': 1}
```

## How to invert a dictionary (keys and values)?

As we know how to use dictionary comprehension we can use the same for key-values inversion.

_Example:_
```python
d = {'a':5, 'b':9, 'c':-1}
d_inv = {v: k for k, v in d.items()}
d_inv
```

_Output:_
```
{5: 'a', 9: 'b', -1: 'c'}
```

## How to remove elements with specific keys, values?

There is a way to remove the key from the dictionary if we use `del`, `pop`, `popitem` and `clear`:

_Example:_
```python
d = {'a':5, 'b':9, 'c':-1, 'd':4}
del d['d']
print(d)
d.pop('c')
print(d)
d.popitem()
print(d)
d.clear()
print(d)
```
_Output:_
```
{'a': 5, 'b': 9, 'c': -1}
{'a': 5, 'b': 9}
{'a': 5}
{}
```

The other way is to use dictionary comprehension like before with the if condition, but then we deal with the new dictionary:

_Example:_
```python
d = {'a':5, 'b':9, 'c':-1}
nd = {k:v*v for k,v in d.items() if k!='c'}
nd
```

_Output:_
```
{'a': 25, 'b': 81}
```
The same output would be for:

_Example:_
```python
d = {'a':5, 'b':9, 'c':-1}
nd ={k:v*v for k,v in d.items() if v>0}
nd
```

## Get dictionary keys and values

This example dissolves dict to keys and values and creates new exactly the same dictionary from those keys and values:

_Example:_
```python
d ={'a':5, 'b':9, 'c':-1}
k = d.keys()
v = d.values()
k,v
```

_Output:_
```
(dict_keys(['a', 'b', 'c']), dict_values([5, 9, -1]))
```

About the same output you can get with:

_Example:_
```python
d ={'a':5, 'b':9, 'c':-1}
k,v = zip(*d.items())
k,v
```

_Output:_
```
(('a', 'b', 'c'), (5, 9, -1))
```

## Convert two sequences (lists) into dictionary

_Example:_
```python
k,v = ['a', 'b', 'c'], [5, 9, -1]
d = dict(zip(k, v))
d
```

_Output:_
```
{'a': 5, 'b': 9, 'c': -1}
```

## Sorting a dictionary

While it is not possible to sort a dictionary, since dictionaries are orderless, it is possible to use list comprehension to create new dictionary sorted the way we like. Plain simple `sorted` can be used for that.

_Example:_
```python
d ={'a':5, 'b':9, 'c':-1}
nd = {k:v for k, v in sorted(d.items(), key=lambda _: _[1])}
print(nd)
```

_Output:_
```
{'c': -1, 'a': 5, 'b': 9}
```

The trick is, the way we inserted items to the dictionary is how they will be presented with `print`.







