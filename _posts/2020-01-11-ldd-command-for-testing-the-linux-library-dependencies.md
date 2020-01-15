---
id: 700
title: ldd command for testing the Linux library dependencies.
date: 2012-07-03 17:31:31
author: taimane
layout: post
permalink: /ldd-command-for-testing-the-linux-library-dependencies/
published: true
categories:
   -
tags:
   -
---
For an easy test if the library (.so file in extension) has all the necessary dependencies use the <code>ldd</code> command. 



For an example I am using the ZendDebugger.so for debugging the PHP web application.

Zend debugger failed to work. After a quick test I find out the following using this test: <code>ldd ZendDebugger.so</code>



<pre>linux-vdso.so.1 =>  (0x00007fff843c0000)

	libssl.so.0.9.8 => not found

	libcrypto.so.0.9.8 => not found

	librt.so.1 => /lib64/librt.so.1 (0x00007f9986dc2000)

	libm.so.6 => /lib64/libm.so.6 (0x00007f9986b3e000)

	libc.so.6 => /lib64/libc.so.6 (0x00007f998679c000)

	libpthread.so.0 => /lib64/libpthread.so.0 (0x00007f9986580000)

	/lib64/ld-linux-x86-64.so.2 (0x0000003840a00000)



</pre>



This shows the libraries <code>libssl.so.0.9.8</code> and <code>libcrypto.so.0.9.8</code> were not found.

<a href="https://programming-review.com/zenddebugger-so-dependencies/">After enabling these libraries</a> the ZendDebugger worked.



Thanks.  

