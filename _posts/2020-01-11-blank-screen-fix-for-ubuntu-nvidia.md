---
id: 2408
title: Blank screen fix for Ubuntu (Nvidia)
date: 2014-10-19 23:37:46
author: taimane
layout: post
permalink: /ubuntu/blank-screen-fix-for-ubuntu-nvidia/
published: true
categories:
   - nvidia
tags:
   - ubuntu
   - fix
---

If you're using an Nvidia graphics card on Ubuntu and you're experiencing a blank screen issue, try the following steps:

## Fix #1


1.  Restart your computer: This may sound simple, but sometimes a restart can solve the issue.

2. Boot into Recovery Mode: If the restart doesn't work, try booting into recovery mode. To do this, hold down the Shift key while your computer is starting up. This should take you to the GRUB menu. From there, select the Recovery Mode option and press Enter.

3. Remove any Nvidia drivers: Once you're in Recovery Mode, select the option to drop to a root shell prompt. Then, use the following command to remove any Nvidia drivers that may be causing the issue:

```
sudo apt-get remove --purge nvidia-*
```
4. Reinstall Nvidia drivers: After removing the Nvidia drivers, you'll need to reinstall them. Use the following commands to add the graphics drivers PPA and install the latest Nvidia driver:

```
sudo add-apt-repository ppa:graphics-drivers/ppa
sudo apt-get update
sudo apt-get install nvidia-driver-470
```

(Note: You may need to change the version number of the driver depending on which version is the latest at the time.)

5. Reboot: Once the driver installation is complete, reboot your computer and see if the blank screen issue is resolved.

![fix1](/wp-content/uploads/2023/concept1.png)

## Fix #2


1. Remove Nvidia proprietary drivers.

```
sudo nvidia-settings --uninstall
sudo apt-get remove --purge nvidia*
```

2. Purge xserver

```
sudo apt-get remove --purge xserver-xorg-video-nouveau</code>
```

3. Reinstall drivers and xserver

```
sudo apt-get install nvidia-common
sudo apt-get install xserver-xorg-video-nouveau
```

4. Reconfigure the xserver.

```
sudo dpkg-reconfigure xserver-xorg
```

![fix2](/wp-content/uploads/2023/concept2.png)

