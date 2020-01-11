---
id: 1866
title: Boolearn algebra results
date: 2013-12-20 20:32:24
author: taimane
layout: post
permalink: /boolearn-algebra-results/
published: true
categories:
   -
tags:
   -
---
You need to find the results for "boolean algebra". Here is how-to in PHP:


```
$uri = 'https://ajax.googleapis.com/ajax/services/search/web?start=23&v=1.0&rsz=large&q=boolean%20algebra';

$data = file_get_contents($uri);
$json = json_decode($data);
print_r($json->responseData->results);

```


