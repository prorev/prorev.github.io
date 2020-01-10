---
id: 1858
title: Array difference in PHP
date: 2013-12-20 19:29:33
author: taimane
layout: post
permalink: /array-difference-in-php/
published: true
categories:
   -
tags:
   -
---
Here is the code to check two arrays A and B and to find the difference of these arrays A-B, or to find the elements that exist only in array A and that don't exist in array B.

<pre class="prettyprint">
$list1="
youtube_link
youtube_link_callback
youtube_sanitize_url
youtube_shortcode
you 
are 
super 
hero
";

$list2="
youtube_link
youtube_link_callback
youtube_sanitize_url
youtube_shortcode
zero
is 
no 
hero
";

// for all plugins
$a1 = explode("\n", $list1);
$a2 = explode("\n", $list2);


$diff=array();

foreach($a1 as $e){
	
if(in_array($e, $a2)) continue; //with next
else
$diff[] = $e;

}

print_r($diff);
</pre>

Cannot be more simple than that? Well it can. There is <code>array_diff</code> function.

<pre class="prettyprint">
$diff = array_diff($a1, $a2);
print_r($diff);
</pre>

The output is like this:
<pre>

Array
(
    [0] => you 
    [1] => are 
    [2] => super 
)
</pre>

Thanks
--D  

