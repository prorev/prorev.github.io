---
id: 12971
title: Python Wheels Intro
date: 2020-01-22
author: taimane
layout: post
permalink: /python/wheels
published: true
image: 
categories: 
   - python
tags:   
   - install
---

_Table of Contents:_
- [Elementary info about the Python wheel](#elementary-info-about-the-python-wheel)
- [Example of a wheel file format](#example-of-a-wheel-file-format)
- [Ways to install Python package](#ways-to-install-python-package)
- [Summary](#summary)


## Elementary info about the Python wheel

A Python wheel with the extension `.whl` is a zip file. 

> Try to rename `file.whl` to `file.whl.zip` and you will be able to unzip it.

Wheels contain both Python package files (`.py`) and metadata.

Wheels are installed using `pip`.

You should not find any `.pyc` files inside a wheel. `pip` automatically generates `.pyc` files.

In order to work with Python `.whl` files you need  `wheel` and `setuptools>=0.8` installed.

Example: Update your wheels
```
$pip install -U wheel setuptools
```

## Example of a wheel file format

Let's take for instance pandas wheel:

```
pandas-1.3.3-cp37-cp37m-macosx_10_9_x86_64.whl
```

We can read as follows:

```
pandas             = package name
1.3.3              = package version
macosx_10_9_x86_64 = platform
cp37               = CPython 3.7 implementation 
cp37m              = as before but with pymalloc extension
```

Some other Python [implementations](https://www.python.org/download/alternatives/){:rel="nofollow"} we may find instead of CPython (cp):

* IronPython (Python for .NET)
* Jython (Python for Java)
* PyPy (Python JIT)
* MicroPython (Python for micro controllers)

Now we understand we create Python wheels _for different platforms and different Python implementations_.

If yoy would create a wheel for any platform the file name would be:

```
pandas-1.3.3-cp37-cp37m-any.whl
```

> If your project is pure Python then you will use "any" keyword and create pure Python wheel.

> If your project contains compiled extensions, then you will create _platform specific wheel_. 


## Ways to install Python package

In Python you can install packages several ways:

* from source files directly
* from git branches, tags, or hashes (similar as source files).
* from egg file (replaced by wheel)
* from zip file (`.zip` file)
* from wheel (`.whl` file) 

Here we will provide examples for the last two options:

_Example installing the package from zip file:_
```
pip install https://github.com/user/repository/archive/branch.zip
```

_Example installing the package from  `.whl` file:_ 

```
pip install https://github.com/user/repository/archive/branch.whl
````

Wheels is the fastest way to install Python packages thus it is _preferred way_. 

> Wheels are often smaller than source distributions, but this may not be the case always.


## Where is the Python wheel metadata

If you unzip a `.whl` file you can find metadata info in a file called METADATA inside **.dist-info** folder.

_Example of a keras wheel METADATA file:_
```
Metadata-Version: 2.1
Name: keras
Version: 2.6.0
Summary: TensorFlow Keras.
Home-page: https://keras.io/
Author: Google Inc.
Author-email: packages@tensorflow.org
License: Apache 2.0
Download-URL: https://github.com/keras-team/keras/tags
Keywords: tensorflow keras tensor machine learning
Platform: UNKNOWN
...
```

## Summary

Wheel was introduced in 2012 as a packaging format to install a package without building or compilation, thus it is fast.

Wheel came trough PEP (Python Enhancement Proposal).
Wheels do not have `.pyc` files inside. 
You can check the contents of a wheel if you unzip it.



