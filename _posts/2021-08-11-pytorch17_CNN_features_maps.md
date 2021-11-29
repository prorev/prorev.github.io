---
id: 100
title: PyTorch | Feature Maps
date: 2021-05-18 23:57:32
author: taimane
layout: post
permalink: /pytorch/feature-maps
published: false
categories:
   - pytorch
tags:
   - tricks
---
_Table of Contents:_

- [What are feature maps](#what-are-feature-maps)
- [Padding](#padding)
- [Pooling - focusing](#pooling---focusing)
- [Loading different pretrained models](#loading-different-pretrained-models)
- [Load image from the web and save it to the disk](#load-image-from-the-web-and-save-it-to-the-disk)


https://stackoverflow.com/questions/36243536/what-is-the-number-of-filter-in-cnn

A feature map is the result of applying a filter


## What are feature maps

Feature maps are nothing but the output, we get after applying a group of filters to the previous layer and we pass these feature maps to the next layer. Each layer applies some filters and generates feature maps. Filters are able to extract information like Edges, Texture, Patterns, Parts of Objects, and many more.

## Padding

## Pooling - focusing

Use pooling to reduce the input size. Simple 2x2 pooling block will reduce the original image 4 times. 
Pooling layers means to focus on the image regions instead of individual pixels.

## Loading different pretrained models

To work with different pretrained models from PyTorch specify `pretrained=True` option. 

```python
First 
import torch
import torchvision.models as models

# resnet18 = models.resnet18(pretrained=True)
# alexnet = models.alexnet(pretrained=True)
vgg16 = models.vgg16(pretrained=True)
# squeezenet = models.squeezenet1_0(pretrained=True)
# densenet = models.densenet161(pretrained=True)
# inception = models.inception_v3(pretrained=True)
# googlenet = models.googlenet(pretrained=True)
# shufflenet = models.shufflenet_v2_x1_0(pretrained=True)
# mobilenet_v2 = models.mobilenet_v2(pretrained=True)
# mobilenet_v3_large = models.mobilenet_v3_large(pretrained=True)
# mobilenet_v3_small = models.mobilenet_v3_small(pretrained=True)
# resnext50_32x4d = models.resnext50_32x4d(pretrained=True)
# wide_resnet50_2 = models.wide_resnet50_2(pretrained=True)
# mnasnet = models.mnasnet1_0(pretrained=True)
print(vgg16)
```

In here we just loaded vgg16 pretrained model.

## Load image from the web and save it to the disk

You can work with any image from the web 
