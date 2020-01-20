---
id: 37
title: How to update or recreate WordPress post_name slugs based on a new post_title?
date: 2010-12-28 09:21:56
author: taimane
layout: post
permalink: /wordpress/recreate-slug
redirect_from: /how-to-update-or-recreate-wordpress-post_name-slugs-based-on-a-new-post_title/
published: true
categories:
   -
tags:
   -
---
WordPress uses `wp_posts` table to store `post_title` and `post_name` columns of the for any post.

I needed to recreate `post_name` column for all posts based on THE updated post title values. Since manual update would be time consuming.


I will name 2 solutions:


**Solution 1:** A PHP script from here http://pario.no/wp-content/uploads/2010/11/regenerate_post_slugs.txt

I dislike running non parametrized MySQL queries from PHP so this post could be improved.

For more info on parametrized MySQL queries visit this <a href="https://programming-review.com/php/what-is-the-best-way-to-stop-mysql-injection-in-c-php/">link</a>.

```php
while ($row = mysql_fetch_array($result, MYSQL_ASSOC)) {
    $id         = $row['ID'];
    $title      = $row['post_title'];
    $clean_slug = rawurlencode(bleach($id));
    echo "ID<em>:{$row['ID']} " . "post_title : {$title} " . "sanitized : {$clean_slug}";
    $sql_u = "UPDATE `wp_posts` SET post_name = '" . $clean_slug . "' " . "WHERE ID = " . $id;
    echo "QUERY:" . $sql_u . "";

    mysql_query($sql_u) or 
    die("ERROR: " . mysql_error());
    flush();
}
echo "";
mysql_close($db);
?>
```

**Solution 2:** The following PHP script that uses WordPress API:

```php
require( 'wp-load.php' );
set_time_limit(20000);

$arr = array(
    'order'          => 'ASC',
    'post_type'      => 'post',
    'post_status'    => null,
    'numberposts'    => -1,
);

$allposts = get_posts($arr);

if ($allposts) {
  foreach ($allposts as $thepost) {
    $thepost->post_name = '';
    wp_update_post( $thepost );   // Update the post into the database
    echo $thepost->post_name;
  }
}
```

It takes ~ 1 minute to execute for 3000 posts, but the post names were perfect!

Also one minor point regarding the method #2. Each _updated_ post means adding an additional line to the `wp_posts` database table. If you have for instance 3000 posts and you execute the script additional 3000 rows will be added to the `wp_posts` table.

