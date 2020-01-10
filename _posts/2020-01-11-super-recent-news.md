---
id: 483
title: Super recent news WordPress shortcode
date: 2011-06-13 20:16:17
author: taimane
layout: post
permalink: /super-recent-news/
published: true
categories:
   -
tags:
   -
---
Here is the WordPress shortcode that can be used from sidebars. It will list the two latest posts from the "news" category.
In order to use it you shuold write [superrecentnews] in any text widget from any sidebar.
<pre>// super recent news
function srn() {
query_posts('category_name=news&showposts=2');
while (have_posts()) {
	the_post(); 
	$str = $str . '<div class="recent_news"><small  class="entry-date">' . get_the_date('F jS, Y') .'</small>';
	$str = $str . "<p><a href=" . get_permalink() . ">" . get_the_title() . "</a></p>" . "</div>";
}
return $str;
}

add_shortcode('superrecentnews', 'srn'); 
add_filter('widget_text', 'do_shortcode');</pre>
Here is how it looks.
<img class="alignnone size-full wp-image-484" title="snippet" src="https://programming-review.com/wp-content/uploads/2011/06/snippet.png" alt="" width="251" height="220" />

<strong>Super recent news</strong> code differs from the <strong>Recent Posts</strong> widget that comes together with Wordpress: it contains only the post from a specified category "news" and it shows the dates of the posts.

Thanks.  

