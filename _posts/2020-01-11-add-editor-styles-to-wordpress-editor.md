---
id: 2934
title: Add editor styles to WordPress editor
date: 2016-07-11 11:41:57
author: taimane
layout: post
permalink: /add-editor-styles-to-wordpress-editor/
published: true
categories:
   -
tags:
   -
---
If your WordPress theme yields:
```
No reference to `add_editor_style() `was found in the theme. 
```

It is recommended you implement editor styling, so as to make the editor content match the resulting post output in the theme, for a better user experience.

You need to carry the CSS styles from the frontend to the backend editor so the content styles in the backend editor look as close to the one int he frontend.

You should create a file like `editor_style.css` that is a subset from the main web site styles. This file will contain styles directly related to the post content such as: typography, links, images, galleries,... 

```
add_editor_style( array("css/editor_style.css") );
```



  

