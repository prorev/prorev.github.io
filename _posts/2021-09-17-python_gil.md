---
id: 12971
title: Python GIL
date: 2020-01-22
author: taimane
layout: post
permalink: /python/gil
published: false
image: 
categories: 
   - python
tags:   
   - threading
---

- [What is GIL](#what-is-gil)
- [Python threading](#python-threading)
- [Reference counting](#reference-counting)

## What is GIL

GIL makes any CPU python program single threaded.

> In case of massive calculations to improve the performance we need to create processes.

For I/O based programs GIL has no effect. 

> For instance, in case of reading big files it's fine to have multi threaded Python program.

`Thread.join()` waits for the thread to finish.

## Python threading

**What does threading.Lock() do?**


threading.Lock is used to restrict access to a section of code (or a resource) 
so that only one thread can execute that code (or use the resource) at a time. 

In other words this is threads synchronization mechanism that allows one thread at a time to access resource.

Every access to the resource must be protected by a Lock. 



## Reference counting

Python uses reference counting for memory management where each object has a reference counter.

```python
import sys 
a = []
print(sys.getrefcount(a))
```

Out:
```
2
```

Reference counter is Python internal variable that keeps track of the number of references to the object. 
When reference counter is zero we can release the memory occupied by the object.

`sys.getrefcount` will return the reference count of object.

The count returned is generally one higher than you might expect, because it includes the (temporary) reference as an argument to `getrefcount()`.


