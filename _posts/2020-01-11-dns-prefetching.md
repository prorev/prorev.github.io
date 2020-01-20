---
id: 2153
title: DNS prefetching
date: 2014-05-28 20:42:10
author: taimane
layout: post
permalink: /dns-prefetching/
published: false
categories:
   -
tags:
   -
---
DNS prefetching is browser feature where the browser proactively performs domain name resolution on both links that the user may choose to follow as well as URLs for items referenced by the document, including images, CSS, JavaScript, and so forth.



This prefetching is performed in the background, so that the DNS is likely to already have been resolved by the time the referenced items are actually needed. This reduces latency when, for example, the user actually clicks a link.



DNS requests are bandwidth tiny, but the latency can be quite high, especially on mobile networks.



The implementation of this prefetching in browsers allows domain name resolution to occur in parallel with (instead of in serial with) the fetching of actual page content.



By doing this, the high latency domain name resolution process doesn't cause delays during the process of fetching content.



<em><strong>Turning prefetching on and off</strong></em>



Web server can opt out of DNS prefetching by serving content with the x-dns-prefetch-control: HTTP header set to "off".



<code>&lt;meta http-equiv="x-dns-prefetch-control" content="off"&gt;</code>



You can also set explicitly the dns-prefetching like this:



<code>&lt;link rel="dns-prefetch" href="<span style="text-decoration: underline;">http://my-domain.com</span>"&gt;</code>




