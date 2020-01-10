---
id: 2548
title: Nginx Location Directive Examples
date: 2015-10-07 18:41:35
author: taimane
layout: post
permalink: /nginx-location-directive/
published: true
categories:
   -
tags:
   -
---
<pre>location  = / {
  # this matches only the / query.
}
location  / {
  # matches any query due to the fact that all queries begin at /, 
  # however, regular expressions will be matched at first place.

}

location /data/ {
  # this config matches any query beginning with /data/ and then continues searching,
  # in this example regular expressions will be checked and /data/ will be matched only if
  # regular expressions don't find a match.

}
location ^~ /img/ {
  # matches any query beginning with /img/ and then stops searching,
  # in this example there is not place for regular expressions.

}

location ~* \.(png|ico|gif|jpg|jpeg)$ {
  # this config matches any request ending in png, ico, gif, jpg or jpeg.

}</pre>  

