---
id: 2489
title: Detect all links from all your posts
date: 2015-05-26 09:06:12
author: taimane
layout: post
permalink: /detect-all-links-from-all-your-posts/
published: true
categories:
   -
tags:
   -
---
Here is the script for reading all posts and then creating the links list. 
In there you can check out for possible problems.
<pre class="prettyprint"><?php

require_once("wp-load.php"); // Loads WP engine


$db = new mysqli( DB_HOST, DB_USER , DB_PASSWORD , DB_NAME );
$result = $db->query( "SELECT post_content FROM wp_posts WHERE post_type='post' AND post_status='publish'"); // AND ID=2

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

$reg_exUrl = "(https?://([-\w\.]+)+(:\d+)?(/([\w/_\.]*(\?\S+)?)?)?)";

//$reg_exUrl = '([0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}|(((news|telnet|nttp|file|http|ftp|https)://)|(www|ftp)[-A-Za-z0-9]*\\.)[-A-Za-z0-9\\.]+)(:[0-9]*)?/[-A-Za-z0-9_\\$\\.\\+\\!\\*\\(\\),;:@&=\\?/~\\#\\%]*[^]'\\.}>\\),\\\"]';

$total = array();

foreach($readypostnames as $k=>$v){
   //echo "<br> " .$k . "<hr>";

  if(preg_match_all($reg_exUrl, $v, $url)) {
      $total = array_merge($total, $url[0]); 
  }
}

print_r(array_unique($total));

?></pre>
  

