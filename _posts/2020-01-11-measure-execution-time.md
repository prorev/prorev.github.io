---
id: 2352
title: Measure PHP code execution time
date: 2014-07-30 19:00:21
author: taimane
layout: post
permalink: /php/measure-execution-time/
redirect_from: /measure-execution-time/
published: true
categories:
   -
tags:
   -
---
_Example:_
```
$time_start = microtime(true);

//some PHP code

$time_end = microtime(true);
echo $execution_time = ($time_end - $time_start);
```


