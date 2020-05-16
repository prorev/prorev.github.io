---
id: 12971
title: Bayesian analysis in machine learning
date: 2020-01-22
author: taimane
layout: post
permalink: /machine-learning/bayesian
published: false
image: 
categories: 
   - machine-learning
tags:
   - bayesian
---
## Probability analysis

## Random Variables 

Random variable is called random, because you can choose it from within the range of the **associated** probability distribution.

In other words for a random variable we know the distribution.

### Trivial and non trivial Random Variables 

Most obvious simple random variable is when you flip a coin. Associate $X=1$ with flipping to a tail, and $X=0$ to a head.

Non trivial random variable is to measure the number of heads when you flip a coin for 5 times.

Another non trivial random variable will be to choose a random number from a range of five (5), where each random number has associated probability distribution $p1, p2, p3, p4, p5$ for the numbers $1, 2, 3, 4, 5$.

We mentioned the **associated** probability distribution for a variable. In the previous case sum of all $p1+p2+p3+p4+p5=1$. 

### Expected value for the Random Variable

This is simple average of the values weighted by their probabilities.

_Example:_

If we have $p1, p2, p3, p4, p5$ correspond to the numbers $1, 2, 3, 4, 5$ and

$p1=0.1;\ p2=0.2;\ p3=0.3;\ p4=0.3;\ p5=0.1$

We can check $p1+p2+p3+p4+p5=1$ which is correct.

We can calculate the expected value as:

$E = 1·p1 + 2·p2 + 3·p3 + 4·p4 + 5·p5$

$E = 3.1$



## Probability distributions

### Normal distribution

The normal distribution is completely determined by two parameters: μ and σ (mean and standard deviation):

$$p(x) = \frac{1}{\sigma \sqrt{ 2 \pi }}  e^{ - \frac 12  { (\frac {x - \mu}{\sigma}})^2}$$

For the very specific case μ=0 and σ=1, where we have standard normal distribution.


We may show multiple variants of normal distribution for different μ (mu) and σ(sigma):

```python
import math

def npdf(x,mu,sigma):
    r = 1/(sigma*math.sqrt(2*math.pi))
    r = r*math.e**(-0.5*((x-mu)/sigma)**2)
    return r
from matplotlib import pyplot as plt
musigma=[[0,1],[-2,1],[0,0.2],[0,0.5]]

plt.figure(figsize=(5,4), dpi=200)    

for mu,sigma in musigma:
    
    
    X = [x/1000 for x in range(-5000,5000,1)]
    Y1 = [npdf(xi,mu,sigma) for xi in X]    
    
    s = plt.plot(X,Y1,label=f"μ={mu}, σ={sigma}")
    
plt.legend(loc="upper right")
plt.title("Normal distribuion variants")
plt.show()
```

![variants of normal distribution](/wp-content/uploads/2020/04/ndv.jpg)


## Bernoulli distribution

A random variable has a Bernoulli distribution if it takes only two values (1 and 0 with probability θ and 1−θ, respectively) and has the following probability distribution function:
p(θ,x)=θx(1−θ)(1−x),x∈{0,1}

## Independent and dependent probabilities

## Bayesian interference

## Bayesian rules

## P-hacking (may be +1)

## Symsons paradox (may be +1)

...


