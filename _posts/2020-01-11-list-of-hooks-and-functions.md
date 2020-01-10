---
id: 1061
title: WordPress complete list of hooks and hooked functions
date: 2013-01-04 19:16:54
author: taimane
layout: post
permalink: /list-of-hooks-and-functions/
published: true
categories:
   -
tags:
   -
---
In article <a href="https://programming-review.com/add_filter-hook/">Using add_filter hook...</a> we set the the code how to enumerate the functions being hooked to the specific WordPress hook, but we never covered how to show all hooks and all the hooking functions, and lastly to show the execution priories for the hooking functions execution.

It must be several years I saw <a href="http://www.wprecipes.com/list-all-hooked-wordpress-functions">this article</a>.
It contains the code to print all hooked WordPress functions for all hooks.
<pre>function list_hooked_functions($tag=false){
 global $wp_filter;
 if ($tag) {
 $hook[$tag]=$wp_filter[$tag];
 if (!is_array($hook[$tag])) {
 trigger_error("Nothing found for '$tag' hook", E_USER_WARNING);
 return;
 }
 }
 else {
 $hook=$wp_filter;
 ksort($hook);
 }
 echo '&lt;pre&gt;';
 foreach($hook as $tag =&gt; $priority){
 echo "&lt;br /&gt;&amp;gt;&amp;gt;&amp;gt;&amp;gt;&amp;gt;\t&lt;strong&gt;$tag&lt;/strong&gt;&lt;br /&gt;";
 ksort($priority);
 foreach($priority as $priority =&gt; $function){
 echo $priority;
 foreach($function as $name =&gt; $properties) echo "\t$name&lt;br /&gt;";
 }
 }
 echo '&lt;/pre&gt;';
 return;
}
list_hooked_functions();</pre>
Here is how the list may look like:
<pre>&gt;&gt;&gt;&gt;&gt;	<strong>the_content</strong>
8	000000001d3591230000000096d6f3b0run_shortcode
	000000001d3591230000000096d6f3b0autoembed
10	wptexturize
	convert_smilies
	convert_chars
	wpautop
	shortcode_unautop
	prepend_attachment
11	capital_P_dangit
	do_shortcode

&gt;&gt;&gt;&gt;&gt;	<strong>the_content_rss</strong>
8	ent2ncr

&gt;&gt;&gt;&gt;&gt;	<strong>the_excerpt</strong>
10	wptexturize
	convert_smilies
	convert_chars
	wpautop
	shortcode_unautop

&gt;&gt;&gt;&gt;&gt;	<strong>the_excerpt_rss</strong>
8	ent2ncr
10	convert_chars

&gt;&gt;&gt;&gt;&gt;	<strong>the_posts</strong>
10	_close_comments_for_old_posts

&gt;&gt;&gt;&gt;&gt;	<strong>the_title</strong>
10	wptexturize
	convert_chars
	trim
11	capital_P_dangit
</pre>
Thanks  

