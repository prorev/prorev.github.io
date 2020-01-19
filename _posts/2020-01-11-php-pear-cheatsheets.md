---
id: 2315
title: PHP Pear cheatsheets
date: 2014-06-19 05:45:46
author: taimane
layout: post
permalink: /php/pear-cheatsheets/
redirect_from: /php-pear-cheatsheets/
published: true
categories:
   -
tags:
   -
---
Perl as CPAN, Ruby has Gems, and PHP has Pear (set of reusable PHP components).

You can find out the Pear default packages list using:
```
pear remote-list
```
You can install any package from that list:
```
pear install [package_name]
```
You can install any other package by:
```
pear install [some-path.tar.gz]
```
You can list installed packages:
```
pear list
```
You can list files from the package installed:
```
pear list-files [package_name]
```
You can uninstall a PEAR package:
```
pear uninstall [package_name]
```
You can upgrade PEAR installer:
```
pear upgrade PEAR
```
