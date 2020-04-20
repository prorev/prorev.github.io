---
id: 12971
title: Bayesian analysis in machine learning
date: 2020-01-22
author: taimane
layout: post
permalink: /machine-learning/neural-networks
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
I found the following predicting capabilities:

1. Random forests can do averaging calculation.
2. Linear regression can do linear calculation and extrapolation in linear sense to predict.
3. Neural networks can do non linear calculations and extrapolation in order to predict.

This is why neural networks gain the popularity because they can do both random forests and linear regression models cannot.

Usually they are implemented for unstructured data, such as images, or voice, or words, but they can also provide great results for structured data (aka datatable).


In the various problem settings T, P, and E can refer to completely different things. Some of the most popular tasks T in machine learning are the following:

    classification of an instance to one of the categories based on its features;
    regression – prediction of a numerical target feature based on other features of an instance;
    clustering – identifying partitions of instances based on the features of these instances so that the members within the groups are more similar to each other than those in the other groups;
    anomaly detection – search for instances that are "greatly dissimilar" to the rest of the sample or to some group of instances;
    and so many more.

A good overview is provided in the "Machine Learning basics" chapter of "Deep Learning" (by Ian Goodfellow, Yoshua Bengio, Aaron Courville, 2016).


