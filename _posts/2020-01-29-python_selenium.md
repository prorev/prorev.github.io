---
id: 12971
title: Python strings
date: 2020-01-22
author: taimane
layout: post
permalink: /python/selenium
published: false
image: 
categories: 
   - python
tags:
   - selenium
---
_Table of Contents:_
- [What is selenium project?](#what-is-selenium-project)
- [How to install selenium with chromium?](#how-to-install-selenium-with-chromium)
- [Why we need selenium](#why-we-need-selenium)

---
![str](/wp-content/uploads/2020/01/string25_0.jpg)

## What is selenium project?


## How to install selenium with chromium?

Linux part:
```bash
apt-get update 
pip install selenium
apt install chromium-chromedriver
cp /usr/lib/chromium-browser/chromedriver /usr/bin
# '/usr/lib/chromium-browser/chromedriver' and '/usr/bin/chromedriver' are the same file
```
Python part
```python
import sys
# add to the driver to the sys path
sys.path.insert(0,'/usr/lib/chromium-browser/chromedriver')
from selenium import webdriver
```


## Why we need selenium
