---
id: 1437
title: Connecting two Linux computers via LAN network to share folders
date: 2013-04-23 22:53:31
author: taimane
layout: post
permalink: /connecting-linux-computers/
published: true
categories:
   -
tags:
   -
---
Most natural way to connect two Linux computers to share folders would be the SSH protocol. In case you don't have SSH protocol there are client and server side you can install via the package manager (like Yum for CentOS):

<code># yum -y install openssh-server openssh-clients</code>

Once you have that installed on both the Linux machines existing in the same LAN you need to start the SSH server service on one machine:
<code># chkconfig sshd on
# service sshd start</code>

And to use it on the other from the file browser:

<code>sftp://192.168.1.2</code>

http://www.cyberciti.biz/faq/centos-ssh/

Also, there should be the standard option "Share Files over the network"

<a href="https://programming-review.com/wp-content/uploads/2013/04/share-files.png"><img src="https://programming-review.com/wp-content/uploads/2013/04/share-files.png" alt="share files" width="446" height="453" class="alignnone size-full wp-image-1441" /></a>

Thanks  

