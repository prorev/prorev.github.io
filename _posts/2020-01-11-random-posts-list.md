---
id: 387
title: Random posts list
date: 2011-05-21 18:48:47
author: taimane
layout: post
permalink: /wordpress/random-posts-list/
redirect_from: /random-posts-list/
published: true
categories:
   -
tags:
   -
---
In some cases you need to show a list of random posts from your blog. This differs from the "related posts" list. In the related posts you would probable show the posts from the same category as the related one, or the posts that have the same tags as the related one.

The random post is a great for sidebars, because it gives the feedback to the visitor "what can be found" on the site.

Here is the code to generate the random posts that uses `'orderby' => 'rand'` (MySQL RAND function inside):

```php
// WP_Query arguments
$args = array (
	'post_type'              => array( 'post' ),
	'orderby'                => 'rand',
);

// The Query
$query = new WP_Query( $args );
```

