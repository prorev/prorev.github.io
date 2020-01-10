---
id: 1138
title: Native Client
date: 2013-02-25 14:15:35
author: taimane
layout: post
permalink: /native-client/
published: true
categories:
   -
tags:
   -
---
via https://developers.google.com/native-client/overview

<strong>Define:</strong> Native Client is an open-source technology for running native compiled code in the browser.

<strong>The goal:</strong> Maintaining the OS portability and safety that people expect from web apps.

<strong>History:</strong> Google has implemented the open-source Native Client project in the Chrome browser on Windows, Mac, and Linux. The Native Client Software Development Kit (SDK), itself an open-source project, lets developers create web applications that use Native Client and run in Chrome across OS platforms. In addition to software libraries, the SDK includes a toolchain tailored to generate executable Native Client code, as well as a variety of code examples and documentation.

A web application that uses Native Client generally consists of a combination of JavaScript, HTML, CSS, and a Native Client module that is written in a language supported by a Native Client compiler. The Native Client SDK currently supports C and C++. As compilers for additional languages are developed, the SDK will be updated to support those languages as well.

<strong>Benefit:</strong> Native Client enables you to extend web apps running in the browser with custom features and proprietary code.

<strong>Use cases:</strong>
<ul>
	<li>Existing software components: With its native language support (currently C and C++), Native Client enables you to reuse current software modules in a web app—you don't need to spend time reinventing and debugging code that's already proven to work well.</li>
	<li>Legacy desktop applications: Native Client provides a smooth migration path from desktop application to web app. You can port and recompile existing code for the computation engine of your application directly to Native Client, and need repurpose only the user interface and event handling portions to the new browser platform.</li>
	<li>Enterprise applications that require heavy computation: Native Client handles the number crunching required by large-scale enterprise apps. To ensure protection of user data, Native Client enables you to build complex cryptographic algorithms directly into the browser so that unencrypted data never goes out over the network.</li>
	<li>Multimedia apps: Codecs for processing sounds, images, and movies can be added to the browser in a Native Client web app.</li>
	<li>Games: Native Client enables a web app to run close to native speed, reusing existing multithreaded/multicore C/C++ code bases, combined with low-level access to low-latency audio and (coming soon) networking APIs and OpenGL ES with programmable shaders.</li>
</ul>
<strong>Limitations:</strong>
<ul>
	<li>No support for hardware exceptions</li>
	<li>No support for process creation / subprocesses</li>
	<li>No support for raw TCP/UDP sockets (analogus versions—websockets for TCP and peer connect for UDP—are in the works and will be available soon)</li>
	<li>No support for synchronous (blocking) I/O</li>
	<li>No support for query to available memory inline assembly must be compatible with the Native Client validator (you can use the ncval utility in the SDK to check)</li>
	<li>Pepper API calls (described below) must come from the main thread</li>
</ul>  

