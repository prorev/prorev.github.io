---
id: 12971
title: Binomial distribution
date: 2020-05-03
author: taimane
layout: post
permalink: /statistics/binomial
published: false
image: 
categories: 
   - statistics
tags:
   - binomial
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

The **binomial distribution** with parameters $n$ and $p$ is the discrete probability distribution.

R code for binomial distribution calculus

```r
dbinom(x, size, prob)
pbinom(x, size, prob)
qbinom(p, size, prob)
rbinom(n, size, prob)
```

Plotting the distribution for different parameters.

