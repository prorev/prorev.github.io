---
id: 12971
title: Parametric and nonparametric machine learning models
date: 2020-04-01
author: taimane
description: Explains the parametric and non-parametric machine learning models.
layout: post
permalink: /machine-learning/parametric-vs-nonparametric/
published: true
image: 
categories: 
   - machine-learning
tags:
   - data analysis
   - generative
   - discriminative
   - clustering
   - probability
   - algorithm steps   
   - segmentation 
   - clustering
   - parametric
   - non-parametric
   - cluster
   - class
   - group
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
<style> p > img { width: 300px !important;}</style>


_Table of Contents:_

- [Parametric vs. non-parametric](#parametric-vs-non-parametric)
- [Different parametric models](#different-parametric-models)
- [Different non-parametric models](#different-non-parametric-models)
- [What is histogram](#what-is-histogram)
 

## Parametric vs. non-parametric

To define parametric machine learning models we have two options:

**_Option 1_**: Parametric machine learning models are those using fixed number of parameters.

The opposite would be those models having 0 or infinite number of parameters.

**_Option 2_**: Structure of parametric machine learning models can be specified a priori (in advance), or we can assume the data distribution in advance.

In non-parametric models we cannot assume the data distribution in advance. Data distribution is determined from the data.

![parametric](/wp-content/uploads/2023/parametric.nonparametric.jpg)

**Parametric models** are characterized by a fixed set of parameters that are learned from the data during training.

These models assume a specific functional form for the relationship between the input features and the output variable, and the goal is to estimate the values of the model parameters that best fit the data. 


**Nonparametric models** do not make assumptions about the functional form of the relationship between the input features and the output variable. They use flexible or adaptive models that can adjust to the complexity of the data during training. 

## When to choose parametric over the other nonparametric model

Parametric models are often preferred when the relationship between the input features and the output variable is well understood and can be modeled with a known functional form. Nonparametric models are useful when the relationship is complex or unknown, or when the data has a high degree of noise or variability.

## Different parametric models

Logistic regression, linear regression, neural networks with a fixed number of layers.


## Different non-parametric models

Decision trees, random forests, support vector machines, k-nearest neighbors.

## In practice 

The choice between parametric and nonparametric models depends on the specific problem and the characteristics of the data. It's often a good idea to try both types of models and compare their performance before making a final decision.


Parametric models are often easier to interpret than nonparametric models, but can be sensitive to outliers or the presence of noise in the data, which can affect the accuracy of the model.

Nonparametric models can potentially fit any pattern in the data, which can make them more accurate than parametric models in some cases.

Nonparametric models are often better suited for high-dimensional data or data with complex interactions between features.

*A learning model that summarizes data with a set of parameters of fixed size (independent of the number of training examples) is called a parametric model. No matter how much data you throw at a parametric model, it won't change its mind about how many parameters it needs.*

— [Artificial Intelligence: A Modern Approach](https://www.amazon.com/Artificial-Intelligence-Approach-Stuart-Russell/dp/9332543518/ref=sr_1_6?crid=1L1TPYVZOB9B0&keywords=Artificial+Intelligence%3A+A+Modern+Approach&qid=1679935585&sprefix=artificial+intelligence+a+modern+approach%2Caps%2C187&sr=8-6), page 737
