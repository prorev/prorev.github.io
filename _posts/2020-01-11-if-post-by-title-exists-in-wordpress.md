---
id: 2699
title: Check if post by title exists in WordPress?
date: 2016-02-04 19:23:59
author: taimane
layout: post
permalink: /wordpress/title-check/
redirect_from: /if-post-by-title-exists-in-wordpress/
published: true
categories:
   -
tags:
   -
---
You need to check if post (of any post type) with specific title exists.

You don't use direct SQL inserts since this is not per WordPress codex.

```php
$title = "Check if this title exists?";
$post = get_page_by_title( $title, 'OBJECT', 'post' );
if(NULL===$post){  // insert post
  $new_post = array (
  'post_title' => $title,
  'post_content' => $description,
  'post_type' => "post",
  'post_status' => "draft"
  );
  $id = wp_insert_post ( $new_post );
}else{ 
  //update post
  $id = $post->ID;
  $update_post = array (
  'ID' =>	$id,
  'post_title' => $title,
  'post_content' => $description,
  'post_type' => "post",
  'post_status' => "draft"
  );
   wp_update_post( $update_post );
}
```
Similar for any custom post type you can use

```php
$post = get_page_by_title( $title, 'OBJECT', 'custom_post_type' );
```

