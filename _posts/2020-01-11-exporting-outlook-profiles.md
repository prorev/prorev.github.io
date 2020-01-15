---
id: 477
title: Exporting Outlook profiles
date: 2011-06-11 13:36:49
author: taimane
layout: post
permalink: /exporting-outlook-profiles/
published: true
categories:
   -
tags:
   -
---
Outlook 2007 is nice enough to put all of its accounts into a single <code><a rel="nofollow" title="registry key" href="http://en.wikipedia.org/wiki/Windows_Registry">registry key</a></code>.



<code>HKEY_CURRENT_USER\Software\Microsoft\Windows NT\CurrentVersion\Windows Messaging Subsystem\Profiles\</code>



Just export that key and import on a new machine and you will get all your accounts. Note that if you are using <a rel="nofollow" title="IMAP " href="http://en.wikipedia.org/wiki/Internet_Message_Access_Protocol">IMAP </a>you don't even have to backup your email data. I use <code>IMAP </code>via Google and all the emails I ever need are safe.



Taken from: <a rel="nofollow" href="http://www.jephens.com/2008/10/14/importing-and-exporting-mail-and-user-accounts-in-outlook-2007/" target="_blank">http://www.jephens.com/2008/10/14/importing-and-exporting-mail-and-user-accounts-in-outlook-2007/</a>



Thanks  

