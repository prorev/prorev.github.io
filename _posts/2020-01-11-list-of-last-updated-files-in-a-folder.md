---
id: 2897
title: List of last updated files in a folder
date: 2016-06-13 10:54:55
author: taimane
layout: post
permalink: /list-of-last-updated-files-in-a-folder/
published: true
categories:
   -
tags:
   -
---
<code>find /my/very/new/folder -printf '%T+ %p\n' | sort -r | head -20</code>

This will return last 20 lines.
  

