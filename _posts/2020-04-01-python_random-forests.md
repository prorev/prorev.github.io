---
id: 12971
title: Random Forests (Scikit Learn)
date: 2020-01-22
author: taimane
layout: post
permalink: /machine-learning/random-forests
published: false
image: 
categories: 
   - python
tags:
   - random forests
---
Given that [decision trees](/python_decision-tree) can fit to the training data, they have tendency to overfit. 

To avoid this we use random forests.

_Table of contents:_
- [What are RF](#what-are-rf)
- [What we can do](#what-we-can-do)
- [Fit and validated while trained](#fit-and-validated-while-trained)

## What are RF

WE have some 

## What we can do

## Fit and validated while trained

Random Forests by default use bootstrap sampling for every tree. In scikit-learn this would be by default for both **RandomForestRegressor** and **RandomForestClassifier**.

```
bootstrap: boolean, optional (default=True)
```

The RandomForestClassifier is trained using bootstrap aggregation, where each new tree is fit from a bootstrap sample of the training observations $z_i=(x_i, y_i)$. 


The out-of-bag (OOB) error is the average error for each calculated $z_i$ using predictions from the trees that do not contain $z_i$ in their respective bootstrap sample. 

This allows the RandomForestClassifier to be fit and validated while being trained.




When **RandomForestClassifier** is trained using bootstrap aggregation, where each new tree is fit from a bootstrap sample of the training observations . The out-of-bag (OOB) error is the average error for each calculated using predictions from the trees that do not contain

in their respective bootstrap sample. This allows the RandomForestClassifier to be fit and validated whilst being trained 1.

The example below demonstrates how the OOB error can be measured at the addition of each new tree during training. The resulting plot allows a practitioner to approximate a suitable value of n_estimators at which the error stabilizes.


Whether to use out-of-bag samples to estimate the generalization accuracy


This means 63% of the available data is used to build a three, and remaining 37% of data ise used for testing (also called OOB data or out-of-bag data).

Regression models will be evaluated by mean squared error or mean absolute error. Binary classification models will normally be evaluated by AUC/ROC (area under the ROC curve), and multinomial classification models will be evaluated by some averaging of the misclassification rates across the classes.


