---
id: 2512
title: Nginx, Disable access to .htaccess file, and other hidden files
date: 2015-09-20 23:01:32
author: taimane
layout: post
permalink: /nginx/disable-access-to-htaccess/
redirect_from: /nginx-disable-htaccess/
published: true
categories:
   -
tags:
   -
---
Global Restrictions to files starting with "dot" (.) would be like this:

```bash
# Deny all attempts to access hidden files
# such as .htaccess, .htpasswd, .DS_Store (Mac).
location ~ /\. {
  deny all;
}
```

This of course will forbid access to all kind of files starting with dot.

<img title="Speed Coding" src="https://farm4.static.flickr.com/3093/2806928289_3fed9cdc67_m.jpg" alt="Speed Coding" border="0" hspace="5" />

One extra improvement would be to allow certain folder starting with dot, not to be denied.
You can do that again with the location directive, in this case for <code>.well-known</code> 

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

