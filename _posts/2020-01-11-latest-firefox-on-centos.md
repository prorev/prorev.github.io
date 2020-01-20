---
id: 623
title: Install latest version of Firefox on CentOS
date: 2011-11-29 17:38:53
author: taimane
layout: post
permalink: /latest-firefox-on-centos/
published: false
categories:
   -
tags:
   -
---
<a rel="nofollow" title="CentOS" href="http://en.wikipedia.org/wiki/CentOS">CentOS</a> 5 or 6 by default comes with <a rel="nofollow" title="Firefox 3.5" href="http://en.wikipedia.org/wiki/Firefox_3.5">Firefox 3.5</a>. This is not very good, but there is hope.

You can download yourself the tar.bz2 tarball for whatever Firefox version you need to your CentOS.



Here depending on your System (32-bit or 64-bit) you need to navigate the correct version of Firefox you need to install:

<pre>ftp://ftp.mozilla.org/pub/firefox/releases/</pre>

After downloading the new version of Firefox as tar.bz2 you need to extract it to a specific folder. The new Linux practice is to use the /opt folder for that. So in case of Firefox version 8 you can extract the tarball to the /opt/firefox8



After this step please create a symbolic link to your file /opt/firefox8/firefox:

<pre>ln -s /opt/firefox8/firefox /usr/bin/firefox</pre>


