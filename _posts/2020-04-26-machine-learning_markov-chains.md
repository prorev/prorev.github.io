---
id: 12971
title: Markov chains
date: 2020-04-26
author: taimane
layout: post
permalink: /machine-learning/markov-chains
published: true
image: 
categories: 
   - machine-learning
tags:
   - probability
   - markov chain
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

<!-- ## Entropy
Entropy **Η** (letter eta) in the information theory was first introduced by Shannon in 1948 paper: _A Mathematical Theory of Communication_.

$H(X)=−∑_i P_X ( x_i ) log_b ⁡ P_X ( x_i ) = ∑_i P_X ( x_i ) I_X ( x_i ) = E ⁡ [ I_X ]$

If units of entropy are bits than $b=2$.

Entropy is a measure of the unpredictability of the state, or equivalently, of its average information content.

The entropy will be maximal 1 when there is no causality, or in another words, when all the options are equally possible.


_Example: Tossing a coin with equal probability_

Let we have $P(x_i)=\Large{\frac12}$, equal probability for the head and tail.

$$H(X) = −∑_{i=1}^n P(x_i)log_b ⁡P (x_i) = − ∑_{i=1}^2 {1\over2} log_2 \frac 12 = − ∑_{i=1}^2 \frac 12 -(1)=1 $$


We should recall that the entropy is maximal and equals 1 when we have equal probabilities for all possible options.


_Example: Tossing a coin with non equal probability_

Let we have $P(x_{head})=\Large{\frac13}$, and $P(x_{tail})=\Large{\frac23}$ for the head and tail.

$H(X) = − P(x_{head})log_b ⁡P (x_{head})  − P(x_{tail})log_b ⁡P (x_{tail}) = − {1\over3} log_2 \frac 13− {2\over2} log_2 \frac 23 = 0.9182958340544896$

Note how this time the entropy is less than 1.

It can be proved for $N=2$ maximum entropy is 1:

$H(X) = -P(x_1)log_2 P(x_1) - P(x_2)log_2 P(x_2)$

and for $P(x_1)=p, P(x_2)=1-p$

$S = -p\ log_2 \ p - (1-p) \ log_2(1-p)$

and ${dS \over dp }= 0$

We get:

$log_2 (1-p) = log_2 \ p$

$1-p =p$ 

$p=\frac12$ -->



<!-- _Questions:_

* Can entropy be >1?
* Why do we have log when calculating entropy?
* Where we can apply entropy?
* Entropy and causality? -->


<!-- ### Maximal entropy case

Similarly it can be shown that maximal entropy for the case of $N$, is $log_2 N$. This is the case for $p=\frac 1N$

Example for case of $N=100$ we get 6.643856189774725

```python
import math
math.log(100,2)
# 6.643856189774725
``` -->


## Markov chain model

> A statistical model is a mathematical relationship between one or more random variables and other non-random variables.

A Markov (named after Andrey Markov) chain is a statistical model describing probability to switch from a state to a state as explained in the image.

![markov chains](/wp-content/uploads/2020/04/markov-chains.jpg)

From a state **1** we can go to a state 1 (recursion), state **2** and state **3**. Sum of all probabilities to switch from a state **1** will add to one.

We can show the matrix to represent the probabilities of switching:


$mc =\begin{pmatrix} 0.3 & 0.2 & 0.5 \\ 0 & 0.1 & 0.9 \\ 0.1 & 0.5 & 0.4 \end{pmatrix}$

For Markov chain model each line represents a probability to switch from a state to a state.

The previous states do not affect the probability of the next state, only the action caused to switch to a certain state.







