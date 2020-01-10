---
id: 2943
title: Easy WordPress Security Fixes to remove entropy
date: 2016-07-11 12:13:29
author: taimane
layout: post
permalink: /easy-wordpress-security-fixes-to-remove-entropy/
published: true
categories:
   -
tags:
   -
---
Remove version string from the header
<code>remove_action('wp_head', 'wp_generator');</code>

Hide Login error messages
<code>add_filter('login_errors',create_function('$a', "return null;"));</code>

// Source: http://www.wprecipes.com/wordpress-hack-remove-admin-name-in-comments-class
<pre>function remove_comment_author_class( $classes ) {
    foreach( $classes as $key => $class ) {
        if(strstr($class, "comment-author-")) {
            unset( $classes[$key] );
        }
    }
    return $classes;
}
add_filter( 'comment_class' , 'remove_comment_author_class' );</pre>  

