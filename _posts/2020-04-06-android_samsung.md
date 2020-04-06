---
id: 12971
title: Samsung android ODIN tool
date: 2020-04-06
author: taimane
layout: post
permalink: /android/samsung
published: false
image: 
categories: 
   - android
tags:
---
Make sure you have OEM unlock option set, else you will get FAP lock ON set during the boot time.


## Odin tool components

* BL: Bootloader
* AP: Android partition (OS)
* CP: modern firmware
* CSC: Consumer software customization


## WHAT IS ADB/FASTBOOT?

ADB and fastboot are different protocols used through PC to perform command line operations.

**Android Debugging Bridge** is basically used by developers to identify and fix bugs in OS (ROM). ADB works both in ROM and recovery mode.

**Fastboot** works in bootloader mode when phone is not switched on in recovery or ROM (when Android isn't installed on phone)

Bootloader is accessed by:

Power + Vol. Down + ( Home ). 

ADB mode has more flexibility than fastboot as it supports more types of flashable files to be flashed.

ADB also supports backing up Apps and Data. ADB/fastboot commands can be used to flash recovery and boot images. 

It can also flash ROMs and mods like rooting solutions and XPOSED by booting into recovery. 

And above all, it is the only way to unlock bootloader without which the device functionality is too limited. 

Read here why we need to unlock bootloader: https://forum.xda-developers.com/showpost.php?p=71782262&postcount=1.

In bootloader mode, usually boot logo or fastboot logo appears on device screen.

## How to change fastboot logo?


## Samsung firmware naming convention and explanation

https://forum.xda-developers.com/showthread.php?t=1356325


https://android.stackexchange.com/questions/132521/samsung-firmware-modifying


## Install ADB

Download platform tools:


https://developer.android.com/studio/releases/platform-tools

## magisk

https://www.androidinfotech.com/magisk-versions-download/

## Best 

https://www.androidinfotech.com/root-samsung-galaxy-j5-2016-sm-j510f-gn-k-s-nougat/

### PIT


https://www.droidviews.com/need-know-samsung-pit-files/
PIT stands for Partition Information Table



PIT stands for Partition Information Table. A PIT file is basically a set of instructions defining the phone partition layout. You should use a it if you want to re-partition the phone with Odin.

You only need this file when repartitioning the device and you don't need to repartition it unless you mess up the partition table to begin with, or when downgrading/upgrading.

There are tools (commercial) that can genarate PIT files using ADB commands.


##  Samsung Smart Switch
Samsung Smart Switch
Emergency mode...


## https://www.sammobile.com/samsung/galaxy-j5-2016/firmware/SM-J510FN/SEE/download/J510FNXXS3BSH2/291252/




