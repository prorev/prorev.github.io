---
id: 2897
title: List of last updated files in a folder
date: 2016-06-13 10:54:55
author: taimane
layout: post
permalink: /linux/last-updated-files/
redirect_from: /list-of-last-updated-files-in-a-folder/ 
published: true
categories:
   -
tags:
   -
---


```bash
find /my/very/new/folder -printf '%T+ %p\n' | sort -r | head -20
```

This will return last 20 files.

  

