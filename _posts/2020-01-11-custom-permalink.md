---
id: 2426
title: Custom permalink that contains post meta information
date: 2014-10-28 16:30:32
author: taimane
layout: post
permalink: /custom-permalink/
published: true
categories:
   -
tags:
   -
---
Here is the example how to improve custom post type permalink by adding additional information from the post meta in here the album name for the gallery. The post type in here is called <strong>gallery</strong>.

Instead of URL like <code>/gallery/post-name</code> we will have <code>/gallery/album-name/post-name</code>

```
add_filter('post_type_link', 'f_gallery', 10, 3);
function f_gallery($permalink, $post, $leavename)
{

  $post_id = $post->ID;
  if($post->post_type != 'gallery' || empty($permalink) || in_array($post->post_status, array('draft', 'pending', 'auto-draft')))
    return $permalink;
  $album = get_post_meta($post_id, 'album', true);
  $album = sanitize_title($album);
  if(empty($album)) { $album = "unknown"; }
  $permalink = str_replace('gallery/', 'gallery/'.$album .'/' , $permalink);

  return $permalink;

}
```

