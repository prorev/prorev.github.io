---
id: 573
title: Linux RPM packet manager
date: 2011-09-13 19:51:01
author: taimane
layout: post
permalink: /rpm-packet-manager/
published: true
categories:
   -
tags:
   -
---
System administrators use package management rather than manual building software because of simplicity, consistency and the ability for these processes to be automated on different systems easy.

<strong>RPM </strong>stands as "Resource Packed Manager".
If you are familiar with<code> yum</code>, <code>apt</code>, <code>urpmi</code>, <code>up2date </code>these are all based on <strong>RPM</strong>.

Most common <strong>RPM </strong>commands would be:
To install:
<pre># rpm -ivh filename.rpm</pre>
To update:
<pre># rpm -Uvh filename.rpm</pre>
To query all files or to query configuration files:
<pre># rpm -qa
# rpm -qc</pre>
To delete:
<pre># rpm -ev packagename</pre>
To get the dependencies:
<pre># rpm -qpR filename.rpm or
# rpm -qR packagename</pre>
Note that <code>-i</code> option stands for <em>install</em>, <code>-U</code> stands for <em>update</em>,
<code>-v</code> stands for <em>verbose</em>, <code>q</code> for <em>query</em>, <code>p</code> for <em>package</em>, etc.

I don't want to confuse anyone, but just to give you another part of the picture, there is another popular Linux package format called <code>dpkg</code>, for files with <code>.deb</code> extension. This package format is used on Debian and Ubuntu.  They use the command <code>dpkg</code> to install a package, and <code>apt-get</code> is the front-end for it, it's the clever one. So their <code>.deb </code>files are our <code>.rpm</code> files.

Thanks.  

