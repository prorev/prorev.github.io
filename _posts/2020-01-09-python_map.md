---
id: 12971
title: Python map 
date: 2020-01-08
author: taimani
layout: post
permalink: /sr/python/map/
published: true
image: 
categories: 
   -
tags:
   - 
---
Како се користи `map()` функција у Пајтону из стандардне библиотеке?

Ево примера:
``` python
import operator
t=range(10)
t2 = map(operator.neg, t)
t3 = map(lambda o: o+100, t2)
list(t3)
```
Излаз:
```
[100, 99, 98, 97, 96, 95, 94, 93, 92, 91]
```
`map()` функција враћа map објекат (врста генератора) где се неки оператор или функција придружује подацима (t или t2 у нашем случају). Ова функција не извршава се све док то није потребно. Односно, извршава се лењо.

Ево листе свих оператора:

``` python
['__abs__', '__add__', '__all__', '__and__', '__builtins__', '__cached__', '__concat__', '__contains__', '__delitem__', '__doc__', '__eq__', '__file__', '__floordiv__', '__ge__', '__getitem__', '__gt__', '__iadd__', '__iand__', '__iconcat__', '__ifloordiv__', '__ilshift__', '__imatmul__', '__imod__', '__imul__', '__index__', '__inv__', '__invert__', '__ior__', '__ipow__', '__irshift__', '__isub__', '__itruediv__', '__ixor__', '__le__', '__loader__', '__lshift__', '__lt__', '__matmul__', '__mod__', '__mul__', '__name__', '__ne__', '__neg__', '__not__', '__or__', '__package__', '__pos__', '__pow__', '__rshift__', '__setitem__', '__spec__', '__sub__', '__truediv__', '__xor__', '_abs', 'abs', 'add', 'and_', 'attrgetter', 'concat', 'contains', 'countOf', 'delitem', 'eq', 'floordiv', 'ge', 'getitem', 'gt', 'iadd', 'iand', 'iconcat', 'ifloordiv', 'ilshift', 'imatmul', 'imod', 'imul', 'index', 'indexOf', 'inv', 'invert', 'ior', 'ipow', 'irshift', 'is_', 'is_not', 'isub', 'itemgetter', 'itruediv', 'ixor', 'le', 'length_hint', 'lshift', 'lt', 'matmul', 'methodcaller', 'mod', 'mul', 'ne', 'neg', 'not_', 'or_', 'pos', 'pow', 'rshift', 'setitem', 'sub', 'truediv', 'truth', 'xor']
```
Потом, да би смо добили вредности, користимо `list()` функцију која враћа горе поменути излаз.

Можемо дефинисати и функцију (овде `add()` ) и том приликом вратимо више од једног елемента tuple (тапл).
``` python
def add(o):
return (o, o+1)
t4 = map(add, t)
list(t4)
```
Излаз:
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