---
id: 12971
title: OpenCV Create and Show the Image Correctly
date: 2020-01-22
author: taimane
layout: post
permalink: /python/opencv-create-image
published: true
image: 
categories: 
   - python
tags:   
   - image
---
- [Create a gray image](#create-a-gray-image)
- [Draw primitives](#draw-primitives)
- [Create a noisy image](#create-a-noisy-image)
- [Read image from URL](#read-image-from-url)
- [Show image](#show-image)
- [Blue apple](#blue-apple)
- [Create a grayscale image from RGB](#create-a-grayscale-image-from-rgb)
- [Show single channel image](#show-single-channel-image)
- [Convert single channel image to RGB (three channels)](#convert-single-channel-image-to-rgb-three-channels)

Usually when we think of images we imagine three channel images.
 
Let's create the image in Python using just `matplotlib.pyplot` and `numpy` packages. One great example would be to create a three channel gray image.
 
## Create a gray image
 
```python
#create gray image 270x474 with 3 channels
%matplotlib inline
import matplotlib.pyplot as plt
import numpy as np
 
img = np.empty([270,474, 3], dtype=np.uint8) 
img.fill(128) # gray
 
plt.imshow(img)
plt.show()
 
print(img.shape)
print(type(img))
```
 
In this example we created a 3 channel image and filled it in gray.
 
![gray](/wp-content/uploads/2021/09/gray.jpg)
 
## Draw primitives

Lines and circles are basic primitives we can add to the image. We use OpenCV library for adding primitives because it works directly on numpy images. 

```python
import numpy as np
import cv2

img = np.zeros((270,474, 3), dtype = "uint8")

green = (0, 255, 0)
cv2.line(img, (0, 0), (474, 270), green)

red = (255, 0, 0)
R = 100
(centerX, centerY) = (img.shape[1] // 2, img.shape[0] // 2)
cv2.circle(img, (centerX, centerY), R , red)

plt.imshow(img)
plt.show()
```
 
![primitives](/wp-content/uploads/2021/09/primitives.jpg)

We used `matplotlib.pyplot` to show the image.
 
## Create a noisy image
 
Again we will create the image just using `matplotlib.pyplot` and `numpy`.
 
```python
import matplotlib.pyplot as plt
import numpy as np
img = np.random.rand(270,474,3)
plt.imshow(img)
```
 
![noise](/wp-content/uploads/2021/09/noise.jpg)
 
Here we are using the `matplotlib.pyplot` method `imshow` again.
 
## Read image from URL
 
Next we will read the image from the URL and save it to the file system. 
 
```python
import requests
url = 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.MBtx9vFOK2x5CM9Jjx0M5AHaEO%26pid%3DApi&f=1'
response = requests.get(url, allow_redirects=True) # nostream
with open('apple.jpg', 'wb') as handle:
    handle.write(response.content)
    
# saved as C:\Users\dj\apple.jpg
print(handle)
```
 
## Show image
 
Now we will just read the apple.jpg image using cv2 Python library.
 
```python
%matplotlib inline
from matplotlib import pyplot as plt
import cv2
img=cv2.imread(r"apple.jpg")
print(img.shape)
img=img[:,:,::-1]
_ = plt.imshow(img)
```
 
![apple](/wp-content/uploads/2021/09/apple.jpg)

## Blue apple

If we would not convert the image with `img=img[:,:,::-1]` we would get the blue apple.

```python
%matplotlib inline
from matplotlib import pyplot as plt
import cv2
img=cv2.imread(r"apple.jpg")
_ = plt.imshow(img)
```

![blue apple](/wp-content/uploads/2021/09/blueapple.jpg)


## Create a grayscale image from RGB

We can just use OpenCV `cvtColor` method to create single channel image and then if we combine three of these using OpenCV `merge` method we will get the gray apple.

```python
img = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)
print(img.shape)
img = cv2.merge([img,img,img])
_ = plt.imshow(img)
```

![gray apple](/wp-content/uploads/2021/09/grayscale.jpg)

Check out this [gist](https://gist.github.com/dejanbatanjac/2dd9274102faa365f21bf6f48107a999){:rel="nofollow"} for more details.

## Show single channel image

```python
%matplotlib inline
from matplotlib import pyplot as plt
import cv2
img=cv2.imread(r"apple.jpg", cv2.IMREAD_GRAYSCALE)
print(img.shape)
_ = plt.imshow(img)
```

![grayscale apple](/wp-content/uploads/2021/09/grayscaleapple1.jpg)

But this does not look gray, because imshow method is using viridis cmap. Let's use gray cmap.

```python
_ = plt.imshow(img, cmap='gray') # default is viridis
```

![grayscale apple](/wp-content/uploads/2021/09/grayscaleapple2.jpg)

## Convert single channel image to RGB (three channels)

```python
%matplotlib inline
from matplotlib import pyplot as plt
import cv2
grayimg=cv2.imread(r"apple.jpg", cv2.IMREAD_GRAYSCALE)
print(grayimg.shape)
img = cv2.cvtColor(grayimg,cv2.COLOR_GRAY2RGB)
print(img.shape)
_ = plt.imshow(img)
```

![grayscale apple](/wp-content/uploads/2021/09/grayscaleapple3.jpg)
