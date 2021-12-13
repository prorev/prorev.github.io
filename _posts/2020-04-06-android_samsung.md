---
id: 12971
title: Samsung android ODIN tool
date: 2020-04-06
author: taimane
description: Lists the tools you can use to root the Samsung android phone, provides few tips on each tool and explains how not to get the FAP lock. 
layout: post
permalink: /android/samsung-odin
published: true
image: 
categories: 
   - android
tags:
   - samsung
   - ODIN
   - android
   - PIT
   - ODIN3
   - Heimdall
   - Samsung Smart Switch
   - Bootloader
---
What can you do with the ODIN3 tool?
 
You may root your device. Once you rooted your device, make sure you have OEM unlock option set if you have the rooted phone, else you will get FAP lock ON message during the boot time.
 
 
## ODIN3 tool components
 
This tool is actually made by Samsung. It should have
 
* BL: Bootloader
* AP: Android partition (OS)
* CP: modern firmware
* CSC: Consumer software customization
 
You can even create and use PIT (Partition Information Table), this way you can create your own partitions.
 
### What is PIT?
 
PIT stands for Partition Information Table.
 
A PIT file is basically a set of instructions defining the phone partition layout. You should use it if you want to re-partition the phone with ODIN3.
 
You only need this file when repartitioning the device.
 
There are tools that can generate PIT files using ADB commands.
 
REF: mhttps://www.droidviews.com/need-know-samsung-pit-files/
 
 
## Heimdall
 
Alternative for ODIN3 is [Heimdall](https://gitlab.com/BenjaminDobell/Heimdall){:rel="nofollow"}.
 
Heimdall is a cross-platform open-source tool suite used to flash firmware (aka ROMs) onto Samsung mobile devices.
 
Heimdall connects to a mobile device over USB and interacts with low-level software running on the device, known as **Loke**. Loke and Heimdall communicate via the custom Samsung-developed protocol typically referred to as the 'Odin 3 protocol'.
 
 
## How to access the bootloader on Samsung phones?
 
Bootloader is accessed by:
 
```
Power + Vol. Down + ( Home ).
```
 
 
To enter the other options use:
 
```
Power + Vol. Up + ( Home )
```
 
## Samsung firmware naming convention and modification
 
Read about in here:  
* https://forum.xda-developers.com/showthread.php?t=1356325
* https://android.stackexchange.com/questions/132521/samsung-firmware-modifying
 
 
 
##  Samsung Smart Switch
 
This is why this application is usually useless.
 
Now it only has Emergency mode, but you need to have emergency code first to use it.
 
 
 
## Sammobile.com
 
This is the [web site](https://www.sammobile.com){:rel="nofollow"} where you can search for your Samsung model and find the exact version to download and flash your phone using ODIN3.
 
For instance, if you model SM-J510FN and if it is based for EU market you need [this file](https://www.sammobile.com/samsung/galaxy-j5-2016/firmware/SM-J510FN/SEE/download/J510FNXXS3BSH2/291252/){:rel="nofollow"}.
 
## Appendix
 
### WHAT IS ADB/FASTBOOT?
 
ADB and fastboot are different protocols used via PC to perform command line operations. These tools work best with rooted phones.
 
**Android Debugging Bridge** ADB is basically used by developers to identify and fix bugs in OS (ROM). ADB works both in ROM and recovery mode.
 
**Fastboot** works in bootloader mode when phone is not switched on in recovery or ROM (when Android isn't installed on phone)
 
### Install ADB
 
Download platform tools and install them from
[https://developer.android.com/studio/releases/platform-tools](https://developer.android.com/studio/releases/platform-tools){:rel="nofollow"}
 
<!--
Rooting Samsung Galaxy using TWRP
 
TWRP
https://www.mediafire.com/file/844c26g346r2f5n/TWRP_3.0.2_SM_J5_2016_Nougat_7.1.1.tar/file
 
Super SU
http://www.mediafire.com/file/vjcjh24gx80g01y/SuperSU-v2.82-20170528234214.zip/file
 
Procedure
https://www.youtube.com/watch?v=aCeSV7dMylI -->

