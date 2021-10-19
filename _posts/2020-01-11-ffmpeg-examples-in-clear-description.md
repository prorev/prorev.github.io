---
id: 2902
title: ffmpeg examples in clear description
date: 2016-06-28 21:59:15
author: taimane
layout: post
redirect_from: /ffmpeg-examples-in-clear-description
permalink: /linux/ffmpeg-examples/
published: true
categories:
   - unix
tags:
   -
---


FFmpeg is the framework and the ffmpeg one of the utilities from FFmpeg.


sudo apt-get install ffmpeg

Fedora users can install ffmpeg directly from the repos.

yum install ffmpeg

    libavutil is a library containing functions for simplifying programming, including random number generators, data structures, mathematics routines, core multimedia utilities, and much more.
    libavcodec is a library containing decoders and encoders for audio/video codecs.
    libavformat is a library containing demuxers and muxers for multimedia container formats.
    libavdevice is a library containing input and output devices for grabbing from and rendering to many common multimedia input/output software frameworks, including Video4Linux, Video4Linux2, VfW, and ALSA.
    libavfilter is a library containing media filters.
    libswscale is a library performing highly optimized image scaling and color space/pixel format conversion operations.
    libswresample is a library performing highly optimized audio resampling, rematrixing and sample format conversion operations.



FFmpeg can:  

* decode, 
* encode, 
* transcode, 
* mux, 
* demux, 
* stream, 
* filter and play pretty much any multimedia format. 


This is awesome, 

To combine 1.mp3 and 2.mp3 into one mp3 file with stereo 4 channels use this:

```
ffmpeg -i 1.mp3 -i 2.mp3 -filter_complex amerge -ac 2 -c:a libmp3lame -q:a 4 3.mp3
```



To create a video from an image and mp3 that is exactly 1 minute and 30 seconds. The output format can be either mp4 or flv,... Audio bit rate 192k and we use streaming H.264 format

<code>ffmpeg -loop 1 -f image2 -i 1.jpg -i 1.mp3 -c:v libx264 -c:a aac -strict experimental -b:a 192k -t 00:01:30.000 -r 1 1.flv

</code>



Another way to do the same from the image and from the mp3 

<code>ffmpeg  -i 1.jpg -i 1.mp3 -c:v libx264 1.mp4</code>



This will create third mp3 by concatenation of 1.mp3 and 2.mp3

<code>ffmpeg -i "concat:1.mp3|2.mp3" -acodec copy 3.mp3</code>

  
## Extract Images From Videos Using ffmpeg
