---
id: 402
title: Conditions in WordPress
date: 2011-05-26 15:30:04
author: taimane
layout: post
permalink: /wordpress/conditions/
redirect_from: /conditions/
published: true
categories:
   -
tags:
   -
---
Often I need to have a feedback about the WordPress conditions that are met on any particular page.

This comes handy when custom developing web sites. I called the function `get_post_conditions()`.

It examines if WordPress conditions such as <code>is_home</code>, <code>is_page</code>, <code>is_single</code>, ... are met.



```php
/* call it anywhere and get the conditions set */
function get_post_conditions(){
  global $wp_query;
  foreach (array('is_single','is_preview','is_page','is_archive','is_date','is_year','is_month','is_day','is_time','is_author','is_category','is_tag','is_tax','is_search','is_feed','is_comment_feed','is_trackback','is_home','is_404','is_comments_popup','is_admin','is_attachment','is_singular','is_robots','is_posts_page','is_paged') as $is){

    if ($wp_query->$is){
     echo "<pre>";
     print($is);
     echo "</pre>";
    }
  }
}
```


You can simple add this function to `functions.php` and call if from `footer.php`.

The feedback you may get may look like this:

```
is_archive
is_category
```



