---
id: 12971
title: File extension, file name, file directory in C#?
date: 2020-01-10
author: taimane
layout: post
permalink: /csharp/files/
redirect_from: /system-io-path/
published: true
image: 
categories:
   - csharp
tags:
   - files
---
**How to get file extension, file name, file directory in C# (csharp) based on a file location?**

The trick and the easiest way in C# is to use the `System.IO.Path` class.
You can simple use this code:

```c#
string fileExtension = System.IO.Path.GetExtension(fileLocation);
```
In order to find the file name use this code:

```c#
string fileName = System.IO.Path.GetFileName(fileLocation);
``` 
In order to get a file directory use this code:
```c#
string dirName = System.IO.Path.GetDirectoryName(fileLocation);
``` 
In order to change the file extension to `.jpeg` use this snippet:

```c#
string dest = System.IO.Path.ChangeExtension(fileLocation, ".jpeg");
```
Also the following functions from `System.IO.Path` are also useful:

```c#
* GetPathRoot()
* IsPathRooted()
* GetFileNameWithoutExtension()
```

