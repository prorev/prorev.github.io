---
id: 2616
title: Remove files older than 12 days from some folder
date: 2016-01-16 15:09:40
author: taimane
layout: post
permalink: /remove-files-older-than-12-days-from-some-folder/
published: false
categories:
   -
tags:
   -
---
This is very sensitive operation, because file delete may hurt you badly, so indeed great caution need to be taken.

Most important part is to precisely define the folder from where you delete the files, and second if possible to set the extension of the files or some repetitive part of the file name.

Just enumerate all files that are older than 12 days for instance...

<pre>find /var/www/databasebackup -type f -ctime +12 -name 'pro_*.sql'</pre>

If you are sure these are the files you need to remove than add the following tail to the last instruction: <code>-execdir rm -- {} \;</code>

<pre>find /var/www/databasebackup -type f -ctime +12 -name 'pro_*.sql' -execdir rm -- {} \;</pre>



  

