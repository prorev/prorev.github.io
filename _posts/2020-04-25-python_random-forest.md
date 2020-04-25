---
id: 12971
title: Python Random Forest example
date: 2020-04-25
author: taimane
layout: post
permalink: /python/random-forest-example
published: true
image: 
categories: 
   - python
tags:
   - random forest
   - scikit-learn
---
In here I took the example from [Tyler White](http://structuringtheunstructured.blogspot.com/2017/11/coloring-with-random-forests.html){:rel="nofollow"} and modified it to use scikit-learn random forest. Also I took some ideas from [Octavio's article](https://octaviomm.com/decisionTreeViz.html){:rel="nofollow"}.

- [Initial data](#initial-data)
- [Random forest](#random-forest)
- [Modified data](#modified-data)
- [Theoretical background](#theoretical-background)
- [Conclusion](#conclusion)


## Initial data

_Examples:_
```
%matplotlib inline

import numpy as np
import pandas as pd
import math

import matplotlib as mpl
import matplotlib.pyplot as plt
import seaborn as sns
from scipy.stats import norm
from sklearn.utils.extmath import cartesian
sns.set()

n = 1000
x = np.random.uniform(0, 1, n)
y = np.random.uniform(0, 1, n)
target = norm.pdf((x - 0.75) *10) + norm.pdf((y - 0.75) *10) \
         + norm.pdf((x - 0.25) / 0.1) + norm.pdf((y - 0.25) / 0.1) \
         + np.array(np.round(np.random.normal(-0.1,0.1, n), 2))

fig, ax = plt.subplots(figsize = (5,5), dpi=200 )
ax.set_aspect(aspect="equal")
ax.scatter(x,y, c=target)
```

_Output:_

![random forest](/wp-content/uploads/2020/04/random-forest.jpg)

## Random forest

## Modified data

## Theoretical background

## Conclusion


