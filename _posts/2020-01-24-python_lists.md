---
id: 12971
title: Python lists
date: 2020-01-22
author: taimane
layout: post
permalink: /python/lists
published: true
image: 
categories: 
   - python
tags:
   - string
---

- [What are lists?](#what-are-lists)
- [What is list comprehension?](#what-is-list-comprehension)
- [Creating random elements in a list](#creating-random-elements-in-a-list)
- [Remove single element from a list](#remove-single-element-from-a-list)
- [Creating a matrix](#creating-a-matrix)
- [List combinations and permutations](#list-combinations-and-permutations)
- [Get unique elements of a list](#get-unique-elements-of-a-list)
- [List maximums](#list-maximums)
- [Another list counter](#another-list-counter)
- [Reverse the list](#reverse-the-list)
- [Slow `min` `max` functions.](#slow-min-max-functions)

---
## What are lists?

Lists are incredible powerful in Python. Use [] to create them:

_Example:_
```python
l = [1,2,3,4]
```
Or use `list()` to convert to list.

_Example:_
```python
t = (1,2,3)
l = list(t)+[4]
*a,b = l
print(a,b,l)
```

In here we created a list from tuple (1,2,3), and added [4] element as list to the end.

_Output:_
```
[1, 2, 3] 4 [1, 2, 3, 4]
```
> To combine two lists use the **+** operator like this: **[1,2,3]+[4]**


## What is list comprehension?
_Example:_
```python
a=[1,2,3]
[a+[el] for el in a]
```
In here we do a for loop inside []. On the left side we have `a+[el]` meaning we append one of list elements to the original list.

_Output:_
```
[[1, 2, 3, 1], [1, 2, 3, 2], [1, 2, 3, 3]]
```
You can do list comprehension often because it is faster than:
```python
a=[1,2,3]
new=[]
for el in a:
    new.append(a+[el])
```
You usually don't use list comprehension for printing, but you can use it even for printing.

## Creating random elements in a list

Sometimes is boring to create lists elements. For different testing you may need to create very big lists (great number of items).

The next example will create 10.000 integers from the range [1..10].


_Example:_
```python
import random as r
a = [r.randint(1, 10) for p in range(0, 10000)]
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

## Creating a matrix

Frequently you need to deal with matrices. Usually these can be represented as list of lists.


_Example:_
```python
M = [[5,4,4], [4,3,4], [3,2,4], [2,2,2], [3,3,4], [1,4,4], [4,1,1]]
R = len(M)
C = len(M[0])
```

Note how we can calculate the number of rows as `len(M)`, and number of columns as `len(M[0])`.

The next showcase used [**pandas**](https://programming-review.com/python/pandas-load-data) to print the matrix.

```python
from pandas import DataFrame
M = [[5,4,4], [4,3,4], [3,2,4], [2,2,2], [3,3,4], [1,4,4], [4,1,1]]
print (DataFrame(M))
```
Note, how indices [0..6] represent the rows and indices [0..2] represents the colums.

_Output:_
```
   0  1  2
0  5  4  4
1  4  3  4
2  3  2  4
3  2  2  2
4  3  3  4
5  1  4  4
6  4  1  1
```

## List combinations and permutations

_Example:_
```python
import itertools as it
l = [1,1,3]
p = it.permutations(l,len(l))
c = it.combinations(l,len(l))
print(*p)
print(*c)
```

As you can see we used **itertools** in here, to gain speed not to create permutations and combinations manually.

> Note how we have the same integer 1 repeated twice in the list. Combinations and permutation module treat elements independently.

_Output:_
```
(1, 1, 3) (1, 3, 1) (1, 1, 3) (1, 3, 1) (3, 1, 1) (3, 1, 1)
(1, 1, 3)
```

## Get unique elements of a list

In the previous example you could do eliminate duplicates from the list:

_Example:_
```python
import itertools as it
l = [1,1,3]
s = set(l)
print(s)
p = it.permutations(s,len(s))
c = it.combinations(s,len(s))
print(*p)
print(*c)
```

Output:
```
{1, 3}
(1, 3) (3, 1)
(1, 3)
```

Certainly we can search unique permutations:

_Example:_
```python
import itertools as it
l = [1,1,3]
p = it.permutations(l,len(l))
print(set(p))
```
This time we print only unique permutations.
```
{(1, 1, 3), (1, 3, 1), (3, 1, 1)}
```


## List maximums

_Example:_
```python
l = [1,2,3,4,6,2,4,2,5]
m0 = max(l);
print(f'list max element is {m0}')

m1 = max(set(l), key=l.count)
print(f'most frequently repeated {m1}')
print(f'element {m1} repeats {l.count(m1)} times')
```

It was easy to calculate the maximum in a integer list l. We can also calculate the element that repeats most frequently using the `max` function.

Thanks to the `l.count(m1)` we get how many times the element repeats.


_Output:_
```
list max element is 6
most frequently repeated 2
element 2 repeats 3 times
```

There is another example when strings are inside the list. This time we calculate the maximum length for a string using the `max` function `key` argument..

_Example:_
```python
l = ['12','346', '2', '425']
m2 = max(l, key=len)
print(f'max len of {len(m2)} has element `{m2}`')
```

_Output:_
```
max len of 3 has element `346`
```

## Another list counter


Again we will count list elements, but this time we import Counter from collections.

_Example:_
```python
from collections import Counter
l = [3,3,4,2,3,3,34,5,6]
c = Counter(l)
c
```
_Output:_
```
Counter({3: 4, 4: 1, 2: 1, 34: 1, 5: 1, 6: 1})
```
As the output we get the counter object c.
Counter object `c`, you can index into with `c[3]`.

With `c.items()` you can list the counter.

You can get the first most common element `c.most_common(1)`.

_Example:_
```python
print("c[3] = ", c[3])
print([(k,v) for k,v in c.items()])
print(c.most_common(1))
print(c.most_common(1)[0][1])
```

_Output:_
```
c[3] =  4
[(3, 4), (4, 1), (2, 1), (34, 1), (5, 1), (6, 1)]
[(3, 4)]
4
```

## Reverse the list

To reverse the list I always use:
_Example:_
```python
l=[3, 4, 6, 0, 6, 1, 4, 4]
print(l[::-1])
```

_Output:_
```
[4, 4, 1, 6, 0, 6, 4, 3]
```

I assume this is because this works nice with strings also:

_Example:_
```python
s = 'There can be only one'
print(s[::-1])
```
_Output:_
```
eno ylno eb nac erehT
```


## Slow `min` `max` functions.

Here is one example that brings the same note for lits, and dicts. `min` and `max` functions not fast.

This is particularly obvious when you deal with lists having 100.000 or more elements and you try to find `min` or `max` inside a loop.


_Example:_
```python
from random import randint
x = 10000
a = [randint(1, x) for p in range(0, 100000)]


def match_10000_elements(x, a):
    l = len(a) 
    print(l)
    c = [0]*(x) 
    r = -1 # for return
    for e in a:
        r = r+1
        c[e-1]=1
        if(min(c)==1):
            return r
    return -1

match_10000_elements(x, a)
```
You note we first create the random integers list a with 100.000 elements all inside 1..10000 range.
We would like to find the the moment when all 10.000 integers including 1,2,3, ..., 10000 are inside the a array.

For that again we use another counter array with all zeros. If we cannot match all 10.000 integers we return -1.

We use the for loop and inside that for loop we set the list c elements from 0 to 1 if the element exists.

The `max` function on a list should be the fastest way to check if there are any zeros left, meaning if we matched all the 10.000 elements. If we do, then the minimum element is 1 instead of 0, and we may return r -- position counter.

The program performs slow for **x** ~ 10.000 and **a** having 100.000 elements. The slowest part is the `min` function.

Here is the another attempt avoid slow execution:

_Example:_
```python
from random import randint
x = 10000
a = [randint(1, x) for p in range(0, 100000)]


def match_10000_elements(x, a):
    l = len(a)  
    print(l)
    s = set() 
    r = -1 # return
    for i,e in enumerate(a):
        s.add(e)     
        if(len(s)==x):
            return i   
    return -1
    

match_10000_elements(x, a)  
```
_Output:_
```
100000

-1
```
The program returns -1, (or some very big number close to 100.000). This time to check if all elements are there we use **len** on set, and it works fast.

We could use dictionary instead.

```python
from random import randint
x = 10000
a = [randint(1, x) for p in range(0, 100000)]

def match_10000_elements(x, a):
    l = len(a)  
    print(l)
    d={}
    r = -1 # return
    for i,e in enumerate(a):
        d[e]=1
        if(len(d)==x):
            return i   
    return -1
    

match_10000_elements(x, a)  
```

If we would use **min** or **max** functions on dictionary `max(d.values())` we would be slow again.



