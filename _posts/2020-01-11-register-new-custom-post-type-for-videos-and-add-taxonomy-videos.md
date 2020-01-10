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
<pre class="prettyprint">register_post_type('videos', array(
	'label' =&gt; __('Videos'),
	'singular_label' =&gt; __('Video'),
	'public' =&gt; true,
	'show_ui' =&gt; true,
	'show_in_menu' =&gt; true,
	'capability_type' =&gt; 'post',
	'hierarchical' =&gt; false,
	'rewrite' =&gt; true,
	'query_var' =&gt; false,
	'supports' =&gt; array('title', 'editor', 'author', 'categories', 'videotags', 'thumbnail', 'comments','date'),
	'taxonomies' =&gt; array('category', 'videotags' ),
	'labels' =&gt; array('add_new_item' =&gt; __('New Video'), 'edit_item' =&gt; __('Edit Video'),  ),

	));

register_taxonomy( 'videotags', 'videos', array( 'hierarchical' =&gt; false, 'label' =&gt; 'Video Tags', 'query_var' =&gt; true, 'show_ui' =&gt; true, 'rewrite' =&gt; true ) );


// similar for articles
add_action( 'init', 'microformats_register_my_cpts' );

function microformats_register_my_cpts() {
    $labels = array(
        "name" =&gt; __( 'Articles', 'microformats' ),
        "singular_name" =&gt; __( 'Articles', 'microformats' ),
        );

    $args = array(
        "label" =&gt; __( 'Articles', 'microformats' ),
        "labels" =&gt; $labels,
        "description" =&gt; "",
        "public" =&gt; true,
        "show_ui" =&gt; true,
        "show_in_rest" =&gt; false,
        "rest_base" =&gt; "",
        "has_archive" =&gt; false,
        "show_in_menu" =&gt; true,
        "exclude_from_search" =&gt; false,
        "capability_type" =&gt; "post",
        "map_meta_cap" =&gt; true,
        "hierarchical" =&gt; false,
        "rewrite" =&gt; array( "slug" =&gt; "articles", "with_front" =&gt; true ),
        "query_var" =&gt; true,
                
        "supports" =&gt; array( "title", "editor", "thumbnail" ),                
    );
    register_post_type( "articles", $args );

// End of cptui_register_my_cpts()
}</pre>  

