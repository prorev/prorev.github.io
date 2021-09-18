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
 
img = np.zeros((300, 300, 3), dtype = "uint8")
 
green = (0, 255, 0)
cv2.line(img, (0, 0), (300, 300), green)
 
red = (255, 0, 0)
R = 150
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

Check out this [gist](https://gist.github.com/dejanbatanjac/7cefe4365921d75590e02c1cf43b70c2){:rel="nofollow"} for more details.