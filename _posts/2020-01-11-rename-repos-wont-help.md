---
id: 1482
title: Rename repos won't help unless extension renamed
date: 2013-05-16 13:16:26
author: taimane
layout: post
permalink: /rename-repos-wont-help/
published: true
categories:
   -
tags:
   -
---
You try to install specific <code>php</code> package from the default repo, but because of package dependencies <strong>yum</strong> provides another package for you.
This another <code>php</code> package (that I don't need) was taken from a non default repo (zend.repo).

To disable the dependencies flow I tried to rename the zend.repo by adding the ~ at the very end of the zend.repo file ;so I got ~zend.repo.
This was not helpful because still zend.repo was considered for the <code>yum</code> command.

The helpful resolution was to zip the zend.repo file, or to update the extension repo to repo2 for instance (zend.repo2)

Thanks  

