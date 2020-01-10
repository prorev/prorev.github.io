---
id: 677
title: Starting Latest Version of Eclipse in CentOS
date: 2012-05-25 17:24:06
author: taimane
layout: post
permalink: /starting-latest-version-of-eclipse-in-centos/
published: true
categories:
   -
tags:
   -
---
After installing Eclipse (current Latest is Indigo) to the /opt folder we need to create a /usr/bin/eclipse file.


<pre>touch /usr/bin/eclipse
chmod 755 /usr/bin/eclipse
 
## Open Eclipse file with your favourite editor ##
nano -w /usr/bin/eclipse
 
## Paste following content to file ##
#!/bin/sh
export ECLIPSE_HOME="/opt/eclipse"
 
$ECLIPSE_HOME/eclipse $*</pre>

---------

More you can create desktop Launcher 

<pre>
## Create following file, with our favourite editor ##
/usr/share/applications/eclipse.desktop
 
## Add following content to file and save ##
[Desktop Entry]
Encoding=UTF-8
Name=Eclipse
Comment=Eclipse SDK 3.7.2
Exec=eclipse
Icon=/opt/eclipse/icon.xpm
Terminal=false
Type=Application
Categories=GNOME;Application;Development;
StartupNotify=true
</pre>


Thanks.
  

