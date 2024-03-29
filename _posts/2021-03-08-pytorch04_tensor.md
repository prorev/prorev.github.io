---
id: 100
title: PyTorch | Tensor
date: 2021-03-08 23:57:32
author: taimane
layout: post
description: Explains the connection PyTorch tensor has to numpy array, explains how to create PyTorch tensors of specific dtype and shape. Tensor initialization is covered with examples, tensor storage and tensor stride are explained in detail.
permalink: /pytorch/tensor
published: true
categories:
   - pytorch
tags:
   - tensor
   - pytorch
   - pytorch tensor
   - pytorch tensors
   - pytorch bmm
   - create pytorch tensor
   - creating pytorch tensors
   - tensor shape
   - tensor dtype
   - set tensor precision in pytorch
   - tensor initialization
   - Creating uninitialized tensor
   - tensor products
   - numpy to tensor
   - tensor to numpy
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
- [Numpy tensors](#numpy-tensors)
- [Creating PyTorch tensors](#creating-pytorch-tensors)
- [PyTorch `info()` method](#pytorch-info-method)
- [Setting the precision](#setting-the-precision)
- [Tensor and numpy array connection](#tensor-and-numpy-array-connection)
- [Tensor dtype](#tensor-dtype)
- [Tensor shape](#tensor-shape)
- [Tensor device](#tensor-device)
- [Getting values out of the tensor](#getting-values-out-of-the-tensor)
- [Naming the tensor](#naming-the-tensor)
- [Creating uninitialized tensors](#creating-uninitialized-tensors)
- [Tensor initialization](#tensor-initialization)
- [Tensor storage](#tensor-storage)
- [Tensor stride](#tensor-stride)
- [Contiguous tensors](#contiguous-tensors)
- [Tensor control : `reshape()`](#tensor-control--reshape)
- [Tensor control : `clamp_()`](#tensor-control--clamp_)
- [Tensor control : Conditioning](#tensor-control--conditioning)
- [Tensor control : Indexing (slicing)](#tensor-control--indexing-slicing)
- [Tensor to `numpy()` , `tolist()` and `item()` methods](#tensor-to-numpy--tolist-and-item-methods)
- [Tensor `unsqueeze()` and `squeeze()`](#tensor-unsqueeze-and-squeeze)
- [Tensor `fold()` and `unfold()`](#tensor-fold-and-unfold)
- [Modify a tensor](#modify-a-tensor)
- [Getting max index position](#getting-max-index-position)
- [Tensor multiplication](#tensor-multiplication)
- [`torch.matmul()`](#torchmatmul)
- [Matrix to vector multiplication `torch.mv()`](#matrix-to-vector-multiplication-torchmv)
- [Batch matrix-matrix product `torch.bmm()`](#batch-matrix-matrix-product-torchbmm)
- [Dot product `torch.dot()`](#dot-product-torchdot)
- [Hadamar product](#hadamar-product)
- [Einsum `torch.einsum()`](#einsum-torcheinsum)
- [Speed of matrix multiplication](#speed-of-matrix-multiplication)

## Numpy tensors

Let's start with the numpy tensors first, highly related to PyTorch tensors, since PyTorch is based on numpy.

Numpy tensors are n-dimensional schemes of numbers. They have `ndim` property saying the rank, and you can ask for the `info()`. 

Let's create one numpy tensor `nt`.

```python
import numpy as np
nt = np.random.rand(2,3) # numpy tensor
print('rank: ', nt.ndim) # rank
print(np.info(nt)) # info method
```

Out:
```
rank:  2
class:  ndarray
shape:  (2, 3)
strides:  (24, 8)
itemsize:  8
aligned:  True
contiguous:  True
fortran:  False
data pointer: 0x15dc235cfc0
byteorder:  little
byteswap:  False
type: float64
None
```

In short, `info()` method tells:

* the class (ndarray or numpy array)
* the shape (one we defined when creating the random tensor) 
* the stride (something very strange at first but we will digg deeper when explaining PyTorch tensors)
* the itemsize (size of an individual element from the ndarray in Bytes)
* contiguous or not
* pointer to some location in memory where the data is stored (read: storage)
* the data type


## Creating PyTorch tensors

PyTorch tensors are similar to numpy tensors, but as you may guess they have additional stuff.

There are many ways to [create a tensor](https://pytorch.org/docs/stable/tensors.html) in PyTorch (about 100 ways). Here are some ways:

```python
import numpy as np
t = torch.tensor([1,2,3]); # from a list
t = torch.from_numpy(np.random.rand(2,3)); # from numpy random tensor
t = torch.tensor(np.array([1, 2, 3])) # from numpy array
t = torch.rand(1,2,3) # based on uniform distribution [0, 1)
t = torch.randn(1,2,3) # normal distribution
t = torch.ones(1,2,3) # as ones
t = torch.zeros(1,2,3) # as zeros
t = torch.ones_like(t) # ones with the same shape as t
t = torch.zeros_like(t) # zeros with the same shape as t
t = torch.rand_like(t) # random with the same shape as t
t = torch.randn_like(t) # random normal with the same shape as t
t = torch.clone(t) # gradients propagating to the cloned tensor
t = t.copy_(t) # gradients are not propagated
```

> numpy to tensor is one very frequent way to create a tensor, for instance when you use pandas. 

## PyTorch `info()` method

In PyTorch there is no function like `numpy.info()` at the moment. Let's create one `info()` function. Note the list of tensor methods in not complete. You can add more inside.

```python
import torch
def info(tensor, show_storage=False, show_extended_props=False):
    print(f'class:', tensor.__class__)
    print(f'shape:', tensor.shape)
    print(f'stride:', tensor.stride())
    print(f'names:', tensor.names)
    print(f'contiguous:', tensor.is_contiguous())
    print(f'type:', tensor.dtype)
    print(f'ndim:', tensor.ndim)    
    print(f'number of elements:', tensor.numel())
    print(f'data_ptr:', tensor.data_ptr())
    print(f'requires_grad:', tensor.requires_grad)
    print(f'tensor id:', id(tensor))
    print(f'storage id:', id(tensor.storage()))
    print(f'storage offset:', tensor.storage_offset())
    print(f'storage element type:', type(tensor.storage()))    
    print(f'storage element size (Byte):', tensor.element_size())
    print(f'storage elements count:', tensor.storage().size())
    if (show_storage==True):
        print(f'storage itself:\n', tensor.storage())
    if (show_extended_props==True):
        print(f'is_complex:', tensor.is_complex())        
        print(f'is_cuda:', tensor.is_cuda)
        print(f'is_distributed:', tensor.is_distributed())
        print(f'is_floating_point:', tensor.is_floating_point())
        print(f'is_leaf:', tensor.is_leaf)
        print(f'is_mkldnn:', tensor.is_mkldnn)
        print(f'is_pinned:', tensor.is_pinned())
        print(f'is_quantized:', tensor.is_quantized)
        print(f'is_shared:', tensor.is_shared())
        print(f'is_signed:', tensor.is_signed())
        print(f'is_sparse:', tensor.is_sparse)

    
info(t, show_extended_props=True)
```

Out:
```
class: <class 'torch.Tensor'>
shape: torch.Size([1, 2, 3])
stride: (6, 3, 1)
names: (None, None, None)
contiguous: True
type: torch.float32
ndim: 3
number of elements: 6
data_ptr: 2440359430400
requires_grad: False
tensor id: 2440395086808
storage id: 2440395251016
storage offset: 0
storage element type: <class 'torch.FloatStorage'>
storage element size (Byte): 4
storage elements count: 6
is_complex: False
is_cuda: False
is_distributed: False
is_floating_point: True
is_leaf: True
is_mkldnn: False
is_pinned: False
is_quantized: False
is_shared: False
is_signed: True
is_sparse: False
```

You can also create methods to compare two tensors:

```python
def info_compare(tensor, tensor2):
    print(f'is_same_size', tensor.is_same_size(tensor2))
    print(f'is_set_to', tensor.is_set_to(tensor2))
    print(f'isclose', tensor.isclose(tensor2))

info_compare(t, t)   
```

Out:
```
is_same_size True
is_set_to True
isclose tensor([[[True, True, True],
         [True, True, True]]])
```

To work with tensors that require gradients we need **float** tensors.

If you create a tensor from *integer* or *list of integers* `dtype` of this tensor will be `int64`. 

If you create a tensor from *numpy array* it is by default `float64`.

PyTorch methods generate floating point tensors of `dtype` `float32`.


```python
import numpy as np
lst=[1,2,3]
t = torch.tensor(lst); # from a list
print(t.dtype)
nt = np.random.rand(2,3) # numpy tensor
t = torch.from_numpy(nt) # from numpy array
print(t.dtype)
t = torch.rand(1,2,3) # uniform distribution on inside [0, 1)
print(t.dtype)
```
Out:
```
torch.int64
torch.float64
torch.float32
```

To convert a tensor use methods:
* `float()` 
* `double()`
* `long()`
* `int()`
* `short()` etc.

**Example**: Tensor conversion methods

```python
t.float().dtype,t.double().dtype, t.long().dtype, t.int().dtype,t.short().dtype,t.to(dtype=torch.float16).dtype
```
Out:
```
(torch.float32,
 torch.float64,
 torch.int64,
 torch.int32,
 torch.int16,
 torch.float16)
```

## Setting the precision

PyTorch took many good ideas from numpy. Take for instance the `set_printoptions` example.

The default, numpy precision is set to 8 and PyTorch is set to 4. 

Let's set the precision to 8:

```python
t = torch.tensor(0.123456789012345)
print(t)
torch.set_printoptions(precision=8)
print(t)
torch.set_printoptions(precision=18)
print(t)
```
Out:
```
tensor(0.1235)
tensor(0.12345679)
tensor(0.123456791043281555)
```

Ups, after setting the precision to 18-bit we cannot see all the digits from the original number any more. Why is that? 

It is because the default `dtype` in PyTorch for float numbers `float32` and our number needs more precision bits. Let's quickly make the default precision to `float64`.

```python
print(t.dtype) # torch.float32
torch.set_default_dtype(torch.float64)
torch.set_printoptions(precision=18)
t = torch.tensor(0.123456789012344)
print(t.dtype) # torch.float64
print(t) # tensor(0.123456789012344997)
```
Out:
```
torch.float32
torch.float64
tensor(0.123456789012343998)
```
> To set **tensor precision in pytorch** we use `torch.set_default_dtype`.

Still not perfect you may say, but this is because numbers are stored in memory as arrays of zeros and ones. Every `dtype` holds the information about sign of the number (usually one bit), plus the number of bites for mantisa and exponent. By default `torch.float32` uses one bit for the sign, 8 bites for the exponent and 23 for the mantisa, while `torch.float64` uses 1 bit for the sign, 11 for the exponent and 52 for the mantisa.

REF: [Single precision floating point](https://en.wikipedia.org/wiki/Single-precision_floating-point_format){:rel="nofollow"}

REF: [Double precision floating point](https://en.wikipedia.org/wiki/Double-precision_floating-point_format){:rel="nofollow"}


**Example:** Determine the last cipher of precision

```python
import torch
import numpy as np
torch.set_default_dtype(torch.float64)
torch.set_printoptions(precision=32)
t  = torch.tensor(0.123456789012345678901234567890)
t1 = torch.tensor(0.123456789012345679901234567890)
print(t)
print(t==t1)
```
Out:
```
tensor(0.12345678901234567736988623209982)
tensor(True)
```

From the last example we can understand after 17-th decimal place, the ciphers don't have any meaning for [`torch.float64`](https://pytorch.org/docs/stable/tensors.html){:rel="nofollow"} and `torch.float64` is the maximum precision tensor we can have in PyTorch that is non complex. For `torch.float64` format, we have 1 sign bit, 11, exponent bits, and 52 bits for mantissa.

We should pick the number format based on the precision we need. The default PyTorch number format is `torch.float32`.

It is also possible to use low-precision arithmetic simulation packages in PyTorch such as [GPyTorch](https://github.com/Tiiiger/QPyTorch){:rel="nofollow"} or [CPD](https://github.com/drcut/CPD){:rel="nofollow"} projects do.

These packages will allow batch training in very low bits (8 bits or even 4 bits) of precision by hacking the IEEE-FP32 floating arithmetics.


## Tensor and numpy array connection

Tensor and numpy array can share the same storage space if you use `numpy()` method to convert tensor to numpy array.

**Example:** Storage space between tensor and the corresponding numpy array

```python
import torch
tensor = torch.ones(2)
numpy_array = tensor.numpy()
print(tensor)
print(numpy_array)

tensor[0] = 10
print(tensor)
print(numpy_array)
```
Out:
```
tensor([1., 1.])
[1. 1.]
tensor([10.,  1.])
[10.  1.]
```

The opposite is not true, if we create a tensor from numpy array and update the original numpy array this will not reflect on a new tensor:

```python
import torch
import numpy as np
na = np.ones((1,2))
t= torch.tensor(na)
print(t)
na[0]=10
print(t)
```

Out:
```
tensor([[1., 1.]])
tensor([[1., 1.]])
```

## Tensor dtype

When working with tensors we can  create tensors of any `dtype`. Check the [list of `dypte`s](https://pytorch.org/docs/stable/tensors.html){:rel="nofollow"}.

```python
t = torch.ones([2, 4], dtype=torch.float16)
t
---
Out:
tensor([[1., 1., 1., 1.],
        [1., 1., 1., 1.]], dtype=torch.float16)
```

## Tensor shape

Tensor shape is easy to understand. It is a property of tensor `t`. You can write `t.shape` to get the shape. The same result will be if you call a method `t.size()`. The `t.size()` would be the original method and the `t.shape` would be the numpy like notation, that is very convenient.

```python
t.shape, t.size()
---
(torch.Size([2, 4]), torch.Size([2, 4]))
```

## Tensor device

Expected one of:
* cpu 
* cuda 
* mkldnn 
* opengl 
* opencl 
* ideep
* hip 
* msnpu 
* xla 

but usually "cuda" or "cpu". Here is one example.

```python
import torch
a = torch.randn((2,2))
print(a)
a = a.to("cuda")
print(a)
```
Out:
```
tensor([[-0.8702, -0.4320],
        [-2.6620,  0.1218]])
tensor([[-0.8702, -0.4320],
        [-2.6620,  0.1218]], device='cuda:0')
```

There is a shortcut to achieve the above:

```python
import torch
a = torch.randn((2,2), device="cuda")
print(a)
---
tensor([[-1.8816, -0.0317],
        [-1.7380,  0.9884]], device='cuda:0')
```

In other words your option is to specify the device directly in the tensor constructor.

## Getting values out of the tensor

The next example will show that PyTorch tensor `a` residing on CPU shares the same storage as numpy array `na`.

**Example**: Shared storage

```python
import torch
a = torch.ones((1,2))
print(a)
na = a.numpy()
na[0][0]=10
print(na)
print(a)
---
tensor([[1., 1.]])
[[10.  1.]]
tensor([[10.,  1.]])
```

**Example**:  Eliminate effect of shared storage, copy numpy array first

To avoid the effect of shared storage we need to `copy()` the numpy array `na` to a new numpy array `nac`. Numpy `copy()` method creates the new separate storage.

```python
import torch
a = torch.ones((1,2))
print(a)

na = a.numpy()
nac = na.copy()
nac[0][0]=10

print(nac)
print(na)
print(a)
```
Out:
```
tensor([[1., 1.]])
[[10.  1.]]
[[1. 1.]]
tensor([[1., 1.]])
```

Now, just the `nac` numpy array will be altered with the line `nac[0][0]=10`, `na` and `a` will remain as is.

**Example**: CPU tensor `requires_grad=True`

```python
import torch
a = torch.ones((1,2), requires_grad=True)
print(a)

na = a.detach().numpy()
na[0][0]=10

print(na)
print(a)
---
tensor([[1., 1.]], requires_grad=True)
[[10.  1.]]
tensor([[10.,  1.]], requires_grad=True)
```


In here we call:

```python
na = a.numpy() 
```

This would cause:  `RuntimeError: Can't call numpy() on Tensor that requires grad. Use tensor.detach().numpy() instead.`, because tensors that `require_grad=True` are *recorded* by PyTorch AD.

This is why we need to `detach()` them first before converting using `numpy()`.


**Example**: CUDA tensor `requires_grad=False`

```python
a = torch.ones((1,2), device='cuda')
print(a)
na = a.to('cpu').numpy()
na[0][0]=10

print(na)
print(a)
---
tensor([[1., 1.]], device='cuda:0')
[[10.  1.]]
tensor([[1., 1.]], device='cuda:0')
```

In here we just don't convert the CUDA tensor to CPU. There is no effect of share storage in here.


**Example**: CUDA tensor `requires_grad=True`

```python
a = torch.ones((1,2), device='cuda', requires_grad=True)
print(a)
na = a.detach().to('cpu').numpy()
na[0][0]=10

print(na)
print(a)
---
tensor([[1., 1.]], device='cuda:0', requires_grad=True)
[[10.  1.]]
tensor([[1., 1.]], device='cuda:0', requires_grad=True)
```

Without `detach()` method the error `RuntimeError: Can't call numpy() on Tensor that requires grad. Use tensor.detach().numpy() instead.` will be set.


Without `.to('cpu')` method `TypeError: can't convert cuda:0 device type tensor to numpy. Use Tensor.cpu() to copy the tensor to host memory first.` will be set.

**Example**: Single element tensor

On a single element tensor we may use the `item()` method. It works in any case:

```python
x = torch.tensor([3])
x.item() # 3

x = torch.tensor([3.], requires_grad=True)
x.item() # 3.0

x = torch.tensor([3], device='cuda')
x.item() # 3

x = torch.tensor([3.], device='cuda', requires_grad=True)
x.item() # 3.0

x = torch.ones((1,1), device='cuda', requires_grad=True)
x.item() # 1
```

## Naming the tensor

Tensor names are relative new feature. *Naming a tensors* means to set the name for the tensor dimensions.
Let's explain when PyTorch tensors names may be handy.

There are two major image formats in use today:

* channel before the latent dimensions (NCHW) 
* channel dimension at the end (NHWC) 

Where:

* N is the batch size
* C is number of channels
* H is height 
* W is width
* H, and W are also called spatial dimensions

**Note**: there is also D for depth in case of the 3D images. D is also spatial dimension.


NCHW is the optimal format to use for NVIDIA cuDNN and PyTorch uses NCHW format for 2D or NCDHW format for 3D images.

Some other frameworks like TensorFlow can use both formats. In fact TensorFlow default format is NHWC.

In PyTorch to switch from one to another format to another we use `permute` function.

```python
pytorch_default = torch.rand(1, 2, 3, 4, names=('N', 'C', 'H', 'W'))
print(pytorch_default.shape)

tensorflow_default = torch.rand(1, 2, 3, 4, names=('N', 'H', 'W', 'C'))
print(tensorflow_default.shape)

permuted = tensorflow_default.rename(None).permute(0, 3, 1, 2)
print(permuted.shape)
```
Out:
```
torch.Size([1, 2, 3, 4])
torch.Size([1, 2, 3, 4])
torch.Size([1, 4, 2, 3])
```

## Creating uninitialized tensors

[`torch.Tensor()`](https://pytorch.org/docs/stable/tensors.html?highlight=torch%20tensor#torch.Tensor){:rel="nofollow"} is a favorite method when creating uninitialized parameters (for instance inside [`nn.Linear`](https://pytorch.org/docs/stable/_modules/torch/nn/modules/linear.html#Linear){:rel="nofollow"}, [`nn._ConvNd`](https://pytorch.org/docs/stable/_modules/torch/nn/modules/conv.html){:rel="nofollow"}.

Why? Because it is very fast. It is even a bit faster than [`torch.empty()`](https://pytorch.org/docs/stable/generated/torch.empty.html){:rel="nofollow"}.

```python
import torch
torch.set_default_dtype(torch.float32) # default

%timeit torch.empty(1000,1000)
%timeit torch.Tensor(1000,1000)
%timeit torch.ones(1000,1000)
%timeit torch.tensor([[1]*1000]*1000)
```

Out:

```
68.4 µs ± 789 ns per loop (mean ± std. dev. of 7 runs, 10000 loops each)
67.9 µs ± 349 ns per loop (mean ± std. dev. of 7 runs, 10000 loops each)
1.26 ms ± 8.61 µs per loop (mean ± std. dev. of 7 runs, 1000 loops each)
36.1 ms ± 610 µs per loop (mean ± std. dev. of 7 runs, 10 loops each)
```

`torch.Tensor()` and `and torch.empty()` are similar and return a tensor filled with uninitialized data.

## Tensor initialization

It is common case (for instance inside [`nn.Linear`](https://pytorch.org/docs/stable/_modules/torch/nn/modules/linear.html#Linear){:rel="nofollow"}, [`nn._ConvNd`](https://pytorch.org/docs/stable/_modules/torch/nn/modules/conv.html){:rel="nofollow"} that we use `reset_parameters()` method for model parameter initialization.

This method will be called right after the `__init__()` method.

In here I will present two different initializations for the `nn.Linear` model consisting of two parameters:

* weight
* bias

Implementation from [`nn.Linear`](https://github.com/pytorch/pytorch/blob/5dd288eb066bc178a89447453c7fba961a3e0174/torch/nn/modules/linear.py#L85){:rel="nofollow"} in PyTorch:

```python
def reset_parameters(self) -> None:
    init.kaiming_uniform_(self.weight, a=math.sqrt(3))
    if self.bias is not None:
        fan_in, _ = init._calculate_fan_in_and_fan_out(self.weight)
        bound = 1 / math.sqrt(fan_in)
        init.uniform_(self.bias, -bound, bound)
```

Older way to initialize `nn.Linear`:

```python
def reset_parameters(self) -> None:
    stdv = 1. / math.sqrt(self.weight.size(1))
    self.weight.data.uniform_(-stdv, stdv)
    if self.bias is not None:
        self.bias.data.uniform_(-stdv, stdv)
```

## Tensor storage

Tensor storage is memory buffer associated with any tensor. This is the location of the tensor data.

Let's create few tensors and check if they share the storage.


```python
import torch

def samestorage(x,y):
    if x.storage().data_ptr()==y.storage().data_ptr():
        print("same storage")
    else:
        print("different storage")
  
a = torch.ones((1,2), requires_grad=True)
print(a)
b = a
c = a.data
d = a.detach()
e = a.data.clone()
f = a.clone()
g = a.detach().clone()

print("a:",end='');samestorage(a,a)
print("b:",end='');samestorage(a,b)
print("c:",end='');samestorage(a,c)
print("d:",end='');samestorage(a,d)
print("e:",end='');samestorage(a,e)
print("f:",end='');samestorage(a,f)
print("g:",end='');samestorage(a,g)
```

Out:
```
tensor([[1., 1.]], requires_grad=True)
a:same storage
b:same storage
c:same storage
d:same storage
e:different storage
f:different storage
g:different storage
```

Every time we clone the tensor we end on a different storage, else the storage is the same.

**Example**: Storage examination

In the next example `data_ptr()` returns the address of the element we need. The method `p()` will append to default dict `d`.

```python
from collections import defaultdict
d = defaultdict(list)
s = defaultdict(int)

def p(t):
    '''
    Tensor storage examination
    '''
    d['id'].append(id(t))
    d['data_ptr'].append(t.data_ptr())
    d['storage_id'].append(id(t.storage()))
    d['storage_data_ptr'].append(t.storage().data_ptr())
    d['storage_offset'].append(t.storage_offset())

for i in range(100):
    t1 = torch.randn((2, 2)) # 1st
    p(t1)
    t2 = t1.clone() # 2nd
    p(t2)
    t3 = torch.empty(2,2) #3 rd
    t3.copy_(t1); 
    p(t3)
    t4 = t1[1,0] # 4th
    p(t4)
    t5 = t1 # 5th
    p(t5)
    t6 = t1[:,1] # 6th
    p(t6)

    for k in d:
        s[k+'_sum'] += len(set(d[k]))
    d.clear()
s
```

Out:
```
defaultdict(int,
            {'id_sum': 500,
             'data_ptr_sum': 500,
             'storage_id_sum': 402,
             'storage_data_ptr_sum': 300,
             'storage_offset_sum': 300})
```

This experiment shows we cannot actually relay on fact that two tensors share the same storage, even though they have the same id. Note `storage_id_sum` is not always 400 in our example. Sometimes it will be 400, and sometimes > 400.

Note: The `id` Python function returns the same values if the variables are assigned one from anther like in the next example:

```python
a=5
print(id(a))
b=a
print(id(b))
```
Out:
```
140735180743184
140735180743184
```

**Example**: Empty tensors do have associated storage

```python
t = torch.Tensor(2)
print(t.storage())
e = torch.empty(2)
print(e.storage())
---
 nan
 4.4765625
[torch.FloatStorage of size 2]
 0.0
 0.0
[torch.FloatStorage of size 2]
```

## Tensor stride

A stride is a tuple of integer numbers, associated to a tensor. These numbers are navigation instructions for a particular dimension, or how to get next axis element from the storage. 

Note the last element of a tuple is 1, so the elements in the last axis are stored in sequence. The first element of the stride you can get if you multiply dimensions other then first.

**Example**: stride tuples

```python
import torch
for i in range (1,4):
    for j in range (1,4):
        for k in range (1,4):
            x = torch.randn(i,j,k)
            print(i,j,k, x.stride())
---
1 1 1 (1, 1, 1)
1 1 2 (2, 2, 1)
1 1 3 (3, 3, 1)
1 2 1 (2, 1, 1)
1 2 2 (4, 2, 1)
1 2 3 (6, 3, 1)
1 3 1 (3, 1, 1)
1 3 2 (6, 2, 1)
1 3 3 (9, 3, 1)
2 1 1 (1, 1, 1)
2 1 2 (2, 2, 1)
2 1 3 (3, 3, 1)
2 2 1 (2, 1, 1)
2 2 2 (4, 2, 1)
2 2 3 (6, 3, 1)
2 3 1 (3, 1, 1)
2 3 2 (6, 2, 1)
2 3 3 (9, 3, 1)
3 1 1 (1, 1, 1)
3 1 2 (2, 2, 1)
3 1 3 (3, 3, 1)
3 2 1 (2, 1, 1)
3 2 2 (4, 2, 1)
3 2 3 (6, 3, 1)
3 3 1 (3, 1, 1)
3 3 2 (6, 2, 1)
3 3 3 (9, 3, 1)
```

**Example**: `expand()` alters tensor tensor shape and stride

```python
def p(t):
    '''print tensor shape, stride and value'''
    print("\n***")
    print(f'shape: {t.shape}')
    print(f'stride: {t.stride()}')
    
t = torch.randn((2, 1)) 
p(t)

t21 = t.expand(2,1) # do nothing
p(t21)

t25 = t.expand(-1,5) # first dim as is, and second = 5
p(t25)

t23 = t.expand(-1,3) # first dim as is, and second = 3
p(t23)

t123 = t.expand(1,-1,3) # make shape 1,2,3
p(t123)
```
Out:
```
***
shape: torch.Size([2, 1])
stride: (1, 1)

***
shape: torch.Size([2, 1])
stride: (1, 1)

***
shape: torch.Size([2, 5])
stride: (1, 0)

***
shape: torch.Size([2, 3])
stride: (1, 0)

***
shape: torch.Size([1, 2, 3])
stride: (2, 1, 0)
```

The last example `t.expand(1,-1,3)` means add dimension 1 at front, then keep what ever it was first dimension before, and then add 3 at the end.

## Contiguous tensors

The `is_contiguous()` function can tell us if the tensor is contiguous or not. A contiguous tensor is tensor stored in an unbroken block of memory.

When you create a tensors it is contiguous by default. If you transpose the tensor it will become non contiguous.

```python
def contiguous(y):
    if True==y.is_contiguous():
        print("contiguous")
    else:
        print("non contiguous")
t=torch.randn(2,3) # contigous         
contiguous(t.T)
```
Out:
```
non contiguous
```

**Example**: `is_contiguous()`

We know that `transpose()` function can flip two axes and create non contiguous tensors. We will now show if we flip two axes with the stride 1 the contiguous state will not alter, because the stride will remain the same.

```python
import torch
x = torch.randn(3,2,1)
y = x.transpose(2, 1) # flips two axes
print("\ntranspose 2<->1")
contiguous(y)
print(x.stride())
print(y.stride())
```
Out:
```
transpose 2<->1
contiguous
(2, 1, 1)
(2, 1, 1)
```
Similar:

```python
import torch
x = torch.randn(3,2,1)
y = x.transpose(0, 1) # flips two axes
print("\ntranspose 0<->1")
contiguous(y)
print(x.stride())
print(y.stride())
---
Out:

transpose 0<->1
non contiguous
(2, 1, 1)
(1, 2, 1)
```

Further it is even possible to alter the stride and still have the contiguous tensors.

```python
import torch
x = torch.randn(3,2,1)
y = x.view(6, 1) 
print("\nview() method")
print(x.stride())
print(y.stride())
contiguous(y)
samestorage(x,y)
```
Out:
```
view() method
(2, 1, 1)
(1, 1)
contiguous
same storage
```

**Example**: What happens with the storage and `is_contiguous()` state for different methods

```python
import torch

def samestorage(x,y):
    if x.storage().data_ptr()==y.storage().data_ptr():
        print("same storage")
    else:
        print("different storage")
        
def contiguous(y):
    if True==y.is_contiguous():
        print("contiguous")
    else:
        print("non contiguous")        
        
x = torch.randn(3,2)
y = x.transpose(0, 1) # flips two axes
print("\ntranspose")
contiguous(y)
samestorage(x,y)

print("\nnarrow")
x = torch.randn(3,2)
y = x.narrow(0, 1, 2) #dim, start, len  
contiguous(y)
samestorage(x,y)

print("\npermute")
x = torch.randn(3,2)
y = x.permute(1, 0) # sets the axis order
contiguous(y)
samestorage(x,y)

print("\nview")
x = torch.randn(3,2)
y=x.view(2,3)
contiguous(y)
samestorage(x,y)

print("\nreshape")
x = torch.randn(3,2)
y = x.reshape(6,1)
contiguous(y)
samestorage(x,y)

print("\nflip")
x = torch.randn(3,2)
y = x.flip(0)
contiguous(y)
samestorage(x,y)

print("\nexpand")
x = torch.randn(3,2)
y = x.expand(2,-1,-1)
contiguous(y)
samestorage(x,y) 
```
Out:
```
transpose
non contiguous
same storage

narrow
contiguous
same storage

permute
non contiguous
same storage

view
contiguous
same storage

reshape
contiguous
same storage

flip
contiguous
different storage

expand
non contiguous
same storage
```

| function | contiguous | storage |
|-------|--------|---------|
| transpose | non contiguous | same storage |
| narrow |  contiguous | same storage |
| permute | non contiguous | same storage |
| view | contiguous | same storage |
| reshape | contiguous | same storage |
| flip |  contiguous | different storage |
| expand | non contiguous | same storage |

Method `expand()` uses the same storage but alters the stride to achieve the expansion effect. This way the tensor will become non contiguous.

## Tensor control : `reshape()`

[torch.reshape()](https://pytorch.org/docs/stable/generated/torch.reshape.html){:rel="nofollow"} is made to dupe the [numpy reshape](https://numpy.org/doc/stable/reference/generated/numpy.reshape.html){:rel="nofollow"} method.

At first there were just [view()](https://pytorch.org/docs/stable/tensor_view.html){:rel="nofollow"} and [torch.resize_()](https://pytorch.org/docs/stable/tensors.html#torch.Tensor.resize_){:rel="nofollow"}, but `reshape()` took over and even it was added directly to the `torch` package. You may find it with `dir(torch)`.

```python
import torch
x=torch.arange(24)
print(x, x.shape)
x_view = x.view(1,2,3,4) # works on is_contiguous() tensor
print(x_view.shape)
x_reshaped = x.reshape(1,2,3,4) # works on any tensor
print(x_reshaped.shape)
x_reshaped2 = torch.reshape(x_reshaped, (-1,)) # part of torch package, while view() and resize_() are not
print(x_reshaped2.shape)
```
Out:
```
tensor([ 0,  1,  2,  3,  4,  5,  6,  7,  8,  9, 10, 11, 12, 13, 14, 15, 16, 17,
        18, 19, 20, 21, 22, 23]) torch.Size([24])
torch.Size([1, 2, 3, 4])
torch.Size([1, 2, 3, 4])
torch.Size([24])
```

The same method can replace [squeeze()](https://pytorch.org/docs/stable/generated/torch.squeeze.html){:rel="nofollow"} and [unsqueeze()](https://pytorch.org/docs/stable/generated/torch.unsqueeze.html){:rel="nofollow"}.

```python
x = torch.tensor([1, 2, 3, 4])
print(x.shape)
x1 = torch.unsqueeze(x, 0)
print(x1.shape)
x2 = torch.unsqueeze(x1, 1)
print(x2.shape)
x3=x.reshape(1,1,4)
print(x3.shape)
x4=x.reshape(4)
print(x4.shape)
x5=x3.squeeze()
print(x5.shape)
```
Out:
```
torch.Size([4])
torch.Size([1, 4])
torch.Size([1, 1, 4])
torch.Size([1, 1, 4])
torch.Size([4])
torch.Size([4])
```

`reshape()` is possible the best method to reshape a tensor. 

You may also use `view()` method, but `reshape()` is safer because it will check if tensor is contiguous. `view()` doesn't check for `t.is_contiguous()==True`. By "definition" only a tensors that is contiguous may be reshaped.

**Example**: `reshape()`

```python
import torch
def p(t):
    '''print tensor shape, stride and value'''
    print("\n***")
    print(f'shape: {t.shape}')
    print(f'stride: {t.stride()}')    
    
t = torch.randn((4,1)) 
p(t)

t41 = t.reshape(4,1) # do nothing
p(t41)

t22 = t.reshape(2,2) # reshape 2,2
p(t22)

t14 = t.reshape(1,4) # reshape 1,4
p(t14)

t141 = t.reshape(1, 4, -1) # reshape 1,4,1
p(t141)
```
Out:
```
***
shape: torch.Size([4, 1])
stride: (1, 1)

***
shape: torch.Size([4, 1])
stride: (1, 1)

***
shape: torch.Size([2, 2])
stride: (2, 1)

***
shape: torch.Size([1, 4])
stride: (4, 1)

***
shape: torch.Size([1, 4, 1])
stride: (4, 1, 1)
```

As you may noticed, we use `-1` often. `-1` has a special meaning and in the end it means use all the remaining dimension.

**Example**: None

```python
t = torch.randn(2,3)
print(t[None,...].shape)
print(t.unsqueeze(0).shape)
print(t.reshape(1,2,3).shape)
```
Out:
```
torch.Size([1, 2, 3])
torch.Size([1, 2, 3])
torch.Size([1, 2, 3])
```


## Tensor control : `clamp_()`

Often we would like to keep a tensor under control not to have values outside of a certain range. This is what `clamp_` method uses for.

```python
t = torch.randn(4)
print(t)
t.clamp_(-0.5, 0.5)
print(t)
```
Out:
```
tensor([-0.6293, -0.4081, -0.7415, -0.6843])
tensor([-0.5000, -0.4081, -0.5000, -0.5000])
```

We just used PyTorch function with underscore. This is called **inplace** operation. This operation changes the tensor directly without creating a copy.

PyTorch seams to always mark inplace operations with postfix `_` in case we operations have the `=` equal sign.
Here are some commone inplace operations are `add_()`, `sub_()`, `div_()`, `-=`, `*=`, ...

Note: Don't use inplace operations on leaf nodes, since this will "unleaf" leaf nodes.

## Tensor control : Conditioning

We will assign `t` tensor with the new value based on the condition.

```python
import torch
t=torch.rand(5)
print(t)
t=t[t<0.5]
print(t)
```
Out:
```
tensor([0.5794, 0.9256, 0.4042, 0.5663, 0.4643])
tensor([0.4042, 0.4643])
```

## Tensor control : Indexing (slicing)

Indexing tensor `t` means we set start and end index and the step like `t[start:end:step]`.
In the next example we will start with the index 0 till 20 with the step size of 4. This means we will take every 4th element inside the index area (0, 20] including the index 0 (or start index), but we will not include the index 20.

If we omit the step the default step size is 1. We may also omit start and the end index, in which case start end the end index will be first and the last possible index.

We may use negative indexes just like in numpy.

```python
t=torch.rand(30)
print(t)
t=t[0:20:4] 
t
```
Out:
```
tensor([0.3896, 0.1521, 0.4184, 0.1894, 0.9198, 0.3378, 0.3917, 0.4775, 0.1642,
        1.0000, 0.9310, 0.8108, 0.9631, 0.1236, 0.7079, 0.4344, 0.7823, 0.7226,
        0.5748, 0.5342, 0.4299, 0.0830, 0.7230, 0.1668, 0.3697, 0.7978, 0.4965,
        0.4051, 0.8137, 0.7532])

tensor([0.3896, 0.9198, 0.1642, 0.9631, 0.7823])
```

## Tensor to `numpy()` , `tolist()` and `item()` methods

You can convert tensor to numpy array or directly to list. 
If you need just a single element you may use the `item()` method.


```python
t=torch.rand(13)
item = t[0].item()
print(item) # 0.6294171214103699
```

If the tensor `requires_grad=True` then you need to detach it first before using `numpy()` method. 

```python
import torch
a = torch.randn((2, 2), dtype=torch.float32, requires_grad=True)
print(a.tolist())
print(a.detach().numpy())
```
Out:
```
[[-0.7154064178466797, -1.5313661098480225], [0.4951033592224121, 1.6146044731140137]]
[[-0.7154064  -1.5313661 ]
 [ 0.49510336  1.6146045 ]]
```

## Tensor `unsqueeze()` and `squeeze()`

These methods are used to add or remove dimension of size 1.

```python
import torch

t = torch.tensor(1, dtype=torch.float32, requires_grad=True)
print(t, t.shape)

t = torch.unsqueeze(t,0)
print(t, t.shape)

t = torch.unsqueeze(t,0)
print(t, t.shape)

t = torch.squeeze(t,0)
print(t, t.shape)

t = torch.squeeze(t,0)
print(t, t.shape)
```
Out:
```
tensor(1., requires_grad=True) torch.Size([])
tensor([1.], grad_fn=<UnsqueezeBackward0>) torch.Size([1])
tensor([[1.]], grad_fn=<UnsqueezeBackward0>) torch.Size([1, 1])
tensor([1.], grad_fn=<SqueezeBackward1>) torch.Size([1])
tensor(1., grad_fn=<SqueezeBackward1>) torch.Size([])
```

## Tensor `fold()` and `unfold()`

To fold and unfold you could use:

* `F.fold()`
* `F.unfold()` 
* `nn.Fold()` 
* `nn.Unfold()` 
* `unfold()` method from tensor that works on a single dimension.

**Example**: `F.fold()`  and `F.unfold()` it back

For the next example we need the input of size `(bs, c*П(ks), B)` (batchs size, channels multiplied by product of kernel size, and the total number of blocks).

```python
import torch
import torch.nn.functional as F
bs = 1
c=3 # channels
ks=(2,2) # kernel size
B = 12 # blocks
input = torch.randn(bs, c * ks[0] * ks[1], B)
print(input.shape)

fold = F.fold(input, output_size=(4, 5), kernel_size=ks)
print(fold.shape)
```
Out:
```
torch.Size([1, 12, 12])
torch.Size([1, 3, 4, 5])
```

Now we will revert it back with `unfold()`. This time we need stride `(1,1)` and that kernel size is `(2,2)`.

```python
bs=1
c=3
input = torch.randn(bs,c,4,5)
ks=(2,2)
st=(1,1)
unfold = F.unfold(input, kernel_size=ks, stride=st)
print(unfold.shape)
```
Out:
```
torch.Size([1, 12, 12])
```

Note that the input image for `F.unfold()` was: `(BS, C, H, W)`.

**Example**: `unfold()` the image to a complete list of patches

This code works in batches and with images that have channels. In here: `c=3`.

PyTorch tensors have the `unfold()` method, but they don't have the fold method. Check with `dir(tensor)`. Still you can use `fold()` and `unfold()` from `torch.nn.functional`.

You can effectively do *fold* with `reshape()` and `permute()`.

Instead of `permute()` you may use `transpose()`.

```python
import torch
bs = 10 # batch size
c = 3 # number of channels
kh, kw = 2, 2 # kernel size
sh, sw = 2, 2 # step size = stride

x = torch.randn(bs, c, 256, 256) # input
print('x', x.shape) # 10, 3, 256, 256

p = x.unfold(2, kh, sh).unfold(3, kw, sw) # patches
print('p', p.shape) # 10, 3, 128, 128, 2, 2]

# filter patches p

pf = p.permute(0, 1, 2, 4, 3, 5) # pf = p.transpose(3,4)
pf = pf.reshape(bs, c, p.shape[2] * p.shape[4], p.shape[3] * p.shape[5]) # final
print('pf', pf.shape)
print((pf == x).all())
```
Out:
```
x torch.Size([10, 3, 256, 256])
p torch.Size([10, 3, 128, 128, 2, 2])
pf torch.Size([10, 3, 256, 256])
tensor(True)
```

This method will not work if the kernel size is different than the step size. The next two examples use the different step size or stride.

**Example** : One dimensional unfolding

This time we use tensor unfold that requires as input the:
* the dimension
* size
* step

```python
x = torch.arange(1, 9).float()
print(x)
# dimension, size, step
print(x.unfold(0, 2, 1))
print(x.unfold(0, 3, 2))
```
Out:
```
tensor([1., 2., 3., 4., 5., 6., 7., 8.])
tensor([[1., 2.],
        [2., 3.],
        [3., 4.],
        [4., 5.],
        [5., 6.],
        [6., 7.],
        [7., 8.]])
tensor([[1., 2., 3.],
        [3., 4., 5.],
        [5., 6., 7.]])
```

**Example**: Two dimensional unfolding (patching)

```python
import torch
patch=(3,3)
x=torch.arange(16).float()
print(x, x.shape)
x2d = x.reshape(1,1,4,4)
print(x2d, x2d.shape)
h,w = patch
c=x2d.size(1)
print(c) # channels
# unfold(dimension, size, step)
r = x2d.unfold(2,h,1).unfold(3,w,1).transpose(1,3).reshape(-1, c, h, w)
print(r.shape)
print(r) # result
```

Out:
```
tensor([ 0.,  1.,  2.,  3.,  4.,  5.,  6.,  7.,  8.,  9., 10., 11., 12., 13.,
        14., 15.]) torch.Size([16])
tensor([[[[ 0.,  1.,  2.,  3.],
          [ 4.,  5.,  6.,  7.],
          [ 8.,  9., 10., 11.],
          [12., 13., 14., 15.]]]]) torch.Size([1, 1, 4, 4])
1
torch.Size([4, 1, 3, 3])
tensor([[[[ 0.,  1.,  2.],
          [ 4.,  5.,  6.],
          [ 8.,  9., 10.]]],


        [[[ 4.,  5.,  6.],
          [ 8.,  9., 10.],
          [12., 13., 14.]]],


        [[[ 1.,  2.,  3.],
          [ 5.,  6.,  7.],
          [ 9., 10., 11.]]],


        [[[ 5.,  6.,  7.],
          [ 9., 10., 11.],
          [13., 14., 15.]]]])
```

**Example**: Fold 

```python
import torch
import torch.nn.functional as F
import matplotlib.pyplot as plt

bs = 2
c = 3
ks = 4 # kernel size
st = 2 # stride

I = torch.randn(bs, c, 256, 256)
print('I:', I.shape) #1, 3, 256, 256

I_unf = F.unfold(I, kernel_size=ks, stride=st)
print("I_unf:",  I_unf.shape) # 1, 48=3*4*4, 16129


I_f = F.fold(I_unf, I.shape[-2:],kernel_size=ks, stride=st)
print("I_f:",  I_f.shape) # 1, 3, 256, 256

norm_map = F.fold(F.unfold(torch.ones(I.shape),kernel_size=ks,stride=st),
                  I.shape[-2:],kernel_size=ks ,stride=st)
I_f /= norm_map
```
Out:
```
I: torch.Size([2, 3, 256, 256])
I_unf: torch.Size([2, 48, 16129])
I_f: torch.Size([2, 3, 256, 256])
```

## Modify a tensor

You may use some JIT PyTorch model on your mobile, that was trained on batch size 32, and you just have a single image of input (batch size is 1). 

The solution is to expand your tensor, keeping all the dimensions other than the batch size unchanged. 

```python
t = torch.rand(1, 3, 256, 224)
t.size() # torch.Size([1, 3, 256, 224])
t2= t.expand(32, -1,-1,-1)
t2.size() # torch.Size([30, 3, 256, 224])
```

In here just the stride will be changed for the tensor t2.


## Getting max index position

```python
input = torch.randn(5)
print(input)
ind = input.argmax(dim=-1)
print(ind)
```

Out:
```
tensor([ 1.1856,  0.5697,  2.4549, -1.7512, -0.1435])
tensor(2)
```

```python
t = torch.rand(1, 3, 256, 224)
t.size() # torch.Size([1, 3, 256, 224])
t2= t.expand(32, -1,-1,-1)
t2.size() # torch.Size([32, 3, 256, 224])
```

Out:
```
torch.Size([32, 3, 256, 224])
```

## Tensor multiplication

PyTorch has several multiplication types.

Use use `mm` syntax for matrix to *matrix multiplication* and `mv` for *matrix to vector* multiplication.

Python 3.5 and above can use this "@" syntax. The following are equivalent:

```python
a = torch.rand(2,2)
b = torch.rand(2,2)

c = a.mm(b)
print(c)

c = torch.mm(a, b)
print(c)

c = torch.matmul(a, b)
print(c)

c = a @ b # python > 3.5+
print(c)
```
Out:
```
tensor([[0.4301, 0.5616],
        [0.2516, 0.6261]])
tensor([[0.4301, 0.5616],
        [0.2516, 0.6261]])
tensor([[0.4301, 0.5616],
        [0.2516, 0.6261]])
tensor([[0.4301, 0.5616],
        [0.2516, 0.6261]])
```

## `torch.matmul()`


Another type is `torch.matmul()`. This is almost the same as `torch.mm()` and the same as `@` operator.

> `torch.matmul()` has support for broadcasting while `torch.mm()` doesn't. That's the difference. 


**Example**: `matmul()` = `mm()` = `@`

```python
x = torch.randn(2,2)
y = torch.randn(2,2)
r1 = torch.matmul(x,y)
print(r2)
r2 = x @ y # python > 3.5+
print(r3)
r3 = torch.mm(x,y)
print(r4)
```

Out:
```
tensor([[-0.3272,  0.0181],
        [ 0.2870, -2.9069]])
tensor([[-0.3272,  0.0181],
        [ 0.2870, -2.9069]])
tensor([[-0.3272,  0.0181],
        [ 0.2870, -2.9069]])
```


**Example:** 3D tensor

```python
a = torch.rand(2,2,2)
b = torch.rand(2,2,2)

c = torch.matmul(a, b)
print(c)

c = a @ b # python > 3.5+
print(c)
```

Out:
```
tensor([[[0.6048, 0.2980],
         [0.5053, 0.2278]],

        [[0.5999, 0.8411],
         [0.7612, 1.1254]]])
tensor([[[0.6048, 0.2980],
         [0.5053, 0.2278]],

        [[0.5999, 0.8411],
         [0.7612, 1.1254]]])
```

`mm` cannot work for rank>2 (tensor of rank 3 or more). So if you work with bigger ranks use just these: `matmul` or `@` notation.

## Matrix to vector multiplication `torch.mv()`

[`torch.mv()`](https://pytorch.org/docs/stable/generated/torch.mv.html){:rel="nofollow"} will do matrix to vector multiplication. If input is a size `m×n` tensor, vec is tensor of size `n×1`, out will be of size `m×1`.

```python
m = torch.rand(3,2)
v = torch.rand(2)
p = torch.mv(m,v)
p,p.shape
```

Out:
```
(tensor([0.3142, 0.2362, 0.4199]), torch.Size([3]))
```

## Batch matrix-matrix product `torch.bmm()` 

One of these multiplication functions is [`bmm`](https://pytorch.org/docs/master/generated/torch.bmm.html#torch.bmm){:rel="nofollow"}. 

Set the batches b and the dimensions of the first and second matrix. First matrix is called the input and the second is called the mat2.

```python
input = torch.randn(10, 3, 4)
mat2 = torch.randn(10, 4, 5)
res = torch.bmm(input, mat2)
res.shape
``` 

Out:
```
torch.Size([10, 3, 5])
```
## Dot product `torch.dot()`

```python
x=torch.tensor([2, 3])
y=torch.tensor([2, 1])
torch.dot(x,y) # = 2*2 + 3*1
```

Out:
```
tensor(7)
```

## Hadamar product

```python
x=torch.tensor([[1,2],
                [3,4]])
y=torch.tensor([[2,3],
                [4,5]])
print(x*y) # hadamar product
```

Out:
```
tensor([[ 2,  6],
        [12, 20]])
```

## Einsum `torch.einsum()`

Uses [Einstein summation operation](https://pytorch.org/docs/master/generated/torch.einsum.html){:rel="nofollow"}. Works like this:

* "..."   represent a fixed number of dimensions.
* i - represent the first spatial dim
* j - represent the second spatial dim
* k - represent the third spatial dim
* bi - first batch dim
* bj
* bk

This function provides a way of computing expressions (i.e. sums of products) using the Einstein summation convention.

```python
x = torch.randn(2,2)
y = torch.randn(2,2)
print(x)
print(y)
print("---")
r = torch.einsum('bi,bj->ij', x, y)  
print(r)
```

Out:
```
tensor([[ 0.1159,  0.2010],
        [ 2.0329, -0.2314]])
tensor([[-0.0415, -1.3322],
        [-1.6042,  0.8580]])
---
tensor([[-3.2661,  1.5898],
        [ 0.3630, -0.4663]])
```

[Detailed explanation](https://stackoverflow.com/a/55894780/5884955){:rel="nofollow"} of `einsum()`.

## Speed of matrix multiplication

```python
import torch
import time
M = torch.bmm(a, b.transpose(1, 2))

torch.cuda.synchronize()
start = time.time()

print("bmm", end - start)
print("max_mem", torch.cuda.max_memory_allocated())

torch.cuda.synchronize()
start = time.time()

local_a = a.unsqueeze(2)
local_b = b.unsqueeze(1)
N = (local_a*local_b).sum(-1)

torch.cuda.synchronize()
end = time.time()

print("element-wise", end - start)
print("max_mem", torch.cuda.max_memory_allocated())

print("output difference (should be 0)", (N - M).abs().max())
print("In single precision this can fail because of the size of the tensors.")
print("Using double should always work")
```
Out:
```
bmm -65.56096816062927
max_mem 0
element-wise 0.002993345260620117
max_mem 0
output difference (should be 0) tensor(0.)
In single precision this can fail because of the size of the tensors.
Using double should always work
```

