---
id: 1975
title: Unexpected output during WP plugin activation
date: 2014-01-08 21:29:52
author: taimane
layout: post
permalink: /unexpected-output-during-activation/
published: true
categories:
   -
tags:
   -
---
You received the error message like this in WordPress back office:
The plugin generated XXX characters of unexpected output during activation. If you notice “headers already sent” messages, problems with syndication feeds or other issues, try deactivating or removing this plugin.
Try setting the breakpoint in admin/includes/plugin.php for the activate_plugin function.
```
if ( ob_get_length() > 0 ) { $output = ob_get_clean(); return new WP_Error('unexpected_output', __('The plugin generated unexpected output.'), $output); }
```
You can easily check the output and what caused the problem.
