---
id: 2987
title: Browser Fingerprinting basics
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
<style>
blockquote:before {
  content: "answers:";
  font-size:10px;
  text-transform: uppercase;
  color:#ffffff;
}

blockquote {
  margin-bottom: 10px;
  padding: 10px;
  border-left: 2px solid #ffeb8e;
  background-color: #ddd;
}

p code, li code {
  color: #f4a;
}
</style>

![fingerprinting](/wp-content/uploads/2020/12/python-quiz.jpg)

## What is browser fingerprinting?

It is a way to track a specific browser when surfing the Internet.

There are common fingerprinting types:

* font fingerprinting
* canvas fingerprinting
* webRTC fingerprinting
* DOMRect fingerprinting
* audio fingerprinting
* mouse fingerprinting
* screen fingerprinting
* user-agent fingerprinting
* navigator object fingerprinting
* WebGL fingerprinting
* HTML5 fingerprinting
* TLS Fingerprint

Different API fingerprinting:

* SpeechSynthesis
* Web Aidio
* Web Bluetooth API
* Network Information API

Usually all these techniques are possible based on JavaScript.

## WebRTC

WebRTC is several related APIs for _Real Time Communication_.

 in the browser, and accessible via Javascript. To discover the best path between peers, each peer collects all available candidate addresses, including addresses from the local network interfaces (such as ethernet or WiFi) and addresses from the public side of the NAT and makes them available to the web application without explicit permission from the user. A fingerprinter can leverage these addresses to track users.
Findings

We found WebRTC being used to discover local IP addresses on 715 of the top 1 million sites. The vast majority of these instances were caused by third-party trackers.

## F


## 

WebGL is a JavaScript API for rendering interactive 3D graphics within any compatible web browser without the use of plug-ins. WebGL apps consist of a control code written in JavaScript and special effects code that is executed on a computer's GPU. WebGL elements can be mixed with other HTML elements and composited with other parts of the page or page background.

WebGL Browser Report checks WebGL support in your web browser, produce WebGL Device Fingerprinting, and shows the other WebGL and GPU capabilities more or less related web browser identity.