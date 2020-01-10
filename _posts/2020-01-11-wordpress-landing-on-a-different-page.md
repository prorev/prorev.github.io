---
id: 2791
title: WordPress landing on a different page
date: 2016-03-31 19:42:34
author: taimane
layout: post
permalink: /wordpress-landing-on-a-different-page/
published: true
categories:
   -
tags:
   -
---
If you type <code>http://www.example.com/templa</code> and you don't have the page with this URL you may end on a page like <code>http://www.example.com/template_redirect</code>. 

What causes this? It is template redirect functionality that is in WordPress.
You can disable it with this:

<pre class="pretty_print">remove_action('template_redirect', 'redirect_canonical');</pre>  

