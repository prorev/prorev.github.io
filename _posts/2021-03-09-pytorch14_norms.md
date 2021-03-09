---
id: 100
title: PyTorch | Norms
date: 2021-03-09 23:57:32
author: taimane
layout: post
permalink: /pytorch/norms
published: true
categories:
   - pytorch
tags:
   - norms
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

## Spectral norm

The algorithm of spectral normalization works together with gradient descent.

Spectral normalization is based on Householer algorithm that is iterative and fast, but approximative (not exact).
At the end spectral normalization will make maximum absolute value of the spectrum close to one.

Here is the one step of the algorithm that we repeat with every gradient descent step:

$W$ is matrix of size m×n, where m≠n in general case.

1. Create random vector ${\boldsymbol{u}}$  of size m×1, from normal distribution.

2. Construct vector ${\boldsymbol{v}} \leftarrow \large{ W^{\mathrm{T}} {\boldsymbol{u}} \over {\left\|W^{\mathrm{T}} {\boldsymbol{u}}\text{ }\right\|_{2}}}$ 

3. Construct vector ${\boldsymbol{u}} \leftarrow \large{ W {\boldsymbol{v}} \over {\left\|W {\boldsymbol{v}} \text{ }\right\|_{2}}}$ 

4. Finally $\sigma(W) \approx {\boldsymbol{u}}^{\mathrm{T}} W {\boldsymbol{v}}$

