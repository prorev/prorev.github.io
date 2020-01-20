---
id: 2421
title: Simple logging for WordPress
date: 2014-10-28 11:37:05
author: taimane
layout: post
permalink: /php/simple-logging/
redirect_from: /simple-logging-for-wordpress/
published: true
categories:
   -
tags:
   -
---
Here is the example of simple function to log variables. Very basic.
I like to copy paste this function:

```php
function write_log($var) {
$fi = fopen("/var/site.com/fi.txt", "w+") 
or die("Unable to open file!");
fwrite($fi, print_r($var, true));
fwrite($fi, "\n");
fclose($fi);
}
```