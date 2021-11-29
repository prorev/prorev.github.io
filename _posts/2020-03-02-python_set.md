---
id: 12971
title: Python lists
date: 2020-01-22
author: taimane
layout: post
permalink: /python/lists
published: false
image: 
categories: 
   - python
tags:
   - string
---
_Table of Contents:_
- [What is list comprehension?](#what-is-list-comprehension)
- [Remove single element from a list](#remove-single-element-from-a-list)
- [What are lists](#what-are-lists)
- [What are not](#what-are-not)

---
List `[]` are very slow in Python. Whenever you can try to use Sets `{}` or Dicts `{}`.

## What is list comprehension?
_Example:_
```python
a=[1,2,2,3]
```



## Remove single element from a list

_Example:_
```python
a=[1,2,2,3]
a.remove(2)
print(a)
a.remove(2)
print(a)
```
_Output:_
```
[1, 2, 3]
[1, 3]
```

## What are lists

```python
*a,b = [1,2,3]
print(a,b)
```

## What are not

asdf