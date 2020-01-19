---
id: 239
title: How to get python object type?
date: 2011-04-02 22:13:44
author: taimane
layout: post
permalink: /python/get-type/
redirect_from: /python-object-type/
published: true
categories:
   -
tags:
   -
---
Python in fact has just a single object type: `Object`. And building on that adds `__class__` property on any object. For instance on `'string'` literal it will add the class `str`

```python
s='one'
print(type(s)) # <class 'str'>
print (s.__class__) # <class 'str'>
```


To check Python object type on a list you have to use `type` function again.

```python
l=['one','two']
type(l) # list
print (l.__class__) # <class 'list'>
```

When you need to check you can do it in this pythonic way:

```python
l=[]
if type(l).__name__== 'list': 
  print('Is a list!')
else: 
  print('Not a list')
```

