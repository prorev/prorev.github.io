---
id: 12971
title: Gaussian Mixture models
date: 2021-03-11
author: taimane
layout: post
permalink: /machine-learning/gmm
published: false
image: 
categories: 
   - machine-learning
tags:
   - bayesian
---

## Division

There are two types of models:
* generative
* discriminative

The difference between is:

* Generative models model the distribution of individual classes

* Discriminative models learn the boundary (hyperplane) between classes


## Generative modelling task

Generative modelling task is to estimate the probability distribution of the data $p(x)$ by proposing a probability distribution $q(x \mid \theta)$.

This process demands we can estimate the parameters $\theta$ given the observed data.

> $\theta$ may be multiple parameters

Known generative models:

* GMM (Gaussian Mixture Models)
* HMM (Hidden Markov model)
* Bayesian network (Naive Bayes)
* LDA (Latent Dirichlet Allocation)
* Boltzmann machine
* AE (Autoencoder)
* VAE (Variational Autoencoder)
* GAN (Generative Adversarial Networks)
...

## GMM

![gmm](/wp-content/uploads/2021/03/gmm1.png)

We write our probability as a sum of Gaussian's.

$p(x \mid \theta)=\pi_{1} \mathcal{N}\left(x \mid \mu_{1}, \Sigma_{1}\right)+\pi_{2} \mathcal{N}\left(x \mid \mu_{2}, \Sigma_{2}\right)$
$+\pi_{3} \mathcal{N}\left(x \mid \mu_{3}, \Sigma_{3}\right)$

We introduce the **latent variable** $t$ that **causes** $x$.

![gmm](/wp-content/uploads/2021/03/latent1.png)


Now we create the **latent variable model**:

$p(t=c \mid \theta)=\pi_{c}$, for clusters $c \in \{1,2,3\}$

$p(x \mid t=c, \theta)=\mathcal{N}\left(x \mid \mu_{c}, \Sigma_{c}\right)$ 

So what is $p(x \mid \theta)$? It is a sum.

$\begin{aligned} p(x \mid \theta)=\sum_{c=1}^{3} p(x \mid t=c, \theta) p(t=c \mid \theta) \end{aligned}$

In the upper equation we were marginalizing out $t$.






