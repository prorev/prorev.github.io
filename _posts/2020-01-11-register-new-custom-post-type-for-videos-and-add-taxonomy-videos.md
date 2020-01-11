---
id: 2788
title: Register new custom post type for Videos and add taxonomy videos
date: 2016-03-31 19:17:45
author: taimane
layout: post
permalink: /register-new-custom-post-type-for-videos-and-add-taxonomy-videos/
published: true
categories:
   -
tags:
   -
---
```
register_post_type('videos', array(
	'label' => __('Videos'),
	'singular_label' => __('Video'),
	'public' => true,
	'show_ui' => true,
	'show_in_menu' => true,
	'capability_type' => 'post',
	'hierarchical' => false,
	'rewrite' => true,
	'query_var' => false,
	'supports' => array('title', 'editor', 'author', 'categories', 'videotags', 'thumbnail', 'comments','date'),
	'taxonomies' => array('category', 'videotags' ),
	'labels' => array('add_new_item' => __('New Video'), 'edit_item' => __('Edit Video'),  ),

	));

register_taxonomy( 'videotags', 'videos', array( 'hierarchical' => false, 'label' => 'Video Tags', 'query_var' => true, 'show_ui' => true, 'rewrite' => true ) );


// similar for articles
add_action( 'init', 'microformats_register_my_cpts' );

function microformats_register_my_cpts() {
    $labels = array(
        "name" => __( 'Articles', 'microformats' ),
        "singular_name" => __( 'Articles', 'microformats' ),
        );

    $args = array(
        "label" => __( 'Articles', 'microformats' ),
        "labels" => $labels,
        "description" => "",
        "public" => true,
        "show_ui" => true,
        "show_in_rest" => false,
        "rest_base" => "",
        "has_archive" => false,
        "show_in_menu" => true,
        "exclude_from_search" => false,
        "capability_type" => "post",
        "map_meta_cap" => true,
        "hierarchical" => false,
        "rewrite" => array( "slug" => "articles", "with_front" => true ),
        "query_var" => true,
                
        "supports" => array( "title", "editor", "thumbnail" ),                
    );
    register_post_type( "articles", $args );

// End of cptui_register_my_cpts()
}
```
