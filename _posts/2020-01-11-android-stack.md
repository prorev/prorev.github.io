---
id: 1986
title: Android Stack
date: 2014-01-09 23:30:17
author: taimane
layout: post
permalink: /android/stack/
redirect_from: /android-stack/
published: false
categories:
   - android
tags:
   - android
   - linux
   - kernel
   - stack
   - 5 layers in the Android
---
There are 5 layers in the Android programming stack. Since the foundation of Android is Linux, the Linux kernel is the first stack.
 
### Linux Kernel Layer
 
The folks who developed Android found Linux is:
* proven
* stable
* and secure
 
Linux has a great memory and process management scheme in addition Linux has a permission based security model that Android took.
 
In the Linux Kernel Layer stack you will find the software for the memory management, process management, and power management. This is also where the drivers for basic components like are kept:
 
Basic Components Lis:
 
* camera
* display
* WiFi
* Bluetooth
* Flash memory and more ...
 
### Libraries Layer
 
Most of the code is written in native code.
Native code is either C or C++. These are fast executing computational routines most of the time.
 
Android rewrote libc (standard C library) so that it is optimized for embedded use.
 
In this layer there are also:
* SSL modules
* SQLLite modules
* Media Framework
* Webkit, etc...
 
> SQLite is needed for contacts and apps.
 
> Media framework supports media file formats.
 
> Webkit is used like the browser basic engine.
 
### The Run-Time Layer
 
Has 2 parts:
* The core libraries
* Android Runtime
 
Core libraries contain core classes that are in the android.jar file in your SDK.
 
Android Runtime (ART) (Android 5+) replaced Dalvik for improved application performance and battery usage.
 
> Dalvik is a discontinued virtual machine. It was present before Android 5.
 
### Application Framework
 
These are all Java layers representing the core platform services:
 
* Location Manager
* Telephony Manager
* Resource manager
* Notification Manager
* Activity Manager
 
_Location Manager_ is to access the GPS.
_Telephony Manager_ interacts with the underlying Radio interface layer.
_Resource Manager_ will load images and strings.
_Notification Manager_ will add messages to the status bar.
_Activity Manager_ that handles the life-cycle, etc.
 
 
 
### Application Layer
 
This is where core apps:
 
* Phone,
* Web Browser
* Contacts
 
and third party apps live.
 
Third party apps:
 
* Facebook
* YouTube
* Twitter
* Instagram
* TikTok
 
Android phones use the same API for both core apps and third party apps.
