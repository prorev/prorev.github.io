---
id: 1596
title: Read HTML from URL
date: 2013-07-06 16:10:12
author: taimane
layout: post
permalink: /python-read-html/
published: true
categories:
   -
tags:
   -
---
Question is how to read HTML from some URL in Python. Here is the answer:

```
try:
  r = urllib2.urlopen(url)
except: 
  print "Unexpected error, looks that URL isn't available or doesn't exist."
  sys.exit(0)
html = r.read()
```
