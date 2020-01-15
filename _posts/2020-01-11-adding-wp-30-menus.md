---
id: 295
title: How to add WP 3.0 menus to non WP 3.0 themes?
date: 2011-05-12 23:09:58
author: taimane
layout: post
permalink: /adding-wp-30-menus/
published: true
categories:
   -
tags:
   -
---
You are having an old WordPress theme designed before WordPress 3.0, for instance designed for WordPress 2.8.

You need to update the theme to support native WordPress 3.0 menus. Here I will provide you the steps to do that.

But first how can you recognize that your WordPress theme doesn't support WP 3.0 menus. Here is the key:

<img src="https://programming-review.com/wp-content/uploads/2011/05/wordpress30native-menu.png" alt="" title="wordpress30native-menu" width="473" height="371" class="alignnone size-full wp-image-296" />

If you get the feedback as in the previous image your WordPress theme doesn't support native WP 3.0 menus.



Here are the steps to add the menus.

<h2>Update functions.php file</h2>

Add the following line to the <code>functions.php</code> file of your theme

<pre>// add support for navigation menu

if (function_exists('register_nav_menu')) {

register_nav_menu('primary', __('Menu'));

}

</pre>



<h2>Update header.php</h2>

Add the following line to your <code>header.php</code> file

<pre>

<div id="access" role="navigation">

  	<?php wp_nav_menu( array( 'container_class' => 'menu-header', 'theme_location' => 'primary' ) ); ?>

 </div><!-- #access -->

</pre>



Now you will get something like this:

<a href="https://programming-review.com/wp-content/uploads/2011/05/wordpress-theme.png"><img src="https://programming-review.com/wp-content/uploads/2011/05/wordpress-theme.png" alt="" title="wordpress theme" width="434" height="260" class="alignnone size-full wp-image-297" /></a>



What we need as the final step is to add additional CSS styles for the horizontal menu layout and for the menu inheritance.

<h2>Add CSS styles to style.css file</h2> 



<pre>/* =Menu

-------------------------------------------------------------- */

#access {

	background: #000;

	display: block;

	float: left;

	margin: 0 auto;

	width: 940px;

}

#access .menu-header,

div.menu {

	font-size: 13px;

	margin-left: 12px;

	width: 928px;

}

#access .menu-header ul,

div.menu ul {

	list-style: none;

	margin: 0;

}

#access .menu-header li,

div.menu li {

	float: left;

	position: relative;

	display:inline;

}

#access a {
<a rel="nofollow" href="https://
	display: block;
<a rel="nofollow" href="https://
	line-height: 38px;

	padding: 0 10px;

	text-decoration: none;

}

#access ul ul {

	box-shadow: 0px 3px 3px rgba(0,0,0,0.2);

	-moz-box-shadow: 0px 3px 3px rgba(0,0,0,0.2);

	-webkit-box-shadow: 0px 3px 3px rgba(0,0,0,0.2);

	display: none;

	position: absolute;

	top: 38px;

	left: 0;

	float: left;

	width: 180px;

	z-index: 99999;

}

#access ul ul li {

	min-width: 180px;

}

#access ul ul ul {

	left: 100%;

	top: 0;

}

#access ul ul a {

	background: #333;

	line-height: 1em;

	padding: 10px;

	width: 160px;

	height: auto;

}

#access li:hover > a,

#access ul ul :hover > a {

	background: #333;

	color: #fff;

}

#access ul li:hover > ul {

	display: block;

}

#access ul li.current_page_item > a,

#access ul li.current-menu-ancestor > a,

#access ul li.current-menu-item > a,

#access ul li.current-menu-parent > a {

	color: #fff;

}

* html #access ul li.current_page_item a,

* html #access ul li.current-menu-ancestor a,

* html #access ul li.current-menu-item a,

* html #access ul li.current-menu-parent a,

* html #access ul li a:hover {

	color: #fff;

}</pre>





Now the final layout will be like this:

<a href="https://programming-review.com/wp-content/uploads/2011/05/cssmenu.png"><img src="https://programming-review.com/wp-content/uploads/2011/05/cssmenu.png" alt="" title="cssmenu" width="513" height="167" class="alignnone size-full wp-image-298" /></a>

Note how easy is to work with the menus now from the WP backend:

<a href="https://programming-review.com/wp-content/uploads/2011/05/nativewordpressmenus.png"><img src="https://programming-review.com/wp-content/uploads/2011/05/nativewordpressmenus-1024x582.png" alt="" title="nativewordpressmenus" width="640" height="363" class="alignnone size-large wp-image-301" /></a>



