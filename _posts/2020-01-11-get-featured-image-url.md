---
id: 536
title: Get Featured Image URL
date: 2011-08-23 10:47:23
author: taimane
layout: post
permalink: /wordpress/get-featured-image-url/
redirect_from: /get-featured-image-url/
published: true
categories:
   -
tags:
   -
---
Need to set and use a featured image for some post? 
Here we will describe featured images and how to get images URL in your code outside of a loop.
To use a featured image you need to add the following line to functions.php file of your theme.
```php
// This theme uses post thumbnails
add_theme_support( 'post-thumbnails' );
```

By default WordPress themes support this so you don't have to worry about.
Adding a featured image is very easy if you click "Set featured image": 

<img src="https://programming-review.com/wp-content/uploads/2011/08/featured.png" alt="" title="featured" width="185" height="72" class="alignnone size-full wp-image-537" />

After this step your post will have the featured image set.

```php
$thumbnail = get_the_post_thumbnail( $post->ID, 'thumbnail' );
```

but this code will return the `<img>` tag. To get the URL you need to have this:

```php
if (has_post_thumbnail( $post->ID ) ) {
$image = wp_get_attachment_image_src( 
get_post_thumbnail_id( $post->ID ), 'single-post-thumbnail' ); 
$thumbnailURL = $image[0]; 
}
```

<img src="https://programming-review.com/wp-content/uploads/2011/08/featured2.png" alt="" title="featured2" width="783" height="301" class="alignnone size-full wp-image-538" />
