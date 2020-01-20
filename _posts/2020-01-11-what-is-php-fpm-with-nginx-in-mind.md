---
id: 1905
title: What is PHP-FPM?
date: 2014-01-01 18:25:30
author: taimane
layout: post
permalink: /linux/php-fpm
redirect_from: /what-is-php-fpm-with-nginx-in-mind/
published: true
categories:
   -
tags:
   -
---

## Why PHP-FPM

If Apache has some advantages over Nginx -- that would be the ease you can enable PHP. 

Nginx has no out-of-the-box-modules for PHP. So my wild guess -- you would probable use PHP-FPM.



<a rel="nofollow" href="http://php-fpm.org/">PHP-FPM</a> (FPM = "FastCGI Process Manager") integrates well with Nginx. And it is fast and scalable. As of PHP 5.3.3 PHP-FPM is in its core so you don't need special install.

## PHP-FPM speed

To determine the PHP-FPM speed one would need to <a rel="nofollow" href="http://www.if-not-true-then-false.com/2011/nginx-and-php-fpm-configuration-and-optimizing-tips-and-tricks/">explore much</a>, so we can take this as a well-known-truth. Scalable means PHP-FPM can scale the number of its own worker processes that are currently running based on the need—and based on the php-fpm settings. Just to distinguish PHP-FPM worker processes are not the same as Nginx worker processes. Both the servers (Nginx and PHP-FPM) just have the similar pool mechanism.

## PHP-FPM features
These include:

* Adaptive process spawning (NEW!)
* Basic statistics (ala Apache's mod_status) (NEW!)
* Advanced process management with graceful stop/start
* Ability to start workers with different uid/gid/chroot/environment and different php.ini (replaces safe_mode)
* Stdout & stderr logging
* Emergency restart in case of accidental opcode cache destruction
* Accelerated upload support
* Support for a "slowlog"
* Enhancements to FastCGI, such as fastcgi_finish_request() - a special function to finish request & flush all data while continuing to do something time-consuming (video converting, stats processing, etc.)
* Enhancements to FastCGI, such as fastcgi_finish_request() - a special function to finish request & flush all data while continuing to do something time-consuming (video converting, stats processing, etc.)

... and some more. Basically when you type something like this in your system:

## Is PHP-FPM enabled?

```
sys_NEW#rpm -qa |grep php |awk -F'.1|.2|.3|.4|.5' '{ print $1 }'

php-xml
php-imap
php-pear
php-mbstring
php-common
php-pdo
php-odbc
php
php-mysql
php-pecl-apc
php-xmlrpc-5
wbm-php-pear
php-fpm
php-devel
php-cli
php-gd
php-snmp
php-pgsql
php-suhosin
php-mcrypt
php-apc
```

you should notice that _php-fpm_ is enabled.



