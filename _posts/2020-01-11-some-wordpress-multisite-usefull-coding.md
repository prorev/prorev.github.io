---
id: 2081
title: Some WordPress multisite usefull coding
date: 2014-04-24 11:02:58
author: taimane
layout: post
permalink: /some-wordpress-multisite-usefull-coding/
published: true
categories:
   -
tags:
   -
---
WordPress multi-site (WP MU) has some useful functions and the one for determining the  blogs count is:

<code>$blog_count = get_blog_count();</code>

You would probable have the alternative to get the blog count with this function :

<code>$blog_ids=array();
$blog_list = get_blog_list( 0, 'all' );
$blog_count = count($blog_list);</code>

Also when having the blog list you can have the blog IDs easily...

<code>foreach ($blog_list AS $blog) {
$blog_ids[] = $blog[blog_id];
}</code>

In WP MU you will often have to write custom queries so you can use your blog count for this... and often time you can create UNION and not execute a single query for every instance... like this

<code>for($c = 1; $c&lt;=$blog_count; $c++){
$prefix = $wpdb-&gt;get_blog_prefix($id);
$sqlarr[] = "SELECT `meta_value` FROM `{$prefix}postmeta` WHERE `meta_key`='location'";
$ret = $wpdb-&gt;query($sql);
}
$sql = implode(" UNION ", $sqlarr);
$ret = $wpdb-&gt;get_col($sql);
</code>

Use

<code>switch_to_blog($blogid);</code>

when you need for instance to get post metadata but for some specific blog:

<code>$cost = get_post_meta( $post_id, "cost", true );</code>

Thanks  

