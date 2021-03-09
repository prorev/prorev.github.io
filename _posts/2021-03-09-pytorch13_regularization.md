---
id: 100
title: PyTorch | Regularization
date: 2021-03-09 23:57:32
author: taimane
layout: post
permalink: /pytorch/regularization
published: false
categories:
   - pytorch
tags:
   - regularization
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

## Label smoothing

Label smoothing is one hot encoding where instead 0 and 1 we use slightly different values say 0.1 instead of 0 and 0.9 instead of 1.

For binary classification problems cross-entropy loss formula:

$$
-\frac{1}{n} \sum_{i=1}^{n}-y^{(i)} \log h\left(x^{(i)}\right)-\left(1-y^{(i)}\right) \cdot \log \left(1-h_{\theta}\left(x^{(i)}\right)\right)
$$

where `n` is the size of the training set.

## PCA whitening

