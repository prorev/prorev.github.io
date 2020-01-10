---
id: 2530
title: WordPress Best image quality
date: 2015-09-28 00:35:23
author: taimane
layout: post
permalink: /wordpress-best-image-quality/
published: true
categories:
   -
tags:
   -
---
We needed the best quality for our images:

<pre>function custom_jpg_compression($args) { return 100;}
add_filter('jpeg_quality', 'custom_jpg_compression');
</pre>

Thanks  

