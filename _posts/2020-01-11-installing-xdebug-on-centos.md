---
id: 682
title: Installing Xdebug on CentOS
date: 2012-05-27 21:07:57
author: taimane
layout: post
permalink: /installing-xdebug-on-centos/
published: true
categories:
   -
tags:
   -
---
Here are exact steps to follow:

1. You need to install PHP's devel package for PHP commands execution
<code>yum install php-devel</code>
Make sure you also have <strong>php-paer</strong> package installed
<code>yum install php-pear</code>

2. Next install GCC and GCC C++ compilers to compile Xdebug extension yourself.
<code>yum install gcc gcc-c++ autoconf automake</code>

3. Compile Xdebug
<code>pecl install Xdebug</code>

4. Find the php.ini file using
<code>locate php.ini</code>

And add the following line

<code>[xdebug]
zend_extension="/usr/lib64/php/modules/xdebug.so"
xdebug.remote_enable = 1 </code>

5. Restart Apache
<code>service httpd restart</code>

6. Test if it works - create test.php with the following code

<code>&lt;?php phpinfo() ?&gt;</code>
and check if you have the following output

<a href="//programming-review.com/wp-content/uploads/2012/05/xdebug.png"><img class="alignnone size-full wp-image-683" title="xdebug" src="//programming-review.com/wp-content/uploads/2012/05/xdebug.png" alt="" /></a>

<strong>Summary</strong><em>: You installed XDebug by Derick Rethans as Zend_Extension. Installing XDebug as Zend Extension is very important because that way you can Debug step by step in different IDEs.</em>

If you like to compile the xdebug.so object file yourself in order to get the latest version of xdebug.so here are the steps to follow:

1. Download latest xdebug-X.Y.Z.tgz from <a title="XDebug download web site" href="https://xdebug.org/download.php">xdebug web site</a>

2. Unpack the downloaded file with tar -xvzf xdebug-X.Y.Z.tgz to some test folder

3. Run: cd xdebug-X.Y.Z

4. Run: phpize (to prepare the environment)

5. Run: ./configure

6. Run: make (now you have xdebug.so created;)

7. Copy xdebug.so to your modules file (in my case /usr/lib64/php/modules)

8. Make sure you have the following in php.ini
<code>zend_extension = /usr/lib64/php/modules/xdebug.so</code>

9. Make sure you have the execute permission for the xdebug.so file
<code>chmod +x /usr/lib64/php/modules/xdebug.so </code>

10. Restart the webserver

<img class="size-full wp-image-2718 alignnone" src="//programming-review.com/wp-content/uploads/2012/05/Derick-Rethans.png" alt="Derick Rethans" width="537" height="71" />

PS. Please note with the release of PHP 6.0 you will probable see <strong>Zend Engine 3</strong> in the last image.

Thanks.

  

