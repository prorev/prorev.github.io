---
id: 858
title: Zend Framework in WordPress
date: 2012-11-04 23:48:03
author: taimane
layout: post
permalink: /zend-framework-in-wordpress/
published: true
categories:
   -
tags:
   -
---
I set in this blog some articles related to WordPress programming. Nothing will change this time, since now I will present how to integrate Zend Framework into WP.
<a rel="nofollow" href="http://wordpress.org/extend/plugins/zend-framework/"><strong>Zend Framework</strong></a> (ZF) is is an <a rel="nofollow" title="Open source" href="http://en.wikipedia.org/wiki/Open_source">open source</a>, <a rel="nofollow" title="Object-oriented" href="http://en.wikipedia.org/wiki/Object-oriented">object-oriented</a> <a rel="nofollow" title="Web application framework" href="http://en.wikipedia.org/wiki/Web_application_framework">web application framework</a> implemented in <a rel="nofollow" title="PHP 5" href="http://en.wikipedia.org/wiki/PHP_5">PHP 5</a>.
Zend Technologies is a company behind the (ZF) framework and also on of the co founders of  PHP.
Zend Framework become the industry standard for developing the PHP applications. For instance Google use it.
It is easy to add Zend Framework support to the WordPress just by editing the functions.php file and adding the Zend Library (from the Zend Framework package).
However, it is recommended to enable/disable this kind of the support by creating the plugin and enabling/disabling the plugin.
```
/*
Plugin Name: Zend_Framework integration
Description: Zend_Framework integration
Author: author
Version: 1.0
Text Domain: Zend_Framework integration
*/
set_include_path(
	implode(PATH_SEPARATOR, array(
		get_include_path(),
		realpath(__DIR__.'/lib')
	)));
require_once realpath(__DIR__.'/lib/Zend/Loader/Autoloader.php');
$autoloader = Zend_Loader_Autoloader::getInstance();
```
In the previous example you need to create the folder under the WordPress plugin folder and simple add the file with the same name as the foldername.php.
You can also check this plugin http://wordpress.org/extend/plugins/zend-framework/
PS: You can use php.ini file to set the include path this way:
```
include_path = ".:/var/www/html/ZendGdata/library/" 
```
instead of
```
set_include_path
```