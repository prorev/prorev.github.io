---
id: 100
title: PyTorch | Gradients
date: 2021-03-08 23:57:32
author: taimane
description: Explains gradients accumulation, How to create gradients in PyTorch, why do we need to zero the gradients and how to zero the gradients, when to use backward() and when grad() function to create the gradients
layout: post
permalink: /pytorch/gradients
published: true
categories:
   - pytorch
tags:
   - gradients
   - jacobians
   - hessians
   - pytorch requires_grad
   - pytorch gradients
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

- [Gradients, Jacobians and Hessians](#gradients-jacobians-and-hessians)
- [Gradients act as accumulators](#gradients-act-as-accumulators)
- [Gradient with respect to (wrt.) the inputs and gradients wrt. the leaves](#gradient-with-respect-to-wrt-the-inputs-and-gradients-wrt-the-leaves)
- [Formal definition of Gradients, Jacobians and Hessians](#formal-definition-of-gradients-jacobians-and-hessians)
- [Getting the gradients](#getting-the-gradients)

## Gradients, Jacobians and Hessians

We mentioned [how AD works](https://programming-review.com/pytorch/ad) to compute the gradients. Now, it's time for a basic experiment with PyTorch AD. In this section we explain the specifics of gradients in PyTorch and also Jacobian and Hessian matrices as these are important.

## Gradients act as accumulators

One of the very first experiments in PyTorch is to create a tensor that requires gradients. It can be created from a single line.

```python
import torch
w = torch.randn(5, requires_grad = True)
print(w)
```

Out:
```
tensor([-0.0340,  1.1180,  1.1411,  3.1435,  2.1553], requires_grad=True)
```

Else we may use `reqires_grad_()` function on a tensor for the same.

```python
import torch
w = torch.rand(5)
print(w)
w.requires_grad_()
print(w)
```

Out:
```
tensor([0.5695, 0.4895, 0.9994, 0.9366, 0.2727])
tensor([0.5695, 0.4895, 0.9994, 0.9366, 0.2727], requires_grad=True)
```

Next, let's create a *scalar* function `sum()` to calculate the scalar value `s`. A scalar function is a function that returns single value.

Next, let's call `s.backward()`. If we print the gradients for `w` we get tensor of all one.

```python
s = w.sum()
print(s)
s.backward()
print(w.grad)
```

Out:
```
tensor(2.2267, grad_fn=<SumBackward0>)
tensor([1., 1., 1., 1., 1.])
```

But, if we repeat this process, our gradients `w.grad` or `w.grad.data` which is the same will increase by one.

```python
s.backward()
print(w.grad)
s.backward()
print(w.grad)
s.backward()
print(w.grad.data)
```

Out:
```
tensor([2., 2., 2., 2., 2.])
tensor([3., 3., 3., 3., 3.])
tensor([4., 4., 4., 4., 4.])
```

To zero the gradients we will call `w.grad.zero_()` or `w.grad.data.zero_()`.

```python
w.grad.zero_()
print(w.grad)
```

Out:
```
tensor([0., 0., 0., 0., 0.])
```

The previous example shows one important feature how PyTorch handles gradients. They are like accumulators. We fist create a tensor `w` with `requires_grad = False`. Then we activate the gradients with `w.requires_grad_()`. 
After that we create the computational graph with the `w.sum()`. The root of the computational graph will be `s`. The leaves of the computational graph will be the tensor elements.

Even though the sum will never change, the gradients of the tensor `w` from `w.grad` will increase for `1.0` each time we call `s.backward()`. This is because each element of the tensor `w` contributes to the sum.

Lastly when we zero the gradients, we may note all the gradients are set to 0.

```python
print(w.grad)
```

Out:
```
tensor([0., 0., 0., 0., 0.])
```

## Gradient with respect to (wrt.) the inputs and gradients wrt. the leaves

From the last example we may request gradients for `s` w.r.t. `w`. To do that we call [`torch.autograd.grad()`](https://pytorch.org/docs/stable/autograd.html#torch.autograd.grad) function.

[`torch.autograd.backward()`](https://pytorch.org/docs/stable/autograd.html#torch.autograd.backward)   is a special case of `torch.autograd.grad`:


* `backward()`: Computes and returns the sum of gradients of outputs w.r.t. the leaves.
* `grad()`: Computes and returns the sum of gradients of outputs w.r.t. the inputs.

```python
import torch
w = torch.rand(5, requires_grad=True)
s=sum(w)
torch.autograd.grad(s,w)
```
Out:
```
(tensor([1., 1., 1., 1., 1.]),)
```

## Formal definition of Gradients, Jacobians and Hessians

Gradient formula and Hessian formula are defined for $f: R^n \to R $ or in other words for **scalar functions**.

Gradient:

$$\nabla f=\left[\begin{array}{c}\frac{\partial f}{\partial x_{1}} \\ \frac{\partial f}{\partial x_{2}} \\ \vdots \\ \frac{\partial f}{\partial x_{n}}\end{array}\right]$$ 



Hessian:

$$\nabla^{2} f=\left[\begin{array}{cccc}\frac{\partial^{2} f}{\partial x_{1}^{2}} & \frac{\partial^{2} f}{\partial x_{1} \partial x_{2}} & \cdots & \frac{\partial^{2} f}{\partial x_{1} \partial x_{n}} \\ \frac{\partial^{2} f}{\partial x_{2} \partial x_{1}} & \frac{\partial^{2} f}{\partial x_{2}^{2}} & \frac{\partial^{2} f}{\partial x_{2} \partial x_{n}} \\ \vdots & & \ddots & \vdots \\ \frac{\partial^{2} f}{\partial x_{n} \partial x_{1}} & \frac{\partial^{2} f}{\partial x_{n} \partial x_{2}} & \cdots & \frac{\partial^{2} f}{\partial x_{n}^{2}}\end{array}\right]$$

Jacobian formula is defined also for non-scalar functions $f: R^n \to R^m$ :

$$J f=\left[\begin{array}{cccc}\frac{\partial f_{1}}{\partial x_{1}} & \frac{\partial f_{1}}{\partial x_{2}} & \cdots & \frac{\partial f_{1}}{\partial x_{n}} \\ \frac{\partial f_{2}}{\partial x_{1}} & \frac{\partial f_{2}}{\partial x_{2}} & & \frac{\partial f_{2}}{\partial x_{n}} \\ \vdots & & \ddots & \vdots \\ \frac{\partial f_{m}}{\partial x_{1}} & \frac{\partial f_{m}}{\partial x_{2}} & \cdots & \frac{\partial f_{m}}{\partial x_{n}}\end{array}\right]$$

In case $m=1$ Jacobian is gradient.



```python
# jacobian example
def flog(x):
    return x.log()

inputs = torch.rand(2, 2)
torch.autograd.functional.jacobian(flog, inputs)
```
Out:
```
tensor([[[[2.4621, 0.0000],
          [0.0000, 0.0000]],

         [[0.0000, 7.4280],
          [0.0000, 0.0000]]],


        [[[0.0000, 0.0000],
          [1.7573, 0.0000]],

         [[0.0000, 0.0000],
          [0.0000, 2.0443]]]])
```


```python
# hessian example
def rootsum(x):
    return torch.sqrt(x).sum()
inputs = torch.rand(2, 2)
torch.autograd.functional.hessian(rootsum, inputs)
```
Out:
```
tensor([[[[-7.4587, -0.0000],
          [-0.0000, -0.0000]],

         [[-0.0000, -8.0190],
          [-0.0000, -0.0000]]],


        [[[-0.0000, -0.0000],
          [-0.2779, -0.0000]],

         [[-0.0000, -0.0000],
          [-0.0000, -1.0183]]]])
```

## Getting the gradients

*Example*:  Getting Jacobians using [`torch.autograd.grad`](https://pytorch.org/docs/stable/autograd.html#torch.autograd.grad){:rel="nofollow"}

In the next example `torch.autograd.grad`
computes the product of the jacobian with the vector given in `grad_outputs`. In `grad_outputs` you give the vector `[1., 1.]` with this line:

`grad_outputs=y.data.new(y.shape).fill_(1)`

To compute the jacobian, you have to multiply with `[1., 0]` to extract the first column, then with `[0., 1.]` to extract the second column. 

Here is the complete code:

```python
x = np.arange(1,3,1) 
x = torch.from_numpy(x).reshape(len(x),1)
x = x.float())
x.requires_grad = True
w1 = torch.randn((2,2), requires_grad = False)
y=w1@x
print(w1)
jacT = torch.zeros(2,2)
for i in range(2):
    output = torch.zeros(2,1)
    output[i] = 1.
    jacT[:,i:i+1] = torch.autograd.grad(y, x, grad_outputs=output, retain_graph=True)[0]
print(jacT)
```

Out:
```
tensor([[-0.4164,  0.1159],
        [-0.4436,  1.8093]])
tensor([[-0.4164, -0.4436],
        [ 0.1159,  1.8093]])
```
Similar:

```python
x = np.arange(1,3,1)
print(x)
x = torch.from_numpy(x).reshape(len(x),1)
print(x)
x = x.float()
x.requires_grad = True

w1 = torch.randn((2,2), requires_grad = True)
y = w1@x

jac = torch.autograd.grad(y, x, grad_outputs=y.data.new(y.shape).fill_(1), create_graph=True)
jac
```
Out:
```
[1 2]
tensor([[1],
        [2]], dtype=torch.int32)

(tensor([[-0.8852],
         [ 0.7835]], grad_fn=<MmBackward>),)
```