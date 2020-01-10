---
id: 2929
title: Change default Author Slug
date: 2016-07-11 10:00:18
author: taimane
layout: post
permalink: /change-default-author-slug/
published: true
categories:
   -
tags:
   -
---
In your functions.php to change the default author slug "author" to whatever you want like "masters" for instance you would do this:

<pre>// Change URL Slug from author to masters
function new_author_base() {
    global $wp_rewrite;
    $author_slug = 'masters';
    $wp_rewrite->author_base = $author_slug;
}
add_action('init', 'new_author_base');</pre>
  

