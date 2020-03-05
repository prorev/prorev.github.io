---
id: 12971
title: Some algorithms in Python
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

This problem should search in array to find the slice with max sum.

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

## Factors

```python
from functools import reduce

# find all the factors
def factors(n):    
    return set(reduce(list.__add__, 
                ([i, n//i] for i in range(1, int(n**0.5) + 1) if n % i == 0)))


# number of divisors
def nod(n):
    i=1
    d=0
    while(i*i<n):
        if n%i==0:
            d+=2
        i+=1
    if(i*i==n):
        d+=1
    return d

# prime number test
def prm(n):
    i=2    
    while(i*i<n):
        if n%i==0:
            return False
        i+=1
    return True

# returns how many times 
# n is divisible by 2 and 5
def div2and5(n):
    f= {2:0, 5:0}
    while(n%2==0):
        f[2]+=1
        n = n/2
    while(n%5==0):
        f[5]+=1
        n = n/5
    return f
```


## MinPerimeterRectangle

```python
def solution(n):
    i=1
    d=0
    f=[]
    while(i*i<n):
        if n%i==0:
            f.append(i)
            f.append(n//i)
        i+=1
    if(i*i==n):
        f.append(i)
        return 2*(i+i)
    else:
        return 2*(f[-1]+f[-2])
```

## Flags

```python
a=[1, 5, 3, 4, 3, 4, 1, 2, 3, 4, 6, 2]

def fp(a):
    n = len(a)
    p = [0]*n
    for i in range (1,n-1):
        if a[i-1] < a[i] and a[i]>a[i+1]:
            p[i]=1
    return p

def ck(a,x):
    n = len(a)    
    f=x
    pos=0    
    while f>0 and pos<n:
        if a[pos]==1:
            f-=1
            pos+=x
        else:
            pos+=1
    return f==0    

def solution(a):
    p = fp(a)
    mf = 0
    i = 1
    while ck(p,i):
        i*=2
    print(i)
    
    for j in range (i, 0, -1):
        if (ck(p,j)):
            mf = j
            break
    return mf
    
    
solution(a)   

```

## Casino

```python
n,k =8, 0
n,k =18, 2
n,k =10, 10 

# ideal sequence
def iseq(n, k):
    z = k # zeros left
    s = ''
    while(n>2):
        if n%2==1:
            s=s+'1'
            n=n-1
        else:
            if(z>0):
                s=s+'0'
                n=n/2
                z=z-1
            else:                
                s=s+'1'*int(n-1)
                return s[::-1]
            
    if(n==2):
        s=s+'1'
        
    if(n==3):
        s=s+'11'        
        
    return s[::-1]



def solution(n,k):
    b = iseq(n, k)
    print(b)    
    return len(b)

solution(21, 2)  
```

## Passwords

```python
s = "zxcasdqwe123"

import re

def a(s):
    m = re.match(r"^[a-zA-Z0-9]+$", s)
    if(m==None):
        return False
    else: 
        return True
    
def l(s):
    l = re.findall(r'[a-zA-Z]', s)
    s = "".join(str(i) for i in l)
    print(len(s))
    return len(s)
    
def d(s):
    d = re.findall(r'[0-9]+', s) 
    s = "".join(str(i) for i in d)
    return len(s)
   

def solution(s):
    nws = []
    ws = s.split() 
    #print(ws)
    for w in ws:
        if a(w) and l(w)%2==0 and d(w)%2==1:            
            nws.append(w)        

    print(nws)
            
    if(len(nws)==0):
        return -1
    mx = max(set(nws), key=len)
    return (len(mx))
```


## Appendix

### Counter
```python
from collections import defaultdict
from collections import Counter
a = [3,3,4,2,3,3,34,5,6]
c = Counter(a)
print("c[3] = ", c[3])
print([(k,v) for k,v in c.items()])
print(c.most_common(1))
print(c.most_common(1)[0][1])
```

### Random int

```python
from random import randint
a = [randint(-10000, 10000) for p in range(0, 10000)] 
#−2,147,483,648..2,147,483,647
```

### Random string
```python
import random
s = [random.choice(['a', 's', 'df']) for p in range(0, 10)]
print(s)
```

### Random shuffled

```python
import random
a = [i for i in range(1, 50000+1)]
random.shuffle(a)
```

### Find sign of increase and decrease in array

```python
def fsid(a):
    n = len(a)
    ida = [0]*n
    for i in range (1,n):
        if a[i-1]<a[i]:
            ida[i]=1
        else:
            ida[i]=-1
    return ida
a=[1, 5, 3, 4, 3, 4, 1, 2, 3, 4, 6, 2]
fid(a)
#[0, 1, -1, 1, -1, 1, -1, 1, 1, 1, 1, -1]
```


### Find increase and decrease in array

```python
def fid(a):
    n = len(a)
    ida = [0]*n
    for i in range (1,n):
        dif = a[i]-a[i-1]
        ida[i]=dif
    return ida
a=[1, 5, 3, 4, 3, 4, 1, 2, 3, 4, 6, 2]
fid(a)
#[0, 4, -2, 1, -1, 1, -3, 1, 1, 1, 2, -4]
```

### Find peaks of array

```python
def fp(a):
    n = len(a)
    p = [0]*n
    for i in range (1,n-1):
        if a[i-1] < a[i] and a[i]>a[i+1]:        
            p[i]=1
    return p

a=[1, 5, 3, 4, 3, 4, 1, 2, 3, 4, 6, 2]
fp(a)
#[0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 1, 0]
```

### Find peak differences

```python
def positions(a,el):
    d = [i for i,e in enumerate(a) if e==el]
    return d

a=[0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 1, 0]
positions(a,1)
#[0,2,2,5]
```
