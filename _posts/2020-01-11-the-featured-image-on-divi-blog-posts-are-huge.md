---
id: 2599
title: The Featured Image on Divi Blog Posts Are Huge
date: 2016-01-12 22:15:07
author: taimane
layout: post
permalink: /the-featured-image-on-divi-blog-posts-are-huge/
published: true
categories:
   -
tags:
   -
---
This is a beta 2.5 Divi version and I know I am working on non legacy version, since current legacy version 2.3 still, but the troubleshoot is just simple when using Divi Child theme. 

Just need to find the lines from <code>single-project.php</code>:
<pre>//$width = (int) apply_filters( 'et_pb_portfolio_single_image_width', 1080 );
//$height = (int) apply_filters( 'et_pb_portfolio_single_image_height', 9999 );
</pre>
and comment these lines, and move the <code>single-project.php</code> to the web server again.

Else you may get very unclear pictures, based on the original images you uploaded for your project thumbnails.

Thanks
  

