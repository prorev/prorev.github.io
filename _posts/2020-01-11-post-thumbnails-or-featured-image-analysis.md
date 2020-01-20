---
id: 303
title: Post thumbnails aka "featured images" analysis
date: 2011-05-13 01:58:23
author: taimane
layout: post
permalink: /wordpress/featured-image/
redirect_from: /post-thumbnails-or-featured-image-analysis/
published: false
categories:
   -
tags:
   -
---
Starting from the WordPress version 2.9 posts, pages can have the associated thumbnail image. In WordPress 3.0 the terminology changed a bit and the "thumbnail images" are now "featured images".


<img class="alignnone size-full wp-image-305" title="featuredimage" src="https://programming-review.com/wp-content/uploads/2011/05/featuredimage.png" alt="" width="289" height="354" />



There is only a single line needed in the `functions.php` to turn featured images on/off.

```php
add_theme_support( 'post-thumbnails' );
```
Typically one will add thumbnail images to the category archives like here:

<img src="https://programming-review.com/wp-content/uploads/2011/05/addingcategorythumbnails.png" alt="" title="addingcategorythumbnails" width="731" height="619" class="alignnone size-full wp-image-311" />


Here is the receipt for the getting the previous image layout into 2010 theme.

1. Create (clone) `loop-category.php` from loop.php
(get_template_part('loop', 'category'); = loop-category.php) 

2. Add the following line 

```php
<a class="featured">
<?php the_post_thumbnail( 'thumbnail' ); ?>
</a>
```

before 
```php
<?php the_excerpt(); ?>
```



3. Add the following to the style.css just before <code>/* =Navigation</code>

```css
img.attachment-thumbnail{
  border: 7px solid #EEE;
  -moz-border-radius: 5px;
  -webkit-border-radius: 5px;
}

div.type-post, a.featured{
  float:left;
  padding-right:20px;
}
```
To set the size of the post-tumbnails go to Settings->Media in WP backend.

<img src="https://programming-review.com/wp-content/uploads/2011/05/settings-media.png" alt="" title="settings-media" width="733" height="218" class="alignnone size-full wp-image-309" />
