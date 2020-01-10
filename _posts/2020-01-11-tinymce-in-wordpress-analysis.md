---
id: 1647
title: TinyMCE in WordPress analysis
date: 2013-08-08 10:58:55
author: taimane
layout: post
permalink: /tinymce-in-wordpress-analysis/
published: true
categories:
   -
tags:
   -
---
<span style="font-size: medium;">From the dashboard side of view, the main function of WordPress is to mimic the Word processor. The main component of WordPress from word-processor-perspective is <strong>TinyMCE</strong> plugin that is entirely based on JavaScript. Enough reasons to analyze it.</span>

<span style="font-size: 16px;">Latest current version of TinyMCE can be found and downloaded from </span><a style="font-size: 16px;" href="http://www.tinymce.com/download/download.php">here</a><span style="font-size: 16px;">. </span><span style="font-size: 16px;">The WordPress uses some older and modified version "TinyMCE 3.5.8-wp2".</span>

TinyMCE has the modular structure by introducing plugins and themes (skins). In this analysis I will try to present the modifications of the TinyMCE plugin in WordPress environment and to show how TinyMCE has been set to work from WordPress (PHP) environment.

I will show how we can modify the environment of TinyMCE by using the "<strong>Advanced TinyMCE Config</strong>" plugin by <em>Andrew Ozz</em>. Lastly we will write few PHP scripts to customize the TinyMCE.

TinyMCE plugin has the following architecture:

<a href="https://programming-review.com/wp-content/uploads/2013/08/architecture_of_tinymce.png"><img class="size-full wp-image-1656 alignright" src="https://programming-review.com/wp-content/uploads/2013/08/architecture_of_tinymce.png" alt="architecture_of_tinymce" width="437" height="243" /></a>

Plugins and themes folders are most important. They explain the modular design of TinyMCE and also are responsible for the look and feel.

Here is the list of the plugins inside TinyMCE (version 4.x):
<pre>advhr, advimage, advlink, advlist, autolink, autoresize, autosave, bbcode, contextmenu, directionality, emotions, example, example_dependency, fullpage, fullscreen, iespell, inlinepopups, insertdatetime, layer, legacyoutput, lists, media, nonbreaking, noneditable, pagebreak, paste, preview, print, save, searchreplace, spellchecker, style, tabfocus, table, template, visualblocks, visualchars, wordcount, xhtmlxtras</pre>
However, not all of these plugins are used in WordPress version of TinyMCE; only the small subset. Here is the full list of the TinyMCE plugins used in WordPress:
<pre>directionality, fullscreen, inlinepopups, media, paste, spellchecker, tabfocus, wordpress, wpdialogs, wpeditimage, wpfullscreen, wpgallery, wplink, wpview</pre>
The unique plugins used only in WordPress are:
<pre>wordpress, wpdialogs, wpeditimage, wpfullscreen, wpgallery, wplink, wpview</pre>
<strong>As we can see </strong>: TinyMCE plugin for WordPress is has been modified, comparing to the original, on order to fit better to the WordPress.

Here is how TinyMCE looks by default.
<img class=" wp-image-1658 alignnone" src="https://programming-review.com/wp-content/uploads/2013/08/tinymce_visual.png" alt="tinymce_visual" width="564" height="328" />

What will happen if we delete <strong>plugins</strong> and<strong> themes </strong> folder from TinyMCE?
Strange but, the same look will be present again.

Meaning that without custom coding (or without using some plugins) these folders are not used. This is because most of the users are just fine to use the existing look and feel of TinyMCE. For this case WordPress guys created one big JavaScript bundle called <strong>wp-tynimce.js.gz</strong> file that is compressed for speed. That file contains all needed for the default TinyMCE look.

<strong>How to enable TinyMCE themes and plugins?</strong>

We can now refer to the "<strong>Advanced TinyMCE Config</strong>" plugin by <em>Andrew Ozz</em>. This plugin has a very good option to set specific TinyMCE settings. Let's first update the default TinyMCE theme called <strong>advanced</strong> by setting the new skin. <strong>Advanced</strong> theme has the following skins:
<ul>
	<li>default</li>
	<li>highcontrast</li>
	<li>o2k7</li>
	<li>wp_theme</li>
</ul>
If we like to change the skin to default here what we need to do in "<strong>Advanced TinyMCE Config</strong>" plugin by <em>Andrew Ozz.</em>

<a href="https://programming-review.com/wp-content/uploads/2013/08/tinymce_skin.png"><img class="size-full wp-image-1687 alignnone" src="https://programming-review.com/wp-content/uploads/2013/08/tinymce_skin.png" alt="tinymce_skin" width="491" height="204" /></a>

While in the single theme we can update the skins as we saw, but the more important question: Can we change the TinyMCE theme and the skin? And also what are the additional TinyMCE themes if any?

Unfortunately in WordPress 3.6 we do not have any other TinyMCE theme except the one and only <strong>Advanced</strong> theme. There is also the <strong>Simple</strong> theme available if you install "<strong>Advanced TinyMCE Config</strong>" as I checked. So I tested this and it worked.

In order to use the <strong>modern</strong> theme like in 4.0 TinyMCE

<a href="https://programming-review.com/wp-content/uploads/2013/08/modern.png"><img class=" wp-image-1692 alignnone" src="https://programming-review.com/wp-content/uploads/2013/08/modern.png" alt="modern" width="1033" height="448" /></a>

we need <strong>modern</strong> theme capable to work with WordPress, which is currently not case because the naming conventions and some procedure calls inside JavaScript have been changed.

Thanks  

