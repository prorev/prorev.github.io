---
id: 239
title: How to get python object type?
date: 2011-04-02 22:13:44
author: taimane
layout: post
permalink: /python-object-type/
published: true
categories:
   -
tags:
   -
---
Python is strongly typed language as you may already know. Wikipedia explains that <a href="http://en.wikipedia.org/wiki/Strong_typing">here</a>. Because of that you can check easily object types in Python this way:
<code lang="python">
l=['one','two']
type(l)
type 'list'
print l.__class__
type 'list'
</code>
When you need to check you can do it in this pythonic way:
<code lang="python">
l=[]
if type(l).__name__== 'list': print 'Is a list!'
else: print 'Not a list'
</code>  

