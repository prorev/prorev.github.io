---
id: 37
title: How to update or recreate WordPress post_name slugs based on a new post_title?
date: 2010-12-28 09:21:56
author: taimane
layout: post
permalink: /how-to-update-or-recreate-wordpress-post_name-slugs-based-on-a-new-post_title/
published: true
categories:
   -
tags:
   -
---
WordPress wp_posts table that is stored in your WordPress MySQL database has post_title and post_name columns.

I needed to recreate post_name column for all posts based on updated post title values.



I will name 2 solutions for the problem that I found:


<span style="font-size: 16px;">1. A PHP script from here http://pario.no/wp-content/uploads/2010/11/regenerate_post_slugs.txt</span>



I will just copy/paste the code here in case the link gets broken. In fact I haven’t tested this code because I dislike running non parametrized MySQL queries from PHP. For more info on parametrized MySQL queries visit this <a href="https://programming-review.com/php/what-is-the-best-way-to-stop-mysql-injection-in-c-php/">link</a>.

<pre>Query failed: ' . mysql_error());

while ($row = mysql_fetch_array($result, MYSQL_ASSOC)) {

    $id         = $row['ID'];

    $title      = $row['post_title'];

    $clean_slug = rawurlencode(bleach($id));



    echo "ID&lt;em&gt;:{$row['ID']} " . "post_title : {$title} " . "sanitized : {$clean_slug}

";

    $sql_u = "UPDATE `wp_posts` SET post_name = '" . $clean_slug . "' " . 'WHERE ID = ' . $id;

    echo 'QUERY:' . $sql_u . '

';

    mysql_query($sql_u) or die('ERROR: ' . mysql_error());

    flush();

}

echo "";

mysql_close($db);

?&gt;</pre>

2. The following PHP script that uses WordPress API I adopted from http://wordpress.stackexchange.com/questions/3351/create-slugs-programmatically:

<pre>require( 'wp-load.php' );

set_time_limit(20000);



$arr = array(

    'order'          =&gt; 'ASC',

    'post_type'      =&gt; 'post',

    'post_status'    =&gt; null,

    'numberposts'    =&gt; -1,

);



$allposts = get_posts($arr);



if ($allposts) {

  foreach ($allposts as $thepost) {

    $thepost-&gt;post_name = '';

    wp_update_post( $thepost );   // Update the post into the database

    echo $thepost-&gt;post_name;

  }

}</pre>

It takes ~ 1 minute to execute for 3000 posts, but the post names were perfect!



The fastest solution is to use method #1.

Also one minor point regarding the method #2 is that each updated post means adding an additional line to the wp_posts database table. If you have for instance 3000 posts and you execute the script in the method #3 additional 3000 rows will be added to the wp_posts table.


