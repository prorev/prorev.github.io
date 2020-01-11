---
id: 1149
title: Google favicon checker and adding favicion to WordPress
date: 2013-03-01 19:35:28
author: taimane
layout: post
permalink: /google-favicon-checker/
published: true
categories:
   -
tags:
   -
---
Simple type 

```
http://www.google.com/s2/favicons?domain=[domain]
```

Where [domain] is your domain of interest.

In order to add the favicon to WordPress use the following line of header.php file.

```
<link rel="shortcut icon" href="<?php echo get_bloginfo('stylesheet_directory'); ?>/favicon.ico" type="image/x-icon" />
```
