---
id: 1121
title: WordPress dashboard sort posts by date
date: 2013-02-08 15:33:50
author: taimane
layout: post
permalink: /wordpress/sort-dashboard-posts/
redirect_from: /wordpress-dashboard/
published: true
categories:
   -
tags:
   -
---
Here is what I need: To have any post type sorted in WordPress dashboard by DATE in the DESCENDING order.
Here is the code that will enable this for all post types.

``` php
add_action( 'pre_get_posts', 'custom_sort_and_postcount' );
function custom_sort_and_postcount( $query ){
	global $wp_the_query;
	if ( $wp_the_query === $query ) {
		$query->set( 'posts_per_page', 999 );
		if('menu_order title' == get_query_var('orderby')){
		$query->set( 'orderby', 'date' );
		$query->set( 'order', 'desc' );
		}
	}
	return $query;
};
```
As you can see I have set 999 posts per page, and all the settings in the WP dashboard will be ignored because of this line
```php
$query->set('posts_per_page', 999 );
```
In other words the following two URL's will return the same output:
* https://site.com/wp-admin/edit.php?post_type=articles
* https://site.com/wp-admin/edit.php?post_type=articles&orderby=date&order=desc
 
