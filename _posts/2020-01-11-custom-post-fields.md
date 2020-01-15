---
id: 518
title: Getting the values of custom post fields
date: 2011-07-20 13:49:28
author: taimane
layout: post
permalink: /custom-post-fields/
published: true
categories:
   -
tags:
   -
---
It is possible to get the custom post field value?



YES. You need to use <code>get_post_meta</code> function.



If "in the WordPress Loop" use this code

<pre>$result = get_post_meta($post->ID, 'customField', true); </pre>


Thanks
If outside the Loop:



<pre>global $wp_query;

$postid = $wp_query->post->ID;

echo get_post_meta($postid, 'customField', true);</pre>



Thanks.  

