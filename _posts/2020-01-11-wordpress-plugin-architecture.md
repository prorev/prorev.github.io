---
id: 727
title: WordPress plugin architecture
date: 2012-07-10 21:39:26
author: taimane
layout: post
permalink: /wordpress-plugin-architecture/
published: true
categories:
   -
tags:
   -
---
You may ask yourself about WordPress plugin execution timeline. What are the typical actions WordPress plugins do once installed (the plugin settings are present).
Here I outlined one possible actions timeline:

<strong>1- Setup Plugin Global Variables </strong>
Here you need to set your plugin version, paths and like you may use in the later plugin execution.

<strong>2- Include Admin Additional Functions (Classes) Required for the Plugin</strong>
This is your plugin logic in the admin area. If you use some user friendly interface you will need functions (classes) to support that. Also this part should contain the Ajax functions needed for your plugin dashboard use. Typically, you cannot continue without admin functionality - so these classes should be required; and speaking in PHP language you should use <code>require_once</code> keyword here.

<strong>3- Load Plugin Settings</strong>
Just load your plugin options from WordPress <em>Options</em> table. This step may even go before the step #2 because you may need some admin functionality to set some options.

<strong>4- Load Admin Scripts and Styles</strong>
<pre>if (is_admin()) {
	add_action('admin_enqueue_scripts', 'my_dashboard_jquery_and_styles');
</pre>
<strong>5- Load Non Admin Scripts and Styles</strong>
<pre>if (!is_admin()) {
           add_action('wp_enqueue_scripts', 'my1_frontpage_jquery_and_styles');
	   add_action('wp_head', 'my2_frontpage_jquery_and_styles');
	   add_action('init', 'my3_frontpage_jquery_and_styles');
	   add_action('wp', 'my4_frontpage_jquery_and_styles');
	   add_action('wp_footer', 'my5_frontpage_jquery_and_styles');
</pre>
Here I used some of the typical hooks, but others may also be possible. One important note is plugin developers sometimes pollute WordPress fontend with unnecessary files. It is good to have the logic when the <strong>my*</strong> functions should bring new files in.

<strong>6- Load Plugin dashboard structure</strong>
Here you will write plugin menu structure (pages and subpages). They may be many pages and subpages. You may include each one here as a separate file.
Also here is where you code your plugin dashboard features. For instance your plugin may log all the web site visitors and their IP addresses.

<strong>7- Load WordPress frontend elements or features (custom post types, custom taxonomies, shortcodes, widgets, sidebars,...)</strong>
This is actually where you code the frontend (if your plugin is visible in the frontend).

<strong>8- Load Plugin Fronted Helper Functions</strong>
If your plugin has frontend you should include the file with functions (classes) needed for the frontend logic.

Extra idea: You should create your WordPress plugin boilerplate having all these steps in mind. For that purpose if you develop plugins on daily bases you should have your WordPress plugin generator.

There may be additional steps in the plugin development we haven't outlined here, but these should be very good start point.
Please note; in some cases you may be using some additional tables together with the default WordPress tables. Try to avoid that if possible. I haven't mentioned working with the database here at all.

Please read more from this URL: <a href="https://programming-review.com/review-of-the-wordpress-plugin-architecture/">Review of the WordPress plugin architecture</a>.

Thanks.  

