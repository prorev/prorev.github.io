---
id: 317
title: TimThumb PHP Script
date: 2011-05-13 18:59:40
author: taimane
layout: post
permalink: /timthumb-php-script/
published: true
categories:
   -
tags:
   -
---
You need to resize, crop or do basic raster image effects (brightness, contrast, greyscale, colorize...) on JPEG, GIF, PNG images. 

There is an PHP script named <a href="http://timthumb.googlecode.com/svn/trunk/timthumb.php">TimThumb</a> great for that job. The great thing you can add that script to your WordPress theme and improve theme functionality.



I've made a simple timthumb.php test against twentyten theme. 



<h2>The test</h2>



1. Insert timthumb.php file to the twentythen theme 

2. Call <pre>http://localhost/wordpress/wp-content/themes/twentyten/timthumb.php?

src=http://localhost/wordpress/wp-content/uploads/2009/08/Doctor3-750x1024.jpg&amp;w=200&amp;h=100&amp;zc=1</pre>



The <code>http://localhost/wordpress/wp-content/uploads/2009/08/Doctor3-750x1024.jpg</code> is the image from WordPress content. 

The parameters <code>"w"</code> and <code>"h"</code> specified above are the width and the height of the new thumbnail image. 

There are also other parameters you can use. Read more from <a href="http://www.binarymoon.co.uk/projects/timthumb/">here</a>. 



TimThumb.php can use external images, those on 'flickr.com', 'picasa.com', 'blogger.com', 'wordpress.com', 'img.youtube.com', 'upload.wikimedia.org', or any other domain, but in that case you need to set:



<pre>define ('ALLOW_EXTERNAL', TRUE);</pre>	

which is by default set to <code>FALSE</code>.



As a conclusion you can use timthumb.php script, that is based on PHP GD lib, for many purposes like image resizing, cropping, and filtering and improve your WordPress themes.



  

