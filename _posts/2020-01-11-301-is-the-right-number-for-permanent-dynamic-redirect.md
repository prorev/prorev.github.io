---
id: 1485
title: 301 is the right number for permanent dynamic redirect
date: 2013-05-18 15:48:33
author: taimane
layout: post
permalink: /301-is-the-right-number-for-permanent-dynamic-redirect/
published: true
categories:
   -
tags:
   -
---
Use a server-side 301 redirect if you need to change the URL of a page as it is shown in search engine results.

This is the best way to ensure that users and search engines are directed to the correct page. 

The 301 status code means that a page has permanently moved to a new location.



PHP code in dynamic fashion (dynamically):



```

header("HTTP/1.1 301 Moved Permanently");

header("Location: http://yourwebsite.com/$dynamicpart/");

```

301 redirects are particularly useful when:



You move to a new domain 

People access your site through several different URLs. 

You changed your permalinks in WordPress



The same can be done via .htaccess but I find it easy this way.



Thanks  

