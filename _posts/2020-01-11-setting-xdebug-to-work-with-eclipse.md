---
id: 1828
title: Setting XDebug to work with Eclipse...
date: 2013-12-10 20:57:49
author: taimane
layout: post
permalink: /setting-xdebug-to-work-with-eclipse/
published: fales
categories:
   -
tags:
   -
---
You can use whatever IDE, supporting debugging environment to debug PHP, but the two very popular IDEs for PHP that support <a href="https://programming-review.com/installing-xdebug-on-centos/">XDebug</a> are NetBeans and Eclipse.
Both of these are very popular for other programming languages such as Java.
Here, we will define the settings for Eclipse IDE to work with XDebug do debug PHP that work. Here is the content of the <code>php.ini</code> file.

```
;;;;;;;;;;;;;;;;;;;;;;
; Dynamic Extensions ;
;;;;;;;;;;;;;;;;;;;;;;
; If you wish to have an extension loaded automatically, use the following
; syntax:
;
;   extension=modulename.extension
;
; For example
;
extension=/usr/lib64/php/modules/mysql.so
zend_extension=/usr/lib64/php/modules/xdebug.so

xdebug.remote_enable=1
xdebug.remote_port=9000
xdebug.remote_handler=dbgp
xdebug.idekey=ECLIPSE_DBGP
xdebug.remote_mode=req 
xdebug.remote_host=localhost
xdebug.remote_log=/root/debug
```
For NetBenas the idkey may be like this:

```
xdebug.idekey="netbeans-xdebug"
```

Please note the idkeys may not be hardcoded, you may update them via IDE settings.

[Here](http://www.eclipse.org/pdt/documents/XDebugGuideForPDT2.0.pdf) is one great asset for PDT Eclipse developers.

[Here is xdebug official data](http://xdebug.org/docs/remote).
