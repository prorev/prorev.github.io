---
id: 44
title: Using add_filter hook function in WordPress — a working example
date: 2011-02-28 16:26:08
author: taimane
layout: post
permalink: /add_filter-hook/
published: true
categories:
   -
tags:
   -
---
<code>add_filter</code> hooks are being used in WordPress themes, in WordPress plugins and in WordPress itself. 
WordPress hooks change how the WordPress behaves by introducing functions without needing to edit any actual WordPress code.
(Apart from <code>add_filter</code> hooks there are also <code>add_action</code> hooks described here: <a href="https://programming-review.com/add_action/">add_action hooks in WordPress!</a>.)

Here is the WordPress example for the <code>add_filter</code> hook.

Code example:
<pre class="prettyprint">/*appending a list of child pages*/
function append_child_pages($content) {
if (is_page()) {
global $post;
$children = ''.wp_list_pages('title_li='.'&child_of='.$post->ID).'';
}
return  $children. $content;
}
add_filter('the_content','append_child_pages');

/*simple filter that adds author name to the contnent of a post.*/
function post_signature($content) {
global $post;
$author_id = $post->post_author;
$author = get_userdata($author_id);
$name = ''.$author->display_name.'';
return $content. 'by ' . $name;
}
add_filter('the_content','post_signature');
</pre>

Now what are the other possible places different from </code>the_content</code> where we can set add filter hooks? 

I will list them here:
•	wp_title: allows the “title” tag to be altered or replaced
•	the_title: allows the “title” of the post or page to be altered or replaced
•	the_content: alters the content of the post or page
•	wp_autop: automatically turns line breaks into paragraph tags
•	do_shortcodes: processes short codes
•	the_excerpt_length: determines the length (in characters) of the_excerpt()
•	the_excerpt_more: determines what’s shown at the end of the_excerpt()
•	wp_list_pages: allows the list of pages to be modified

<a href="http://adambrown.info/p/wp_hooks/hook/filters">Here</a> is the list of all filter hooks:


It would be very good to mention here that it is possible in WordPress to get the list of all functions for the particular hook.
In the case of our <code>the_content</code> hook the result would be like this:

<pre class="prettyprint">
function get_filter_functions( $hook = '' ) {
    global $wp_filter;
    if( empty( $hook ) || !isset( $wp_filter[$hook] ) )
        return;
    else
    return $wp_filter[$hook];
}
print_r(get_filter_functions( 'the_content' ));
</pre>


Summary
We updated the original page content with the additional list of subpages and with author name. You can alter your WordPress theme file further by adding new <code>add_filter</code> hooks. Finally, we outlined how to get filter functions for the specific hook.  

