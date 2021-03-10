---
id: 100
title: PyTorch | Load Data
date: 2021-03-09 23:57:32
author: taimane
layout: post
permalink: /pytorch/load_data
published: true
categories:
   - pytorch
tags:
   - load data
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

- [The Data](#the-data)
- [Predefined datases](#predefined-datases)
- [Creating a custom Dataset](#creating-a-custom-dataset)
- [Creating `ConcatDataset`](#creating-concatdataset)
- [Labeled Datasets](#labeled-datasets)

![dataload](/wp-content/uploads/2021/03/dataload.png)

## The Data

You need to have something to start with machine learning. The data.

There are two major classes in PyTorch data loading pipeline:

* [`Dataset`](https://pytorch.org/docs/stable/data.html?highlight=dataset#torch.utils.data.Dataset){:rel="nofollow"}
* [`DataLoader`](https://pytorch.org/docs/stable/data.html?highlight=dataset#torch.utils.data.DataLoader){:rel="nofollow"}

Dataset is very general term. It can be anything (tabular data, text, audio, images, videos, etc.)

Since `Dataset` is an abstract class you will be using some other classes on top:

* [Predefined datases](https://pytorch.org/docs/stable/torchvision/datasets.html){:rel="nofollow"} (MNIST, CIFAR10, CIFAR100, EMNIST, ...)
* Custom dataset (class inherited from `Dataset`)
* [`ConcatDataset`](https://pytorch.org/docs/stable/data.html?highlight=concatdataset#torch.utils.data.ConcatDataset){:rel="nofollow"} (two datasets mixed into one)
* [`DatasetFolder`](https://pytorch.org/docs/stable/torchvision/datasets.html#datasetfolder){:rel="nofollow"} (a folder of different files)

## Predefined datases

`DataLoader` needs a `Dataset`. Here is the common loading scheme with the predefined dataset CIFAR10:

```python
import torch
import torch.nn as nn
from torch.utils.data import DataLoader, Dataset, TensorDataset
import torchvision.transforms as transforms
import torchvision
import numpy as np

BS=512
t_train = transforms.Compose([transforms.RandomHorizontalFlip(),
                       transforms.ToTensor(),
                       transforms.Normalize(mean=(0.5, 0.5, 0.5), std=(0.5, 0.5, 0.5))])

t_valid = transforms.Compose([transforms.ToTensor(),
                       transforms.Normalize(mean=(0.5, 0.5, 0.5), std=(0.5, 0.5, 0.5))])

ds_train = torchvision.datasets.CIFAR10('/data/cifar10', download=True, train=True, transform=t_train)
ds_valid = torchvision.datasets.CIFAR10('/data/cifar10', download=True, train=False, transform=t_valid)

dl_train = DataLoader( ds_train, batch_size=BS, drop_last=True, shuffle=True)
dl_valid = DataLoader( ds_valid, batch_size=BS, drop_last=True, shuffle=True)

print(len(dl_train))
print(len(dl_train.dataset))
print(len(dl_valid))
print(len(dl_valid.dataset))
```

Out:
```
Files already downloaded and verified
Files already downloaded and verified
97
50000
19
10000
```

In here we are using the CIFAR10 dataset with:

* 50000 training examples
* 10000 validation examples 

We can check this with `len(dl_train.dataset)` or `len(dl_valid.dataset)`.

Since we are having the batch size 512 effectively this will produce 97 train batches and 19 validation batches.

If we would set `drop_last=False` this will produce (98,20) batches with the last batch not fully complete. 
It will have less than 512 training examples. 

Option `shuffle=True` will shuffle the training examples at the epoch start.

```
50000//512, 10000//512 # (97, 19)
```

## Creating a custom Dataset

To write a custom dataset inherit the abstract class `torch.utils.data.Dataset`. In particular implement these two methods:

* `__len__`  to support the `len()` method
* `__getitem__` to support the indexing 

[Example writing a custom dataset](https://pytorch.org/tutorials/beginner/data_loading_tutorial.html){:rel="nofollow"}.


## Creating `ConcatDataset`

We can use this [Linux notebook](https://colab.research.google.com/drive/1LWV0pGw7gScb2cmcmDlNt7d8Y23PC2C0?usp=sharing){:rel="nofollow"}
to practice concatenating two datasets together. In here we used CIFAR10 dataset training and validation sets.

The `ds_train` and `ds_valid` variables are enclosed in a simple python list and we create the `ds` dataset.

```python
ds_train = torchvision.datasets.CIFAR10('/content/cifar10', download=True, train=True)
ds_valid = torchvision.datasets.CIFAR10('/content/cifar10', download=True, train=False)
ds = torch.utils.data.ConcatDataset([ds_train, ds_valid])
```

## Labeled Datasets

Labeled datasets are data and the labels. 

In PyTorch all the predefined datasets are labeled datasets. We can get the classes from Dataloader. The [notebook](https://colab.research.google.com/drive/1LWV0pGw7gScb2cmcmDlNt7d8Y23PC2C0?usp=sharing#scrollTo=6skAfXXGslqS){:rel="nofollow"} code has the following fragment to print all the classes:

```python
print(len(dl_train))
for imgs,lbls in dl_train:    
    print(imgs.size()) 
    print(lbls.size())
    print(lbls)
    break 
```

Output:

```
tensor([5, 5, 6, 5, 6, 2, 6, 0, 1, 1, 7, 0, 2, 6, 8, 9, 6, 5, 6, 1, 0, 2, 2, 4,
        6, 1, 3, 5, 5, 2, 4, 7, 8, 1, 1, 4, 9, 0, 9, 2, 2, 9, 5, 6, 8, 8, 1, 1,
        7, 8, 6, 6, 1, 8, 3, 6, 4, 9, 8, 7, 2, 7, 5, 5, 4, 4, 1, 5, 5, 9, 9, 6,
        3, 9, 6, 9, 8, 5, 5, 3, 3, 4, 8, 8, 5, 5, 1, 8, 2, 9, 5, 9, 4, 6, 7, 9,
        1, 0, 5, 0, 1, 7, 1, 6, 9, 1, 4, 7, 2, 1, 3, 4, 3, 4, 6, 9, 1, 3, 7, 5,
        5, 4, 8, 3, 7, 5, 9, 8, 9, 4, 1, 9, 0, 2, 0, 1, 7, 2, 9, 7, 4, 1, 5, 6,
        9, 9, 7, 6, 8, 3, 4, 4, 5, 7, 1, 9, 7, 9, 0, 4, 4, 7, 0, 8, 9, 1, 6, 2,
        2, 2, 0, 5, 4, 0, 4, 5, 1, 6, 1, 1, 0, 8, 1, 8, 5, 8, 6, 4, 2, 7, 8, 3,
        3, 4, 2, 7, 4, 1, 3, 7, 0, 0, 1, 2, 7, 1, 6, 7, 8, 2, 5, 8, 1, 1, 7, 8,
        4, 8, 2, 9, 1, 9, 0, 8, 4, 8, 5, 0, 9, 3, 2, 7, 1, 2, 3, 0, 0, 9, 9, 1,
        7, 1, 1, 6, 6, 8, 5, 0, 0, 3, 2, 3, 6, 1, 6, 6, 4, 6, 7, 5, 8, 0, 8, 9,
        8, 2, 5, 7, 6, 0, 8, 9, 5, 8, 6, 1, 1, 3, 8, 5, 9, 8, 3, 9, 0, 2, 5, 1,
        3, 0, 9, 5, 4, 6, 0, 2, 2, 2, 3, 1, 0, 2, 0, 1, 3, 6, 0, 5, 5, 7, 8, 3,
        2, 9, 4, 4, 7, 5, 9, 4, 6, 7, 0, 9, 0, 2, 5, 4, 5, 4, 2, 2, 3, 1, 2, 1,
        3, 9, 5, 5, 8, 0, 6, 2, 4, 8, 4, 0, 9, 2, 1, 2, 4, 8, 2, 8, 6, 6, 1, 6,
        2, 4, 5, 1, 0, 9, 4, 8, 5, 6, 3, 3, 0, 5, 7, 6, 9, 4, 9, 5, 6, 7, 3, 8,
        5, 7, 5, 5, 4, 9, 6, 1, 4, 9, 3, 4, 0, 4, 9, 6, 7, 9, 9, 1, 3, 3, 0, 7,
        3, 3, 3, 9, 6, 1, 1, 6, 4, 2, 5, 8, 4, 0, 0, 4, 7, 2, 8, 7, 2, 1, 7, 6,
        3, 7, 7, 4, 7, 0, 7, 4, 6, 5, 6, 2, 3, 5, 2, 9, 0, 7, 1, 5, 1, 1, 5, 1,
        7, 2, 2, 1, 0, 8, 4, 2, 5, 8, 0, 7, 9, 0, 8, 6, 3, 8, 8, 0, 9, 1, 5, 9,
        0, 9, 4, 9, 8, 0, 6, 0, 9, 1, 5, 8, 6, 2, 8, 4, 9, 1, 5, 3, 0, 3, 4, 3,
        0, 8, 5, 1, 9, 6, 5, 7])
```

**Example**: Creating images from predefined dataset CIFAR10

```python
import torch
import torch.nn as nn
import torch.nn.functional as F
from torch.utils.data import DataLoader, Dataset, TensorDataset
from torch.optim import *
import torchvision
import torchvision.transforms as transforms
import matplotlib.pyplot as plt
import os
import numpy as np
import random
import math
import PIL.Image as Image
from pathlib import Path

ds_train = torchvision.datasets.CIFAR10(r'/content/cifar10', download=True, train=True)
ds_valid = torchvision.datasets.CIFAR10(r'/content/cifar10', download=True, train=False)
ds = torch.utils.data.ConcatDataset([ds_train, ds_valid])

# create the imgs folder
Path(r'/content/imgs').mkdir(parents=True, exist_ok=True)


# create folders for 10 classes
for c in range(0,10): 
    Path(f'/content/imgs/{c}').mkdir(parents=True, exist_ok=True)

# save all the images to specific folder
for idx, (img, cls) in enumerate(ds):    
    # save PIL image
    img.save(f'/content/imgs/{cls}/{idx}.png')  
```

Out:
```
Downloading https://www.cs.toronto.edu/~kriz/cifar-10-python.tar.gz to /content/cifar10\cifar-10-python.tar.gz

HBox(children=(FloatProgress(value=1.0, bar_style='info', max=1.0), HTML(value='')))

Extracting /content/cifar10\cifar-10-python.tar.gz to /content/cifar10
Files already downloaded and verified
```

Next step, we create a transformation with normalization step, but in here we muted that, since we will be printing the images at the end from the dataloader.

```python
t = transforms.Compose([transforms.ToTensor() ])
                    
def pil_loader(path):    
    with open(path, 'rb') as f:
        img = Image.open(f)
        return img.convert('RGB')

# with DatasetFolder we can set the extensions
ds = torchvision.datasets.DatasetFolder(
    r'/content/imgs', 
    loader=pil_loader, 
    extensions=('.png'), 
    transform=t) 

print(ds)
```
Out:
```
Dataset DatasetFolder
    Number of datapoints: 60000
    Root location: /content/imgs
    StandardTransform
Transform: Compose(
               ToTensor()
           )
```

Let's use mathplotlib to show a single image from our CIFAR10 dataset:

```python
%matplotlib inline
import matplotlib.pyplot as plt
import matplotlib.image as mpimg
img_loc = r'/content/imgs/1/10000.png'
img = mpimg.imread(img_loc)
p = plt.imshow(img)
```

![custom dataset](/wp-content/uploads/2021/03/customdataset.png)

Let's use scikit-learn library to split the train and test datasets once we loaded all the images from the file system. We set a batch size in this case as well.

```python
%%time
from sklearn.model_selection import train_test_split
ds_train, ds_valid = train_test_split( ds, test_size=0.2, random_state=13 )

BS=512

dl_train = DataLoader(ds_train, batch_size=BS, shuffle=True)
dl_valid = DataLoader(ds_valid, batch_size=BS, shuffle=True)
```

The next step we will print labels from a single batch (512 images)

```
print(len(dl_train))
```

Out:
```
94
torch.Size([512, 3, 32, 32])
torch.Size([512])
tensor([5, 5, 8, 4, 3, 0, 3, 1, 5, 9, 5, 8, 6, 8, 8, 1, 8, 8, 5, 2, 7, 8, 6, 7,
        4, 8, 2, 4, 8, 2, 2, 3, 8, 2, 3, 7, 7, 6, 7, 3, 0, 9, 8, 0, 9, 6, 2, 2,
        2, 0, 3, 6, 2, 9, 6, 9, 4, 3, 4, 4, 8, 9, 4, 0, 4, 1, 9, 7, 0, 7, 4, 3,
        2, 6, 8, 6, 4, 7, 4, 2, 9, 0, 6, 7, 3, 0, 0, 5, 1, 6, 4, 1, 9, 8, 0, 1,
        1, 9, 8, 2, 2, 9, 0, 2, 3, 1, 4, 6, 5, 7, 0, 6, 5, 6, 3, 6, 2, 0, 0, 3,
        6, 4, 2, 6, 2, 9, 3, 0, 9, 6, 9, 1, 7, 8, 7, 0, 6, 2, 6, 9, 1, 2, 9, 1,
        0, 4, 6, 1, 7, 4, 8, 6, 5, 1, 0, 6, 5, 0, 7, 2, 9, 8, 9, 6, 2, 0, 6, 5,
        2, 6, 0, 5, 0, 4, 3, 9, 1, 0, 7, 4, 2, 7, 4, 9, 6, 6, 3, 8, 4, 9, 9, 3,
        5, 8, 1, 5, 1, 8, 8, 9, 2, 0, 0, 3, 1, 7, 5, 5, 5, 6, 1, 1, 3, 6, 2, 4,
        8, 0, 0, 4, 3, 3, 7, 7, 3, 4, 4, 4, 4, 8, 2, 7, 1, 7, 1, 3, 2, 1, 4, 2,
        9, 9, 6, 6, 7, 6, 9, 6, 6, 5, 1, 6, 4, 6, 4, 1, 1, 3, 2, 8, 8, 6, 5, 9,
        9, 2, 7, 1, 5, 3, 8, 3, 7, 4, 4, 6, 0, 5, 1, 0, 1, 1, 3, 3, 3, 1, 8, 1,
        9, 0, 4, 0, 3, 7, 6, 0, 7, 0, 3, 2, 4, 4, 5, 6, 7, 1, 0, 6, 5, 3, 7, 7,
        6, 7, 2, 7, 0, 7, 7, 0, 3, 2, 5, 3, 1, 9, 4, 9, 3, 9, 5, 6, 0, 3, 1, 8,
        8, 6, 0, 3, 7, 9, 6, 3, 4, 1, 4, 4, 4, 6, 2, 5, 5, 2, 0, 3, 9, 6, 3, 5,
        0, 5, 8, 5, 4, 9, 5, 6, 8, 2, 0, 6, 5, 1, 8, 6, 6, 7, 6, 0, 4, 4, 1, 0,
        3, 5, 0, 9, 6, 1, 3, 2, 8, 0, 4, 6, 4, 8, 7, 1, 5, 3, 6, 6, 4, 9, 8, 3,
        8, 6, 8, 0, 0, 0, 4, 0, 1, 2, 4, 0, 1, 0, 6, 3, 4, 7, 1, 2, 3, 4, 1, 9,
        2, 3, 3, 2, 2, 0, 7, 4, 7, 9, 3, 3, 1, 2, 7, 0, 9, 0, 4, 8, 0, 3, 2, 4,
        6, 3, 6, 1, 9, 5, 9, 6, 6, 8, 3, 7, 6, 4, 5, 5, 8, 3, 4, 7, 7, 4, 6, 3,
        0, 9, 0, 0, 9, 8, 9, 7, 4, 4, 7, 3, 6, 6, 1, 4, 6, 4, 4, 7, 9, 6, 6, 6,
        1, 2, 0, 4, 3, 3, 7, 8])
```

Lastly we will print a single image from the dataset.

```python
print("img shape: ", imgs[0].shape)
img = imgs[0]
img = img.permute(1, 2, 0)
_ = plt.imshow(img)
```

![custom dataset](/wp-content/uploads/2021/03/customdataset2.png)


**Example**: Creating Dataset and DataLoader based on preexisting images

Based on previous example we should have 60000 images inside `/content/imgs/` folder. The origin for these images was the predefined dataset CIFAR10, where we saved each individual image into the corresponding class folder.

```python
%%time
import glob
f=glob.glob(r'/content/imgs/**/*.png')
print(len(f))
```

Out:
```
60000
Wall time: 285 ms
```

Now we can use the `pil_loader` function that will open each file and return `PIL.Image.Image`.

```python
def pil_loader(path):    
    with open(path, 'rb') as f:
        img = Image.open(f)
        return img.convert('RGB')
```

The output of the `pli_lader` is `PIL.Image.Image`.

```python
img_loc = '/content/imgs/1/10000.png'
img = pil_loader(img_loc)
print(img)
```

Out:
```
<PIL.Image.Image image mode=RGB size=32x32 at 0x23A62B301C8>
```

The next step is to create a Dataset.

```python
ds = torchvision.datasets.DatasetFolder('/content/imgs', 
                                        loader=pil_loader, 
                                        extensions=('.png'), 
                                        transform=t)

print(ds)
```
Out:
```
Dataset DatasetFolder
    Number of datapoints: 60000
    Root location: /content/imgs
    StandardTransform
Transform: Compose(
               ToTensor()
           )
```

Based on a Dataset we create DataLoader.

```python
dl = DataLoader(ds, batch_size=BS, shuffle=True)
print(dl)
```
Out:
```
<torch.utils.data.dataloader.DataLoader object at 0x0000023A6488AEC8>
```

Lastly we print the labels of the last batch.

```python
for image_batch,label_batch in dl:
    print(label_batch)
    break
```

Out:
```
tensor([7, 7, 8, 9, 5, 9, 9, 0, 8, 9, 6, 3, 7, 9, 1, 0, 7, 5, 4, 7, 1, 3, 5, 0,
        9, 1, 3, 1, 6, 8, 4, 9, 5, 6, 9, 6, 2, 3, 9, 9, 7, 0, 2, 9, 0, 5, 5, 6,
        5, 5, 6, 2, 9, 7, 7, 0, 8, 5, 8, 3, 9, 0, 6, 2, 9, 6, 8, 0, 3, 8, 3, 4,
        7, 9, 2, 6, 7, 2, 6, 5, 7, 6, 3, 6, 9, 4, 0, 7, 6, 1, 5, 9, 2, 0, 5, 3,
        7, 3, 8, 2, 2, 7, 6, 8, 6, 5, 6, 6, 3, 0, 8, 7, 2, 9, 6, 1, 6, 9, 8, 3,
        1, 1, 8, 1, 9, 6, 4, 3, 7, 4, 8, 8, 3, 6, 2, 8, 8, 4, 4, 3, 7, 6, 6, 3,
        5, 2, 8, 3, 7, 3, 6, 2, 8, 8, 2, 2, 3, 0, 3, 5, 2, 5, 2, 6, 1, 4, 5, 2,
        6, 6, 8, 5, 2, 1, 0, 5, 0, 8, 1, 7, 6, 4, 7, 1, 8, 4, 3, 4, 1, 1, 1, 1,
        9, 6, 6, 0, 0, 7, 7, 5, 2, 5, 4, 8, 5, 5, 0, 9, 0, 1, 7, 0, 3, 1, 3, 2,
        5, 1, 2, 6, 0, 4, 1, 0, 8, 8, 0, 6, 4, 9, 4, 7, 6, 1, 6, 6, 8, 0, 5, 7,
        2, 6, 3, 3, 3, 0, 3, 1, 1, 7, 5, 2, 0, 7, 5, 4, 1, 6, 2, 5, 3, 5, 9, 5,
        6, 0, 3, 0, 6, 2, 4, 8, 0, 7, 6, 0, 1, 5, 6, 1, 7, 0, 1, 5, 7, 2, 5, 6,
        5, 0, 0, 3, 4, 6, 0, 9, 8, 2, 8, 2, 9, 2, 0, 4, 8, 5, 7, 5, 5, 5, 0, 3,
        7, 4, 9, 8, 8, 2, 3, 8, 5, 8, 8, 7, 4, 6, 5, 3, 2, 3, 3, 4, 9, 7, 6, 9,
        0, 8, 1, 3, 8, 2, 3, 9, 7, 7, 1, 6, 8, 6, 3, 7, 0, 6, 2, 9, 5, 8, 3, 7,
        8, 7, 5, 3, 6, 9, 2, 1, 9, 6, 6, 5, 1, 6, 1, 6, 6, 7, 7, 2, 7, 2, 4, 4,
        2, 7, 0, 0, 2, 6, 8, 1, 1, 7, 4, 6, 1, 0, 4, 4, 7, 2, 9, 7, 8, 7, 8, 1,
        9, 5, 7, 0, 1, 5, 5, 8, 3, 9, 7, 7, 4, 8, 1, 8, 2, 5, 4, 3, 4, 8, 1, 5,
        5, 2, 0, 6, 1, 9, 7, 2, 3, 1, 2, 7, 0, 8, 7, 6, 3, 3, 5, 8, 2, 8, 0, 6,
        3, 2, 2, 8, 4, 0, 4, 3, 7, 9, 9, 7, 4, 6, 6, 7, 7, 8, 6, 5, 7, 6, 2, 8,
        2, 8, 1, 4, 1, 0, 5, 5, 6, 8, 3, 9, 9, 4, 4, 5, 9, 2, 2, 5, 7, 6, 4, 4,
        2, 3, 9, 4, 5, 1, 6, 8])
```

