---
id: 12971
title: Grammar of graphics in Python
date: 2020-05-03
author: taimane
layout: post
permalink: /python/ggplot
published: false
image: 
categories: 
   - python
tags:
   - ggplot
---

## R Datasets


https://github.com/iamaziz/PyDataset/

## Grammar of Graphics in Python

plotnine is an implementation of a grammar of graphics in Python, it is based on ggplot2. The grammar allows users to compose plots by explicitly mapping data to the visual objects that make up the plot.

Plotting with a grammar is powerful, it makes custom (and otherwise complex) plots easy to think about and then create, while the simple plots remain simple.


**plotnine**  is a plotting system for Python based on R's **ggplot2** or **Grammar of Graphics**. It is built for making professional looking, plots quickly with minimal code.

It implements high-level and very expressive API.


```python
from plotnine import *

ggplot(aes(x='date', y='beef'), data=meat) +\
    geom_line() +\
    stat_smooth(colour='blue', span=0.2)
```



