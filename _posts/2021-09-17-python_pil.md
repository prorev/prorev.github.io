---
id: 12971
title: Python PIL image library
date: 2020-01-22
author: taimane
layout: post
permalink: /python/pil
published: true
image: 
categories: 
   - python
tags:   
   - image
---
- [PIL.Image.open](#pilimageopen)
- [Showing the image](#showing-the-image)
- [PIL functions](#pil-functions)
  - [PIL.ImageFilter](#pilimagefilter)
  - [PIL.ImageEnhance](#pilimageenhance)
  - [PIL.Image.ImageDraw](#pilimageimagedraw)
- [Comparison with OpenCV](#comparison-with-opencv)
 
What is PIL? 
 
This is an old library from 1996. 
 
Support for PIL (Python Imaging Library) got discontinued in 2011, but a project named pillow forked the original PIL project and added support for Python3.
 
Pillow is now a replacement for PIL.
 
Pillow supports a large number of image file formats including BMP, PNG, JPEG, and TIFF.
 
Pillow is frequently used for creating command-line applications that can be used to convert images in various formats.
 
## PIL.Image.open
 
The next code shows how to open the image using PIL `Image.open` method:
 
```python
%matplotlib inline
from PIL import Image
from matplotlib.pyplot import imshow 
import torchvision.transforms as transforms
 
pil_img = Image.open(r"apple.jpg")
print(pil_img)
 
tensor = transforms.ToTensor()(pil_img).unsqueeze_(0)
print(tensor.shape) 
 
pil_image = transforms.ToPILImage()(tensor.squeeze_(0))
print(pil_image.size)
pil_image_again = transforms.ToPILImage()(tensor).convert("RGB")
print(pil_image_again)
print(pil_image_again.size)
display(pil_image_again)
# pil_image_again.show() # not inline
# imshow(pil_img)
```
 
![pil image](/wp-content/uploads/2021/09/pil1.jpg)
 
The example shows the usage of `PIL.Image.open()` to open a given image file.
 
> `PIL.Image.open()` returns a 2D image.
 
> You can use `torchvision.transforms` to transform the `PIL.Image` to tensor format.
 
## Showing the image
 
We can use `pil_image_again.show()` but it doesn't work inline from some reason so knowing you will be working inside jupyter notebook as I am aware this method is not the best. 
 
You can simply use the `display()` method that works inline.
 
Another alternative is to use the `matplotlib.pyplot` method `imshow`.
 
## PIL functions
 
The PIL module provides a number of functions we will examine now.
 
 
### PIL.ImageFilter
 
With this we can achieve the EMBOSS effect.
 
```python
from PIL import ImageFilter
img2 = pil_image_again.filter(ImageFilter.EMBOSS)
display(img2)
```
 
![pil emboss](/wp-content/uploads/2021/09/pil_emboss.jpg)
 
CONTOUR effect as well:
 
```python
img2 = pil_image_again.filter(ImageFilter.CONTOUR)
display(img2)
```
 
![pil contour](/wp-content/uploads/2021/09/pil_contour.jpg)
 
MinFilter:
 
```python
img2 = pil_image_again.filter(ImageFilter.MaxFilter(size=5))
display(img2)
```
![min filter](/wp-content/uploads/2021/09/pil_minfilter.jpg)
 
 
MaxFilter:
 
```python
img2 = pil_image_again.filter(ImageFilter.MinFilter(size=5))
display(img2)
```
 
![max filter](/wp-content/uploads/2021/09/pil_maxfilter.jpg)
 
If you check 
 
```python
help(ImageFilter)
```
 
you will find all the possible filters.
 
### PIL.ImageEnhance 
 
```python
from PIL import ImageEnhance
effect = ImageEnhance.Brightness(pil_image_again)
display(effect.enhance(5))
```
 
![enhance brightness](/wp-content/uploads/2021/09/pil_enhance_brightness.jpg)
 
Similar to Brightness you can do to Contrast, Sharpness and Color.
 
### PIL.Image.ImageDraw
 
`ImageDraw` in PIL (pillow) works like this:
 
```python
import PIL
from PIL import ImageDraw
 
area = ImageDraw.Draw(pil_image_again)
area.rectangle((0,0, 200, 150), outline="white", width=1)
display(pil_image_again)
```
 
![pil primitive](/wp-content/uploads/2021/09/pil_primitive.jpg)
 
 
You can use `ImageDraw` to draw primitives such as line, point, text, ellipse, polygon, bitmaps, etc.
 
## Comparison with OpenCV
 
OpenCV is written in C and C++ whereas PIL is written using Python and C. Because of that OpenCV seems faster.

