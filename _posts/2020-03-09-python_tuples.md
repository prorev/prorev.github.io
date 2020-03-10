---
id: 12971
title: Python tuples
date: 2020-01-22
author: taimane
layout: post
permalink: /python/tuples
published: false
image: 
categories: 
   - python
tags:
   - tuple
---
- [Converting list to tuple](#converting-list-to-tuple)
- [Concatenating tuples](#concatenating-tuples)
- [Adding two tuples together](#adding-two-tuples-together)
- [Sorting a tuple.](#sorting-a-tuple)


Tuples are fundamental in Python. For instance `(1,2,3)` is a tuple with 3 elements inside.
## Converting list to tuple

We use the simple `tuple` to do that:

_Example:_
```python
l=[1,2,3]
t=tuple(l)
print(t)
```

Output:
```
(1, 2, 3)
```

## Concatenating tuples

_Example:_
```python
t1=(1,2,3)
t2=(3,2,1)
print(t1+t2)
```

That would be directly adding all elements from **t1** and **t2** to a new tuple with all the elements from both the tuples. 

_Output:_
```
(1, 2, 3, 3, 2, 1)
```


## Adding two tuples together

```python
t1=(1,2,3)
t2=(3,2,1)
print(tuple(map(sum, zip(t1, t2))))
```

That would be to create a new tuple as a sum of elements from the previous two.

_Output:_
```
(4, 4, 4)
```

## Sorting a tuple.

Let's create a list with the three tuples inside. And let's sort the tuples inside the list.

_Example:_
```python
t = [(1,2,3), (3,2,1), (2,1,3)]
print(t)
st = sorted(t, key=lambda _: _[0])
print(st) # sorted by first element
st = sorted(t, key=lambda _: _[1])
print(st) # sorted by middle element
st = sorted(t, key=lambda _: _[2])
print(st) # sorted by last element
st = sorted(t, key=lambda _: (_[2],_[1]))
print(st) # sorted by last element, then by middle element
```

_Output:_
```
[(1, 2, 3), (3, 2, 1), (2, 1, 3)]
[(1, 2, 3), (2, 1, 3), (3, 2, 1)]
[(2, 1, 3), (1, 2, 3), (3, 2, 1)]
[(3, 2, 1), (1, 2, 3), (2, 1, 3)]
[(3, 2, 1), (2, 1, 3), (1, 2, 3)]
```
All five outputs are different.