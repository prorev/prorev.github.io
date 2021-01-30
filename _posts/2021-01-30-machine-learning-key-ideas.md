---
id: 12971
title: Key ideas in Machine Learning
date: 2020-11-24
author: taimane
layout: post
permalink: /machine-learning/keys
published: false
image: 
categories: 
   - machine-learning
tags:
   - fastforward
---
- [Key question](#key-question)
- [Parameter Optimization](#parameter-optimization)
- [Probabilistic Inference](#probabilistic-inference)

![functions and classes advanced](/wp-content/uploads/2020/12/fc.png)

## Key question

The key question of machine learning is this:

How to create computer systems that automatically improve through experience?

There are several approaches to this question:

* parameter optimization
* probabilistic inference

In some sense some of these concepts do overlap.


## Parameter Optimization

Machine learning as parameter optimization reflects on the fact that machine learning tasks are formulated as optimization problems. This is why we have famous optimizers. Optimizers reduce the loss (also called cost or error). The function that creates the loss is called the loss function or the objective function.

While optimizers and the objective functions are the opponents, there is some kind of equilibrium we may search.


## Probabilistic Inference

Two primary principles for deriving learning algorithms are:

* **Maximum Likelihood Estimation** (MLE)
* **Maximum a Posteriori Estimation** (MAP) 

In MLE case we try to find the hypothesis that makes the observed training data most probable.

In MAP we try to find the most probable hypothesis, given the training data plus a prior probability distribution over possible hypotheses.

Deriving a learning algorithm based on the MLE or MAP is equal to:

* first defining an objective function in terms of the parameters of the hypotheses and the training data
* second applying an optimization algorithm to solve for the hypothesis parameter values that maximize or minimize this objective.

