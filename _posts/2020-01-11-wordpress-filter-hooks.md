---
id: 1668
title: WordPress filter hooks and how to define them in example
date: 2013-08-07 15:24:10
author: taimane
layout: post
permalink: /wordpress-filter-hooks/
published: true
categories:
   -
tags:
   -
---
In WordPress, a filter is a function. Developers can create custom filters by using the <a rel="nofollow" title="http://codex.wordpress.org/Plugin_API/Filter_Reference" href="http://codex.wordpress.org/Plugin_API/Filter_Reference">Filter API</a>.

This process is called "hooking" and the place where we apply the filter is called a hook.

<a href="https://programming-review.com/add_filter-hook/">
Here</a> you can find some more examples of using filters and actions in general and some explanation about the differences between these two.

The most important part is to create a hook.

Actually we create a hook by using the `apply_filters` special WordPress function. Somewhere if our theme files we may have this code:

```php
echo apply_filters( 'my_custom_filter_hook', 'Copyright 2013 by programming-review' );
```

Please note the most important code sequence in here echo apply_filters actually this is what defines hook entry point.
Here is our replace_copyright() function being set to my_custom_filter_hook hook
```
function replace_copyright( $copyright ) {
// do something to $copyright
return $copyright;
}
add_filter( 'my_custom_filter_hook', 'replace_copyright' );
```