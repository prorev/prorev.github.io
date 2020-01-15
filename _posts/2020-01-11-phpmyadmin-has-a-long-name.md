---
id: 661
title: PHPMyAdmin has a long name
date: 2012-01-16 11:08:02
author: taimane
layout: post
permalink: /phpmyadmin-has-a-long-name/
published: true
categories:
   -
tags:
   -
---
You don't like typing PHPMyAdmin long name when you access it via HTTP. Rename its folder under /var/www/html/phpmyadmin so something like /var/www/html/db



Note: Minimal configuration file can be something like this:

<pre>

$cfg['blowfish_secret'] = '123';

$i++;

$cfg['Servers'][$i]['auth_type'] = 'cookie';

$cfg['Servers'][$i]['host'] = 'localhost';

Thankservers'][$i]['connect_type'] = 'tcp';

$cfg['Servers'][$i]['compress'] = false;

$cfg['Servers'][$i]['extension'] = 'mysqli';

$cfg['Servers'][$i]['AllowNoPassword'] = true;

$cfg['UploadDir'] = '';

$cfg['SaveDir'] = '';

</pre>



Thanks.  

