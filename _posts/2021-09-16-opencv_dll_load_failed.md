---
id: 12971
title: ImportError - DLL load failed - The specified module could not be found.
date: 2020-01-22
author: taimane
layout: post
permalink: /python/opencv-dll-load-failed
published: true
image: 
categories: 
   - python
tags:
   - opencv
   - windows
---
You installed Python (using Anaconda) on Windows 10.
 
<!-- ![anaconda](/wp-content/uploads/2021/09/anaconda.png){:height="341px" width="448"} -->
 
This is an excellent way to deal with Python which gives you conda environments for free.
 
Now you need to install the opencv package using pre-built libraries. Create a conda environment called opencv.
 
```
conda create --name opencv
```
 
Once you create the environment, activate it.
 
```
conda activate opencv
```
 
Check your Python version:
 
![opencv2](/wp-content/uploads/2021/09/opencv2.png)
 
Then install opencv using pip:
 
```
pip install opencv-python
pip install opencv-contrib-python
```
 
Common problem on Windows 10 may be:
 
![opencv3](/wp-content/uploads/2021/09/opencv3.png)
 
**ImportError: DLL load failed: The specified module could not be found.**
 
This problem means some opencv dlls are missing. Opencv has a cv2.pyd file packaged as a **dynamic link library**. 

The problem indicates some of the cv2.pyd DLL dependencies are not loading.

Here are the steps to resolve.
 
## Steps to resolve: DLL load failed: The specified module could not be found.
 
Here are the steps you need to check:
 
1) Make sure you have Visual C++ redistributable 2015 installed on Windows 10
 
![opencv4](/wp-content/uploads/2021/09/opencv4.png)
 
2) If you have Windows N or KN edition, install Windows Media Feature Pack.
 
![opencv5](/wp-content/uploads/2021/09/opencv5.png)
 
If you don't have Media Features you need to enable it via Settings -> Optional Features:
 
![opencv6](/wp-content/uploads/2021/09/opencv6.png)
 
3) For Windows Server 2012+, I found a [troubleshooting info](https://pypi.org/project/opencv-python/) from the official opencv documentation:
 
_Please install the Feature called "Media Foundation" in the Server Manager. Beware, some posts advise to install "Windows Server Essentials Media Pack", but this one requires the "Windows Server Essentials Experience" role, and this role will deeply affect your Windows Server configuration (by enforcing active directory integration etc.); so just installing the "Media Foundation" should be a safer choice._ 

4) If the problem persist download [Dependencies](https://github.com/lucasg/Dependencies){:rel="nofollow"} and search for the package cv2.pyd file to debug missing DLL issues.


Once you resolve the problems the output should be without the error message:

![opencv7](/wp-content/uploads/2021/09/opencv7.png)
