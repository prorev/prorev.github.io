---
id: 2921
title: Wordpress return the number of comments for user
date: 2016-07-11 09:53:11
author: taimane
layout: post
permalink: /wordpress-return-the-number-of-comments/
published: true
categories:
   -
tags:
   -
---
This is like count_user_posts(), but returns the number of comments instead:

```
function count_user_comments($id) {
global $wpdb;
$users = $wpdb->get_var("
        SELECT COUNT( * ) AS total
        FROM $wpdb->comments
        WHERE comment_approved = 1 
        AND user_id = $id");
return $users;
}
```

More: Count user's posts (including custom post types) or comments:

```
function atom_count($user_id, $what_to_count = 'post') {
  global $wpdb;    
  $where = $what_to_count == 'comment' ? "WHERE comment_approved = 1 AND user_id = {$user_id}" : get_posts_by_author_sql($what_to_count, TRUE, $user_id);
  $from = "FROM ".(($what_to_count == 'comment') ? $wpdb->comments : $wpdb->posts);    
  $count = $wpdb->get_var($wpdb->prepare("SELECT COUNT(*) {$from} {$where}"));
  return $count;
}
```

Usage examples:
```
<?php echo atom_count(1, 'movie'); // displays 'movie' post type count ?>
<?php echo atom_count(1, 'comment'); // displays comment count ?>
```
