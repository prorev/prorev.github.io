---
id: 1786
title: Easy Lin zipping activities to recall later
date: 2013-11-28 20:38:49
author: taimane
layout: post
permalink: /linux/zip/
redirect_from: /easy-linux-zip/
published: true
categories:
   -
tags:
   -
---
Having some big folder with 100k of images and thumbnails stored in <code>thumbs</code> folders here is how to delete all thumbnails and to create a zip of all images w/o thumbnails


```
find . -name thumbs -exec rm -rf {} \;
zip -r  gallery.zip gallery
```

Here is how to test the content of the gallery.zip w/o unzipping...

```
unzip -l gallery.zip
```
