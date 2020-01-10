---
id: 658
title: Using NTFS on CentOS
date: 2012-01-16 10:02:56
author: taimane
layout: post
permalink: /using-ntfs-on-centos/
published: true
categories:
   -
tags:
   -
---
To use NTFS on CentOS:

1. Enable support for RPMForge repo for your CentOS version from here:
http://wiki.centos.org/AdditionalResources/Repositories/RPMForge

2. Execute yum --enablerepo=rpmforge install fuse fuse-ntfs-3g

--Thanks

  

