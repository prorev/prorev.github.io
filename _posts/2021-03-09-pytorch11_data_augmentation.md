---
id: 100
title: PyTorch | Data Augmentation
date: 2021-03-09 23:57:32
author: taimane
layout: post
permalink: /pytorch/data_augmentation
published: true
categories:
   - pytorch
tags:
   - data augmentation
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

- [Python libraries for data augmentation](#python-libraries-for-data-augmentation)
- [Reading images](#reading-images)
- [Images as Tensors](#images-as-tensors)
- [Cropping images](#cropping-images)
- [Affecting channels](#affecting-channels)
- [Merge](#merge)
- [Using `permute()`](#using-permute)
- [Saving images](#saving-images)
- [Image augmentation via `transforms`](#image-augmentation-via-transforms)
- [Resizing Images](#resizing-images)
- [A folder of classes](#a-folder-of-classes)
- [Load disk images](#load-disk-images)

## Python libraries for data augmentation

Data augmentation is a technique where you increase the number of data examples. The additional data examples should ideally have the same or "close" data distribution as the initial data.

Imagine your initial data is 100 images. You can create 50 more images similar to these original 100 to augment.

With more data you have better chance to train your model better.

There are several Python image libraries we may use for image augmentation:

* CV2
* PIL
* matplotlib
* scikit-images
* pgmagic
* numpy
* SciPy

## Reading images

**Example**: Reading the image using CV2 and displaying using matplotlib

```python
%matplotlib inline
from matplotlib import pyplot as plt
import cv2
img=cv2.imread(r"C:\Users\dj\Desktop\img.jpg")
img=img[:,:,::-1]
_ = plt.imshow(img)
```
![data aug](/wp-content/uploads/2021/03/daug1.png)


**Example**: Reading the image using Pillow and displaying using matplotlib

```python
%matplotlib inline
from PIL import Image
from matplotlib import pyplot as plt
img = Image.open(r"C:\Users\dj\Desktop\img.jpg")
_ = plt.imshow(img)
```
![data aug](/wp-content/uploads/2021/03/daug1.png)


**Example**: Reading and displaying images using matplotlib

```python
%matplotlib inline
import matplotlib.pyplot as plt
import matplotlib.image as mpimg
img = mpimg.imread(r"C:\Users\dj\Desktop\img.jpg")
_ = plt.imshow(img)
```
![data aug](/wp-content/uploads/2021/03/daug1.png)

## Images as Tensors

**Example**: To tensor from tensor


```python
%matplotlib inline
import PIL    
from PIL import Image
import matplotlib.pyplot as plt
import requests
from io import BytesIO

url = "https://dejanbatanjac.github.io/images/fromthinair1.PNG"

response = requests.get(url)
img = Image.open(BytesIO(response.content))
display(img) # Display a Python object in all frontends.

ToTensor = torchvision.transforms.ToTensor()
FromTensor = torchvision.transforms.ToPILImage()
t = FromTensor(ToTensor(img))
plt.imshow(t) # matplotlib show
```

![data aug](/wp-content/uploads/2021/03/tensor2tensor.png)

## Cropping images

We were using in here just the regular numpy indexing. `im=im[:,:,::-1]` means invert the non-spatial dimension.


**Example**: Cropping the image using CV2

```python
import cv2
from matplotlib import pyplot as plt

im = cv2.imread(r"C:\Users\dj\Desktop\img.jpg") # numpy.ndarray
im=im[:,:,::-1]
h,w, c = img.shape 
print(h,w,c)
y=0
x=0
crop_im = im[y:y+h//2, x:x+w//2]
_ = plt.imshow(crop_im)
```
![data aug](/wp-content/uploads/2021/03/cropp1.png)

## Affecting channels

**Example**: Split and merge image channels using CV2

```python
%matplotlib inline
import cv2
from matplotlib import pyplot as plt

p = r"C:\Users\dj\Desktop\img.jpg"
img = cv2.imread(p)
img = img[:,:,::-1]
b,g,r = cv2.split(img)
img = cv2.merge((r,g,b)) # default is b,g,r
_ = plt.imshow(img)
```
![data aug](/wp-content/uploads/2021/03/channel1.png)


## Merge

**Example**: Two images into one using CV2

```python
%matplotlib inline
import cv2
from matplotlib import pyplot as plt

img1 = cv2.imread(r'C:\Users\dj\Desktop\img.jpg')
img1 = img1[:,:,::-1]

img2 = cv2.imread(r'C:\Users\dj\Desktop\img2.jpg')
img2 = img2[:,:,::-1]

cimg1 = cv2.resize(img1,(450,450))
cimg2 = cv2.resize(img2,(450,450))

dst = cv2.addWeighted(cimg1,0.5,cimg2,0.5,0)
plt.imshow(dst)
```

![data aug](/wp-content/uploads/2021/03/merge1.png)

## Using `permute()`

The [notebook](https://colab.research.google.com/drive/1LWV0pGw7gScb2cmcmDlNt7d8Y23PC2C0?usp=sharing#scrollTo=Xd3_r85KKE4N) also shows the trick to print the image using `permute` method since matplotlib pyplot `imshow` method needs channel dimension at the very end.

```python
print("img shape: ", imgs[0].shape)
img = imgs[0]
img = img.permute(1, 2, 0)
_ = plt.imshow(img)
```

## Saving images

**Example**: Saving PIL image

The [notebook](https://colab.research.google.com/drive/1LWV0pGw7gScb2cmcmDlNt7d8Y23PC2C0?usp=sharing#scrollTo=Xd3_r85KKE4N) also shows PIL imge `save()` method to save the image.

```python
# create the imgs folder
Path('/content/imgs').mkdir(parents=True, exist_ok=True)

# create folders for 10 classes
for c in range(0,10): 
    Path(f'/content/imgs/{c}').mkdir(parents=True, exist_ok=True)

# save all the images to specific folder
for idx, (img, cls) in enumerate(ds):    
    img.save(f'/content/imgs/{cls}/{idx}.png')     
``` 


## Image augmentation via `transforms`

In PyTorch there is `torchvision.transforms` module. It can help transforming original image known as *image augmentation*.

You can achieve this when creating the `Dataset` with the `transform` parameter.

We already showcased this example:

```python
import torch
from torch.utils.data import DataLoader, Dataset
import torchvision
from torchvision import transforms
import PIL.Image as Image

t = transforms.Compose([transforms.RandomHorizontalFlip(),
                       transforms.ToTensor(),
                       transforms.Normalize(mean=(0.5, 0.5, 0.5), std=(0.5, 0.5, 0.5))]
                       )
```

And then once you have the composed transformation `t`

```python
ds = torchvision.datasets.CIFAR10('/data/cifar10', download=True, train=True, transform=t)
```

[Here](https://pytorch.org/docs/stable/torchvision/transforms.html){:rel="nofollow"} is the list of common transforms:

* [`RandomCrop`](https://pytorch.org/docs/stable/torchvision/transforms.html#torchvision.transforms.RandomCrop){:rel="nofollow"}
* [`RandomGrayscale`](https://pytorch.org/docs/stable/torchvision/transforms.html#torchvision.transforms.RandomGrayscale){:rel="nofollow"}
* [`RandomHorizontalFlip`](https://pytorch.org/docs/stable/torchvision/transforms.html#torchvision.transforms.RandomHorizontalFlip){:rel="nofollow"}
* [`RandomPerspective`](https://pytorch.org/docs/stable/torchvision/transforms.html#torchvision.transforms.RandomPerspective){:rel="nofollow"}
* [`RandomRotation`](https://pytorch.org/docs/stable/torchvision/transforms.html#torchvision.transforms.RandomRotation){:rel="nofollow"}
* [`Resize`](https://pytorch.org/docs/stable/torchvision/transforms.html#torchvision.transforms.Resize){:rel="nofollow"}
* [`Scale`](https://pytorch.org/docs/stable/torchvision/transforms.html#torchvision.transforms.Scale){:rel="nofollow"}
* [`Normalize`](https://pytorch.org/docs/stable/torchvision/transforms.html#torchvision.transforms.Normalize){:rel="nofollow"}
* [`ToTensor`](https://pytorch.org/docs/stable/torchvision/transforms.html#torchvision.transforms.ToTensor){:rel="nofollow"}


## Resizing Images

Often, when you train image datasets images differ in size.
For instance, in case of ImageNet dataset not all images are 224×224.

There are two options:

* [Resize](https://pytorch.org/docs/stable/torchvision/transforms.html#torchvision.transforms.Resize){:rel="nofollow"} transform: 

```python
torchvision.transforms.Resize(size, interpolation=2)
```

Where size is a pair of integers (H, W). Unfortunately, this way aspect ratio is gone.

* [Resize](https://pytorch.org/docs/stable/torchvision/transforms.html#torchvision.transforms.Resize){:rel="nofollow"} followed by [CenterCrop](https://pytorch.org/docs/stable/torchvision/transforms.html#torchvision.transforms.CenterCrop){:rel="nofollow"}

Resize takes the single integer (in case of ImageNet 224). The smaller from the two edges matches that size, aspect ratio is kept and the bugger edge is suppressed using CenterCrop. 

The final output should be 224×224 in both cases.


```python
torchvision.transforms.CenterCrop(size)
```

## A folder of classes

Often for the classification problems there may be multiple folders, each for a single class of data. Let's create one example by downloading the cifar-10 dataset from URL.

```
!wget https://pjreddie.com/media/files/cifar.tgz
!tar xzf cifar.tgz
```

```python
%%time
import glob
f=glob.glob('/content/cifar/**/*.png')
print(len(f), f)
```

Or you may create the `DatasetFolder` based on different classes of images you have.

```python
def pil_loader(path):    
    with open(path, 'rb') as f:
        img = Image.open(f)
        return img.convert('RGB')


ds = torchvision.datasets.DatasetFolder('/content/classes', 
                                        loader=pil_loader, 
                                        extensions=('.png'), 
                                        transform=t)
```

assuming you have different images inside your classes.

## Load disk images

Next we will show how to create a dataset from the `torchvision.datasets.DatasetFolder()`. You may use `DatasetFolder` whenever you have multiple subdirectories each for a different class.

```python
set_seed(13)

t = transforms.Compose(
    [transforms.RandomHorizontalFlip(),
    transforms.ToTensor() ])
#  transforms.Normalize( mean=(0.485, 0.456, 0.406), std=(0.229, 0.224, 0.225)) ])
    
# this function will be used to load images from disk
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

Output:
```
Dataset DatasetFolder
    Number of datapoints: 60000
    Root location: /content/imgs
    StandardTransform
Transform: Compose(
               RandomHorizontalFlip(p=0.5)
               ToTensor()
           )
```



