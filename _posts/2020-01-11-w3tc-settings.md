---
id: 1697
title: W3TC settings and troubleshoots
date: 2013-08-10 14:59:59
author: taimane
layout: post
permalink: /w3tc-settings/
published: true
categories:
   -
tags:
   -
---
W3TC is very complex plugin. It consists of more than 500 different files containing even internal plugins.

Some info about files may be found here: <a href="http://plugins.programming-review.com/w3-total-cache/">http://plugins.programming-review.com/w3-total-cache/</a>

W3TC should be a <em><strong>total</strong></em> solution for caching as the name implies.
It has different caching types:
<ul>
	<li>page caching</li>
	<li>object caching</li>
	<li>browser caching</li>
	<li>database caching.</li>
</ul>
It has support for CDN, Monitoring, Varnish, minification. Also it supports debugging features and logging.

The most common is the page caching feature. By default the page caching has some Never cache options set but one can modify this texbox and to disable some pages from caching.

<a href="https://programming-review.com/wp-content/uploads/2013/08/Selection_432.png"><img class="alignleft size-full wp-image-1704" alt="Selection_432" src="https://programming-review.com/wp-content/uploads/2013/08/Selection_432.png" width="665" height="161" /></a>

Also caching can be set on CDN side and CDN can be updated dynamically. To disable CDN caching no certain pages use this script:
<pre>add_action('init', 'disable_cdn');
function disable_cdn() {
 if (is_page('yourpage')) {
  define('DONOTCDN', true);
 }
}</pre>
The database caching and object caching can be ignored, if we only use disk without APC or other caching mechanism. If we have APC we may include these options, but very important we must test if these options works, because with some plugins this may not work well, so we may get empty result pages.

W3TC is not perfect on minification of JavaScript; where CSS should be fine. For instance the minifying of JavaScript feature doesn't work with automatic option:  <a href="http://uprankers.com/w3-total-cache-javascript-minification-troubleshooting/">http://uprankers.com/w3-total-cache-javascript-minification-troubleshooting/</a>

As we said the plugin has smart modules for CSS minification that can work together with CSS tidy scripts, making the CSS perfect without user intervention. This can be tested in a second by setting W3TC option for CSS minification.

Of course the HTTP minification and XML minification are the options as well.

Finally the plugin supports export of the stettings. Here is what I have for APC hosting : <a href="https://programming-review.com/wp-content/uploads/2013/08/0.txt">0</a>

Thanks  

