---
id: 2707
title: Secure cookies
date: 2016-02-05 11:10:26
author: taimane
layout: post
permalink: /secure-cookies/
published: true
categories:
   -
tags:
   -
---
Cookie is name and value pair simplified. Developer uses cookies to store data on the client side. This is handled using the programming language like PHP, Perl,...

In PHP you would define cookie like this:

```setcookie( name, value, expire, path, domain, secure, httponly);
```


Cookies can be stolen via JavaScript but they may not be. It depends. The httponly flag, if set to true, means cookies cannot be altered via JavaScript.


The secure flag purpose is to prevent clear text cookies over HTTP. By setting the secure flag, the browser will prevent the transmission of a cookie over an unencrypted channel.



The other parameters like domain and path are constraints, that precisely set where cookie should work.



For instance setting cookie domain to <code>www.example.com</code> will mean only the exact domain <code>www.example.com</code> will be matched, while <code>.example.com</code> will also match any subdomain (forum.example.com, blog.example.com).



The path argument default value of <code>/</code> means every request will get the cookie, while <code>/forum/</code> limits the cookie to just <code>/forum</code> path. 


The expire flag is usually set to some period like 1 or 2 weeks meaning that the cookie will last for 1 or 2 weeks.



