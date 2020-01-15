---
id: 617
title: Using FSCapture from Linux
date: 2011-11-29 17:23:57
author: taimane
layout: post
permalink: /fscapture-on-linux/
published: true
categories:
   - linux
tags:
   - fscapture
   - opt
   - wine
---
On Linux I have some Windows programs that I miss, but this will work for any Windows program. 

The <a rel="nofollow" title="FSCapture" href="https://www.faststone.org/FSCaptureDetail.htm">FSCapture</a> program for instance.

Here is how I organized my system so I can use _FSCapture_.

1. Install  <a rel="nofollow" title="Wine" href="http://www.winehq.org/">Wine</a> open source software for running Windows applications on Linux (and also other operating systems). You can download and install Wine through the terminal.

2. Download FSCapture, portable _exe_ file. You can download it from <a rel="nofollow" href="https://www.faststone.org/">here</a>.

3. Copy _FSCapture.exe_ to the /opt folder. For instance to the /opt/fscapture/

4. Create a symbolic link
```
ln -s /opt/fscapture/FSCapture.exe /usr/bin/fscapture
```
Now you can call FSCapture every time from the terminal. Just run `fscapture`.

