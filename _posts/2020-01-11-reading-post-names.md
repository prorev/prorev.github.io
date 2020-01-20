---
id: 1110
title: Reading all post names WordPress and non WordPress way
date: 2013-02-06 08:59:11
author: taimane
layout: post
permalink: /wordpress/read-post-names/
published: true
categories:
   -
tags:
   -
---
For some WoredPress widgets you may need to list all post names for instance. Here are the two distinct ways to do that:


### Non WordPress way
```php
$db = new mysqli( DB_HOST, DB_USER , DB_PASSWORD , DB_NAME );
$result = $db->query( &quot;SELECT post_name FROM wp_posts WHERE post_type='post'&quot;);

$readypostnames = array();
if($result){
	// Cycle through results
	while ($row = $result->fetch_row()){
		$readypostnames[] = $row[0];
	}
	// Free result set
	$result->close();
	$db->next_result();
}
$db->close();
```

### WordPress way

```php
$args = array( 'numberposts' => -1 );
$myposts = get_posts( $args );
$readypostnames = array();

foreach($myposts as $post) {
	setup_postdata($post);
	$readypostnames[] = $post->post_name;
	wp_reset_postdata();
}
var_dump($readypostnames);
```

