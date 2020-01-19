---
id: 518
title: Getting the values of custom post fields
date: 2011-07-20 13:49:28
author: taimane
layout: post
permalink: /wordpress/custom-post-fields/
redirect_from: /custom-post-fields/
published: true
categories:
   -
tags:
   -
---
It is possible to get the custom post field value?

Yes use `get_post_meta` function.

If "in the WordPress Loop" use this code:

```php
$result = get_post_meta($post->ID, 'customField', true);
```

If outside the Loop use this code:

```php
global $wp_query;
$postid = $wp_query->post->ID;
echo get_post_meta($postid, 'customField', true);
```
