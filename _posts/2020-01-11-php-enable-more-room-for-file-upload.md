---
id: 2495
title: PHP enable more room for file upload
date: 2015-06-01 21:02:23
author: taimane
layout: post
permalink: /php/file-upload/
redirect_from: /php-enable-more-room-for-file-upload/
published: true
categories:
   -
tags:
   -
---
The first thing to check is PHP.ini file.

The values of <code>upload_max_filesize</code>,<code> memory_limit</code> and <code>post_max_size</code> in the php.ini configuration.

All these limit the maximum file size submitted and handled by PHP. 

Typically <code>post_max_size</code> and <code>memory_limit</code> need to be larger than <code>upload_max_filesize</code>.

You can check `phpinfo()` to get the values.

