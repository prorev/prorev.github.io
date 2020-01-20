---
id: 2408
title: Blank screen fix for Ubuntu (Nvidia)
date: 2014-10-19 23:37:46
author: taimane
layout: post
permalink: /blank-screen-fix-for-ubuntu-nvidia/
published: false
categories:
   -
tags:
   -
---
Some of these may work:



Remove everything to do with the Nvidia proprietary drivers.

<code>sudo nvidia-settings --uninstall

sudo apt-get remove --purge nvidia*

</code>



Start from scratch.

<code>sudo apt-get remove --purge xserver-xorg-video-nouveau</code>



Reinstall all the things!

<code>sudo apt-get install nvidia-common

sudo apt-get install xserver-xorg-video-nouveau

</code>



Reconfigure the X server.

<code>sudo dpkg-reconfigure xserver-xorg</code>



