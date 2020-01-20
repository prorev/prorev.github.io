---
id: 2414
title: Install Xdebug in Ubuntu
date: 2014-10-26 20:22:34
author: taimane
layout: post
permalink: /install-xdebug-in-ubuntu/
published: false
categories:
   -
tags:
   -
---
Should be very easy:



1.&nbsp;<code>apt-get install php5-dev php-pear</code>



2.&nbsp;<code>pecl install xdebug</code>



3.&nbsp;<code>updatedb; locate xdebug.so</code>



4. add to <code>/etc/php5/apache2/php.ini</code> this line found in step 3

<code>zend_extension="/usr/lib/php5/20090626/xdebug.so"</code>



5. <code>service apache2 restart</code>

<a href="https://programming-review.com/wp-content/uploads/2014/10/Selection_00009.png"><img src="https://programming-review.com/wp-content/uploads/2014/10/Selection_00009.png" alt="Selection_00009" width="726" height="303" class="alignnone size-full wp-image-2418" /></a>  

