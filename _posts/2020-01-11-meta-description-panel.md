---
id: 434
title: SEO Meta description write panel
date: 2011-05-31 09:23:04
author: taimane
layout: post
permalink: /meta-description-panel/
published: true
categories:
   -
tags:
   -
---
The most significant factors for WordPress <a title="SEO " href="http://en.wikipedia.org/wiki/Search_engine_optimization">SEO </a>of your blog article:

* the page title
* the page url
* the page meta description
* the page quality
* the domain page rank

Here I will provide the code to create meta description custom write panel that will reside inside your post and page editing screen.

<img class="alignnone size-full wp-image-436" title="seodescription" src="https://programming-review.com/wp-content/uploads/2011/05/seodescription-e1306831458774.png" alt="" width="500" height="393" />

Now, there are different solutions for this specific problem, there are excellent WordPress plugins such as <a rel="nofollow" href="http://wordpress.org/plugins/simple-meta-description/">Simple Meta Description</a> that will do exactly this:
```
function tlf_add_meta_description() {
	if (is_single()) {
		$description = strip_tags(get_the_excerpt());
		$description = preg_replace('/\s\s+/', ' ', $description);
		echo '';
	}
}
add_action('wp_head','tlf_add_meta_description')
```
..., but these are using the excerpt field to add a meta description to posts. Sometimes the excerpt field is needed as is, and the meta description is needed as separate field. I solved the problem using so called custom write panel that can be achieved via: <code><a title="add_meta_box" href="http://codex.wordpress.org/Function_Reference/add_meta_box">add_meta_box</a></code> and <code><a title="update_post_meta" href="http://codex.wordpress.org/Function_Reference/update_post_meta">update_post_meta</a></code> WordPress functions.
```
/*smd = seo meta description*/
add_action( 'add_meta_boxes', 'smd_add_custom_box' );
add_action( 'save_post', 'smd_save_postdata' );

/*post and page are having custom edit panel for Meta Description*/
function smd_add_custom_box() {
    add_meta_box(
        'myplugin_sectionid',
        __( 'Meta', 'seo_textdomain' ),
        'smd_inner_custom_box',
        'post'
    );
    add_meta_box(
        'myplugin_sectionid',
        __( 'Meta', 'seo_textdomain' ),
        'smd_inner_custom_box',
        'page'
    );
}

/* Prints the box content */
function smd_inner_custom_box() {
  // Use nonce for verification
  global $post;
  wp_nonce_field( plugin_basename( __FILE__ ), 'myplugin_noncename' );
  $meta_box_value = get_post_meta($post-&gt;ID, 'seometadescription', true);

  // The actual fields for data entry
  echo '&lt;label for="seometadescriptoin"&gt;';
       _e("Meta Description", 'seo_textdomain' );
  echo '&lt;/label&gt;';
  echo '&lt;textarea id="seometadescription" style="width: 100%;" name="seometadescription"&gt;';
  echo $meta_box_value ;
  echo '&lt;/textarea&gt;';
   _e("only 139 chars visible on Google results", 'seo_textdomain');
}
function smd_save_postdata( $post_id ) {
  // verify if this is an auto save routine.
  // If it is our form has not been submitted, so we dont want to do anything
  if ( defined( 'DOING_AUTOSAVE' ) &amp;&amp; DOING_AUTOSAVE )
      return;
  // verify this came from the our screen and with proper authorization,
  // because save_post can be triggered at other times
  if ( !wp_verify_nonce( $_POST['myplugin_noncename'], plugin_basename( __FILE__ ) ) )
      return;
  // Check permissions
  if ( 'page' == $_POST['post_type'] )
  {
    if ( !current_user_can( 'edit_page', $post_id ) )
        return;
  }
  else
  {
    if ( !current_user_can( 'edit_post', $post_id ) )
        return;
  }
  // OK, we're authenticated: we need to find and save the data
  $mydata = strip_tags($_POST['seometadescription']);
  $mydata = preg_replace('/\s\s+/', ' ', $mydata);
  // save/update
  update_post_meta($post_id, 'seometadescription', $mydata);
  return $mydata;
}
```
Once we have this code we will need to update the header for our posts either through header.php, or to create a <a title="hook" href="https://programming-review.com/add_action/">hook</a> for<a title=" wp_head" href="http://codex.wordpress.org/Plugin_API/Action_Reference/wp_head"> wp_head</a> function like this:
```
function add_meta_description() {
  global $post;
  $description = get_post_meta($post-&gt;ID, 'seometadescription', true);
  $description = preg_replace('/\s\s+/', ' ', $description);
  echo '';
}
add_action('wp_head','add_meta_description');
```