**Note**: this algorithm works well with gradient descent in cases gradient descent makes "small" updates of the $W$.
The [paper](https://arxiv.org/pdf/1802.05957.pdf) explain this in detail.

```python
# Spectral Norm paper https://arxiv.org/pdf/1802.05957.pdf
import torch
import torch.nn as nn
from torch.nn.utils import spectral_norm

torch.set_printoptions(precision=4)

l = nn.Linear(3, 2)

print(l.state_dict())
r1 = l(torch.ones(3))

print("\n***before spectral norm***")
u, s, v = torch.svd(l.weight)
print("\nu:",u, "\ns:",s, "\nv:",v )

snl = spectral_norm(l, n_power_iterations=1)
r2 = l(torch.ones(3))

print("\n***after the norm 1st time***")
u, s, v = torch.svd(l.weight)
print("\nu:",u, "\ns:",s, "\nv:",v )
print("l_u_weight", l.weight_u)
print("l_v_weight", l.weight_v)


r2 = l(torch.ones(3))
print("\n***after the norm 2nd time***")
u, s, v = torch.svd(l.weight)
print("\nu:",u, "\ns:",s, "\nv:",v )
print("l_u_weight", l.weight_u)
print("l_v_weight", l.weight_v)
```

Out:
```
OrderedDict([('weight', tensor([[-0.4318,  0.1616, -0.1790],
        [-0.1238,  0.4865, -0.2384]])), ('bias', tensor([-0.2751, -0.2083]))])

***before spectral norm***

u: tensor([[-0.6401, -0.7683],
        [-0.7683,  0.6401]], grad_fn=<SvdBackward>) 
s: tensor([0.6741, 0.3147], grad_fn=<SvdBackward>) 
v: tensor([[ 0.5511,  0.8024],
        [-0.7079,  0.5948],
        [ 0.4417, -0.0479]], grad_fn=<SvdBackward>)

***after the norm 1st time***

u: tensor([[-0.6401, -0.7683],
        [-0.7683,  0.6401]], grad_fn=<SvdBackward>) 
s: tensor([1.0274, 0.4797], grad_fn=<SvdBackward>) 
v: tensor([[ 0.5511,  0.8024],
        [-0.7079,  0.5948],
        [ 0.4417, -0.0479]], grad_fn=<SvdBackward>)
l_u_weight tensor([-0.7308, -0.6826])
l_v_weight tensor([ 0.7406, -0.5292,  0.4142])

***after the norm 2nd time***

u: tensor([[-0.6401, -0.7683],
        [-0.7683,  0.6401]], grad_fn=<SvdBackward>) 
s: tensor([1.0013, 0.4675], grad_fn=<SvdBackward>) 
v: tensor([[ 0.5511,  0.8024],
        [-0.7079,  0.5948],
        [ 0.4417, -0.0479]], grad_fn=<SvdBackward>)
l_u_weight tensor([-0.6609, -0.7505])
l_v_weight tensor([ 0.5971, -0.6719,  0.4382])
```

We used `torch.svd`to calculate the `u`, `s`, and `v`. These are singular value decomposition results. 
`u` and `v` are left and right singular vectors, and `s` is regular diagonal matrix. Diagonal values of matrix `s` are called singular values.

Before we apply the spectral norm we don't have our singular values that are close to 1 or -1 (0.6741, 0.3147). After the spectral norm this changes:

* first time  : (1.0274, 0.4797)
* second time : (1.0013, 0.4675)

This is what we actually wanted. Note that singular values don't have to be exactly 1.0, since this method is not exact. Note that `u_weight`, and `v_weight` vectors correspond to vectors $\boldsymbol u$ and $\boldsymbol v$. 

The actual [implementation](https://github.com/pytorch/pytorch/blob/bfa94487b968ccb570ef8cd9547029b967e76ed0/torch/nn/utils/spectral_norm.py#L28) of spectral normalization.

**Note**: By limiting the spectral norm of the weight matrices we control the Lipschitz constant of the function we minimize/maximize (objective function).

## Weight norm

It is a two step process:

* initialization step
* reparametrization step

In the initialization step:
* start with random initialization $W$ , $b$ 
* for each unit in the **first layer** compute output before nonlinearity

> $\mathbf t = W\mathbf x+b$

* compute $\mu[t]$ and $\sigma[t]$ of that output 
* rescale original weight and bias

> $W \leftarrow \dfrac{1}{\sigma[t]}\small W$, $b \leftarrow \dfrac{b-\mu[t]}{\sigma[t]}$

After the initialization step you will get:

> $y = \phi(W\mathbf x+b) = \phi( \frac{1}{\sigma[t]}\small W \mathbf x + \frac{b-\mu[t]}{\sigma[t]} ) 
= \phi (\frac{1}{\sigma[t]}(W \mathbf x + b-\mu[t]) ) = \phi (\frac{1}{\sigma[t]}(\mathbf t-\mu[t]) )$

Or in other words we will have the output of standard deviation of 1 and mean of 0.

If you do this for **every layer** you will end to something like batch norm but for fix (deterministic) set of parameters.

In reparametrization step:

* express weights as function of new parameters

> $\mathbf w  = \large\frac{g}{\|{\mathbf v} \|} \small \mathbf v$
    
* minimize the loss w.r.t. $\mathbf v$, $b$, $g$  

The reparametrization phase keeps the scaling we carefully constructed in the initialization phase.

**Example**: Weight norm

```python
import torch
import torch.nn as nn
from torch.nn.utils import weight_norm 
from torch.nn.utils import remove_weight_norm 
m = nn.Linear(2, 4)

r = m(torch.ones(2))
print(r)

m = weight_norm(nn.Linear(2, 4), name='weight')
print(m.weight_g)
print(m.weight_v)

r = m(torch.ones(2))
print(r)
print(m.weight_g)
print(m.weight_v)
```

Out:
```
tensor([-1.0346,  0.4444,  0.8075,  0.6846], grad_fn=<AddBackward0>)
Parameter containing:
tensor([[0.2692],
        [0.2043],
        [0.5554],
        [0.8405]], requires_grad=True)
Parameter containing:
tensor([[-0.0513, -0.2643],
        [-0.1565, -0.1313],
        [ 0.5334, -0.1547],
        [ 0.5548,  0.6313]], requires_grad=True)
tensor([0.2145, 0.0839, 0.6303, 1.3952], grad_fn=<AddBackward0>)
Parameter containing:
tensor([[0.2692],
        [0.2043],
        [0.5554],
        [0.8405]], requires_grad=True)
Parameter containing:
tensor([[-0.0513, -0.2643],
        [-0.1565, -0.1313],
        [ 0.5334, -0.1547],
        [ 0.5548,  0.6313]], requires_grad=True)
```

**Example**: Weight norm

```python
l = nn.Linear(2, 4)
print(l.state_dict())
w1 = weight_norm(l, name="weight")
print(w1.state_dict())
remove_weight_norm(w1)
print(w1.state_dict())
```

Out:
```
OrderedDict([('weight', tensor([[ 0.5569,  0.1186],
        [-0.6304, -0.2217],
        [ 0.1165, -0.3152],
        [ 0.5837,  0.4351]])), ('bias', tensor([-0.0917,  0.4735, -0.4258, -0.3572]))])
OrderedDict([('bias', tensor([-0.0917,  0.4735, -0.4258, -0.3572])), ('weight_g', tensor([[0.5694],
        [0.6682],
        [0.3360],
        [0.7280]])), ('weight_v', tensor([[ 0.5569,  0.1186],
        [-0.6304, -0.2217],
        [ 0.1165, -0.3152],
        [ 0.5837,  0.4351]]))])
OrderedDict([('bias', tensor([-0.0917,  0.4735, -0.4258, -0.3572])), ('weight', tensor([[ 0.5569,  0.1186],
        [-0.6304, -0.2217],
        [ 0.1165, -0.3152],
        [ 0.5837,  0.4351]]))])
```

## Frobenius norm

Frobenius norm is a scalar. To calculate this norm for a matrix you simple square each element, sum them alll, and take the square root of all that. 

<sub>\* This is the same as Euclidian norm of a tensor.</sub>

Let's create the example making a Frobenius norm.

```python
import torch
a = torch.arange(9, dtype= torch.float)
b = a.reshape((3, 3))
print(b)
torch.norm(a)
```

Out:
```
tensor([[0., 1., 2.],
        [3., 4., 5.],
        [6., 7., 8.]])

tensor(14.2829)
```

Here is the equivalent code in python.

```python
s=0
for i in range(0,9):
    s+=(i**2)
print(s,s**.5)
```
Out:
```
204 14.2828568570857
```
<!-- 
## PixelNorm -->
