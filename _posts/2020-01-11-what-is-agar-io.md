---
id: 2966
title: WHAT IS AGAR.IO?
date: 2016-07-13 09:31:26
author: taimane
layout: post
permalink: /what-is-agar-io/
published: true
categories:
   -
tags:
   -
---
<strong>Agar.io</strong>  is a multiplayer game created originally by Matheus Valadares for the desktop. A player controls a cell—circle and the goal is to gain mass by eating other smaller players or circles.



The name <strong>Agar.io</strong> comes from the substance agar, used to culture bacteria.



<strong>Agar.io</strong> has these game modes:

* FFA (Free-for All)
* Teams
* Experimental, and
* Party

The game uses <strong>NodeJS</strong> environment and <strong>Socket.IO</strong> to create a WebSocket server listening on port <strong>3000</strong>.



The game also uses <strong>ExpressJS</strong> for a simple HTTP service that displays <code>index.html</code>. That page draws the main Canvas, and uses JavaScript to communicate to the main WebSocket server.

<h3>How to clone AGAR.IO?</h3>

There are two major Agar.IO clones in the NPM repository but non on these have the speed of the online game. (https://www.npmjs.com/browse/keyword/agar.io)



* <a class="name" href="https://www.npmjs.com/package/agario-client" rel="nofollow">agario-client</a>
* <a class="name" href="https://github.com/huytd/agar.io-clone" rel="nofollow">agar.io-clone</a>



This is understandable because, the communication between the cells in the real Agar has been compressed, and the upper NPM packages don't have this level of compression. Also developers made completely new code for game over the time. Now code runs inside a virtual machine. 