---
id: 2330
title: WordPress requests
date: 2014-07-14 11:36:45
author: taimane
layout: post
permalink: /wordpress-request/
published: true
categories:
   -
tags:
   -
---
This will be some logical covering of the WordPress request - the initiation of the web request in WordPress that is simple like this:

You type the URL and WordPress needs to handle that URL and needs to present the correct data.

It starts from the index.php file = the very first file WordPress executes with the every request...

<a href="https://programming-review.com/wp-content/uploads/2014/07/Selection_0051.png"><img class="alignnone size-full wp-image-2333" src="https://programming-review.com/wp-content/uploads/2014/07/Selection_0051.png" alt="Selection_005" width="693" height="318" /></a>

then the wp-blog-header loads some initialization and calls the wp() function.

<a href="https://programming-review.com/wp-content/uploads/2014/07/Selection_006.png"><img class="alignnone size-full wp-image-2334" src="https://programming-review.com/wp-content/uploads/2014/07/Selection_006.png" alt="Selection_006" width="610" height="326" /></a>

wp() functions takes the query vars and should create the global $wp_query object.

<a href="https://programming-review.com/wp-content/uploads/2014/07/Selection_007.png"><img class="alignnone size-full wp-image-2335" src="https://programming-review.com/wp-content/uploads/2014/07/Selection_007.png" alt="Selection_007" width="638" height="264" /></a>

before creating that object we need to parse the request.

<a href="https://programming-review.com/wp-content/uploads/2014/07/Selection_008.png"><img class="alignnone size-full wp-image-2336" src="https://programming-review.com/wp-content/uploads/2014/07/Selection_008.png" alt="Selection_008" width="789" height="467" /></a>

Here comes the idea of rewrite rules in WordPress, since these are the rules stored in the options table and predefined to improve the SEO.

<a href="https://programming-review.com/wp-content/uploads/2014/07/Selection_009.png"><img class="alignnone size-full wp-image-2337" src="https://programming-review.com/wp-content/uploads/2014/07/Selection_009.png" alt="Selection_009" width="703" height="421" /></a>

There are more the 100 rules. You can also create these rules, if you need special URL structures to be understood by WordPress to present your data with your special templates and query type meaning.

<a href="https://programming-review.com/wp-content/uploads/2014/07/Selection_010.png"><img class="alignnone size-full wp-image-2338" src="https://programming-review.com/wp-content/uploads/2014/07/Selection_010.png" alt="Selection_010" width="1067" height="524" /></a>

&nbsp;

In WordPress <em>index.php</em> handles all requests. This is why your Apache configuration files probably contain the following lines:
<p style="color: #1f0d0d;"><code>RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule . /index.php [L]</code></p>
<p style="color: #1f0d0d;">and your nginx rolls with:</p>
<code>if (!-e $request_filename) { rewrite ^(.*)$ /index.php last; }  </code>
<p style="color: #1f0d0d;">Of course if you don’t have those rewrite rules you’re probably using some of the default</p>
<p style="color: #1f0d0d;"><code>http://abc.de/index.php/2011/10/15/sample-post/</code> permalink structures, where the request <code>/2011/10/15/sample-post</code> is already being passed to <em>index.php</em>.</p>
There are two types of rewrite rules in WordPress:

1. internal rules = stored in the database and parsed by <code>WP::parse_request()</code>

2. external rules (stored in .htaccess and parsed by Apache if you are on Apache).

Thanks  
