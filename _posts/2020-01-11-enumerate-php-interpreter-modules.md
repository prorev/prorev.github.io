---
id: 1052
title: Enumerate PHP interpreter modules and functions within the modules
date: 2013-01-04 19:31:44
author: taimane
layout: post
permalink: /enumerate-php-interpreter-modules/
published: true
categories:
   -
tags:
   -
---
Consider that PHP programmers need to detect the names of all the PHP modules compiled and loaded.

These two functions are crucial for detecting the loaded modules and the functionality (functions):

* `get_loaded_extensions()`
* `get_extension_funcs()`



```
$ext = get_loaded_extensions();
foreach($ext as $k =>$v){
 echo '<br /><br />';
 echo 'Module: ' . $v;
 echo '<br />';
 $a = get_extension_funcs($v);
 if(!empty($a)){
  echo $funlist = implode(', ', $a);
 }else echo "Empty Module";
}
```

