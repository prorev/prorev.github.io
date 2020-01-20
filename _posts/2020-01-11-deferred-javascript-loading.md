---
id: 2023
title: Deferred JavaScript loading
date: 2014-01-21 11:07:51
author: taimane
layout: post
permalink: /deferred-javascript-loading/
published: false
categories:
   -
tags:
   -
---
Deferred loading of render blocking JavaScripts has been explained here: <a rel="nofollow" href="https://developers.google.com/speed/docs/insights/BlockingJS">https://developers.google.com/speed/docs/insights/BlockingJS</a>.

<a rel="nofollow" href="http://

There is one another article how to decrease initial page loading time here: <a href="http://www.feedthebot.com/pagespeed/defer-loading-javascript.html">http://www.feedthebot.com/pagespeed/defer-loading-javascript.html</a>

<a rel="nofollow" href="http://

In/For WordPress basically you would either program the load yourself according to the above tips or use one of the following plugins (for instance):

<a rel="nofollow" href="http://

#1 <a href="http://wordpress.org/plugins/wp-deferred-javascripts/">http://wordpress.org/plugins/wp-deferred-javascripts/</a>



Defer the loading of all javascripts added with wp_enqueue_scripts, using LABJS (an asynchronous javascript library).



#2 <a href="http://wordpress.org/plugins/wp-defer-loading/">http://wordpress.org/plugins/wp-defer-loading/</a>



Defer loading javascript for WordPress. Without any additional library.



