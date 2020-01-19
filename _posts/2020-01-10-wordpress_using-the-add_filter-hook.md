---
id: 12971
title: Using add_filter hook function in WordPress — a working example
date: 2020-01-10
author: taimane
layout: post
permalink: /wordpress/add_filter-hook/
redirect_from: /add_filter-hook/
published: true
image: 
categories:
   - wordpress
tags:
   - hooks
---
The `add_filter` hooks are being used in WordPress themes, in WordPress plugins and in WordPress core.

**WordPress hooks** change how the WordPress behaves by introducing functions without needing to edit any actual WordPress code.

(Apart from add_filter hooks there are also `add_action` hooks described here: [add_action hooks in WordPress](https://programming-review.com/add_action/).

Here is the WordPress example for the add_filter hook.

Code example:
```php
/*appending a list of child pages*/
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
```
Now what are the other possible places different from the_content where we can set add filter hooks?

I will list them here:

* `wp_title`: allows the _title_ tag to be altered or replaced
* `the_title`: allows the "title" of the post or page to be altered or replaced
* `the_content`: alters the content of the post or page
* `wp_autop`: automatically turns line breaks into paragraph tags
* `do_shortcodes`: processes short codes
* `the_excerpt_length`: determines the length (in characters) of the_excerpt()
* `the_excerpt_more`: determines what’s shown at the end of the_excerpt()
* `wp_list_pages`: allows the list of pages to be modified

[Here](https://adambrown.info/p/wp_hooks/hook/filters) is the list of all filter hooks:

It would be very good to mention here that it is possible in WordPress to get the list of all functions for the particular hook.
In case of our `the_content` hook the result would be like this:
```php
function get_filter_functions( $hook = '' ) {
    global $wp_filter;
    if( empty( $hook ) || !isset( $wp_filter[$hook] ) )
        return;
    else
    return $wp_filter[$hook];
}
print_r(get_filter_functions( 'the_content' ));
```

**Summary:**
We updated the original page content with the additional list of subpages and with author name. You can alter your WordPress theme file further by adding new add_filter hooks. Finally, we outlined how to get filter functions for the specific hook.