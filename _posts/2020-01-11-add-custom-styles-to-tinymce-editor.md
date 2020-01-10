---
id: 2937
title: Add custom styles to TinyMCE editor
date: 2016-07-11 11:46:44
author: taimane
layout: post
permalink: /add-custom-styles-to-tinymce-editor/
published: true
categories:
   -
tags:
   -
---
You need to add extra styles to the TinyMCE editor. This is a default editor in WordPress. Copy typography, and post presentation CSS lines lines from your main stylesheet into your new tinymce.css and update your functions.php file:

<pre>function custom_mce_css($wp) {
    return $wp .= ',' . get_bloginfo('stylesheet_directory') . '/css/tinymce.css';
}
add_filter( 'mce_css', 'custom_mce_css' );</pre>  

