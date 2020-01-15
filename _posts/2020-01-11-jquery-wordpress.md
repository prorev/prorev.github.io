---
id: 221
title: jQuery on WordPress
date: 2011-03-07 20:09:30
author: taimane
layout: post
permalink: /jquery-wordpress/
published: true
categories:
   -
tags:
   -
---
There is absolutely needed to outline how <strong><a rel="nofollow" href="http://en.wikipedia.org/wiki/JQuery">jQuery</a></strong> should be used together with <strong>WordPress</strong> because one can fail easily. I used my time to figure out what steps I need to undertake to have the perfect match.

Here are the rules you should follow if you want to use jQuery that is already present in WordPress installation.
#1. You should edit your <strong>header.php</strong> file of your WordPress theme like this.
```
<?php wp_enqueue_script("jquery");?>
<?php wp_head(); ?>
```
Comment: Your theme most probable has `wp_head()` function in it and you should add the **line BEFORE!!!!!!** `wp_head()` function.

#2. After `wp_head()` function add your jQuery code like this:
```
<script type="text/javascript">
var $j = jQuery.noConflict();
$j(document).ready(function(){
  $j("a").mouseover(function(){
	alert("mouse over the link");
  });
});
</script>
```
#3. The above code from #1 and #2 must be inside the `wp_head()` tags of your **header.php** file in your theme.


Note that I have fond the similar explanation <a rel="nofollow" href="http://digwp.com/2009/06/including-jquery-in-wordpress-the-right-way/">here</a>.

Note that one can use theme **functions.php** file to add <strong>jQuery </strong>support. This can be done the following way:
```
<?php wp_enqueue_script('jquery');
    function hook_to_wp_head(){
?>
<script type="text/javascript">
var $j = jQuery.noConflict();
$j(document).ready(function(){
  $j("a").mouseover(function(){
	alert("mouse over the link");
  });
});
</script>
<?php
}
add_filter('wp_head', 'hook_to_wp_head');
?>
```
If you updated your functions.php file this way than and your header.php file as shown above than your mouseover function will execute twice.
