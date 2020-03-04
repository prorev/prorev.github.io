---
id: 12971
title: Some favorite algorithms in Python
date: 2020-03-05
author: taimane
layout: post
permalink: /python/algorithms
published: true
image: 
categories: 
   - python
tags:
   - problems
   - logic
   - programming
---

## MaxProfit

In here we have an array of prices at particular day such as this one `a = [5,4,3,2,3,4,5,6,5,4,5,6,7,1]` and we would like to find the maximum jump `mj` or maximum profit we may get.

Local jump `lj` is non negative local jumps, and sj is single jumps `sj` may be negative.

```python
from random import randint
# a = [5,4,3,2,3,4,5,6,5,4,5,6,7,1]
a = [randint(0, 200000) for p in range(0, 400000)]
def jump(a):
    lj, mj = 0,0
    n = len(a)
    for i in range(0, n-1):
        sj = a[i+1]-a[i]
        if sj<=0:        
            lj=max(0, lj+sj)
        else:
            lj=lj+sj
            mj = max(mj,lj) # max jump
    return mj

jump(a)
```

## MaxDoubleSliceSum

Another problem from [codility](https://app.codility.com/programmers/lessons/9-maximum_slice_problem/){:rel="nofollow"}


```python
a=[3,2,6,-1, 4, 5, -1, 2]
def solution(a):
    n = len(a)
    k1=[0]*n
    k2=[0]*n
    for i in range (1, n):
        k1[i] = max(k1[i-1] + a[i], 0)
    for i in range (n-2, 0, -1):
        k2[i] = max(k2[i+1] + a[i], 0)
    m=0 # max
    for i in range(1, n-1):
        m = max(m, k1[i-1]+k2[i+1])
    return m

solution(a)
```

##  MaxSliceSum

This problem should search in array to find the slice with max sum. In the next case this is 1.

`m` and `ms` do represent local and final max sum.
For instance:

```python
a=[3, 2, -6, 4, 0] # array
m=[3, 5, -1, 3, 3] # local max sum
```
`ms` is maximum of `m` but we don't keep `m` as an array more like a running variable.

```python
a=[3, 2, -6, 4, 0]
def solution(a):    
    m,ms=a[0],a[0]
    for i in range(1, len(a)):
        m=max(a[i], m+a[i])
        ms=max(m,ms)
    return ms
solution(a)
```