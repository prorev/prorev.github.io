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
<pre>&lt;?php wp_enqueue_script("jquery");?&gt;
&lt;?php wp_head(); ?&gt;</pre>
Comment: Your theme most probable has <code>wp_head()</code> function in it and you should add the <strong><!--?php wp_enqueue_script("jquery");?--></strong> line <strong>BEFORE!!!!!!</strong> <code>wp_head()</code> function.

#2. After <code>wp_head()</code> function add your jQuery code like this:
<pre class="prettyprint">&lt;script type="text/javascript"&gt;
//&lt;![CDATA[
var $j = jQuery.noConflict();
$j(document).ready(function(){
  $j("a").mouseover(function(){
	alert("mouse over the link");
  });
});
//]]&gt;&lt;/script&gt;</pre>
#3. The above code from #1 and #2 must be inside the <code>wp_head()</code> tags of your header.php file in your theme.

Here is the complete header.php of 2010 WordPress theme:
<pre class="prettyprint">&lt;?php
/**
 * The Header for our theme.
 *
 * Displays all of the &lt;head&gt; section and everything up till &lt;div id="main"&gt;
 *
 * @package WordPress
 * @subpackage Twenty_Ten
 * @since Twenty Ten 1.0
 */
?&gt;&lt;!DOCTYPE html&gt;
&lt;html &lt;?php language_attributes(); ?&gt;&gt;
&lt;head&gt;
&lt;meta charset="&lt;?php bloginfo( 'charset' ); ?&gt;" /&gt;
&lt;title&gt;&lt;?php
	/*
	 * Print the &lt;title&gt; tag based on what is being viewed.
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
	if ( $paged &gt;= 2 || $page &gt;= 2 )
		echo ' | ' . sprintf( __( 'Page %s', 'twentyten' ), max( $paged, $page ) );

	?&gt;&lt;/title&gt;
&lt;link rel="profile" href="http://gmpg.org/xfn/11" /&gt;
&lt;link rel="stylesheet" type="text/css" media="all" href="&lt;?php bloginfo( 'stylesheet_url' ); ?&gt;" /&gt;
&lt;link rel="pingback" href="&lt;?php bloginfo( 'pingback_url' ); ?&gt;" /&gt;
&lt;?php
	/* We add some JavaScript to pages with the comment form
	 * to support sites with threaded comments (when in use).
	 */
	if ( is_singular() &amp;&amp; get_option( 'thread_comments' ) )
		wp_enqueue_script( 'comment-reply' );

	/* Always have wp_head() just before the closing &lt;/head&gt;
	 * tag of your theme, or you will break many plugins, which
	 * generally use this hook to add elements to &lt;head&gt; such
	 * as styles, scripts, and meta tags.
	 */
	 wp_enqueue_script("jquery");
     wp_head();
?&gt;

&lt;script type="text/javascript"&gt;
//&lt;![CDATA[
var $j = jQuery.noConflict();
$j(document).ready(function(){
  $j("a").mouseover(function(){
	alert("mouse over the link");
  });
});
//]]&gt;&lt;/script&gt;

&lt;/head&gt;

&lt;body &lt;?php body_class(); ?&gt;&gt;
&lt;div id="wrapper" class="hfeed"&gt;
	&lt;div id="header"&gt;
		&lt;div id="masthead"&gt;
			&lt;div id="branding" role="banner"&gt;
				&lt;?php $heading_tag = ( is_home() || is_front_page() ) ? 'h1' : 'div'; ?&gt;
				&lt;&lt;?php echo $heading_tag; ?&gt; id="site-title"&gt;
					&lt;span&gt;
						&lt;a href="&lt;?php echo home_url( '/' ); ?&gt;" title="&lt;?php echo esc_attr( get_bloginfo( 'name', 'display' ) ); ?&gt;" rel="home"&gt;&lt;?php bloginfo( 'name' ); ?&gt;&lt;/a&gt;
					&lt;/span&gt;
				&lt;/&lt;?php echo $heading_tag; ?&gt;&gt;
				&lt;div id="site-description"&gt;&lt;?php bloginfo( 'description' ); ?&gt;&lt;/div&gt;

				&lt;?php
					// Check if this is a post or page, if it has a thumbnail, and if it's a big one
					if ( is_singular() &amp;&amp;
							has_post_thumbnail( $post-&gt;ID ) &amp;&amp;
							( /* $src, $width, $height */ $image = wp_get_attachment_image_src( get_post_thumbnail_id( $post-&gt;ID ), 'post-thumbnail' ) ) &amp;&amp;
							$image[1] &gt;= HEADER_IMAGE_WIDTH ) :
						// Houston, we have a new header image!
						echo get_the_post_thumbnail( $post-&gt;ID, 'post-thumbnail' );
					else : ?&gt;
						&lt;img src="&lt;?php header_image(); ?&gt;" width="&lt;?php echo HEADER_IMAGE_WIDTH; ?&gt;" height="&lt;?php echo HEADER_IMAGE_HEIGHT; ?&gt;" alt="" /&gt;
					&lt;?php endif; ?&gt;
			&lt;/div&gt;&lt;!-- #branding --&gt;

			&lt;div id="access" role="navigation"&gt;
			  &lt;?php /*  Allow screen readers / text browsers to skip the navigation menu and get right to the good stuff */ ?&gt;
				&lt;div class="skip-link screen-reader-text"&gt;&lt;a href="#content" title="&lt;?php esc_attr_e( 'Skip to content', 'twentyten' ); ?&gt;"&gt;&lt;?php _e( 'Skip to content', 'twentyten' ); ?&gt;&lt;/a&gt;&lt;/div&gt;
				&lt;?php /* Our navigation menu.  If one isn't filled out, wp_nav_menu falls back to wp_page_menu.  The menu assiged to the primary position is the one used.  If none is assigned, the menu with the lowest ID is used.  */ ?&gt;
				&lt;?php wp_nav_menu( array( 'container_class' =&gt; 'menu-header', 'theme_location' =&gt; 'primary' ) ); ?&gt;
			&lt;/div&gt;&lt;!-- #access --&gt;
		&lt;/div&gt;&lt;!-- #masthead --&gt;
	&lt;/div&gt;&lt;!-- #header --&gt;

	&lt;div id="main"&gt;</pre>
Note that I have fond the similar explanation <a href="http://digwp.com/2009/06/including-jquery-in-wordpress-the-right-way/">here</a>.

Note that one can use theme <strong>functions.php</strong> file to add <strong>jQuery </strong>support. This can be done the following way:
<pre class="prettyprint">&lt;?php wp_enqueue_script('jquery');
    function hook_to_wp_head(){
?&gt;
&lt;script type="text/javascript"&gt;
//&lt;![CDATA[
var $j = jQuery.noConflict();
$j(document).ready(function(){
  $j("a").mouseover(function(){
	alert("mouse over the link");
  });
});
//]]&gt;&lt;/script&gt;

&lt;?php
}
add_filter('wp_head', 'hook_to_wp_head');
?&gt;</pre>
If you updated your functions.php file this way than and your header.php file as shown above than your mouseover function will execute twice.

Thanks.  

