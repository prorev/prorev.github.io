---
id: 722
title: The way gradients should look nowdays
date: 2012-07-07 22:47:45
author: taimane
layout: post
permalink: /the-way-gradients-should-look-nowdays/
published: true
categories:
   -
tags:
   -
---
You need to use gradients for your CSS containers.

This one should be perfect:



<pre>

background: #6cab26; // in case of some old old browser

background: -webkit-gradient(linear, left top, left bottom, from(#222222), to(#999999)); /* Saf4+, Chrome */

background: -webkit-linear-gradient(top, #222222, #999999); /* Chrome 10+, Saf5.1+ */

background: -ms-linear-gradient(top, #222222, #999999); /* IE */

background: -moz-linear-gradient(top, #222222, #999999); /* FF */

background: -o-linear-gradient(top, #222222, #999999); /* Opera */

background: linear-gradient(top, #222222, #999999); /* W3C */

</pre>



Or in case combined with the image:



<pre>

background: #6cab26; // in case of some old old browser

background-image: url(IMAGE_URL); 

background-image: url(IMAGE_URL), -webkit-gradient(linear, left top, left bottom, from(#222222), to(#999999)); /* Saf4+, Chrome */

background-image: url(IMAGE_URL), -webkit-linear-gradient(top, #222222, #999999); /* Chrome 10+, Saf5.1+ */

background-image: url(IMAGE_URL), -ms-linear-gradient(top, #222222, #999999); /* IE */

background-image: url(IMAGE_URL), -moz-linear-gradient(top, #222222, #999999); /* FF */

background-image: url(IMAGE_URL), -o-linear-gradient(top, #222222, #999999); /* Opera */

background-image: url(IMAGE_URL), linear-gradient(top, #222222, #999999); /* W3C */

</pre>



Also you may use the <a rel="nofollow" href="http://www.colorzilla.com/gradient-editor/">Ulitmate generator</a>.



Thanks  

