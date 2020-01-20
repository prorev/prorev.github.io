---
id: 2897
title: List of last updated files in a folder
date: 2016-06-13 10:54:55
author: taimane
layout: post
permalink: /linux/last-updated-files/
redirect_from: 
- /list-of-last-updated-files-in-a-folder/ 
- /remove-files-older-than-12-days-from-some-folder/
published: true
categories:
   -
tags:
   -
---
## Find last updated files like this:

```bash
find /my/very/new/folder -printf '%T+ %p\n' | sort -r | head -20
```

This will return last 20 files.


## How to Remove files older than N days from a folder?

This is very sensitive operation, since file delete without caution may hurt badly.

Most important part is to precisely define the folder from where you delete the files, and second if possible to set the extension of the files or some repetitive part of the file name.

Just enumerate all files that are older than 12 days for instance

```bash
find /var/www/databasebackup -type f -ctime +12 -name 'pro_*.sql'
```

If you are sure these are the files you need to remove than add the following tail to the last instruction:

```
execdir rm -- {} \;
```
```
find /var/www/databasebackup -type f -ctime +12 -name 'pro_*.sql' -execdir rm -- {} \;
```

