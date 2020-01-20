---
id: 2403
title: Uploading files to web server - idea
date: 2014-09-14 20:57:42
author: taimane
layout: post
permalink: /uploading-files-to-web-server-idea/
published: false
categories:
   -
tags:
   -
---
In some browsers, mostly in those based on WebKit, it is possible to drag and drop whole folders. Use that.



Files that have to be uploaded can be about several gigabytes in size. In such cases standard upload may fail, since browsers still cannot handle it properly. 

Then slice the files in chunks and send them one by one. Use HTML5 XMLHttpRequest for sendnig the chunks. 



HTML5 can enable to provide access to raw file data. Use that to display thumbnails instantly, when you select the images in the dialog or when you drag&drop them.



Thansk  

