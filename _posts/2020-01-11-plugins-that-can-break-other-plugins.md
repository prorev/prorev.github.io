---
id: 1584
title: Plugins that can break other plugins
date: 2013-07-04 22:55:13
author: taimane
layout: post
permalink: /plugins-that-can-break-other-plugins/
published: true
categories:
   -
tags:
   -
---
If you are <strong>WordPress plugin developer</strong> you should know that some poorly written plugins may break out features in WordPress and prevent your plugins from work. 
To isolate which plugin is causing the issue you may disable all plugins except Your (on your test server) and then reenable them one by one until one of them breaks your plugin. 
Some problems may be:

1/ Some plugin generates error in JavaScript. Check your browser JavaScript console (in Chrome "Inspect Element"). Note which file is generating the error and try to find out the plugin responsible. PS. this may be WP theme problem also.

2/ Plugins that disable jQuery in WordPress. 

3/ Plugins that try to protect your /wp-admin/ area or plugins that put your site into maintenance mode and also disable the AJAX handler in wp-admin. 
When you execute "http://yoursite.com/wp-admin/admin-ajax.php" you should have no error or forbidden messages. Simple "0" should be returned.  

4/ There are plugins that can break some specific WordPress settings, rewriting rules, custom post types, custom taxonomies. Finally there are "smart" plugins that can throw execution errors, warnings, etc, slowing down or fully blocking the normal WordPress execution. The best would be to debug WordPress in NetBeans, Eclipse, or Zend IDE to determine problems.


Thanks
  

