---
id: 717
title: Eliminating Eclipse Launching Index(1) : 57% message
date: 2012-07-05 15:53:30
author: taimane
layout: post
permalink: /eliminating-eclipse-launching-index1-57-message/
published: true
categories:
   -
tags:
   -
---
You are using CentOS or some other system with <a href="https://programming-review.com/selinux/">SELinux</a> support.
Most likely the Eclipse error message that looks like in the image:

<img class="size-full wp-image-718 alignleft" title="launching index 57" src="/wp-content/uploads/2012/07/launching-index-57.png" alt="" />

&nbsp;

&nbsp;

&nbsp;

has been caused because of SELinux prohibits. Just eliminate SELinux to test if this was the cause of the problem:

<code># setenforce 0</code>

Thanks  

