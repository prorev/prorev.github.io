---
id: 12971
title: Bagging
date: 2020-01-22
author: taimane
layout: post
permalink: /machine-learning/bagging
published: false
image: 
categories: 
   - machine-learning
tags:
   - bagging
---
<script type="text/x-mathjax-config">
    MathJax.Hub.Config({
      tex2jax: {
        skipTags: ['script', 'noscript', 'style', 'textarea', 'pre'],
        inlineMath: [['$','$']]
      }
    });
</script>
<script src="https://cdn.mathjax.org/mathjax/latest/MathJax.js?config=TeX-AMS-MML_HTMLorMML" type="text/javascript"></script>
Bagging from **b**ootstrap **agg**regat**ing** is based on the statistical method of bootstrapping.


## Statistical bootstrapping method

_Example:_

We are drawing balls from a bag of $N$ balls one at a time to create a $K$ subsamples where $K<N$. 

Each selected ball is put back to the bag so the next selection is made with the same number of balls $N$.

Because we return the balls back, there may be duplicates in the output sample. Let's call the first sample $s_1$. We repeat until we create $M$ bootstrap subsamples $s_1,…,s_M$. 

Why is bootstrapping handy?

Suppose we have little data ($N$ is relatively small) and we cannot reliable predict the mean for the distribution. We use the bootstrapping technique to create many subsets. For each subset we will calculate the mean.

According to the [central limit theorem](https://en.wikipedia.org/wiki/Central_limit_theorem){:rel="nofollow"} (CLT) no matter what the distribution of the original samples was, we can tell the mean of the original data, considering the many means from the subsamples.



## Bagging

Bagging is based on the idea of bootstrapping.

It can be used for both classification and regression. 

Bagging is designed to improve the stability and accuracy of machine learning algorithms by removing variance.

![bagging](/wp-content/uploads/2020/05/bagging.jpg)

A **bagging classifier** is an ensemble meta-estimator that fits base classifiers each on random subsets of the original dataset and then aggregate their individual predictions.

> Meta estimator is an estimator that needs another estimator.

 (either by voting or by averaging) to form a final prediction. Such a meta-estimator can typically be used as a way to reduce the variance of a black-box estimator (e.g., a decision tree), by introducing randomization into its construction procedure and then making an ensemble out of it.

There are few variates of bagging called:


type | description
---------|--------
pasting | random subsets of the dataset are drawn as random subsets of the samples
random subspaces| random subsets of the dataset are drawn as random subsets of the features
random patches | base estimators are built on subsets of both samples and features
|

<!-- bagging | random subsets of the dataset are drown and then aggregate their individual predictions -->

asdf


## An ensemble idea
An ensemble is a set of elements that collectively contribute to a whole. 

[Random forests](/machine-learning/random-forests) are an example of an ensemble.


Inside random forest each tree is trained independently.



Regression models will be evaluated by mean squared error or mean absolute error. Binary classification models will normally be evaluated by AUC/ROC (area under the ROC curve), and multinomial classification models will be evaluated by some averaging of the misclassification rates across the classes.