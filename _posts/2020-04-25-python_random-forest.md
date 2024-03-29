---
id: 12971
title: Python Random Forest example
date: 2020-04-25
author: taimane
layout: post
permalink: /python/random-forest-example
published: false
image: 
categories: 
   - python
tags:
   - random forest
   - scikit-learn
---
_In here I took the example from [Tyler White](http://structuringtheunstructured.blogspot.com/2017/11/coloring-with-random-forests.html){:rel="nofollow"} and modified it to use scikit-learn random forest. Also I took some ideas from [Octavio's article](https://octaviomm.com/decisionTreeViz.html){:rel="nofollow"}._

_Table of Contents:_
- [Initial data](#initial-data)
- [Random forest](#random-forest)
- [Modified data](#modified-data)
- [Theoretical background](#theoretical-background)
- [Conclusion](#conclusion)


## Initial data

_Examples:_
```
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

We will train the **DecisionTreeRegressor** (fit method) and then we will create 50x50 grid where we will **predict** values for eachgrid node.

```python
from sklearn.ensemble import RandomForestRegressor
from sklearn.tree import DecisionTreeRegressor

dtr = DecisionTreeRegressor(random_state=13, max_depth=30, criterion='mse', splitter='best')
dtr = dtr.fit(X, Y)

x = np.linspace(0, 1.0, num=50)
y = np.linspace(0, 1.0, num=50)
xx,yy = np.meshgrid(x, y)
xx,yy

fig, ax = plt.subplots(figsize = (7,7), dpi=150 )

Z = dtr.predict(np.c_[xx.ravel(), yy.ravel()])
Z = Z.reshape(xx.shape)
# ax.contourf(xx, yy, Z)
ax.scatter(xx,yy, c=Z)
```

![random forest](/wp-content/uploads/2020/04/random-forest2.jpg)

## Modified data

Now we need to draw the coutures of the ...

## Theoretical background

## Conclusion


