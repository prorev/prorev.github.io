---
id: 1981
title: Android platform basics
date: 2014-01-09 22:25:54
author: taimane
layout: post
permalink: /android/android-platform-basics/
redirect_from: /android-platform-basics/
published: true
categories:
   -
tags:
   -
---
Android is Open Source platform maintained by OHA (group of some mobile operators, software companies, chip developers). For instance some companies inside OHA are Samsung, Motorola, Nvidia and Google.

Android platform is open source and the software stock is available under Apache V2 Software license. So Android platform is free in other words.


There is $25 registration fee in case you would like to be Android developer and if you would like to publish Android apps to the Google Play—digital distribution platform for applications for the Android operating system.

Android is more like OS. It has the core apps: phone, camera, browser, calendar, settings; and it allows you to install different third party applications. The android app you may create can interact and integrate with core applications.  


**Four building blocks of Android are: activity, service, broadcast, content provider.**

An _activity_ is a screen displaying user interface controls and/or graphical content. Most apps are made up of multiple independent activities.

A _service_ handles long-running background tasks, without displaying a user interface. Services can be either started and run until completion, or bound to an activity to take part in IPC (inter-process communication).

_Broadcast receivers_ do notification of system events such as battery low or device shutdown. You can also create a broadcast receiver to listen for your own custom events.

A _content provider_ manages data that other applications can query and update. The data is typically stored in the file system or in SQLite database.

