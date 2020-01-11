---
id: 2451
title: Adding Rewrite Rules in WordPress
date: 2015-01-31 20:33:59
author: taimane
layout: post
permalink: /adding-rewrite-rules-in-wordpress/
published: true
categories:
   -
tags:
   -
---
In total two actions and one filter need to be triggered until we have the rule added:

```
add_action('init', 'my_add_rewrite_rule');
function my_add_rewrite_rule() {
  add_rewrite_rule('^leaf/([0-9]+)/?', 'index.php?page_id=$matches[1]', 'top');
}

add_filter( 'rewrite_rules_array','my_update_options_table' ); 
function my_update_options_table( $rules ){
    update_option( 'rewrite_rules_save', $rules ); 
}


add_action( 'wp_loaded','my_flush_rules' );
function my_flush_rules(){
    global $wp_rewrite;
    $wp_rewrite->flush_rules();    
}
```

