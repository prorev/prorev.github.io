---
id: 3137
title: WP_Query eliminate memory overflow
date: 2016-09-12 20:22:37
author: taimane
layout: post
permalink: /wp_query-memory-effective/
published: true
categories:
   -
tags:
   -
---
Whenever WP_Query() runs on big blogs with many posts, it takes lot of memory, so we get <strong>memory overflow</strong>.

<pre>$args = array(
     'post_status'     => 'publish',
     'post_type'       => array( 'post' ),
     'posts_per_page'  => -1
);
      $query = null;
      wp_reset_query();
      $query = new WP_Query($args);
</pre>


<h2>Why there is Memory Overflow?</h2>
<em><strong>WP_Query</strong></em> actually loads every matching post into memory, including the full post contents; and how smart WordPress is; it may also load meta data for every post as pre-fetch action. This easily leads to the memory overflow.

But there is a million dollars trick, where you pass <code>'fields' => 'ids'</code> into <strong>WP_Query</strong> to simply return a list of IDs. 

<pre>$args = array(
     'post_status'     => 'publish',
     'post_type'       => array( 'post' ),
     'posts_per_page'  => -1,
     'fields' => 'ids'
);
      $query = null;
      wp_reset_query();
      $query = new WP_Query($args);
</pre>

Now, how is that for a memory trick.   
