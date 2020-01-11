---
id: 1430
title: Disable trackbacks
date: 2013-04-05 08:02:12
author: taimane
layout: post
permalink: /disable-trackbacks/
published: true
categories:
   -
tags:
   -
---
To receive and send pings/trackbacks from and to other sites is one basic function of WordPress.

To remind: The difference between pings/trackbacks is: trackbacks are manual while pings are automatic.


The problem and the reason I needed to disable trackbacks is : Almost all the trackbacks I received were spam. I received hundreds of trackbacks daily – most all of these were spam.

However it is not easy to disable trackbacks without special plugins, just via WordPress dashboard.


<a href="https://programming-review.com/wp-content/uploads/2013/04/Selection_200.png"><img src="https://programming-review.com/wp-content/uploads/2013/04/Selection_200.png" alt="Disable trackbacks" width="751" height="199" class="alignleft size-full wp-image-1600" /></a>

Also for all the published posts to disable the trackbacks run this MySQL query:

```
UPDATE wp_posts SET ping_status='closed' WHERE post_status = 'publish' AND post_type = 'post';

UPDATE wp_posts SET ping_status='closed' WHERE post_status = 'publish' AND post_type = 'page';
```
Highly recommend that you backup your database before executing the query.

If you need to set the comments status to closed use this trick.

```
UPDATE wp_posts SET comment_status='closed' WHERE post_type = 'post';

UPDATE wp_posts SET comment_status='closed' WHERE post_type = 'page';
```
