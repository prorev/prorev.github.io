---
id: 682
title: Installing Xdebug on CentOS
date: 2012-05-27 21:07:57
author: taimane
layout: post
permalink: /installing-xdebug-on-centos/
published: true
categories:
   - linux
tags:
   - centos
   - xdebug
---
Here are exact steps to follow:


### 1. Install PHP's devel package for PHP commands execution

```
yum install php-devel
```

### 2. Make sure you also have <strong>php-paer</strong> package installed:

```
yum install php-pear
```


### 3. Next install GCC and GCC C++ compilers to compile Xdebug extension yourself.

```
yum install gcc gcc-c++ autoconf automake
```


### 4. Compile Xdebug

```
pecl install Xdebug
```


### 5. Find the `php.ini` file using

```
locate php.ini
```


### 6. Add the following line to `php.ini`


```
[xdebug]
zend_extension="/usr/lib64/php/modules/xdebug.so"
xdebug.remote_enable = 1
```

### 7. Restart Apache

```
service httpd restart
```


### 8. Test if it works 

Create `test.php` with the following code:

```
<?php phpinfo() ?>
```
and check if you have the following output:


<a href="//programming-review.com/wp-content/uploads/2012/05/xdebug.png"><img class="alignnone size-full wp-image-683" title="xdebug" src="//programming-review.com/wp-content/uploads/2012/05/xdebug.png" alt="" /></a>



<strong>Summary</strong><em>: You installed XDebug by Derick Rethans as Zend_Extension. Installing XDebug as Zend Extension is very important because that way you can Debug step by step in different IDEs.</em>



If you like to compile the xdebug.so object file yourself in order to get the latest version of xdebug.so here are the steps to follow:



- Download latest xdebug-X.Y.Z.tgz from <a rel="nofollow" title="XDebug download web site" href="https://xdebug.org/download.php">xdebug web site</a>



- Unpack the downloaded file with tar -xvzf xdebug-X.Y.Z.tgz to some test folder



- Run: cd xdebug-X.Y.Z



- Run: phpize (to prepare the environment)



- Run: ./configure



* Run: make (now you have xdebug.so created;)



- Copy xdebug.so to your modules file (in my case /usr/lib64/php/modules)



* Make sure you have the following in php.ini

```
zend_extension = /usr/lib64/php/modules/xdebug.so
```


* Make sure you have the execute permission for the xdebug.so file

```
chmod +x /usr/lib64/php/modules/xdebug.so
```

* Restart the webserver


PS. Please note with the release of PHP 6.0 you will probable see <strong>Zend Engine 3</strong> in the last image.




  

