---
id: 2069
title: Rsync and incremental backups concept
date: 2014-03-20 20:56:22
author: taimane
layout: post
permalink: /rsync-incremental-backups/
published: true
categories:
   -
tags:
   -
---
Rsync originated as a replacement for rcp and scp.
<h2>Rsync can:</h2>
Rsync can sync two distinct folders:
* locally (two folders on the same machine)
* remotely (for instance : server to backup server).
<h2>Alternative to rsync</h2>
You can use Grsync (graphical interface) to create synchronization you need.
It is easy to set the location for Rsync on local machine. For the remote machine the syntax is this:
<h2>Two ways to call rsync</h2>
The simple way to use Rsync would be this:

<code>rsync -a source/ destination/</code>

or this (for the remote machine):

<code>rsync -avz source/ username@hostname.com:/destination</code>
(z stands for zipping included)

By default the files are not deleted at destination so --delete option is very important
<code>rsync -a --delete source/ destination/</code>
<h2>Incremental backups</h2>
Making a full copy of a large system can be a time-consuming and io-expensive process, it is common to make full backups only once a week or once a month. The other days you can create increments and store changes per each day.

These are called "incremental" backups achieved with <code>rsync -b</code> option.

Rsync will not copy all files every single time a backup is performed.
It will only copy the files that have been newly created or modified since the last backup.
<h2>Be lazy: use cron</h2>
Run backup as cron job periodically. Create basic shell script that runs rsync and set that script into <code>/etc/cron.daily</code> or <code>/etc/cron.weekly</code>.

[googleres text="rsync incremental backups"]  

