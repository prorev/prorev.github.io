---
id: 100
title: PyTorch | Optimizer
date: 2021-03-09 23:57:32
author: taimane
layout: post
permalink: /pytorch/optimizer
published: true
categories:
   - pytorch
tags:
   - optimizer
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

- [About PyTorch Optimizers](#about-pytorch-optimizers)
- [Instantiate optimizers](#instantiate-optimizers)
- [Creating a custom optimizer](#creating-a-custom-optimizer)

## About PyTorch Optimizers

`torch.optim` is a package implementing various optimization algorithms in PyTorch. 

>If you use PyTorch you can create your own optimizers in Python.

PyTorch has default optimizers. Most famous is `torch.optim.SGD`, followed by `torch.optim.Adam` or 
`torch.optim.AdamW`.

>The original Adam algorithm was proposed in [Adam: A Method for Stochastic Optimization](href="https://arxiv.org/abs/1412.6980). The AdamW variant was proposed in [Decoupled Weight Decay Regularization](https://arxiv.org/abs/1711.05101).

Recently very popular is also `torch.optim.LBFGS` inspired by a matlab function [minFunc](https://www.cs.ubc.ca/~schmidtm/Software/minFunc.html).


It is really easy to create custom PyTorch optimizer. This is just a Python class.
It need to have a constructor `__init__`, it need to have a state dict (`__state_dict__`) also called **the state**.

## Instantiate optimizers

PyTorch has a well-debugged optimizers you can consider.

```python
optimizer = optim.Adam(net.parameters(), lr=0.001)
optimizer = optim.AdamW(net.parameters(), lr=0.001)
optimizer = optim.SGD(net.parameters(), lr=0.001)
```
## Creating a custom optimizer

Here is an example of an [optimizer called Adaam](https://dejanbatanjac.github.io/2019/08/29/Adam-and-Adaam.html) I created some time ago.

Usually, you start from a template class and set the `Optimizer` as the base class:

```python
class Adaam(Optimizer):

    def __init__(self, params, lr=1e-3, betas=(0.9, 0.999), eps=1e-3):
        
        defaults = dict(lr=lr, betas=betas, eps=eps)
        super(Adaam, self).__init__(params, defaults)

    def __setstate__(self, state):
        super(Adaam, self).__setstate__(state)

    def step(self, closure=None):
        
        for group in self.param_groups:
            for p in group['params']:
                if p.grad is None:
                    continue
                grad = p.grad.data
                state = self.state[p] 
                
                if len(state) == 0:
                    state['step'] = 0
                    state['agrad'] = torch.zeros_like(p.data) # grad average
                    state['agrad2'] = torch.zeros_like(p.data) # Hadamar grad average
                    
                state['step'] += 1
                
                agrad, agrad2 = state['agrad'], state['agrad2'] 
                beta1, beta2 = group['betas']
                
                agrad.mul_(beta1).add_(1 - beta1, grad)
                agrad2.mul_(beta2).addcmul_(1 - beta2, grad, grad) 

                bias_1 = 1 - beta1 ** state['step']
                bias_2 = 1 - beta2 ** state['step'] 
                
                agrad = agrad.div(bias_1)
                agrad2 = agrad2.div(bias_2)
                
                denom = agrad2.sqrt().add_(group['eps'])
            
                p.data.addcdiv_(-group['lr'], agrad, denom)

        return loss
```

This optimizer has:

* input parameters (lr, betas, eps)
* the state 
* possible closure to replace the step function
* params
* self.param_groups

The state holds the step number, gradient average and Hadamar grad average in this case.

<!-- Explain params and param groups -->

> You probable won't write your optimizes, but you will use the existing ones.

