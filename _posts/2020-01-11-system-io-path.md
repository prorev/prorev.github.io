---
id: 35
title: How to get file extension, file name, file directory in C# (csharp) based on a file location?
date: 2011-02-28 09:21:15
author: taimane
layout: post
permalink: /system-io-path/
published: true
categories:
   -
tags:
   -
---
The trick and the easiest way in C# is to use the System.IO.Path class.
You can simple use this code:
<code>string fileExtension = System.IO.Path.GetExtension(fileLocation);</code>

In order to find the file name use this code:
<code>string fileName = System.IO.Path.GetFileName(fileLocation);</code>

In order to get a file directory use this code:
<code>string dirName = System.IO.Path.GetDirectoryName(fileLocation);</code>

In order to change the file extension to “.jpeg” use this snippet:
<code>string dest = System.IO.Path.ChangeExtension(fileLocation, ".jpeg");</code>

Also the following functions from System.IO.Path are also useful:
<code>GetPathRoot, IsPathRooted, GetFileNameWithoutExtension…</code>

Thanks.  

