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

```
$blog_count = get_blog_count();
```

You would probable have the alternative to get the blog count with this function :

```
$blog_ids=array();
$blog_list = get_blog_list( 0, 'all' );
$blog_count = count($blog_list);
```

Also when having the blog list you can have the blog IDs easily...

```
foreach ($blog_list AS $blog) {
  $blog_ids[] = $blog[blog_id];
}
```



In WP MU you will often have to write custom queries so you can use your blog count for this... and often time you can create UNION and not execute a single query for every instance... like this



```
for($c = 1; $c>= $blog_count; $c++){
$prefix = $wpdb->get_blog_prefix($id);

$sqlarr[] = "SELECT `meta_value` FROM `{$prefix}postmeta` WHERE `meta_key`='location'";
$ret = $wpdb->query($sql);
}

$sql = implode(" UNION ", $sqlarr);
$ret = $wpdb->get_col($sql);
```



Use
```
switch_to_blog($blogid);
```

when you need for instance to get post metadata but for some specific blog:

```
$cost = get_post_meta( $post_id, "cost", true );
```

