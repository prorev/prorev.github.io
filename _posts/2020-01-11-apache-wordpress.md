---
id: 665
title: Apache must own WordPress files and folders
date: 2012-01-28 12:12:18
author: taimane
layout: post
permalink: /wordpress/apache-wordpress/
redirect_from: /apache-wordpress/
published: true
categories:
   -
tags:
   -
---
<a href="https://programming-review.com/wp-content/uploads/2012/01/troublewithapache.png"><img class="alignnone size-full wp-image-666" title="troublewithapache" src="https://programming-review.com/wp-content/uploads/2012/01/troublewithapache.png" alt="" width="553" height="356" /></a>

Have you received the following dialog on your side? If you have WordPress files and folders are not owned by your apache.

To eliminate the following dialog you need to write down this line.


```
; RedHat version
chown -R apache wordpress-folder

;Ubuntu version
chown -R www-data wordpresss-folder
```

The same troubleshoot work when WordPress cannot write <code>wp-conf.php</code> file during the installation.

