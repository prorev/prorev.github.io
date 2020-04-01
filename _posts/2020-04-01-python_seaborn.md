---
id: 12971
title: Frequent and notable Seaborn graphs
date: 2020-01-22
author: taimane
layout: post
permalink: /python/seaborn
published: false
image: 
categories: 
   - python
tags:
   - graphs
   - seaborn
   - mathplotlib
   - pyplot
---
Sometimes Mathplotlib is just not the best fit. You can do some things smarter.

_Table of contents:_
- [Seaborn](#seaborn)
- [Types of graphs.](#types-of-graphs)

## Seaborn

...

## Types of graphs.

```python
import seaborn as sns
import numpy as np
x = np.random.normal(size=100)
x = np.random.negative_binomial(6, 1/6, 1000)
sns.distplot(x)
```








