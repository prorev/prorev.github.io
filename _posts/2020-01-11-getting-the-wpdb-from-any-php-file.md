---
id: 3011
title: Getting the $wpdb from any PHP file
date: 2016-08-31 19:15:37
author: taimane
layout: post
permalink: /wordpress/wpdb/
redirect_from: /getting-the-wpdb-from-any-php-file/
published: true
categories:
   -
tags:
   -
---
How to load WordPress from any PHP file?

```php
set_time_limit (0);
ini_set ('max_execution_time', 0);
ini_set ('display_errors', 1);
ini_set ('display_startup_errors', 1);
error_reporting (-1);
require_once (dirname ( __FILE__ ) . "/wp-load.php");
global $wpdb;
```


<img class="alignnone size-full wp-image-3012" src="https://programming-review.com/wp-content/uploads/2016/08/wordpress.jpg" alt="" width="238" height="214" />  

