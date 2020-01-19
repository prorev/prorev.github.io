---
id: 2295
title: Times associated with files
date: 2014-06-12 11:18:15
author: taimane
layout: post
permalink: /linux/file-time/
redirect_from: /times-associated-with-files/
published: true
categories:
   -
tags:
   -
---
If you take for instance the <code>stats</code> command:

```
# stat filename
File: `filename'
Size: 2513      	Blocks: 8          IO Block: 4096   regular file
Device: 801h/2049d	Inode: 657772      Links: 1
Access: (0644/-rw-r--r--)  Uid: (    0/    root)   Gid: (    0/    root)
Access: 2014-06-12 06:07:08.000000000 +0200
Modify: 2014-06-12 06:07:08.000000000 +0200
Change: 2014-06-12 13:07:53.340463555 +0200
 Birth: -
```

It will return you the Access, Modify, and Change times associates with the file. You could get these times also with the <code>ls</code> command

```
# ls -lc filename
-rw-r--r-- 1 root root 2513 Jun 12 13:07 filename
# ls -lu filename
-rw-r--r-- 1 root root 2513 Jun 12 06:07 filename
# ls -l filename
-rw-r--r-- 1 root root 2513 Jun 12 06:07 filename
```

In order to tweak these times you can use <code>touch</code> command like this:

```
touch -t 201406120607.08  filename
touch -t 201406120607.08 -a *.*
touch -t 201406120607.08 -m *.*
find . -exec touch -t 201406120607.08 {} +;
```
