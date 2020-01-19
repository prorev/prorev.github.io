---
id: 12971
title: Website cookies security
date: 2020-01-10
author: taimane
layout: post
permalink: /html/cookies-security
redirect_from: /cookies-security
published: true
image: 
categories:
   - html
tags:
   - cookies
   - php
   - javascript
---
**Website cookie** is name and value pair simplified. Developers uses cookies to store data on the client side. ...

In PHP you would define cookie like this:

```php
setcookie( name, value, expire, path, domain, secure, httponly);
```
Cookies can be stolen via JavaScript if not safe. It depends. 

The **httponly** flag, if set to true, means cookies cannot be altered via JavaScript. The secure flag purpose is to prevent clear text cookies over HTTP. By setting the secure flag, the browser will prevent the transmission of a cookie over an unencrypted channel.

The other parameters like domain and path are constraints, that precisely set where cookie should work.

For instance setting cookie domain to www.example.com will mean only the exact domain www.example.com will be matched, while .example.com will also match any subdomain (forum.example.com, blog.example.com).

The path argument default value of / means every request will get the cookie, while /forum/ limits the cookie to just /forum path.

The expire flag is usually set to some period like 1 or 2 weeks meaning that the cookie will last for 1 or 2 weeks.