---
id: 2902
title: ffmpeg examples in clear description
date: 2016-06-28 21:59:15
author: taimane
layout: post
permalink: /ffmpeg-examples-in-clear-description/
published: true
categories:
   -
tags:
   -
---
<!--OffBegin-->
To combine 1.mp3 and 2.mp3 into one mp3 file with stereo 4 channels use this:
<code>ffmpeg -i 1.mp3 -i 2.mp3 -filter_complex amerge -ac 2 -c:a libmp3lame -q:a 4 3.mp3</code>

To create a video from an image and mp3 that is exactly 1 minute and 30 seconds. The output format can be either mp4 or flv,... Audio bit rate 192k and we use streaming H.264 format
<code>ffmpeg -loop 1 -f image2 -i 1.jpg -i 1.mp3 -c:v libx264 -c:a aac -strict experimental -b:a 192k -t 00:01:30.000 -r 1 1.flv
</code>

Another way to do the same from the image and from the mp3 
<code>ffmpeg  -i 1.jpg -i 1.mp3 -c:v libx264 1.mp4</code>

This will create third mp3 by concatenation of 1.mp3 and 2.mp3
<code>ffmpeg -i "concat:1.mp3|2.mp3" -acodec copy 3.mp3</code>
  

