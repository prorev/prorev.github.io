---
id: 326
title: Very smart WordPress meta robot tags
date: 2011-05-13 21:47:41
author: taimane
layout: post
permalink: /very-smart-wordpress-meta-robot-tags/
published: true
categories:
   -
tags:
   -
---
During WordPress install you can set WordPress to index or noindex your pages. The following code introduces more SEO friendly meta robots.
 
<pre>function add_metarobots()
{
 if (is_single() || is_page() ){ echo '<meta name="robots" content="index, follow" />'; }
 if (is_category() || is_archive() || is_tag()) {  echo '<meta name="robots" content="noindex, follow" />'; }
 if (is_search() || is_admin()){ echo '<meta name="robots" content="noindex, nofollow" />'; } 
}

add_action('wp_head', 'add_metarobots') ;</pre>

Thanks,  

