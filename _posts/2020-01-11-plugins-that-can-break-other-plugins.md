---
id: 1584
title: Plugins that can break other plugins
date: 2013-07-04 22:55:13
author: taimane
layout: post
permalink: /wordpress/bad-plugins/
redirect_from: /plugins-that-can-break-other-plugins/
published: true
categories:
   -
tags:
   -
---
If you are <strong>WordPress plugin developer</strong> you should know that some poorly written plugins may break out features in WordPress and prevent your plugins from work. 

To isolate which plugin is causing the issue you may disable all plugins except Your (on your test server) and then enable them one by one until one of them breaks your plugin. 

Some problems may be:


## Some plugin generates error in JavaScript.

Check your browser JavaScript console _Inspect Element_. Note which file is generating the error and try to find out the plugin responsible.

## Plugins that disable jQuery in WordPress or access to `/wp-admin/`

Plugins that try to protect your `/wp-admin/` area or plugins that put your site into maintenance mode can also disable the AJAX handler in wp-admin. 

When you execute `http://yoursite.com/wp-admin/admin-ajax.php` you should have no error or forbidden messages. Simple "0" should be returned.

## Plugins that brake WP settings

There are plugins that can break some specific WordPress settings, rewriting rules, custom post types, custom taxonomies. Finally there are "smart" plugins that can throw execution errors, warnings, etc, slowing down or fully blocking the normal WordPress execution. 

> Try to debug WordPress for problems.

