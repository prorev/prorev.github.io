---
id: 12971
title: Calculating basic statistics formulas in Python
date: 2020-01-22
author: taimane
layout: post
permalink: /python/statistics
published: true
image: 
categories: 
   - python
tags:
   - correlation
   - medium
   - mean
---
Data science needs some measures to explain the data well. Here are some formulas that make your life easy in Python.


_Table of contents:_
- [Creating the data first](#creating-the-data-first)
- [Finding the mean of the data](#finding-the-mean-of-the-data)
- [Calculating the median](#calculating-the-median)
- [Maximum distance](#maximum-distance)
- [Variance](#variance)
- [Standard deviation](#standard-deviation)
- [Covariance](#covariance)
- [Correlation](#correlation)
- [Appendix](#appendix)
  - [What can we say about correlation?](#what-can-we-say-about-correlation)
  - [Absolute deviation is used not so often](#absolute-deviation-is-used-not-so-often)
  - [Pandas statistic methods](#pandas-statistic-methods)


## Creating the data first

Let's first create the data where we will be testing our data statistics functions. 

```python
from random import randint
a = [randint(-100, 100) for p in range(0, 100)] 
a[0:10],len(a),sorted(a)[0:10]
```

_Output:_
```
([72, -66, -84, 74, 68, 58, 34, 32, 82, -36],
 100,
 [-100, -95, -93, -92, -92, -85, -84, -84, -82, -79])
```

As you may note we created 100 different numbers from -100 to 100.

## Finding the mean of the data

```python
def mean(a):
    return sum(a)/len(a)
```
In Python it is easy to calculate the mean, you first sum all elements and you divide the sum with the number of elements.

_Checking the mean of our list:_
```python
mean(a)
```

_Output:_
```
4.31
```

## Calculating the median

```python
def median(a):
    a=sorted(a)
    n=len(a)
    m=n//2
    if n%2==1:
        return a[m]
    else:
        return (a[m]+a[m+1])/2
```

You should note to compute the median we sorted the list first. This is not absolutely needed. There are algorithms 
to avoid sorting. However, this way is easy to interpret.

The median is the middle element of the sorted array if the number of elements in array is even. Else, it is the average of the elements in the middle.

_Checking the median value:_

```python
median(a)
```
_Output:_
```
7.0
```

> Mean is more sensitive to outliers than the median. This is why we may use median in some cases, or some other techniques to remove the outliers and then to calculate the mean.


## Maximum distance

It is really easy to interpret the distance. Just divide maximum and minimum element of the list.

```python
def disp(a):
    return max(a)-min(a)
disp(a)
```

_Output:_
```
198
```

## Variance

We calculate the variance first by calculating the mean m. Then we create the list of all deviations from the mean, and later we sum all squares of all the deviations.

```python
def variance(a):
    n=len(a)
    m=sum(a)/len(a)
    'deviations from mean'
    d=[e-m for e in a]
    v=0
    for e in d:
        v+=e**2
    return v/n
    
variance(a)
```
_Output:_
```
3411.7139
```

At the end we divide the sum of squares with he number of elements **n**.

It is possible to divide with the number of elements **n-1**. This is called Bessels's correction.

```python
def varianceb(a):
    n=len(a)
    m=sum(a)/len(a)
    'deviations from mean'
    d=[e-m for e in a]
    v=0
    for e in d:
        v+=e**2
    return v/(n-1) # Bessel's correction
    
varianceb(a)
```
_Output:_
```
3446.1756565656565
```

Note that variance is bigger in the case of the Bessel's correction. 

> Python statistics package uses Bessel's correction to calculate variance and stdev.

```python
import statistics 
statistics.variance(a)
statistics.stdev(a)
```

## Standard deviation

```python
def std(a): 
    n=len(a)
    m=sum(a)/len(a)
    'deviations from mean'
    d=[e-m for e in a]
    v=0
    for e in d:
        v+=e**2
    return (v/n)**.5
    
std(a)
```

Output:
```
58.409878445345186
```

We can easily calculate the standard deviation just if we square root the variation. 

In case of the correction:

```python
def stdb(a): # Bessel's correction
    n=len(a)
    m=sum(a)/n
    'deviations from mean'
    d=[e-m for e in a]
    v=0
    for e in d:
        v+=e**2
    return (v/(n-1))**.5
    
stdb(a)
```

Output:
```
58.704136622265864
```


## Covariance

To calculate the covariance we need second array **b**.

```python
b=[randint(-100, 100) for p in range(0, 100)] 

def covariance(a,b):
    la=len(a)
    lb=len(b)
    assert la==lb, 'Non equal dimensions'    
    ma=sum(a)/la
    mb=sum(b)/lb
    
    'deviations from the mean'
    da=[e-ma for e in a]
    db=[e-mb for e in b]
    v=0
    for i in range(la):
        v+=da[i]*db[i]
    return v/(la-1) # Bessel's correction
    
covariance(a,b)
```

In here we used again the random array **b** with exactly 100 elements same as **a**.

_Output:_
```
315.42797979797973
```

The known problem with covariance is just that you cannot interpret the magnitude.

This is why we need correlation, the same measure as covariance but normalized in range **[-1..1]**.

## Correlation

Note we needed the standard devation function and covariance function.

```python
def correlation(a, b):
    std_a = stdb(a)
    std_b = stdb(b)
    
    if std_a > 0 and std_b > 0:
        return covariance(a, b) / std_a / std_b
    else:
        return 0
    
correlation(a, b)
```

And again we must not divide with 0.

## Appendix

### What can we say about correlation?

_Example1:_
```python
a = [1, 3, 5, 7, 9]
b = [2, 4, 6, 8, 10]
correlation(a,b)
```

_Output:_
```
0.9999999999999999
```

We can say two functions are linearly dependent if correlation is close to 1 or -1.

```python
a = [-2, -1, 0, 1, 2]
b = [2, 1, 0, -1, -2]
correlation(a,b)
```

_Output:_
```
-0.9999999999999999
```


If correlation is close to 0, we cannot see the linear dependence.

> Note there may be other kind of dependencies, but we cannot detect them.

```python
a = [-2, -1, 0, 1, 2]
b = [4, 1, 0, 1, 4,]
correlation(a,b)
```

_Output:_
```
0.0
```

### Absolute deviation is used not so often

Just because _standard deviation_ is more in use this doesn't mean _absolute deviation_ isn't my favorite measure to calculate the deviation.

You would implement that like this:
```python
def abs_dev(a):
    n=len(a)
    m=sum(a)/len(a)
    'deviations from mean'
    d=[e-m for e in a]
    v=0
    for e in d:
        v+=abs(e)
    return v/n
    
variance(a)
```

_Output:_
```
2.0
```

It is less heavy to compute compared to standard deviation.

### Pandas statistic methods

```python
df.describe() 
df.mean() 
df.median()
df.max() 
df.min() 
df.count() # count of all elements
df.std() # standard deviation
df.mad() # mean absolute deviation
df.var() # variance
df.cov() # covariance
df.corr() # correlation
```