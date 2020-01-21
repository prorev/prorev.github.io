---
id: 1647
title: TinyMCE in WordPress analysis
date: 2013-08-08 10:58:55
author: taimane
layout: post
permalink: /wordpress/tinymce/
published: true
categories:
   -
tags:
   -
---
From the _dashboard side of view_, the main function of WordPress is to mimic the Word processor. The main component of WordPress from word-processor perspective is **TinyMCE plugin** that is entirely based on JavaScript. Enough reasons to analyze it.


## Latest current version of TinyMCE 
This can be found and downloaded from [here](http://www.tinymce.com/download/download.php){:rel="nofollow"}.

TinyMCE has the modular structure by introducing plugins and themes (skins). In this analysis I will try to present the modifications of the TinyMCE plugin in WordPress environment and to show how TinyMCE has been set to work from WordPress (PHP) environment.

I will show how we can modify the environment of TinyMCE by using the **Advanced TinyMCE Config** plugin by _Andrew Ozz_. Lastly we will write few PHP scripts to customize the TinyMCE.

## TinyMCE plugin architecture:

<a href="https://programming-review.com/wp-content/uploads/2013/08/architecture_of_tinymce.png"><img class="size-full wp-image-1656 alignright" src="https://programming-review.com/wp-content/uploads/2013/08/architecture_of_tinymce.png" alt="architecture_of_tinymce" width="437" height="243" /></a>


Plugins and themes folders are most important. They explain the modular design of TinyMCE and also are responsible for the look and feel.

Here is the list of the plugins inside TinyMCE (version 4.x):

```
advhr, advimage, advlink, advlist, autolink, autoresize, autosave, bbcode, contextmenu, directionality, emotions, example, example_dependency, fullpage, fullscreen, iespell, inlinepopups, insertdatetime, layer, legacyoutput, lists, media, nonbreaking, noneditable, pagebreak, paste, preview, print, save, searchreplace, spellchecker, style, tabfocus, table, template, visualblocks, visualchars, wordcount, xhtmlxtras
```

### Customized for WordPress

However, not all of these plugins are used in WordPress version of TinyMCE --  only the small subset. Here is the full list of the TinyMCE plugins used in WordPress:

```
directionality, fullscreen, inlinepopups, media, paste, spellchecker, tabfocus, wordpress, wpdialogs, wpeditimage, wpfullscreen, wpgallery, wplink, wpview
```

The **unique** plugins used only in WordPress are:

```
wordpress, wpdialogs, wpeditimage, wpfullscreen, wpgallery, wplink, wpview
```

**As we can see** TinyMCE plugin for WordPress is has been modified, comparing to the original, to better fit WordPress.

Here is how TinyMCE looks by default.

<img class=" wp-image-1658 alignnone" src="https://programming-review.com/wp-content/uploads/2013/08/tinymce_visual.png" alt="tinymce_visual" width="564" height="328" />


What will happen if we _delete plugins and themes folder_ from TinyMCE?

Strange but, the same look will be present again.

Meaning that without custom coding (or without using some plugins) these folders are not used. This is because most of the users are just fine to use the existing look and feel of TinyMCE. For this case WordPress guys created one big JavaScript bundle called _wp-tynimce.js.gz_ file that is compressed for speed. That file contains all needed for the default TinyMCE look.



## How to enable TinyMCE themes and plugins?

We can now refer to the `Advanced TinyMCE Config`" plugin by _Andrew Ozz_. This plugin has a very good option to set specific TinyMCE settings. Let's first update the default TinyMCE theme called <strong>advanced</strong> by setting the new skin. <strong>Advanced</strong> theme has the following skins:

* default
* highcontrast
* o2k7
* wp_theme



If we like to change the skin to default here what we need to do in **Advanced TinyMCE Config** plugin by <em>Andrew Ozz.</em>


<a href="https://programming-review.com/wp-content/uploads/2013/08/tinymce_skin.png"><img class="size-full wp-image-1687 alignnone" src="https://programming-review.com/wp-content/uploads/2013/08/tinymce_skin.png" alt="tinymce_skin" width="491" height="204" /></a>



While in the single theme we can update the skins as we saw, but the more important question: Can we change the TinyMCE theme and the skin? And also what are the additional TinyMCE themes if any?


Unfortunately in WordPress 3.6 we do not have any other TinyMCE theme except the one and only <strong>Advanced</strong> theme. There is also the <strong>Simple</strong> theme available if you install "<strong>Advanced TinyMCE Config</strong>" as I checked. So I tested this and it worked.

In order to use the <strong>modern</strong> theme like in 4.0 TinyMCE we need <strong>modern</strong> theme capable to work with WordPress, which is currently not case because the naming conventions and some procedure calls inside JavaScript have been changed.


<a href="https://programming-review.com/wp-content/uploads/2013/08/modern.png"><img class=" wp-image-1692 alignnone" src="https://programming-review.com/wp-content/uploads/2013/08/modern.png" alt="modern" width="1033" height="448" /></a>


## Add custom style to TinyMCE (WordPress way)

You need to add extra styles to the TinyMCE editor. This is a default editor in WordPress. Copy typography, and post presentation CSS lines lines from your main stylesheet into your new tinymce.css and update your functions.php file:

```php
function custom_mce_css($wp) {
    return $wp .= ',' . get_bloginfo('stylesheet_directory') . '/css/tinymce.css';
}
add_filter( 'mce_css', 'custom_mce_css' );
```
