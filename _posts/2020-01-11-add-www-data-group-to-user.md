---
id: 2583
title: Add www-data group to user dj
date: 2016-01-08 11:24:48
author: taimane
layout: post
permalink: /add-www-data-group-to-user/
published: true
categories:
   -
tags:
   -
---
You have user <code>dj</code>, and you need to add that user to <code>www-data</code> group.
Here is how to do it:

<pre>sudo usermod -a -G www-data dj</pre>

Then you check to confirm
<pre>$ groups dj
dj : dj adm cdrom sudo dip www-data plugdev lpadmin sambashare
</pre>  

