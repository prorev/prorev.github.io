---
id: 2779
title: Make good thumbnails in WordPress
date: 2016-03-30 18:38:36
author: taimane
layout: post
permalink: /make-good-thumbnails-in-wordpress/
published: true
categories:
   -
tags:
   -
---
First thought. You would probable define the thumbnails and improve the image quality to use them later:

```
/*
* add post thumbnails 
*/
add_theme_support("post-thumbnails");
add_image_size("slider", 500, 350, true);
add_image_size("slidertop", 120, 80, true);
add_image_size("topweb", 60, 60, true);

add_filter("jpeg_quality", "custom_jpg_compression");
/*
* make 100 percent quality for jpeg
*/
function custom_jpg_compression($args) {
    return 100;
}
```
