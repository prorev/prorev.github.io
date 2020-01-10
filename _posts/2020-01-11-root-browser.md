---
id: 2687
title: Root Browser
date: 2016-02-04 07:49:09
author: taimane
layout: post
permalink: /root-browser/
published: true
categories:
   -
tags:
   -
---
First open gedit and paste all these:

[Desktop Entry]
Name=Nautilus
Comment=Browse the filesystem with administrator rights
Exec=gksudo nautilus
Icon=file-manager
Terminal=false
Type=Application
Categories=Application;System;

Now save the file as Nautilus.desktop on your desktop.

(desktop is the file extension).

Now Open:

   /home/your user name/.local/share/applications

and cut/paste Nautilus.desktop file into there.

Now open dash and search for "Nautilus". It will open up the default file manager with root permission. Now you can navigate to any directory and delete anything you want.  

