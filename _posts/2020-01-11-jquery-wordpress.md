---
id: 221
title: jQuery on WordPress
date: 2011-03-07 20:09:30
author: taimane
layout: post
permalink: /jquery-wordpress/
published: true
categories:
   -
tags:
   -
---
There is absolutely needed to outline how <strong><a href="http://en.wikipedia.org/wiki/JQuery">jQuery</a></strong> should be used together with <strong>WordPress</strong> because one can fail easily. I used my time to figure out what steps I need to undertake to have the perfect match.

Here are the rules you should follow if you want to use jQuery that is already present in WordPress installation.
#1. You should edit your <strong>header.php</strong> file of your WordPress theme like this.
```
<?php wp_enqueue_script("jquery");?>
<?php wp_head(); ?>
```
Comment: Your theme most probable has <code>wp_head()</code> function in it and you should add the <strong><!--?php wp_enqueue_script("jquery");?--></strong> line <strong>BEFORE!!!!!!</strong> <code>wp_head()</code> function.

#2. After <code>wp_head()</code> function add your jQuery code like this:
```
<script type="text/javascript">
//<![CDATA[
var $j = jQuery.noConflict();
$j(document).ready(function(){
  $j("a").mouseover(function(){
	alert("mouse over the link");
  });
});
//]]></script>
```
#3. The above code from #1 and #2 must be inside the <code>wp_head()</code> tags of your header.php file in your theme.

Here is the complete header.php of 2010 WordPress theme:
```
<?php
/**
 * The Header for our theme.
 *
 * Displays all of the <head> section and everything up till <div id="main">
 *
 * @package WordPress
 * @subpackage Twenty_Ten
 * @since Twenty Ten 1.0
 */
?><!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
<meta charset="<?php bloginfo( 'charset' ); ?>" />
<title><?php
	/*
	 * Print the <title> tag based on what is being viewed.
	 */
	global $page, $paged;

	wp_title( '|', true, 'right' );

	// Add the blog name.
	bloginfo( 'name' );

	// Add the blog description for the home/front page.
	$site_description = get_bloginfo( 'description', 'display' );
	if ( $site_description &amp;&amp; ( is_home() || is_front_page() ) )
		echo " | $site_description";

	// Add a page number if necessary:
	if ( $paged >= 2 || $page >= 2 )
		echo ' | ' . sprintf( __( 'Page %s', 'twentyten' ), max( $paged, $page ) );

	?></title>
<link rel="profile" href="http://gmpg.org/xfn/11" />
<link rel="stylesheet" type="text/css" media="all" href="<?php bloginfo( 'stylesheet_url' ); ?>" />
<link rel="pingback" href="<?php bloginfo( 'pingback_url' ); ?>" />
<?php
	/* We add some JavaScript to pages with the comment form
	 * to support sites with threaded comments (when in use).
	 */
	if ( is_singular() &amp;&amp; get_option( 'thread_comments' ) )
		wp_enqueue_script( 'comment-reply' );

	/* Always have wp_head() just before the closing </head>
	 * tag of your theme, or you will break many plugins, which
	 * generally use this hook to add elements to <head> such
	 * as styles, scripts, and meta tags.
	 */
	 wp_enqueue_script("jquery");
     wp_head();
?>

<script type="text/javascript">
//<![CDATA[
var $j = jQuery.noConflict();
$j(document).ready(function(){
  $j("a").mouseover(function(){
	alert("mouse over the link");
  });
});
//]]></script>

</head>

<body <?php body_class(); ?>>
<div id="wrapper" class="hfeed">
	<div id="header">
		<div id="masthead">
			<div id="branding" role="banner">
				<?php $heading_tag = ( is_home() || is_front_page() ) ? 'h1' : 'div'; ?>
				<<?php echo $heading_tag; ?> id="site-title">
					<span>
						<a href="<?php echo home_url( '/' ); ?>" title="<?php echo esc_attr( get_bloginfo( 'name', 'display' ) ); ?>" rel="home"><?php bloginfo( 'name' ); ?></a>
					</span>
				</<?php echo $heading_tag; ?>>
				<div id="site-description"><?php bloginfo( 'description' ); ?></div>

				<?php
					// Check if this is a post or page, if it has a thumbnail, and if it's a big one
					if ( is_singular() &amp;&amp;
							has_post_thumbnail( $post->ID ) &amp;&amp;
							( /* $src, $width, $height */ $image = wp_get_attachment_image_src( get_post_thumbnail_id( $post->ID ), 'post-thumbnail' ) ) &amp;&amp;
							$image[1] >= HEADER_IMAGE_WIDTH ) :
						// Houston, we have a new header image!
						echo get_the_post_thumbnail( $post->ID, 'post-thumbnail' );
					else : ?>
						<img src="<?php header_image(); ?>" width="<?php echo HEADER_IMAGE_WIDTH; ?>" height="<?php echo HEADER_IMAGE_HEIGHT; ?>" alt="" />
					<?php endif; ?>
			</div><!-- #branding -->

			<div id="access" role="navigation">
			  <?php /*  Allow screen readers / text browsers to skip the navigation menu and get right to the good stuff */ ?>
				<div class="skip-link screen-reader-text"><a href="#content" title="<?php esc_attr_e( 'Skip to content', 'twentyten' ); ?>"><?php _e( 'Skip to content', 'twentyten' ); ?></a></div>
				<?php /* Our navigation menu.  If one isn't filled out, wp_nav_menu falls back to wp_page_menu.  The menu assiged to the primary position is the one used.  If none is assigned, the menu with the lowest ID is used.  */ ?>
				<?php wp_nav_menu( array( 'container_class' => 'menu-header', 'theme_location' => 'primary' ) ); ?>
			</div><!-- #access -->
		</div><!-- #masthead -->
	</div><!-- #header -->

	<div id="main">
```

Note that I have fond the similar explanation <a href="http://digwp.com/2009/06/including-jquery-in-wordpress-the-right-way/">here</a>.

Note that one can use theme <strong>functions.php</strong> file to add <strong>jQuery </strong>support. This can be done the following way:
```
<?php wp_enqueue_script('jquery');
    function hook_to_wp_head(){
?>
<script type="text/javascript">
//<![CDATA[
var $j = jQuery.noConflict();
$j(document).ready(function(){
  $j("a").mouseover(function(){
	alert("mouse over the link");
  });
});
//]]></script>

<?php
}
add_filter('wp_head', 'hook_to_wp_head');
?>
```
If you updated your functions.php file this way than and your header.php file as shown above than your mouseover function will execute twice.
