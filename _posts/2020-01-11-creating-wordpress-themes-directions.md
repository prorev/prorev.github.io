---
id: 2142
title: Creating WordPress themes directions
date: 2014-05-27 12:59:22
author: taimane
layout: post
permalink: /creating-wordpress-themes-directions/
published: true
categories:
   -
tags:
   -
---
<blockquote><i style="color: #252525;">A chaque oiseaux son nid est beau.</i></blockquote>
When creating WordPress themes the following tips should be used:
<ul>
	<li>Use <code>wp_head</code>,<code> wp_title</code>, <code>wp_footer</code></li>
	<li>Use <code>get_template_part()</code> or <code>locate_template()</code> when using templates</li>
	<li>Include child theme support for the theme</li>
	<li>Include <code>wp_nav_menu()</code> at least once in your theme</li>
	<li>Do not modify <code>wptexturize()</code> filter 
	<li>Do not modify <code>wpautop()</code> //just keep double line-breaks and do not transform them to paragraphs</li>
	<li>Do not use deprecated functions or tags</li>
	<li>Do not use Timthumb</li>
	<li>Use <code>wp_enqueue_style()</code> to enqueue all stylesheets</li>
	<li>Use <code>wp_enqueue_script()</code> to add any JavaScript code</li>
	<li>Use JavaScript version that goes with WordPress</li>
	<li>Provide local copy of a resource (CDN version) as a fallback</li>
	<li>If possible load assets via SSL</li>
	<li>Use external files to place JavaScript code if possible</li>
	<li>Include JavaScript files in the footer if possible (exceptions Modernizr, jQuery UI, etc)</li>
	<li>Eliminate WP theme errors or notices.</li>
	<li>JavaScript should be written with “use strict” mode on.</li>
</ul>
For improved security perspective use inbuilt validate functions and sanitize function
Input:<code> wp_filter_nohtml_kses(), wp_filter_kses(), wp_kses(),</code>
Output: <code>esc_attr(), esc_html(), esc_js(), esc_textarea(), esc_url()</code>

Thanks  

