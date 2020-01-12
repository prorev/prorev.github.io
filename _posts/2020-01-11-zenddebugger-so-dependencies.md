---
id: 710
title: Simple troubleshooting the ZendDebugger.so dependencies
date: 2012-07-03 19:41:13
author: taimane
layout: post
permalink: /zenddebugger-so-dependencies/
published: true
categories:
   -
tags:
   -
---
ZendDebugger.so is very important library for the debugging. When found out <a href="https://programming-review.com/ldd-command-for-testing-the-linux-library-dependencies/">not all the dependencies are met</a> for ZendDebugger.so (on CentOS 64-bit) I needed to troubleshoot this problem.

The libraries not present on the system were:

* libssl.so.0.9.8
* libcrypto.so.0.9.8

The following was true:

<pre># whereis libcrypto
libcrypto: /usr/lib64/libcrypto.so</pre>

This is why I set the symbolic link like this:
<code>ln -s /usr/lib64/libcrypto.so /usr/lib64/libcrypto.so.0.9.8
</code>

For the <code>libssl.so</code> I did the following symbolic link:
<code>ln -s /usr/lib64/libssl.so.1.0.0 /usr/lib64/libssl.so.0.9.8</code>

because I found:
```
# locate libssl.so
/usr/lib/libssl.so.0.9.8
/usr/lib64/.libssl.so.1.0.0.hmac
/usr/lib64/.libssl.so.10.hmac
/usr/lib64/libssl.so
/usr/lib64/libssl.so.1.0.0
/usr/lib64/libssl.so.10
```

  
