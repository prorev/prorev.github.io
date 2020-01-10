---
id: 758
title: ALSA sound system problem with Microphone
date: 2012-08-01 15:36:42
author: taimane
layout: post
permalink: /alsa-sound-system-problem-with-microphone/
published: true
categories:
   -
tags:
   -
---
I had problem with alsa (alsamixer) on my CentOS. The problem was like this.
<code>/etc/asound.conf</code> had a hooks section.
The hooks section introduced another sound card and I was not able to use the microphone after that.

After deleting the <code>@hooks</code> section the problem was gone.

The very useful facts about alsa are:

<code>/proc/asound/</code> - this folder actually determines if alsa is present on the system or not.
<code>alsactl restore 0</code> - sound card 0 info will be restored
<code>alsactl store</code> - this enables alsa to store permanent values
<code>arecord -vv -d 10 test.wav</code> - creates a file after 10 seconds of recording with the visual equalizer
<code>aplay -vv test.wav</code> - plays the file
<code>alsamixer</code> - of course the most important to set the levels
<code>pulseaudio --kill</code> - eliminates pulse audio
<code>pulseaudio --start</code> - starts pulse audio
<code>pacmd list</code> - closer look to pulse audio

The best info about Alsa I found here http://www.seehuhn.de/pages/alsa and here: https://wiki.archlinux.org/index.php/PulseAudio

<strong>
BACKGROUND</strong>

ALSA is the kernel level sound mixer, it manages your sound card directly.
ALSA by itself can only handle one application at a time. This may be a problem, but there is <a href="http://alsa.opensrc.org/Dmix">dmix</a> module, written to solve the problem of one application at a time.

PulseAudio is a software mixer, on top of the userland (like you'd run an app). When it runs, it uses Alsa's channel - without dmix - and manages every kind of mixing, the devices, network devices, everything by itself.

Thanks.  

