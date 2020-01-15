---
id: 2987
title: Ubuntu server logs
date: 2016-07-29 14:02:58
author: taimane
layout: post
permalink: /ubuntu-server-logs/
published: true
categories:
   -
tags:
   -
---
<a href="https://programming-review.com/wp-content/uploads/2016/08/ubuntu-2.png"><img class="alignnone size-full wp-image-3007" src="https://programming-review.com/wp-content/uploads/2016/08/ubuntu-2.png" alt="" width="238" height="149" /></a>



By definition a logfile is a file:

<ul>

 	<li>that records operating system events</li>

 	<li>software events</li>

 	<li>messages between different users of a communication software.</li>

</ul>

Logging is the act of keeping a log file and usually these log files have the .log extension, or log.1, log.2 and even log.1.gz, log.2.gz if they are compressed, but may be without the extension.



In Ubuntu log files are typically inside <strong>/var/log</strong> folder.

<h2><strong>Installations and package log files</strong></h2>

<strong>/var/log/apt</strong> folder has the <strong>history.log</strong> log file that keeps all the package installation and removal information. The other file in the same folder is <strong>term.log</strong>. You can control logging to the <strong>term.log</strong> via <strong>/etc/apt/apt.conf</strong> (Dir::Log::Terminal ""). <strong>term.log</strong> has terminal output when you worked with the <strong>apt</strong> command.



<strong>/var/log/dpkg.log</strong> is very interesting,  and related to the <strong>dpkg</strong> tool. The <strong>apt</strong> system depends on <strong>dpkg</strong> for package installation and removal.



Another Ubuntu folder <strong>/var/log/dist-upgrade</strong> has <strong>apt.log</strong> file containing logs during distribution upgrades.



<strong>/var/log/installer</strong> folder if there is one, will contain the log files created during the installation.

<strong>/var/log/alternatives.log</strong> is the history of all the alternatives set by various packages and their removal via the <strong><span style="text-decoration: underline;">update-alternatives</span></strong> command.

<h2><strong>System report log files</strong></h2>

<strong>/var/log/apport.log</strong> saves information about crashes in your system and reporting them.



<strong>/var/log/auth.log</strong> includes information about the authentication activities such as when you authenticate as root user via <span style="text-decoration: underline;"><strong>sudo</strong></span>.



The other very important system log files are <strong>boot.log</strong> and <strong>kern.log</strong> (/var/log/boot.log and /var/log/kern.log)



<strong>boot.log</strong> induces system booting information, and <strong>kern.log</strong> has kernel info, warnings, and errors.

<h2>Logs without the .log extension</h2>

There are also log files that do not have the .log extension.



<strong>/var/log/udev</strong> for instance, brings details about hardware setup.



<strong>/var/log/dmesg</strong> has the logs from the <strong>dmesg</strong> command. You can use <strong>dmesg</strong> to see how the computer crashed, or to check how your firewall is doing. Reading <strong>/var/log/dmesg</strong> to check the time of the logs is probable not the best idea, since the format is human un-readable. For the human readable format you should use <strong>dmesg -T</strong> from the command line.



Interesting, dmesg does not read from <strong>/var/log/dmesg</strong>. It reads directly from the kernel ring buffer and gives you the most recent N messages. More precise in the end of the boot process, dmesg is called  to write the boot messages to <strong>/var/log/dmesg</strong> (with older versions of that file being rotated in the usual manner).

<ul>

 	<li>/var/log/dmesg (live and uncompressed)</li>

 	<li>/var/log/dmesg.0 (last session and uncompressed)</li>

 	<li>/var/log/dmesg.1.gz</li>

 	<li>/var/log/dmesg.2.gz</li>

 	<li>/var/log/dmesg.3.gz</li>

 	<li>/var/log/dmesg.4.gz</li>

</ul>

If you really like to read <strong>.gz</strong> files you can use <strong>zcat</strong>, <strong>ztop</strong>, <strong>zless</strong>, <strong>zmore</strong> commands.

(Please don't confuse <strong>ztop</strong> with the famous zz-top band)



Once you have a <strong>syslog</strong> running (<strong>syslogd</strong>, <strong>rsyslogd</strong>, <strong>syslog-ng</strong>, etc.) it reads from the kernel buffer and writes to a file such as <strong>/var/log/kern.log</strong>. Assuming your system was able to write to disk and flush the disk buffers before it crashed, that is where you will find the dying screams of the kernel.

<h2>Web server logs files</h2>

The most important for the web server are <strong>access.log</strong> and <strong>error.log</strong> files. For my favorite web server <strong>Nginx</strong>, I use <strong>/var/log/nginx/access.log</strong>, and <strong>/var/log/nginx/error.log</strong>, but these are typically set in the <strong>Nginx</strong> configuration file.



&nbsp;  

