---
id: 12971
title: Probabilistic Inference on coin flipping example
date: 2020-11-24
author: taimane
layout: post
permalink: /machine-learning/probabilistic
published: true
image: 
categories: 
   - machine-learning
tags:
   - probabilistic
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

- [Key Question](#key-question)
- [Parameter Optimization](#parameter-optimization)
- [Probabilistic Inference](#probabilistic-inference)
  - [Coin flipping example](#coin-flipping-example)
  - [MLE](#mle)
  - [MAP](#map)
- [Conclusion](#conclusion)

![functions and classes advanced](/wp-content/uploads/2021/01/flipping.png)

## Key Question

One of the main questions of machine learning is this:

**How to create computer systems that automatically improve through experience?**

There are several approaches to this question:

* parameter optimization
* probabilistic inference

## Parameter Optimization

One way of answering the question is based on the fact that machine learning tasks are formulated as optimization problems. This is why we have famous optimizers. Optimizers reduce the loss (also called cost or error). The function that creates the loss is called the loss function or the objective function.

While optimizers and the objective functions are the opponents, there is some kind of equilibrium we may search.


## Probabilistic Inference

Probabilistic inference is the task of deriving the probability of one or more random variables taking a specific value or set of values. For example, a Bernoulli (Boolean) random variable may describe the event that John has cancer.

Two primary principles for deriving learning algorithms are:

* **Maximum Likelihood Estimation** (MLE)
* **Maximum a Posteriori Estimation** (MAP) 

In MLE case we try to find the hypothesis that makes the observed training data most probable.

In MAP we try to find the most probable hypothesis, given the training data plus a prior probability distribution over possible hypotheses.

Deriving a learning algorithm based on the MLE or MAP is equal to:

* first defining an objective function in terms of the parameters of the hypotheses and the training data
* second applying an optimization algorithm to solve for the hypothesis parameter values that maximize or minimize this objective.



### Coin flipping example


Coin flipping can be defined with the single variable $x$:
<div>

$P(D \mid \theta) =\left\{\begin{array}{ll}\theta & \text { if } x=1 \\ 1-\theta & \text { if } x=0\end{array}\right.$
</div>

### MLE

For MLE in general, if we observe training data $D$, we can estimate **one** or more probability parameters $\theta$ such that $D$ is most probable.

$\hat{\theta}^{M L E}=\arg \max _{{\theta}} P(D \mid \theta)$


then:
$P(D=\{1,1,0,1,0\} \mid \theta)=\theta \cdot \theta \cdot(1-\theta) \cdot \theta \cdot(1-\theta)=\theta^{3} \cdot(1-\theta)^{2}$

In general case:

$P\left(D=\left\langle\alpha_{1}, \alpha_{0}\right\rangle \mid \theta\right)=\theta^{\alpha_{1}}(1-\theta)^{\alpha_{0}}$

If we like to determine the value of $\theta$ to maximize the data likelihood function $P(D \mid \theta)$:

$\arg \max _{\theta} P(D \mid \theta)$

Or to search where the first derivation is 0.

$\frac{\partial P(D \mid \theta)}{\partial \theta} = 0$

$\frac{\partial}{\partial \theta}\left(\theta^{\alpha_1}(1-\theta)^{\alpha_0}\right)=0$

$\alpha_1 \theta^{\alpha_1-1}(1-\theta)^{\alpha_0}-\alpha_0 \theta^{\alpha_1}(1-\theta)^{\alpha_0-1}=0$

$\theta = \Large \frac{\alpha_1}{\alpha_1+ \alpha_0}$

This means:
<div>

$\hat{\theta}^{M L E}=\arg \max _{\theta} P(D \mid \theta)=\Large \frac{\alpha_{1}}{\alpha_{1}+\alpha_{0}}$
</div>

### MAP

The same problem of coin flipping, using the MAP principe:

$\hat{\theta}^{M A P}=\arg \max _{\theta} P(\theta \mid D)=\arg \max _{\theta} \frac{P(D \mid \theta) P(\theta)}{P(D)}$

Given that $P(D)$ is not dependent on $\theta$:

$\hat{\theta}^{M A P}=\arg \max _{\theta} P(\theta \mid D)=\arg \max _{\theta} P(D \mid \theta) P(\theta)$

Now we need to choose the prior distribution $P(\theta)$.

$P(\theta)=\operatorname{Beta}\left(\beta_{0}, \beta_{1}\right)=\frac{\theta^{\beta_{1}-1}(1-\theta)^{\beta_{0}-1}}{B\left(\beta_{0}, \beta_{1}\right)}$

In which case:
<div>

$\hat{\theta}^{M A P}=\arg \max _{\theta} \theta^{\alpha_{1}+\beta_{1}-1}(1-\theta)^{\alpha_{0}+\beta_{0}-1}$
</div>
Similar as for MLE:

<div>

$\hat{\theta}^{M A P}=\arg \max _{\theta} P(D \mid \theta) P(\theta)=\frac{\left(\alpha_{1}+\beta_{1}-1\right)}{\left(\alpha_{1}+\beta_{1}-1\right)+\left(\alpha_{0}+\beta_{0}-1\right)}$
</div>

## Conclusion

In here we found the solution for coin flipping example in closed form using probabilistic inference technique. For many problems we cannot find the closed form, and this means we will be working with the data that has some estimated [joint probabilities](https://dejanbatanjac.github.io/joint-probability).