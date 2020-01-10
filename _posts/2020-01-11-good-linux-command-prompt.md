---
id: 2525
title: Good Linux command prompt
date: 2015-09-28 00:12:08
author: taimane
layout: post
permalink: /good-linux-command-prompt/
published: true
categories:
   -
tags:
   -
---
<pre>export PS1='[\w]\n\u\$ '
</pre>

<h3>Keep the Linux command prompt</h3>

One minor issue to entering the command prompt at the command line, as above. It will disappear next time you log on.

Simple solution: Edit the .bashrc file in your home folder, and at the very bottom of that file, enter
<pre>export PS1='[\w]\n\u\$ '</pre>

Save the file and log out. When you next log in, you will see the new command prompt in all its glory.


Thanks
-D  

