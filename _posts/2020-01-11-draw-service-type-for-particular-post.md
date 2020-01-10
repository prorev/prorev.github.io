---
id: 1493
title: Draw Service type for particular post
date: 2013-05-25 10:39:44
author: taimane
layout: post
permalink: /draw-service-type-for-particular-post/
published: true
categories:
   -
tags:
   -
---
Here is the idea. Posts can be type of Fire, Snow, Thunder, Cold, Wind, or Water. Just imagine.
WordPress Dashboard can hold post types in some $meta_box_value:

<code lang="php">function _draw_services(){
	global $post;
	$meta_box_value = get_post_meta($post->ID, 'service', true);

	if(1 == $meta_box_value)
		echo '<input type="radio" checked="checked" name="service" value="1" /> Fire';
	else
		echo '<input type="radio" name="service" value="1" /> Fire';

	if(2 == $meta_box_value)
		echo '<input type="radio" checked="checked" name="service" value="2" /> Snow';
	else
		echo '<input type="radio" name="service" value="2" /> Snow';

	if(3 == $meta_box_value)
		echo '<input type="radio" checked="checked" name="service" value="3" /> Thunder';
	else
		echo '<input type="radio" name="service" value="3" /> Thunder';

	if(4 == $meta_box_value)
		echo '<input type="radio" checked="checked" name="service" value="4" /> Cold';
	else
		echo '<input type="radio" name="service" value="4" /> Cold';

	if(5 == $meta_box_value)
		echo '<input type="radio" checked="checked" name="service" value="5" /> Wind';
	else
		echo '<input type="radio" name="service" value="5" /> Wind';

	if(6 == $meta_box_value)
		echo '<input type="radio" checked="checked" name="service" value="6" /> Water';
	else
		echo '<input type="radio" name="service" value="6" /> Water';
}</code>

Action <code>add_meta_boxes</code> can take our function <code>_services</code> metabox to a post.

<code lang="php">add_action( 'add_meta_boxes', 'add_custom_metaboxes');
/*add custom meta boxes function*/
function add_custom_metaboxes() {

	// the next line is for playlists only for adding custom metabox for playlists!
	$post_id = $_GET['post'] ? $_GET['post'] : $_POST['post_ID'] ;

	/*post*/
	add_meta_box(
			'_services',
			'Select the service type',
			'_draw_services',
			'post'
	);

}</code>

on post update we need to manage

<code>$service = $_POST['service'];
update_post_meta($post_id, 'service', $service);
</code>

<img class="alignleft size-full wp-image-1497" alt="services" src="https://programming-review.com/wp-content/uploads/2013/05/Selection_058.png" width="271" height="173" />

<hr />

Thanks  

