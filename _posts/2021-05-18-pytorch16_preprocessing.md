---
id: 100
title: PyTorch | Preprocessing images
date: 2021-05-18 23:57:32
author: taimane
layout: post
permalink: /pytorch/preprocessing
published: true
categories:
   - pytorch
tags:
   - tricks
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

_Table of Contents:_

- [Three kind of preprocessing](#three-kind-of-preprocessing)
- [Normalization](#normalization)
- [Standardization](#standardization)
- [Whitening images](#whitening-images)

>_Article not finished..._

## Three kind of preprocessing


These are:

* normalization
* standardization
* and whitening

Normalization is for the mean, standardization is for the variance and whitening is for the correlation.

## Normalization
...

## Standardization
...

## Whitening images

The most interesting whitening algorithm is called Zero Component Analysis or ZCA. 

**Whitening** also called sphering means we will transform the image so that we get the covariance matrix is the identity matrix.

Identity matrix means all one in the diagonal and 0 else. 

Happens to be the white noise has the same covariance matrix as the image after whitening.

Here are more details on the identity matrix.

Whitening is a bit more complicated than the other preprocessing, but we now have all the tools that we need to do it. It involves the following steps:

    Zero-center the data
    Decorrelate the data
    Rescale the data 