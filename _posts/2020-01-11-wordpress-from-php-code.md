---
id: 1099
title: Call WordPress functions from custom PHP code
date: 2013-01-22 14:07:33
author: taimane
layout: post
permalink: /wordpress/call-it-from-php/
redirect_from: /wordpress-from-php-code/
published: true
categories:
   -
tags:
   -
---
In order to execute WordPress functions from any PHP code you need to load the `wp-load.php` file, like this:
```php
require_once("/path/to/wordpress/wp-load.php");
```
