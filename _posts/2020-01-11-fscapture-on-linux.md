---
id: 617
title: Using FSCapture from Linux
date: 2011-11-29 17:23:57
author: taimane
layout: post
permalink: /fscapture-on-linux/
published: true
categories:
   -
tags:
   -
---
After switching to Linux OS I still have some Windows programs that I miss. The <a title="FSCapture" href="http://www.faststone.org/FSCaptureDetail.htm">FSCapture</a> program for instance.

I will demonstrate the steps how I organized my system so I can use FSCapture.
1. Install  <a title="Wine" href="http://www.winehq.org/">Wine</a> open source software for running Windows applications on Linux (and also other operating systems). You can download and install Wine through the terminal or with some other <a title="RPM packet manager" href="https://programming-review.com/rpm-packet-manager/">RPM packet manager</a>.

2. Install FSCapture, actually a portable exe file that allows me to to use it as a single exe. You can download it from <a href="https://programming-review.com/wp-content/uploads/2011/11/FSCapture.exe">here</a>.

3. Copy your FSCapture.exe to the /opt folder. For instance to the /opt/fscapture/

4. Create a symbolic link
<pre>ln -s /opt/fscapture/FSCapture.exe /usr/bin/fscapture</pre>
Now you can call FSCapture every time from the terminal. Just execute <code style="background: gray;">fscapture</code>.

Thanks.  

