---
id: 1490
title: WordPress Functions.php and load external files
date: 2013-05-25 09:40:23
author: taimane
layout: post
permalink: /wordpress/load-sidebar/
redirect_from: /wordpress-functions-php-and-load-loading-external-files/
published: true
categories:
   -
tags:
   -
---
In WordPress, you can use this code to load sidebars or widgets.

```php
//load the sidebars and middlebars
require(get_template_directory() . '/bars/sidebars.php');

// custom widgets
require( get_template_directory() . '/widgets/widgets.php' );
```

The previous code is a smart solution since in order the sidebars or the widgets you need to update specific files instead to update the whole `functions.php` file.
