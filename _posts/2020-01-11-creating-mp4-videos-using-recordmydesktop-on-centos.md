---
id: 1454
title: Creating mp4 videos using recordmydesktop
date: 2013-05-08 14:33:19
author: taimane
layout: post
permalink: /creating-mp4-videos-using-recordmydesktop-on-centos/
published: true
categories:
   -
tags:
   -
---
On CentOS I have great program recordmydesktop that creates videos in native ogv format. I use the ffmpeg tool to convert the videos to mp4 more compact format.
Here are the code lines.

First just type <code>recordmydesktop</code> and when you need to stop the recording you can press CTRL+C


To convert the video to mp4 format please us the following line:
<code>ffmpeg -i out-1.ogv -c:a copy "OUTPUT.mp4"</code>

Thanks

  

