---
id: 276
title: Speeding up WordPress web site
date: 2011-05-11 17:15:31
author: taimane
layout: post
permalink: /speeding-up-wordpress-web-site/
published: true
categories:
   -
tags:
   -
---
In general there are several ways for tracking your web site speed:

* <a rel="nofollow" href="http://pagespeed.googlelabs.com/">http://pagespeed.googlelabs.com/</a>

* <a rel="nofollow" href="http://tools.pingdom.com/">http://tools.pingdom.com/</a>

* If you are using Chrome, right click and from the context menu select "Chrome Inspect Element"

<img src="https://programming-review.com/wp-content/uploads/2011/05/inspect-elements.png" alt="" title="inspect-elements" width="1210" height="618" class="alignnone size-full wp-image-278" />

* There is also "Page Speed" plugin for Firefox and Chrome that can provide excellent web site speed statistics.

* Firefox Firebug plugin ...







There is an <a rel="nofollow" href="http://developer.yahoo.com/performance/rules.html">excellent Yahoo tutorial</a> for general website speed optimization.



The best website speed optimization techniques are:

* Minifying the number of HTTP requests (either using CSS sprites technique, image maps, combining HTTP requests using WordPress plugins)

* To set the "Expires" on a Cache-Control Header of the HTTP request. If you are under apache this can be done by modifying the .htaccess file

* To use the Content Delivery Network (CDN)


A content delivery network (CDN) is a collection of web servers distributed across multiple locations to deliver content more efficiently to users. The server selected for delivering content to a specific user is typically based on a measure of network proximity. For example, the server with the fewest network hops or the server with the quickest response time is chosen.



Finally WordPress plugins for web site speedup: 

* <a rel="nofollow" href="http://www.w3-edge.com/wordpress-plugins/w3-total-cache/">W3 Total Cache</a> (excellent choice for dedicated hosting)

* <a rel="nofollow" href="http://www.satollo.net/plugins/hyper-cache">Hyper Cache</a> (probable the best choice for shared hosting)


  

