---
id: 12971
title: Codility lessons
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
- [Iterations](#iterations)
- [BinaryGap [painless]✓](#binarygap-painless%e2%9c%93)
- [Arrays](#arrays)
  - [CyclicRotation [painless]✓](#cyclicrotation-painless%e2%9c%93)
  - [OddOccurrencesInArray [painless]✓](#oddoccurrencesinarray-painless%e2%9c%93)
- [Time Complexity](#time-complexity)
  - [PermMissingElem [painless]✓](#permmissingelem-painless%e2%9c%93)
  - [FrogJmp [painless]✓](#frogjmp-painless%e2%9c%93)
  - [TapeEquilibrium [painless]✓](#tapeequilibrium-painless%e2%9c%93)
- [Counting Elements](#counting-elements)
  - [PermCheck [painless]✓](#permcheck-painless%e2%9c%93)
  - [FrogRiverOne [painless]✓](#frogriverone-painless%e2%9c%93)
  - [MaxCounters [respectable]✓](#maxcounters-respectable%e2%9c%93)
  - [MissingInteger [respectable]✓](#missinginteger-respectable%e2%9c%93)
- [Prefix Sums](#prefix-sums)
  - [PassingCars [painless]✓](#passingcars-painless%e2%9c%93)
  - [GenomicRangeQuery [respectable]✓](#genomicrangequery-respectable%e2%9c%93)
  - [MinAvgTwoSlice [respectable]✓](#minavgtwoslice-respectable%e2%9c%93)
  - [CountDiv [respectable]✓](#countdiv-respectable%e2%9c%93)
- [Sorting](#sorting)
  - [Triangle [painless]✓](#triangle-painless%e2%9c%93)
  - [Distinct [painless]✓](#distinct-painless%e2%9c%93)
  - [MaxProductOfThree [painless]✓](#maxproductofthree-painless%e2%9c%93)
  - [NumberOfDiscIntersections [ambitious]✗](#numberofdiscintersections-ambitious%e2%9c%97)
- [Stacks and Queues](#stacks-and-queues)
  - [Brackets [painless]✓](#brackets-painless%e2%9c%93)
  - [Nesting [painless]✓](#nesting-painless%e2%9c%93)
  - [StoneWall [respectable]✓](#stonewall-respectable%e2%9c%93)
  - [Fish [respectable]✓](#fish-respectable%e2%9c%93)
- [Leader](#leader)
  - [Dominator [painless]✓](#dominator-painless%e2%9c%93)
  - [EquiLeader [painless]✓](#equileader-painless%e2%9c%93)
- [Maximum Slice Problem](#maximum-slice-problem)
  - [MaxProfit [painless]✓](#maxprofit-painless%e2%9c%93)
  - [MaxSliceSum [painless]✓](#maxslicesum-painless%e2%9c%93)
  - [MaxDoubleSliceSum [respectable]✓](#maxdoubleslicesum-respectable%e2%9c%93)
- [Prime and composite numbers](#prime-and-composite-numbers)
  - [MinPerimeterRectangle [painless]✓](#minperimeterrectangle-painless%e2%9c%93)
  - [CountFactors [painless]✓](#countfactors-painless%e2%9c%93)
  - [Peaks [respectable]✓](#peaks-respectable%e2%9c%93)
  - [Flags [ambitious]](#flags-ambitious)
- [Sieve or Eratosthenes](#sieve-or-eratosthenes)
  - [CountSemiprimes [painless]✓](#countsemiprimes-painless%e2%9c%93)
  - [CountNonDivisible [respectable]✓](#countnondivisible-respectable%e2%9c%93)
- [Euclidean Algorithm](#euclidean-algorithm)
  - [ChocolatesByNumbers [painless]✓](#chocolatesbynumbers-painless%e2%9c%93)
  - [CommonPrimeDivisors [respectable]✓](#commonprimedivisors-respectable%e2%9c%93)
- [Fibonacci Numbers](#fibonacci-numbers)
  - [FibFrog [respectable]✓](#fibfrog-respectable%e2%9c%93)
  - [Ladder [respectable]✓](#ladder-respectable%e2%9c%93)
- [Binary Search](#binary-search)
  - [MinMaxDivision [respectable]✓](#minmaxdivision-respectable%e2%9c%93)
  - [NailingPlanks [respectable]✓](#nailingplanks-respectable%e2%9c%93)
- [Caterpillar method](#caterpillar-method)
  - [AbsDistinct [painless]✓](#absdistinct-painless%e2%9c%93)
  - [CountDistinctSlices [respectable]✓](#countdistinctslices-respectable%e2%9c%93)
  - [CountTriangles [respectable]✓](#counttriangles-respectable%e2%9c%93)
  - [MinAbsSumOfTwo [ambitious]✓](#minabssumoftwo-ambitious%e2%9c%93)
- [Greedy algorithms](#greedy-algorithms)
  - [TieRopes [painless]✓](#tieropes-painless%e2%9c%93)
  - [MaxNonoverlappingSegments [painless]✓](#maxnonoverlappingsegments-painless%e2%9c%93)
- [Dynamic Programming](#dynamic-programming)
  - [NumberSolitaire [respectable]✓](#numbersolitaire-respectable%e2%9c%93)
  - [MinAbsSum [ambitious]✗](#minabssum-ambitious%e2%9c%97)
- [Challenges](#challenges)
  - [LongestPassword](#longestpassword)
  - [Casino](#casino)
- [Appendix](#appendix)
  - [Primes](#primes)
  - [Counter](#counter)
  - [Random int](#random-int)
  - [Random string](#random-string)
  - [Random shuffled](#random-shuffled)
  - [All factors](#all-factors)
  - [Find sign of increase and decrease in array](#find-sign-of-increase-and-decrease-in-array)
  - [Find increase and decrease in array](#find-increase-and-decrease-in-array)
  - [Find peaks of array](#find-peaks-of-array)
  - [Find peak differences](#find-peak-differences)
  - [Prime numbers](#prime-numbers)
  - [gcd substract](#gcd-substract)
  - [gcd using %](#gcd-using)
  - [lcd based on gcd](#lcd-based-on-gcd)
  - [first 50 fibs](#first-50-fibs)


## Iterations

## BinaryGap [painless]✓

Returns 100%
```python
def solution(n):
    b=bin(n)[2:]
    s1=False
    tz=0 # temp zeros
    mz=0 # max zeros 
    for e in b:
        if e=='1':
            mz=max(tz,mz)
            tz=0
            s1=True
        else:
            if(s1==True):
                tz+=1
            
            
    return mz
```
## Arrays
### CyclicRotation [painless]✓

Scores 100%, check for the len of 0.

```python
def solution(a,k):
    n=len(a)
    if(n==0):
        return []
    k=k%n
    a=a[n-k:]+a[0:n-k]
    return a
```
### OddOccurrencesInArray [painless]✓

Scores 100%, the `defaultdict` is not needed, simple `e in d` can do it. Note how we used `d.items()` to get both keys and values.

```python
def solution(a):
    d = {}
    for e in a:
        if (e in d):
            d[e]+=1
        else:
            d[e]=1
        
    for k,v in d.items():
        if(v%2==1):
            return k
```



## Time Complexity


### PermMissingElem [painless]✓

Returns 100%, the key is to sort the array.

```python
def solution(a):
    if (len(a)==0): 
        return 1
    if(max(a) == len(a)):
        return len(a)+1
    
    a.sort() 
    for _ in range(1, len(a)+1):
        if _ != a[_-1]:
            return _


```

### FrogJmp [painless]✓

Scores 100%. We first subtract and then use `math.ceil` operation.

```python
import math

def solution(x,y,d):    
    r = y-x
    if(r==0): return 0
    
    c = math.ceil(r/d)
    return c   
```

### TapeEquilibrium [painless]✓

Solution with 53%
```python
def solution(a):
    m = None # min sum
    l = len(a)  
    
    for p in range(1,l):
        print("p", p)
        ab = abs(sum(a[:p])-sum(a[p:l+1]))
        if (m == None):
            m = ab
        if (m > ab):
            m = ab
            
    return m 
```

Solution with 100%
```python
def solution(a):
    l=len(a)
    ms=None # min sum
    sl=0 # sum left
    sr=sum(a)
    
    for p in range(0,l-1):
        sl=sl+a[p]
        sr=sr-a[p]
        ab=abs(sl-sr)        
        if (ms==None):
            ms=ab
        if (ms>ab):
            ms=ab
    return ms
```



## Counting Elements

### PermCheck [painless]✓
### FrogRiverOne [painless]✓
### MaxCounters [respectable]✓
### MissingInteger [respectable]✓

## Prefix Sums

### PassingCars [painless]✓
### GenomicRangeQuery [respectable]✓
### MinAvgTwoSlice [respectable]✓
### CountDiv [respectable]✓

## Sorting

### Triangle [painless]✓
### Distinct [painless]✓
### MaxProductOfThree [painless]✓
### NumberOfDiscIntersections [ambitious]✗

## Stacks and Queues

### Brackets [painless]✓
### Nesting [painless]✓
### StoneWall [respectable]✓
### Fish [respectable]✓

## Leader

### Dominator [painless]✓
### EquiLeader [painless]✓

## Maximum Slice Problem

### MaxProfit [painless]✓

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

### MaxSliceSum [painless]✓

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

### MaxDoubleSliceSum [respectable]✓

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

## Prime and composite numbers

### MinPerimeterRectangle [painless]✓

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


### CountFactors [painless]✓
### Peaks [respectable]✓


```python
def alf(n):
    i=2
    t = n
    f=[]
    while(t>1):
        if t%i==0:
            f.append(i)
            t = t/i
        else:
            i+=1
    
    return f

def fp(a):
    n = len(a)
    p = [0]*n
    for i in range (1,n-1):
        if a[i-1] < a[i] and a[i]>a[i+1]:
            p[i]=1
    return p
    
def has1(p,d):
    ret=False 
    n = len(p)
    zones=[0]*d
    for i in range (0, n):
        zone = i//(n//d)
        if p[i]==1:
            zones[zone]=1
    if min(zones)==1:
        ret = True
    return ret


def solution(a):
    p = fp(a)
    n = len(a)
    f = list(alf(n))[::-1]
    for i in f:
        if has1(p,i):
            return i
```



### Flags [ambitious]

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
```

## Sieve or Eratosthenes

### CountSemiprimes [painless]✓

Scores 55% 

```python
n,p,q = 26, [1, 4, 16], [26, 10, 20]

def semi_primes(N):    
    s = set()
    m = [1]* (N+1) # mask
    m[0] = m[1] = 0
 
    i = 2
    while (i*i <= N):
        if m[i] == 1:
            for j in range(i*i, N+1, i):
                m[j] = 0
        i += 1
 
    i = 2    

    while (i*i <= N):
            if m[i] == True:
                for j in range(i*i, N+1, i):
                    if (j % i == 0 and m[j//i] == True):
                        s.add(j)
            i += 1

    return s


def solution(n,p,q):
    sp = semi_primes(n)
    r=[0]*len(p)
    for i in range(0,len(p)):
        print(q[i],p[i])
        r[i] =len([e for e in sp if e>=p[i] and e<=q[i]])
        
    return r

solution(n,p,q)
```


### CountNonDivisible [respectable]✓
Scores 55%
```python
def cnt(n, a):
    r=0
    for e in a:
        if n%e==0:
            r+=1
    return r

def solution(a):    
    n = len(a)
    ra=[0]*n   
    for i in range (0,n):
        ra[i]=n-cnt(a[i],a)
        
        
    return ra
```

## Euclidean Algorithm

### ChocolatesByNumbers [painless]✓

```python
def gcdm(a, b):
    if a % b == 0:
        return b
    else:
        return gcdm(b, a % b)

def solution(n, m):
    m = m%n
    if(m==0):
        return 1
    else:
        return int(n/gcdm(n,m))
```



### CommonPrimeDivisors [respectable]✓

Scored 84%
```python
def alf(n):
    i=2
    t = n
    f=[]
    while(t>1):
        if t%i==0:
            f.append(i)
            t = t/i
        else:
            i+=1
    
    return f

def solution(a,b):
    h=0 # how many

    # prepare d
    d ={}
    s = set(a+b)
    for e in s:
        d[e]=set(alf(e))
    
    
    for i in range(0,len(a)):
        if d[a[i]] == d[b[i]]:
            h+=1
    return h
    
    
a = [15,10,3]
b = [75, 30,5]
solution(a,b)
```

## Fibonacci Numbers

### FibFrog [respectable]✓



### Ladder [respectable]✓

```python
def fib(n=50):
    # there are 26 numbers smaller than 100k
    f = [0] * (n)    
    f[1] = 1
    for i in range(2, n):
        f[i] = f[i - 1] + f[i - 2]
        
    return f
        
f = fib(n=50)[1:]


def step2(n=30):
    s = [0]*n
    for i in range(1, n):
        s[i]=2**i    
    return s

s = step2()

def solution(a,b):
    n = len(a)
    r = [0]*n
    for i in range(0,n):
        r[i]=f[a[i]]%s[b[i]]
    return r
```


## Binary Search

### MinMaxDivision [respectable]✓
### NailingPlanks [respectable]✓

## Caterpillar method

### AbsDistinct [painless]✓
### CountDistinctSlices [respectable]✓
### CountTriangles [respectable]✓
### MinAbsSumOfTwo [ambitious]✓

## Greedy algorithms

### TieRopes [painless]✓

Scores 100%
```python
def solution(k,a):
    an = [e if e<k else 0 for e in a]
    gek = 0
    for e in an:
        if e==0:
            gek+=1

    ts=0
    for e in an:
        if e==0:
            ts=0
        else:
            ts+=e
            if ts>=k:
                gek+=1
                ts=0
    return gek
```

### MaxNonoverlappingSegments [painless]✓

## Dynamic Programming

### NumberSolitaire [respectable]✓
### MinAbsSum [ambitious]✗


## Challenges

### LongestPassword

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


### Casino

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

















## Appendix

### Primes 

```python
from functools import reduce

# find all the divisors
def divisors(n):    
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

### All factors

For 6 would be = [2,3]

```python
def alf(n):
    i=2
    t = n
    f=[]
    while(t>1):
        if t%i==0:
            f.append(i)
            t = t/i
        else:
            i+=1
    
    return f
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

### Prime numbers

```python
def primes(n):    
    m = [1]* (n+1) # mask
    m[0] = m[1] = 0
 
    i = 2
    while (i*i <= n):
        if m[i] == 1:
            for j in range(i*i, n+1, i):
                m[j] = 0
        i += 1
 
    i = 2
    return m

print(primes(1000)[0:10])
# [0, 0, 1, 1, 0, 1, 0, 1, 0, 0]
```

### gcd substract

```python
def gcds(a,b):
    if a == b:
        return a
    if a > b:
        return gcds(a - b, b)
    else:
        return gcds(a, b - a)
```

### gcd using %
```python
def gcdm(a,b):
    if a%b==0:
        return b 
    else:
        return gcdm(b,a%b)
```
### lcd based on gcd

```python
def lcd(a,b):
    return a*b/gcds(a,b)
```


### first 50 fibs

```python
def fib(n=50):
    f = [0] * (n)
    f[1] = 1
    for i in range(2, n):
        f[i] = f[i - 1] + f[i - 2]
        
    return f
        
f = fib(n=50)
print(f, len(f))
```