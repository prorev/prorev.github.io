---
id: 808
title: Check Linux memory used by the process (program)
date: 2012-10-31 10:38:22
author: taimane
layout: post
permalink: /process-memory-check/
published: true
categories:
   -
tags:
   -
---
Wednesday is the perfect time to examine processes on your Linux server. The idea is to gain the feedback to fine tune your web server. The more proficient tools we have to examine the processes the better.



For instance if we type:

<code>pidof httpd</code>



The result may be:

<code>5907 5904 5880 5434 5188</code>



Then to get memory used by a process call the next line for each PID

<code>pmap 5907</code>



Also even better is to have a proficient tool and the HTML output for the memory info. The tool you may use is called "munin" (means memory). You can install munin as described <a rel="nofollow" href="http://wiki.mediatemple.net/w/(dv)_4.0_-_Making_It_Better_::_Installing_Munin">here</a> and <a rel="nofollow" href="http://articles.slicehost.com/2010/3/12/installing-munin-on-centos">here</a>.



Thanks.  

