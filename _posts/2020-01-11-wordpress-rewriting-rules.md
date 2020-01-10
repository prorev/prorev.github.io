---
id: 1470
title: WordPress rewriting rules
date: 2013-05-15 00:07:12
author: taimane
layout: post
permalink: /wordpress-rewriting-rules/
published: true
categories:
   -
tags:
   -
---
Posts in WordPress do have excellent support for rewriting rules and for saving the old slugs automatically.

We wrote about that before <a href="https://programming-review.com/how-to-update-or-recreate-wordpress-post_name-slugs-based-on-a-new-post_title/">here</a>.

The problem is to have pages and other custom post types to have easy system for rewriting rules independent from the posts.
Also the problem is to have old slugs saved for custom post types and for pages.

Here are few tips to work with pages and how to create rewriting rules. Luckily, we have <code>$wp_rewrite</code> global register
<code>page_structure</code> that we can update. After flushing the rewrite rules we can get the new posts rewrite rules.

<pre class="prettyprint">$wp_rewrite->page_structure = $wp_rewrite->page_structure . '.html';</pre>

Please note, the rewrite rules have rule - the most important rule will prevail. There may be 20 rules that may affect our URL but only the most important rule will be considered.
For the custom post types "<a href="http://wordpress.org/extend/plugins/custom-post-type-permalinks/">Custom Post Type Permalinks</a>" plugin provides perfect date to start with modifying custom post types permalinks.

The idea is to create <code>extra_permastruct</code> array inside <code>$wp_rewrite</code> that will store extra permalink data for all custom post types and other taxonomies. For instance for the <code>videos</code> custom post type we may have this:

<pre class="prettyprint">
[extra_permastructs] => Array
(
[videos] => Array
(
[with_front] =>
[ep_mask] => 8191
[paged] => 1
[feed] => 1
[forcomments] => 1
[walk_dirs] => 1
[endpoints] => 1
[struct] => /videos/%videos%.html/
)
[videotags] => Array
(
[with_front] => 1
[ep_mask] => 0
[paged] => 1
[feed] => 1
[forcomments] =>
[walk_dirs] => 1
[endpoints] => 1
[struct] => /videotags/%videotags%
)
)
</pre>
Thanks.  

