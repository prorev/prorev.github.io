---
id: 100
title: PyTorch | Installing and config
date: 2021-03-08 23:57:32
author: taimane
layout: post
permalink: /pytorch/installing
published: true
categories:
   - pytorch
tags:
   - installation
---

_Table of Contents:_

- [What is PyTorch](#what-is-pytorch)
- [Install PyTorch](#install-pytorch)
- [Check PyTorch config and environment](#check-pytorch-config-and-environment)
- [CUDA](#cuda)
- [Check the GPU memory](#check-the-gpu-memory)
- [Jupyter notebooks](#jupyter-notebooks)

## What is PyTorch

In short PyTorch is a Python based machine learning library maintained by Facebook's AI Research lab as an open-source project that supports execution on CPU/GPU/TPU and uses AD (Automatic Differentiation).

In practice, PyTorch works really well together with `numpy`, `scikit-learn`, and `Pandas`.

Originally, PyTorch grew up from [Torch library](https://en.wikipedia.org/wiki/Torch_(machine_learning)){:rel="nofollow"} made for the Lua programming language.

## Install PyTorch 

If you use Jupyter (Anaconda) goto this [page](https://pytorch.org/get-started/locally/){:rel="nofollow"} and select Conda to get the code. For my case it was:

```python
!conda install pytorch torchvision torchaudio cudatoolkit=10.2 -c pytorch
```


## Check PyTorch config and environment

These may be your first lines of PyTorch if you print the version and environment data:

```python
import torch
print(torch.__version__)
print(*torch.__config__.show().split("\n"), sep="\n")
```

Out:
```
1.6.0+cu101
PyTorch built with:
  - C++ Version: 199711
  - MSVC 192628806
  - Intel(R) Math Kernel Library Version 2020.0.0 Product Build 20191125 for Intel(R) 64 architecture applications
  - Intel(R) MKL-DNN v1.5.0 (Git Hash e2ac1fac44c5078ca927cb9b90e1b3066a0b2ed0)
  - OpenMP 2019
  - CPU capability usage: AVX2
  - CUDA Runtime 10.1
  - NVCC architecture flags: -gencode;arch=compute_37,code=sm_37;-gencode;arch=compute_50,code=sm_50;-gencode;arch=compute_60,code=sm_60;-gencode;arch=compute_61,code=sm_61;-gencode;arch=compute_70,code=sm_70;-gencode;arch=compute_75,code=sm_75;-gencode;arch=compute_37,code=compute_37
  - CuDNN 7.6.4
  - Magma 2.5.2
  - Build settings: BLAS=MKL, BUILD_TYPE=Release, CXX_FLAGS=/DWIN32 /D_WINDOWS /GR /EHsc /w /bigobj -openmp:experimental -DNDEBUG -DUSE_FBGEMM -DUSE_VULKAN_WRAPPER, PERF_WITH_AVX=1, PERF_WITH_AVX2=1, PERF_WITH_AVX512=1, USE_CUDA=ON, USE_EXCEPTION_PTR=1, USE_GFLAGS=OFF, USE_GLOG=OFF, USE_MKL=ON, USE_MKLDNN=ON, USE_MPI=OFF, USE_NCCL=OFF, USE_NNPACK=OFF, USE_OPENMP=ON, USE_STATIC_DISPATCH=OFF, 
```

## CUDA

CUDA is acronym for Compute Unified Device Architecture. It was developed specifically for NVIDIA GPUs.

The core of CUDA is Deep Neural Network library or **cuDNN** that helps programmers do deep learning.

PyTorch has [`torch.cuda`](https://pytorch.org/docs/stable/cuda.html#module-torch.cuda){:rel="nofollow"} package for working with GPU. 
One of the first commands would be to check if you have CUDA powered device:

```python
import torch
print(torch.cuda.is_available())
```

Out:
```
True
```
If the result is `True` you have CUDA powered device, or you have the GPU unit.
Here is GPU device checker code:

```python
import torch
dev = torch.device("cuda") if torch.cuda.is_available() else torch.device("cpu")
dev
```

Out:
```
device(type='cuda')
```

You can also check the number of CUDA devices with the next command.

```python
torch.cuda.device_count()
```

The [list of things](https://pytorch.org/docs/stable/cuda.html){:rel="nofollow"} you can do via the package `torch.cuda` is huge.

Optionally, it comes handy to set the CUDA parameters from operating system:

```python
import os 
os.environ['CUDA_VISIBLE_DEVICES']='1'
os.environ['CUDA_LAUNCH_BLOCKING']='1'
```

## Check the GPU memory

If you have the GPU unit, you can check the GPU memory. You may write:

```
!nvidia-smi
```

Out:
```
Fri Jun 26 15:33:03 2020       
+-----------------------------------------------------------------------------+
| NVIDIA-SMI 450.36.06    Driver Version: 418.67       CUDA Version: 10.1     |
|-------------------------------+----------------------+----------------------+
| GPU  Name        Persistence-M| Bus-Id        Disp.A | Volatile Uncorr. ECC |
| Fan  Temp  Perf  Pwr:Usage/Cap|         Memory-Usage | GPU-Util  Compute M. |
|                               |                      |               MIG M. |
|===============================+======================+======================|
|   0  Tesla K80           Off  | 00000000:00:04.0 Off |                    0 |
| N/A   35C    P8    25W / 149W |      0MiB / 11441MiB |      0%      Default |
|                               |                      |                 ERR! |
+-------------------------------+----------------------+----------------------+
                                                                               
+-----------------------------------------------------------------------------+
| Processes:                                                                  |
|  GPU   GI   CI        PID   Type   Process name                  GPU Memory |
|        ID   ID                                                   Usage      |
|=============================================================================|
|  No running processes found                                                 |
+-----------------------------------------------------------------------------+
```

The available memory on GPU is 11441MiB.

## Jupyter notebooks

Jupyter notebook is where Python/PyTorch programmers live nowadays. It is based on an [open-source project](https://github.com/jupyter/notebook){:rel="nofollow"}.

Jupyter notebook have been used for writing this book.

Google provides [Google Colaboratory project](https://colab.research.google.com/){:rel="nofollow"} where you can use Jupyter notebooks for free.


Check also the [16 Google Colab Tricks](https://programming-review.com/colab/tricks).