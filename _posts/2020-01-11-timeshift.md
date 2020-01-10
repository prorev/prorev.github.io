---
id: 2586
title: TimeShift
date: 2016-01-08 12:42:37
author: taimane
layout: post
permalink: /timeshift/
published: true
categories:
   -
tags:
   -
---

TimeShift for Linux is a application that provides functionality similar to the System Restore feature in Windows and the Time Machine tool in Mac OS. TimeShift protects your system by taking incremental snapshots of the file system at regular intervals. These snapshots can be restored later to bring your system to the exact state it was in at the time when the snapshot was taken.

Snapshots are taken using rsync and hard-links. Common files are shared between snapshots which saves disk space. Each snapshot is a full system backup that can be browsed with a file manager.

<pre>sudo apt-add-repository -y ppa:teejee2008/ppa
sudo apt-get update
sudo apt-get install timeshift</pre>
  

