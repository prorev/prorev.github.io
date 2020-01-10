---
id: 3015
title: rel="shortcut icon" considered bad
date: 2016-09-02 11:51:11
author: taimane
layout: post
permalink: /relshortcut-icon-considered-bad/
published: true
categories:
   -
tags:
   -
---
In case you have on your web site something like.
<pre><code class="language-html hljs xml"><span class="tag">&lt;<span class="name">link</span> <span class="attr">rel</span>=<span class="string">"shortcut icon"</span> <span class="attr">href</span>=<span class="string">"/favicon.ico"</span>&gt;</span></code></pre>
You may reconsider, and set it like this
<pre><code class="language-html hljs xml"><span class="tag">&lt;<span class="name">link</span> <span class="attr">rel</span>=<span class="string">"icon"</span> <span class="attr">href</span>=<span class="string">"/favicon.ico" type="image/x-icon"</span>&gt;</span></code></pre>
Explanation: IE9 do not require <strong>"shortcut"</strong> keyword, and this would be the only reason why to set the <strong>"shortcut"</strong> inside the <strong>rel</strong> attribute.
If you simple specify <strong>type="image/x-icon"</strong> IE9 will understand. favicon.ico is the best name, since all browsers expect it, and don't forget to set the "/" before it.

Make sure to always put the favicon.ico in the root directory of your site. It is the implied default, and even .png and .gif favicons are possible I would use it first.

In fact you should consider, some favicon generator, that will provide you the following list.

&nbsp;
<pre>&lt;link rel='icon' type='image/x-icon' href='/favicon.ico'&gt;
&lt;link rel="apple-touch-icon" sizes="57x57" href="/apple-icon-57x57.png"&gt;
&lt;link rel="apple-touch-icon" sizes="60x60" href="/apple-icon-60x60.png"&gt;
&lt;link rel="apple-touch-icon" sizes="72x72" href="/apple-icon-72x72.png"&gt;
&lt;link rel="apple-touch-icon" sizes="76x76" href="/apple-icon-76x76.png"&gt;
&lt;link rel="apple-touch-icon" sizes="114x114" href="/apple-icon-114x114.png"&gt;
&lt;link rel="apple-touch-icon" sizes="120x120" href="/apple-icon-120x120.png"&gt;
&lt;link rel="apple-touch-icon" sizes="144x144" href="/apple-icon-144x144.png"&gt;
&lt;link rel="apple-touch-icon" sizes="152x152" href="/apple-icon-152x152.png"&gt;
&lt;link rel="apple-touch-icon" sizes="180x180" href="/apple-icon-180x180.png"&gt;
&lt;link rel="icon" type="image/png" sizes="192x192" href="/android-icon-192x192.png"&gt;
&lt;link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"&gt;
&lt;link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png"&gt;
&lt;link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"&gt;
&lt;link rel="manifest" href="/manifest.json"&gt;
&lt;meta name="msapplication-TileColor" content="#ffffff"&gt;
&lt;meta name="msapplication-TileImage" content="/ms-icon-144x144.png"&gt;
&lt;meta name="theme-color" content="#ffffff"&gt;</pre>  

