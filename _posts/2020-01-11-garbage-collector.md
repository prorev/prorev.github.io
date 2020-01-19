---
id: 27
title: .NET Framework garbage collector
date: 2011-02-28 09:16:55
author: taimane
layout: post
permalink: /csharp/garbage-collector/
redirect_from: /garbage-collector/
published: true
categories:
   - csharp
tags:
   - .net
---
#### What is .NET Framework garbage collector?

It is an automatic memory manager that handles memory allocation and release for .NET Framework’s native objects — managed objects. NET Framework’s garbage collector cannot control the memory allocation and release of so called "unmanaged" objects.

#### Can I call .NET Framework garbage collector explicitly?

You call GC.Collect method to explicitly call .NET Framework garbage collector. But, there is no actual need to call GC.Collect method in your program because garbage collector runs continuo usly.

#### Can I predict when will C# .NET Framework garbage collector occur?

No. You cannot actually predict when will GC.Collect be called. Garbage collection occurs when the system has low physical memory, or when the free memory on the managed heap is low.

#### How to define C# .NET Framework managed objects using .NET Framework garbage collector?

.NET Framework managed objects are objects created and managed via garbage collector. They are also called .NET Framework native objects.

#### Where are C# .NET Framework managed objects stored?

Managed objects are stored in the managed heap. After the garbage collector is initialized by the .NET Framework, it allocates a segment of memory to store managed objects. This memory is called the managed heap, as opposed to a native heap of the operating system. In .NET Framework there is a managed heap for each managed process.

#### What is an unmanaged object in C# .NET Framework?

It is an object that represents some system resource like — file handle, SQL Server resource, file or memory stream. You cannot control destruction of such objects via C# garbage collector. You must provide object destruction method for those objects via IDisposable interface Dispose() method call.

#### What is a disposable object?

It is an object that can be released from memory via a single method call — public void Dispose(){}

Unmanaged objects implement IDisposable interface Dispose() method and they become disposable objects.

Dispose is the method to dispose unmanaged resources only — resources not managed by the garbage collector.

### What if managed objects references unmanaged objects?

If managed object M1 references unmanaged objects U1 you need to ensure to explicitly free U1 when M1 is released via garbage collector. To do that you need to implement Finalize method of M1.

#### Why do we have the using keyword in C#?

The using keyword is syntax shortcut for more general try-catch-finalize command and it always applied on an unmanaged object having <code>IDisposable</code> interface implemented.

```c#
using (Unmanaged u = new Unmanaged) {}
```

The using keyword isn't designed to catch exceptions.

Always when you see using keyword you should know that inside it is an unmanaged object.



