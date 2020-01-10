---
id: 2269
title: How many features Modernizr detects?
date: 2014-06-01 16:34:49
author: taimane
layout: post
permalink: /how-many-features-modernizr-detects/
published: true
categories:
   -
tags:
   -
---
At the age of Modernizr 1.1 (year 2010) the Modernizr script was able to detect 26 different features:
<ul>
	<li>applicationCache</li>
	<li>border-image:</li>
	<li>border-radius:</li>
	<li>box-shadow:</li>
	<li>Canvas</li>
	<li>Canvas Text</li>
	<li>CSS 2D Transforms</li>
	<li>CSS 3D Transforms</li>
	<li>CSS Animations</li>
	<li>CSS Columns</li>
	<li>CSS Gradients</li>
	<li>CSS Reflections</li>
	<li>CSS Transitions</li>
	<li>@font-face</li>
	<li>Geolocation API</li>
	<li>hsla()</li>
	<li>HTML5 Audio</li>
	<li>HTML5 Video</li>
	<li>Input Attributes</li>
	<li>Input Types</li>
	<li>localStorage</li>
	<li>Multiple backgrounds</li>
	<li>opacity:</li>
	<li>rgba()</li>
	<li>sessionStorage</li>
	<li>Web Workers</li>
</ul>
Today---four years later Modernizer can detect several more features including:
<ul>
	<li>background-size</li>
	<li>Flexible Box Model (flexbox)</li>
	<li>Flexbox Legacy</li>
	<li>multiple backgrounds</li>
	<li>opacity</li>
	<li>text-shadow</li>
	<li>CSS Animations</li>
	<li>CSS Columns</li>
	<li>CSS Generated Content</li>
	<li>CSS 2D Transforms</li>
	<li>CSS 3D Transforms</li>
	<li>SMIL</li>
	<li>SVG</li>
	<li>SVG inline</li>
	<li>SVG clip paths</li>
	<li>Touch events</li>
	<li>Web GL</li>
	<li>Media Queries</li>
	<li>HTML5shiv for IE browsers</li>
</ul>
Not strictly related to HTML5 or CSS3 features for some time Modernizr includes <code>yepnope()</code> function that is equivalent with <code>Modernizr.load()</code> function.

Yepnope is asynchronous loading module suitable for loading of resources called Polyfills. Polyfills are JavaScript libraries that should ideally fill the missing HTML5 or CSS3 functions in the older browsers. Here is a good reference http://html5please.com/ what can be done in the older browsers.

Also Modernizr as a feature support <code>prefixes()</code> and <code>mq() </code>functions. IN the specific order these functions are used to detect browser specific prefixes by returning strings,  and media queries by returning<code>true</code> or<code>false</code>.

So to answer the question : How many features Modernizr detects?

The answer would be about 40 at the moment.

&nbsp;

Thanks  

