---
id: 345
title: Useful info about WordPress
date: 2011-05-16 15:29:34
author: taimane
layout: post
permalink: /wordpress-info/
published: true
categories:
   -
tags:
   -
---
Here are aligned useful WP functions needed for WP theme and plugin development:

<h2>get_bloginfo() — returns various info about blog </h2> 
<pre>// get the WP theme URL
get_bloginfo( 'template_directory' );</pre>

<pre>// returns the base web site URL
get_bloginfo('siteurl' );</pre>

<pre>// get the stylesheet URL (style.css)
get_bloginfo( 'stylesheet_url' );</pre>

<h2>get_option()  — returns info from the wp_options table</h2>
<pre>// get blogname from the options table
get_option('blogname');</pre>Options table:<img src="https://programming-review.com/wp-content/uploads/2011/05/optionstable1.png" alt="" title="optionstable" width="687" height="635" class="alignnone size-full wp-image-353" />  

