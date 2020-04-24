---
id: 12971
title: Scikit-learn (sklearn) examples
date: 2020-04-01
author: taimane
layout: post
permalink: /python/sklearn
published: true
image: 
categories: 
   - python
tags:
   - examples
   - data analysis
---
_Table of contents:_
- [What can we do with Sckikit-learn?](#what-can-we-do-with-sckikit-learn)
- [Installation](#installation)
- [Dependencies](#dependencies)
- [Mission](#mission)
- [An example](#an-example)

## What can we do with Sckikit-learn?

Scikit-learn (also known as sklearn) is the first association for "Machine Learning in Python". This package helps solving and analyzing different classification, regression, clustering problems. It includes SVM, and interesting subparts like decision trees, random forests, gradient boosting, k-means, KNN and other algorithms. It uses NumPy and SciPy as core dependencies.


## Installation

From the [official website](http://scikit-learn.org){:rel="nofollow"} you will find that the correct way to install is:
```
pip install -U scikit-learn
```

and the correct way to import is:
```
import sklearn;
```

The `scikit-learn` and `sklearn` are synonyms.


## Dependencies

When I executed:

```
pip show scikit-learn
```

I got the following feedback:

```
Name: scikit-learn
Version: 0.22.2.post1
Summary: A set of python modules for machine learning and data mining
Home-page: http://scikit-learn.org
Author: None
Author-email: None
License: new BSD
Location: /usr/local/lib/python3.6/dist-packages
Requires: numpy, scipy, joblib
Required-by: yellowbrick, umap-learn, textgenrnn, sklearn, sklearn-pandas, mlxtend, lucid, lightgbm, librosa, imbalanced-learn, fancyimpute
```

You can also check:

```
sklearn.show_versions()
```

_Output I got:_
```
System:
    python: 3.6.9 (default, Nov  7 2019, 10:44:02)  [GCC 8.3.0]
executable: /usr/bin/python3
   machine: Linux-4.19.104+-x86_64-with-Ubuntu-18.04-bionic

Python dependencies:
       pip: 19.3.1
setuptools: 46.1.3
   sklearn: 0.22.2.post1
     numpy: 1.18.3
     scipy: 1.4.1
    Cython: 0.29.16
    pandas: 1.0.3
matplotlib: 3.2.1
    joblib: 0.14.1

Built with OpenMP: True
```

## Mission

Scikit-learn mission is to provide simple and efficient solutions to learning problems that are accessible to everybody and reusable in various contexts.


## An example

Let's create an example. 








