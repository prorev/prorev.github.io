---
id: 2987
title: Browser Fingerprinting Basics
date: 2020-12-15 
author: taimane
layout: post
permalink: /security/fingerprinting
published: false
categories:
   - security
tags:
   - javascript
---

_Table of Contents:_

- [What is browser fingerprinting?](#what-is-browser-fingerprinting)
- [Canvas fingerprinting](#canvas-fingerprinting)
- [WebRTC](#webrtc)
- [CanvasFingerprinting](#canvasfingerprinting)
- [](#)


![fingerprinting](/wp-content/uploads/2020/12/fingerprinting.jpg)

Browsers are becoming increasingly sophisticated platforms. Almost at the level of operating system.

HTML5 brought **canvas** element for drawing into 2D and 3D. There is also WebGL 3D graphics, datastore, cache and history databases, geolocation capabilities, audio and video support. And not so long ago we just had cookies.

Nowadays, now evercookies exist that are hard to delete, and zombicookies that can reappear even if you delete them (these are Flash based).

The browser fingerprinting game started to be very complicated.
## What is browser fingerprinting?

It's a way to track a specific browser when surfing the Internet.

There are some fingerprinting ways:

* Font fingerprinting
* Canvas fingerprinting
* WebRTC fingerprinting
* DOMRect fingerprinting
* Audio fingerprinting
* Mouse fingerprinting
* Screen fingerprinting
* HTTP fingerprinting (user-agent, etc.)
* Navigator object fingerprinting
* WebGL fingerprinting
* HTML5 fingerprinting
* TLS Fingerprint
* ...


Almost all these fingerprinting ways are based on JavaScript and use some JavaScrip API

## Canvas fingerprinting

The story began I think with Canvas fingerprinting in 2012 with the paper "Pixel Perfect: Fingerprinting Canvas in HTML5".

How it works? When HTML5 defined the Canvas. As it goes, if you draw element 

Canvas fingerprinting ...




## WebRTC

WebRTC is several related APIs for _Real Time Communication_.

 in the browser, and accessible via Javascript. To discover the best path between peers, each peer collects all available candidate addresses, including addresses from the local network interfaces (such as ethernet or WiFi) and addresses from the public side of the NAT and makes them available to the web application without explicit permission from the user. A fingerprinter can leverage these addresses to track users.
Findings

We found WebRTC being used to discover local IP addresses on 715 of the top 1 million sites. The vast majority of these instances were caused by third-party trackers.

## CanvasFingerprinting



```html
<!DOCTYPE html>
<html>
<body>

<canvas id="myCanvas" width="100" height="100"
style="border:1px solid #c3c3c3;">
Your browser does not support the canvas element.
</canvas>

<script>
const canvas = document.getElementById("myCanvas");
const context = canvas.getContext("2d");
const fingerprintText = "BrowserLeaks,com <canvas> 10";
canvas.width = 220;
canvas.height = 30;
context.textBaseline = "top";
context.font = "14px 'Arial'";
context.textBaseline = "alphabetic";
context.fillStyle = "#f60";
context.fillRect(125, 1, 62, 20);
context.fillStyle = "#069";
context.fillText(fingerprintText, 2, 15);
context.fillStyle = "rgba(102, 204, 0, 0.7)";
context.fillText(fingerprintText, 4, 17);
		
</script>

</body>
</html>
```


## 

WebGL is a JavaScript API for rendering interactive 3D graphics within any compatible web browser without the use of plug-ins. WebGL apps consist of a control code written in JavaScript and special effects code that is executed on a computer's GPU. WebGL elements can be mixed with other HTML elements and composited with other parts of the page or page background.

WebGL Browser Report checks WebGL support in your web browser, produce WebGL Device Fingerprinting, and shows the other WebGL and GPU capabilities more or less related web browser identity.


Zombie cookies

Most people aren't even aware that Flash stores cookies!