---
id: 1965
title: PHP namespaces
date: 2014-01-08 12:42:09
author: taimane
layout: post
permalink: /php-namespaces/
published: true
categories:
   - php
tags:
   - namespaces
---
The namespace keyword was not present in PHP4. It was introduced in PHP 5.3.0.

Namespaces are declared using the namespace keyword. A file containing a namespace must declare the namespace at the very top of the file, before any other code—with one exception: the declare keyword (not to be confused with the define keyword).

Within a namespace the following PHP code can be contained :

* classes (including abstracts and traits)
* interfaces
* functions
* and constants

So inline and anonymous functions in PHP cannot be referred using namespaces.

The idea behind the namespace keyword is simple. Like in some other programming languages (Java for example) there is a need to define a special naming space (scope); so you can have many classes with the same name for instance; but in different namespaces.

The very common usage of the namespace keyword would be something like this:
```php
<?php
namespace test;
define(__NAMESPACE__ . '\HELLO', 'Hello from namespace!');
?>
```
