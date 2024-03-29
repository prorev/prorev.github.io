---
id: 100
title: PyTorch | Special Max Functions
date: 2021-03-09 23:57:32
author: taimane
layout: post
permalink: /pytorch/special
published: true
categories:
   - pytorch
tags:
   - functions
   - softmax
   - argmax
   - logistic regression
   - softmax with temperature
   - logsoftmax
   - numerical stability
   - max
   - argmax
   - pytorch
   - multinomial logistic regression
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
In here I will examine PyTorch most used max functions and functions derived from max functions. 

_Table of Contents:_
- [argmax vs. max](#argmax-vs-max)
- [softmax vs. softmax with temperature vs. logsoftmax](#softmax-vs-softmax-with-temperature-vs-logsoftmax)
- [logsoftmax vs. crossentropy](#logsoftmax-vs-crossentropy)


## argmax vs. max 

`max` function returns both the values and indices, and `argmax` returns just the indices.

```python
bs = 16
c = 10
inp = torch.rand(bs,c)
print(inp)

val, ind= inp.max(0)
print(val,ind)

ind=torch.argmax(inp)
print(ind)

ind=torch.argmax(inp, dim=-1)
print(ind)
```

Out:
```
tensor([[0.8666, 0.9182, 0.9221, 0.0614, 0.6921, 0.7990, 0.7242, 0.0850, 0.5979,
         0.5338],
        [0.7762, 0.4818, 0.3937, 0.3368, 0.9466, 0.8684, 0.2778, 0.3191, 0.2533,
         0.9955],
        [0.8546, 0.2984, 0.2758, 0.2672, 0.7125, 0.8232, 0.6431, 0.6561, 0.4301,
         0.1402],
        [0.9645, 0.4607, 0.7776, 0.1615, 0.8907, 0.0280, 0.3052, 0.0927, 0.6251,
         0.8051],
        [0.2568, 0.1202, 0.8515, 0.8270, 0.4015, 0.1637, 0.0748, 0.9239, 0.1780,
         0.7411],
        [0.2186, 0.2376, 0.9768, 0.4281, 0.1449, 0.6928, 0.2812, 0.6096, 0.3918,
         0.0351],
        [0.9216, 0.5829, 0.5170, 0.9244, 0.7714, 0.4040, 0.8010, 0.7712, 0.7016,
         0.3892],
        [0.4871, 0.7730, 0.6121, 0.0313, 0.0185, 0.3041, 0.4070, 0.7756, 0.9997,
         0.5943],
        [0.1915, 0.9406, 0.0933, 0.8587, 0.3801, 0.8114, 0.2761, 0.0516, 0.4894,
         0.4485],
        [0.5983, 0.5491, 0.2320, 0.0991, 0.9607, 0.6197, 0.8853, 0.4235, 0.9316,
         0.2995],
        [0.1200, 0.7855, 0.0331, 0.5068, 0.4881, 0.1931, 0.2154, 0.8744, 0.1847,
         0.8747],
        [0.9883, 0.3393, 0.6095, 0.9093, 0.9551, 0.5177, 0.1650, 0.0240, 0.4617,
         0.2242],
        [0.2640, 0.2038, 0.9602, 0.2644, 0.9622, 0.2912, 0.3437, 0.9473, 0.3629,
         0.5049],
        [0.3104, 0.7076, 0.9408, 0.2040, 0.5645, 0.4079, 0.3781, 0.8250, 0.6933,
         0.3200],
        [0.4698, 0.4686, 0.2541, 0.3936, 0.5561, 0.4596, 0.4405, 0.3231, 0.0915,
         0.2346],
        [0.9101, 0.9437, 0.9523, 0.6999, 0.8808, 0.1516, 0.6469, 0.1138, 0.0067,
         0.4576]])
tensor([0.9883, 0.9437, 0.9768, 0.9244, 0.9622, 0.8684, 0.8853, 0.9473, 0.9997,
        0.9955]) tensor([11, 15,  5,  6, 12,  1,  9, 12,  7,  1])
tensor(78)
tensor([2, 9, 0, 0, 7, 2, 3, 8, 1, 4, 9, 0, 4, 2, 4, 2])
```

`argmax()` may also take the [`dim`](https://pytorch.org/docs/stable/generated/torch.argmax.html){:rel="nofollow"} parameter, and if `dim` is `None` then the `input` parameters is flattened and single index is returned.

In the example above when the `dim` is -1 we have 16 outputs. When the `dim=1` this is equivalent.

Often, you may see the last dimension or `dim=-1`, which is in this case equivalent to `dim=1`.

```python
ind= torch.argmax(inp, dim=1)
print(ind)

ind= torch.argmax(inp, dim=-1)
print(ind)

val, ind= inp.max(-1)
print(val,ind)
```
Out:
```
tensor([3, 5, 3, 0, 0, 6, 6, 8, 7, 4, 0, 6, 6, 7, 0, 5])
tensor([3, 5, 3, 0, 0, 6, 6, 8, 7, 4, 0, 6, 6, 7, 0, 5])
tensor([0.8815, 0.8207, 0.9557, 0.8296, 0.9502, 0.9504, 0.9463, 0.9528, 0.9314,
        0.8503, 0.9170, 0.8854, 0.9080, 0.9811, 0.9985, 0.9126]) tensor([3, 5, 3, 0, 0, 6, 6, 8, 7, 4, 0, 6, 6, 7, 0, 5])
```

## softmax vs. softmax with temperature vs. logsoftmax

`softmax` returns probabilities of being max for *all* input values according to the formula:

$\operatorname {softmax}( x_i ) =  {     e^{x_i} \over \sum_{j=1}^k { e^{x_j} } }$

The true maximum will get the maximum probability value. You may use `softmax` as:

* `torch.nn.functional.softmax()` 
* `torch.softmax()` 
* `nn.Softmax()`

These should be equivalent.

**Example**: `softmax` variations

```python
inp = torch.rand(2,3)

m = nn.Softmax(dim=1)
sm = m(inp)
print(sm)

sm = torch.softmax(inp, dim=1) 
print(sm)

m = nn.LogSoftmax(dim=1)
lsm = m(inp)
print(lsm)
```

Out:
```
tensor([[0.2007, 0.3282, 0.4711],
        [0.2266, 0.4048, 0.3686]])
tensor([[0.2007, 0.3282, 0.4711],
        [0.2266, 0.4048, 0.3686]])
tensor([[-1.6059, -1.1142, -0.7527],
        [-1.4844, -0.9044, -0.9980]])
```

One addition to regular `softmax()` function would be the temperature.
Here is how this works:

```python
inp = torch.rand(2,3) #input tensor
t = 0.1 # temperature
out = torch.softmax(inp/t, dim=1)
print(out)

out = torch.softmax(inp, dim=1)
print(out)
```

Out:
```
tensor([[1.6607e-04, 6.5169e-01, 3.4814e-01],
        [8.9896e-01, 2.0861e-02, 8.0183e-02]])
tensor([[0.1840, 0.4208, 0.3952],
        [0.4046, 0.2777, 0.3177]])
```


Few important notes about `softmax()`:

* it is a generalization of logistic function used in logistic regression, with `softmax()` it is called  multinomial logistic regression.
* `softmax()` probabilities for all the inputs should add to 1
* calculating `log_softmax()`is numerically stable comparing the calculating `log()` after `softmax()`

## logsoftmax vs. crossentropy

In PyTorch you can use:

 * class `torch.nn.LogSoftmax(...)` 
 * or function `torch.nn.functional.log_softmax(...)`

> Functions in PyTorch use `_` as a separator and classes use CamelCase.

Part `torch.nn.functional` you replace with `F`
and `torch.nn` with `nn`

```python
import torch.nn.functional as F
import torch.nn as nn
```

You can implement `log_softmax()` yourself:

```python
def log_softmax(x): 
    return x - x.exp().sum(-1).log().unsqueeze(-1)
```

Which is numerically stable. Both PyTorch and Tensorflow use this [log-sum-exp](https://dejanbatanjac.github.io/2019/07/04/softmax-vs-sigmoid.html) trick.

Entropy or Shannon entropy is a measurable item assuming a system (or random variable mathematically with associated probability distribution) that moves that system into chaos.

The idea of the system assumes the system contains particles and that the particles all have some information (energy), so that the entropy is the [weighted sum of all particle information](https://programming-review.com/statistics/questions#what-is-entropy).


> I imagine the entropy as a force that takes the energy from the system so that energy _disappears_, something like heat dissipation force.

When the entropy is maximized heat dissipation is maximized for every particle.

You can say this other way: _Entropy will be maximized if uncertainty of any element is maximized._

For isolated system, the entropy is maximized if we find the place of equilibrium, which is maximum entropy state. The system stays at maximum entropy state, because any change would reduce entropy.

If we recall the analogy, this equilibrium state would be the state with maximum dissipation.

Cross-entropy is a measure building upon two random variables (two systems) calculating the difference between two probability distributions, and it is a [loss function](https://programming-review.com/statistics/questions#what-is-cross-entropy).


In PyTorch, you can just write:

```python
loss = F.cross_entropy(x, target)
```
which is equivalent to:

```python
lp = F.log_softmax(x, dim=-1)
loss = F.nll_loss(lp, target)
```

Note that `nll_loss()` function doesn't contain any logarithmic operation inside. The log operation is inside `log_softmax()` only.


`nll_loss()` will simple do the negative operation and calculate the mean for the full batch.



_Example: CrossEntropy function_


```python
batch_size, n_classes = 10, 5
x = torch.randn(batch_size, n_classes)
print("x:",x)

target = torch.randint(n_classes, size=(batch_size,), dtype=torch.long)
print("target:",target)


def log_softmax(x): 
    return x - x.exp().sum(-1).log().unsqueeze(-1)

def nll_loss(p, target):
    return -p[range(target.shape[0]), target].mean()

pred = log_softmax(x)
print ("pred:", pred)
ohe = torch.zeros(batch_size, n_classes)
ohe[range(ohe.shape[0]), target]=1
print("ohe:",ohe)

pe = pred[range(target.shape[0]), target]
print("pe:",pe)

mean = pred[range(target.shape[0]), target].mean()
print("mean:",mean)

negmean = -mean
print("negmean:", negmean)

loss = nll_loss(pred, target)
print("loss:",loss)
```

Out:

```
    x: tensor([[ 1.5837, -1.3132,  1.5513,  1.4422,  0.8072],
            [ 1.1740,  1.9250,  0.4258, -1.0320, -0.4650],
            [-1.2447, -0.5360, -1.4950,  1.2020,  1.2724],
            [ 0.2300,  0.2587, -0.4463, -0.1397, -0.3617],
            [-0.7983,  0.7742,  0.0035,  0.9963, -0.7926],
            [ 0.7575, -0.8008,  0.7995,  0.0448,  0.6621],
            [-1.7153,  0.7672, -0.6841, -0.4826, -0.8614],
            [ 0.0263,  0.7244,  0.8751, -1.0226, -1.3762],
            [ 0.0192, -0.4368, -0.4010, -1.0660,  0.0364],
            [-0.5120, -1.4871,  0.6758,  1.2975,  0.2879]])
    target: tensor([0, 4, 3, 0, 0, 4, 1, 2, 4, 2])
    pred: tensor([[-1.2094, -4.1063, -1.2418, -1.3509, -1.9859],
            [-1.3601, -0.6091, -2.1083, -3.5661, -2.9991],
            [-3.3233, -2.6146, -3.5736, -0.8766, -0.8063],
            [-1.3302, -1.3015, -2.0065, -1.7000, -1.9220],
            [-2.7128, -1.1403, -1.9109, -0.9181, -2.7070],
            [-1.2955, -2.8538, -1.2535, -2.0081, -1.3909],
            [-3.0705, -0.5881, -2.0394, -1.8379, -2.2167],
            [-1.7823, -1.0841, -0.9334, -2.8311, -3.1847],
            [-1.2936, -1.7496, -1.7138, -2.3788, -1.2764],
            [-2.5641, -3.5393, -1.3764, -0.7546, -1.7643]])
    ohe: tensor([[1., 0., 0., 0., 0.],
            [0., 0., 0., 0., 1.],
            [0., 0., 0., 1., 0.],
            [1., 0., 0., 0., 0.],
            [1., 0., 0., 0., 0.],
            [0., 0., 0., 0., 1.],
            [0., 1., 0., 0., 0.],
            [0., 0., 1., 0., 0.],
            [0., 0., 0., 0., 1.],
            [0., 0., 1., 0., 0.]])
    pe: tensor([-1.2094, -2.9991, -0.8766, -1.3302, -2.7128, -1.3909, -0.5881, -0.9334,
            -1.2764, -1.3764])
    mean: tensor(-1.4693)
    negmean: tensor(1.4693)
    loss: tensor(1.4693)
```

  

