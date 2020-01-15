---
id: 1887
title: Migrate WordPress from Apache to Nginx
date: 2013-12-31 14:29:40
author: taimane
layout: post
permalink: /migrate-wordpress-from-apache-to-nginx/
published: true
categories:
   -
tags:
   -
---
You migrate WordPress from Apache to Nginx. Migration is never a simple process, so here are some ideas you need to think before you even start to migrate:

<ol>

	<li>You need to know how to install Nginx - not just Nginx, because it will not handle your PHP code.</li>

	<li>In order to work with PHP on Nginx you need to have PHP-FMP. <a rel="nofollow" href="http://php-fpm.org/">PHP-FPM</a> is a module that can interpret PHP files. However, this is currently integral part of PHP (if PHP version &gt; 3.3).</li>

	<li>You need to clone PHP configuration from the original (Apache) web site. You need to pay attention to all config files before migration.</li>

	<li>Optionally, you install APC (or some other similar caching tool). This will cache the PHP opcode(s) - will not interpret PHP files all the time.</li>

</ol>

PS. This migration tutorial is similar for other CMS systems like WordPress.  

