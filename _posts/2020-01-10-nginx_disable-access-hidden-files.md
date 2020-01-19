---
id: 12971
title: Global Restrictions to files starting with the dot
date: 2020-01-10
author: taimane
layout: post
permalink: /nginx/disable-access-hidden-files
published: true
image: 
categories:
   - nginx
tags:
   - htaccess
---
How to customize Nginx config to disable access to _.htaccess_ file, and other hidden files (starting with the dot)


Global Restrictions to files starting with the _dot_ (.) would be like this:

```bash
# Deny all attempts to access hidden files
# such as .htaccess, .htpasswd, .DS_Store (Mac).
location ~ /\. {
deny all;
}
```
This of course will forbid access to all kind of files starting with dot.

### Not to be denied

One extra improvement would be to allow certain folder starting with dot, not to be denied. You can do that again with the location directive, in this case for `.well-known`

```bash
# Allow access to the ACME Challenge for Let's Encrypt
location ~ /\.well-known\/acme-challenge {
allow all;
}

# Deny all attempts to access hidden files
# such as .htaccess, .htpasswd, .DS_Store (Mac).
location ~ /\. {
deny all;
}
```