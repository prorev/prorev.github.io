---
id: 455
title: Adding secondary menus to WordPress
date: 2011-06-07 12:34:27
author: taimane
layout: post
permalink: /adding-extra-menus/
published: true
categories:
   -
tags:
   -
---
Usually web sites are having the main navigation menu, but sometimes additional menus are required.

It is possible to have special context menus depending on the selected item in the WordPress main menu. 

In WordPress 3.0 adding additional menus is easy as 1-2-3.



1. Login to your backend and add a menu

<img class="alignnone size-full wp-image-457" title="topmenubackend" src="https://programming-review.com/wp-content/uploads/2011/06/topmenubackend.png" alt="" width="631" height="459" />



I named it "topmenu".



2. Add the following line in your <a title="WordPress theme" href="http://codex.wordpress.org/Theme_Development">WordPress theme</a> files where needed:

<pre><?php wp_nav_menu( array('menu' => 'topmenu' )); ?></pre>

I added the code to the header.php, but this will work also from any theme file: footer.php, sidebar.php, category.php, home.php, page-default.php, ...



3. Test the result from the front-end.

<img src="https://programming-review.com/wp-content/uploads/2011/06/topenu-e1307450287452.png" alt="" title="topenu" width="353" height="33" class="alignnone size-full wp-image-458" />  

