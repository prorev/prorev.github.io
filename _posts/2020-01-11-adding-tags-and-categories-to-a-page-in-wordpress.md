---
id: 525
title: Adding tags and categories to a page in WordPress
date: 2011-08-05 08:16:20
author: taimane
layout: post
permalink: /adding-tags-and-categories-to-a-page-in-wordpress/
published: true
categories:
   -
tags:
   -
---
By default pages in WordPress do not have the ability to use WordPress tags. Too bad — I needed that for my portfolio web page. After I examined I found the solution how to enable tags for all my pages.
Simple write this line to functions.php.

<pre>
if(!function_exists('addPageTags')){
function addPageTags(){
    register_taxonomy_for_object_type('post_tag', 'page');
}
add_action('admin_init', 'addPageTags');
}
</pre>

Additionally there is a similar way to add categories for the WordPress pages. Again the simple as adding 1 little function to your functions.php file.

<pre>
if(!function_exists('addPageCategories')){
function addPageCategories(){
    register_taxonomy_for_object_type('category', 'page');
}
add_action('admin_init', 'addPageCategories');
}
</pre>


Now even for the pages you will have these two guys:
<a><img src="https://programming-review.com/wp-content/uploads/2011/08/addtags.png" alt="" title="addtags" width="293" height="402" class="alignnone size-full wp-image-532" /></a>

Enjoy.
Thanks.  

