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
  - [BinaryGap](#binarygap)
- [Arrays](#arrays)
  - [CyclicRotation](#cyclicrotation)
  - [OddOccurrencesInArray](#oddoccurrencesinarray)
- [Time Complexity](#time-complexity)
  - [PermMissingElem](#permmissingelem)
  - [FrogJmp](#frogjmp)
  - [TapeEquilibrium](#tapeequilibrium)
- [Counting Elements](#counting-elements)
  - [FrogRiverOne](#frogriverone)
  - [MaxCounters](#maxcounters)
  - [MissingInteger](#missinginteger)
  - [PermCheck](#permcheck)
- [Prefix Sums](#prefix-sums)
  - [PassingCars](#passingcars)
  - [GenomicRangeQuery](#genomicrangequery)
  - [MinAvgTwoSlice](#minavgtwoslice)
  - [CountDiv](#countdiv)
- [Sorting](#sorting)
  - [Triangle](#triangle)
  - [Distinct](#distinct)
  - [MaxProductOfThree](#maxproductofthree)
  - [NumberOfDiscIntersections](#numberofdiscintersections)
- [Stacks and Queues](#stacks-and-queues)
  - [Brackets](#brackets)
  - [Nesting](#nesting)
  - [StoneWall](#stonewall)
  - [Fish](#fish)
- [Leader](#leader)
  - [Dominator](#dominator)
  - [EquiLeader](#equileader)
- [Maximum Slice Problem](#maximum-slice-problem)
  - [MaxProfit](#maxprofit)
  - [MaxSliceSum](#maxslicesum)
  - [MaxDoubleSliceSum](#maxdoubleslicesum)
- [Prime and composite numbers](#prime-and-composite-numbers)
  - [MinPerimeterRectangle](#minperimeterrectangle)
  - [CountFactors](#countfactors)
  - [Peaks](#peaks)
  - [Flags](#flags)
- [Sieve or Eratosthenes](#sieve-or-eratosthenes)
  - [CountSemiprimes](#countsemiprimes)
  - [CountNonDivisible](#countnondivisible)
- [Euclidean Algorithm](#euclidean-algorithm)
  - [ChocolatesByNumbers](#chocolatesbynumbers)
  - [CommonPrimeDivisors](#commonprimedivisors)
- [Fibonacci Numbers](#fibonacci-numbers)
  - [FibFrog](#fibfrog)
  - [Ladder](#ladder)
- [Binary Search](#binary-search)
  - [MinMaxDivision](#minmaxdivision)
  - [NailingPlanks](#nailingplanks)
- [Caterpillar method](#caterpillar-method)
  - [AbsDistinct](#absdistinct)
  - [CountDistinctSlices](#countdistinctslices)
  - [CountTriangles](#counttriangles)
  - [MinAbsSumOfTwo](#minabssumoftwo)
- [Greedy algorithms](#greedy-algorithms)
  - [TieRopes](#tieropes)
  - [MaxNonoverlappingSegments](#maxnonoverlappingsegments)
- [Dynamic Programming](#dynamic-programming)
  - [NumberSolitaire](#numbersolitaire)
  - [MinAbsSum✗](#minabssum%e2%9c%97)
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

### BinaryGap

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

### CyclicRotation 

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
### OddOccurrencesInArray 

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


### PermMissingElem 

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

### FrogJmp 

Scores 100%. We first subtract and then use `math.ceil` operation.

```python
import math

def solution(x,y,d):    
    r = y-x
    if(r==0): return 0
    
    c = math.ceil(r/d)
    return c   
```

### TapeEquilibrium 

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

### FrogRiverOne 

This is probable the best task on codility, since it teaches you to use `len` instead of `max`.

```python
def solution(x, a):
    l = len(a)  
    s = set() 
    r = -1 # return
    for i,e in enumerate(a):
        s.add(e)     
        if(len(s)==x):
            return i   
    return -1
```
### MaxCounters 

Scores 66%
```python
def solution(n, a):
    r = [0]*n
    for v in a:
        if (v==n+1):
            m = max(r)
            r = [m]*n
        else:
            r[v-1] = r[v-1]+1
            
    return r
```

Scores 100%

```python
from collections import Counter
def maxrep(a):
    if(len(a)==0):
        return 0
    c = Counter(a)
    return c.most_common(1)[0][1]
    
def solution(n, a):
    ll=[[]]# split to multiple lists
    b = 0 # index for the next sublist
    for i in range(0,len(a)):
        if (a[i]== n+1): # break
            b=b+1
            ll.append([])
        else:
            ll[b].append(a[i])

    c = [] # list of max repeat counters
    for l in ll:
        c.append(maxrep(l))

    s = sum(c[:-1])
    r = [s]* n
    if (c[-1]==0):
        return r
    else:
        # get index of last (n+1)
        if(n+1 in a):
            lin = len(a) - a[::-1].index(n+1)
        else:
            lin =0
        
        for v in a[lin:]:
            r[v-1] = r[v-1]+1
        return r
```
### MissingInteger 

Scores 100%
```python
def solution(a):
    a = set(a)
    for i in range(1,1000000+1):
        if i not in a:
            return i
    
    return 
```

### PermCheck 

Scores 100% 

```python
# permutation

from random import randint
a = [randint(1, 1000000000) for p in range(0, 100000)]

def missing(a):
    a = set(a)
    for i in range(1,1000000+1):
        if i not in a:
            return i

def solution(a):
    m = max(a)
    if(m!=len(a)):
        return 0
    if(missing(a) <= m ):
        return 0
    return 1

a = [1,3,2,4]
solution(a)   
```



## Prefix Sums

### PassingCars 

Scores 100%. Don't forget the 1000000000 limit.

```python
def solution(a):
    pc=0
    fz=0
    
    for e in a:
        if pc>1000000000:
            return -1
        if e==0:
            fz+=1
        else:
            pc+=fz           
    
    return pc
```

### GenomicRangeQuery 

Scores 100%

```python
def solution(s,p,q):
    n = len(p)
    r = [0]*n
    
    for i in range(n):
        pi=p[i]
        qi=q[i]+1
        ts=s[pi:qi]
        if 'A' in ts:
            r[i]=1
        elif 'C' in ts:
            r[i]=2
        elif 'G' in ts:
            r[i]=3
        elif 'T' in ts:
            r[i]=4
    return r

s,p,q = 'CAGCCTA', [2, 5, 0], [4, 5, 6]
solution(s,p,q)
```

### MinAvgTwoSlice 

The standard solution will not perform well so you can get only 50%.

```python
def solution(a):
    n = len(a)
    mi = 0 #index
    tm = max(a) #temp min
    cm = max(a) #current min
    for i in range (0, n):
        for j in range (i+2, n+1):
            tm = sum(a[i:j])/(j-i)
            if tm<cm:
                     cm = tm
                     mi = i
    return mi
```

The trick is to use ignore slices with more than 3 elements. 

```python
def solution(a):
    n = len(a)
    mi = 0 #index
    tm = max(a) #temp min
    cm = max(a) #current min
    for i in range (0, n):
        for j in range (i+2, n+1):
            if(j-i>3): continue
            print(a[i:j])
            tm = sum(a[i:j])/(j-i)
            if tm<cm:
                     cm = tm
                     mi = i
    return mi
```

However, for loops are slow. This will bring just 60%.
The next trick is to avoid for loop.

```python
def solution(a):
    n = len(a)
    mi = 0
    cm = max(a)
 
    for idx in range(0, n-1):
        p = (a[idx] + a[idx+1])/2.0
        if p < cm:
            mi = idx
            cm = p
        if idx < n-2:
            t = (a[idx] + a[idx+1] + a[idx+2])/3.0
            if t < cm:
                mi = idx
                cm = t
 
    return mi
```


### CountDiv 

Scores 100%. We first get the first possible value using the // and * trick. If the f is bigger than b, we need to return 0, else we find the distance b-f.

```python
def solution(a, b, k):
    f =  ((a + k -1) // k) * k # first    
    if f > b:
      return 0
 
    return ((b - f) // k) + 1
```


## Sorting

### Triangle 

```python
```


### Distinct 

```python
```


### MaxProductOfThree 

```python
```

### NumberOfDiscIntersections

```python
```

## Stacks and Queues

### Brackets 

Recursive brackets. Scores 50%, O(3**N).

```python
def rc(s):
    if (len(s)%2 ==1 ):
        return 0
    if s=='' or s=='()' or s=='[]' or s=='{}':
        return 1
    for _ in range(2, len(s),2):                
        if rc(s[0:_])==True and rc(s[_:])==True:            
            return 1
    if (s[0]=='{' and s[-1]=='}') or (s[0]=='[' and s[-1]==']') or (s[0]=='(' and s[-1]==')'):
        #print(f"{s[0]}{s[-1]}")
        return rc(s[1:-1])
    return 0

def solution(s):
    return rc(s)
```


Stack based brackets. Scores 100%.
```python
import random
# s = ''.join([random.choice(['{'*100000, '}'*100000]) for p in range(0, 2)])
#s = '{'*100000 + '}'*100000
#s = '([)()]'

def solution(s):
    if len(s)%2==1: return 0
    st = [] # stack
    pu = ['[', '{', '('] # elelment to push on stack
    po = {']':'[', '}':'{', ')':'('}
    
    for e in s:
        if e in pu:
            st.append(e) # push
        if e in po.keys():
            if(len(st)==0):
                return 0
            if (st[-1] == po[e]):
                st.pop()
            else:
                return 0
                
    if len(st) == 0:
        return 1
    else:
        return 0
```



### Nesting 

Same as Brackets task. See [Brackets](#brackets-painless%e2%9c%93).

### StoneWall 

Recursive StoneWall scores: 71, O(N**2)

```python
a = [8, 8, 5, 7, 9, 8, 7, 4, 8]
def rec(a):
    if(len(a)==0 or (len(a)==1 and a[0]==0)):
        return 0
    if(len(a)==1):
        return 1
    stones = 0
    m = min(a) # min
    if m>0:
        a = [e-m for e in a]
        stones+=1
    izr = a.index(0)
    stones = stones + rec(a[:izr]) + rec(a[izr+1:])
    return stones  

def solution(a):
    r = rec(a)
    return r
    
solution(a)
```

### Fish 

Scores 87%, directly updating a and b.

```python
from random import randint
def solution(a,b):
    i = 0 # index
    while(len(a)>i+1):
        if (b[i] > b[i+1]): # opposite direction
            if a[i]> a[i+1]:
                a.pop(i+1)
                b.pop(i+1)
            else:
                a.pop(i)
                b.pop(i)
                i=i-1
        else:
            i=i+1

    return len(a)
    
a,b = [randint(-10000, 10000) for p in range(0, 100000)], [randint(0, 1) for p in range(0, 100000)]  
#a,b = [4, 3, 2, 1, 5], [0, 1, 1, 0, 0]
solution(a,b)
```

Scores 100%. Single stack.

```python
def solution(a, b):
    l = 0 # left
    s = [] # stack
    for i in range(len(a)):
        if b[i]==1: # fish moving upwards
            s.append(a[i]) # to the stack
        else: # eat fish mowing downwards.
            while len(s)>0:
                if s[-1]<a[i]:
                    s.pop() # eat from the stack
                else:
                    break
            else:
                l+=1
    l+=len(s)
    return l
```


## Leader

### Dominator 
### EquiLeader 

## Maximum Slice Problem

### MaxProfit 

Scores 100%. In here we have an array of prices at particular day such as this one `a = [5,4,3,2,3,4,5,6,5,4,5,6,7,1]` and we would like to find the maximum jump `mj` or maximum profit we may get.

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

### MaxSliceSum 

Scores 100%. This problem should search in array to find the slice with max sum. 

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

### MaxDoubleSliceSum 

Another problem from [codility](https://app.codility.com/programmers/lessons/9-maximum_slice_problem/){:rel="nofollow"}

Scores 100%

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

### MinPerimeterRectangle 

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


### CountFactors 
### Peaks 


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



### Flags

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

### CountSemiprimes 

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


### CountNonDivisible 
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

### ChocolatesByNumbers 

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



### CommonPrimeDivisors 

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

### FibFrog 



### Ladder 

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

### MinMaxDivision 
### NailingPlanks 

## Caterpillar method

### AbsDistinct 
### CountDistinctSlices 
### CountTriangles 
### MinAbsSumOfTwo

## Greedy algorithms

### TieRopes 

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

### MaxNonoverlappingSegments 

## Dynamic Programming

### NumberSolitaire 
### MinAbsSum✗


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