---
id: 1986
title: Android stack
date: 2014-01-09 23:30:17
author: taimane
layout: post
permalink: /android/stack/
redirect_from: /android-stack/
published: true
categories:
   -
tags:
   -
---
There are 5 layers in the Android programming stack. Since the foundation of the Android is Linux, the Linux kernel is the first stack.

### Linux kernel layer

The folks who developed Android decided not to re-invent the wheel. Linux has been around for a long time and it is proven to be stable and secure. Linux has great memory and process management scheme in addition Linux has a permission based security model that Android takes. IN this stack you will find the software for the memory management, process management, and power management. This is also where the drivers for components like the camera, display, WiFi, Bluetooth, Flash memory and more are kept.

### Libraries layer

Most of the code is written in native code, in C or C++. These are computational routines mostly.  Android rewrote libc so that it is optimized for embedded use. Also in there are SSL modules, SQL Lite module (for the Contacts), Media Framework (to support media file formats), Webkit (for browser browser engine support, css, javascript, dom), ..

### The run-time layer

Consists of 2 parts, the core libraries and Dalvik Virtual Machine. Core libraries contain core classes that are in android.jar file in your SDK.



The JavaVM is now Dalvek VM but optimized to work best for battery devices with less ram and CPU power. Every app that you run will run in its own virtual machine.

### Application framework

These are all Java layers representing the core platform services.

* Location manager .. to access the GPS.
* Telephony manager .. to interact with underlying Radio interface layer
* Resource manager .. loads non code resources like images and strings
* Notification manager .. add messages to the status bar for instance
* Activity manager .. handles the life-cycle
* and more...


### Application layer

This is where core apps (Phone, Browser, Contacts,..) and third party apps live. Google uses the same API for both.



