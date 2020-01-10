---
id: 1490
title: WordPress Functions.php and load external files
date: 2013-05-25 09:40:23
author: taimane
layout: post
permalink: /wordpress-functions-php-and-load-loading-external-files/
published: true
categories:
   -
tags:
   -
---
There the idea to load external files via <code><em>require</em></code> keyword. This is the way how to achieve the organization of your functions file in WordPress

<code>
//load the sidebarsbars and middlebars
require(get_template_directory() . '/bars/sidebars.php');

// custom widgets
require( get_template_directory() . '/widgets/widgets.php' );</code>

The previous code is a smart solution since in order the sidebars or the widgets you need to update specific files instead to update the whole <code>functions.php</code> file.


Thanks
  

