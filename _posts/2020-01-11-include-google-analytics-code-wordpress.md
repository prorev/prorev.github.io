---
id: 2939
title: Include Google Analytics Code WordPress
date: 2016-07-11 12:05:44
author: taimane
layout: post
permalink: /include-google-analytics-code-wordpress/
published: true
categories:
   -
tags:
   -
---
Add Google Analytics Tracking Code for any page to the footer. This will not be effective in the dashboard.
<pre>function add_google_analytics() {
?&gt;
&lt;script type="text/javascript"&gt;
var gaJsHost = (("https:" == document.location.protocol) ? "https://ssl." : "http://www.");
document.write(unescape("%3Cscript src='" + gaJsHost + "google-analytics.com/ga.js' type='text/javascript'%3E%3C/script%3E"));
&lt;/script&gt;
&lt;script type="text/javascript"&gt;
try {
var pageTracker = _gat._getTracker("UA-XXXXXXX-X");
pageTracker._trackPageview();
} catch(err) {}&lt;/script&gt;
&lt;?php
}

add_action('wp_footer', 'add_google_analytics');
</pre>

Just be sure to replace UA-XXXXXXX-X with your own Google tracking code...  

