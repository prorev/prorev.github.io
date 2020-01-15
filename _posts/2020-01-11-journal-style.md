---
id: 132
title: Journal style for the divs
date: 2011-03-02 00:04:31
author: taimane
layout: post
permalink: /journal-style/
published: true
categories:
   -
tags:
   -
---
In this <a href="https://programming-review.com/cssdivs/">tutorial</a> so far I've tried not to use "spaghetti markup" code which looks like this:

<pre>&lt;div id=&quot;A&quot;&gt;A text&lt;div id=&quot;B&quot;&gt;B text&lt;/div&gt;&lt;/div&gt;, or

&lt;div id=&quot;A&quot;&gt;&lt;div id=&quot;B&quot;&gt;B text&lt;/div&gt;A text&lt;/div&gt;</pre>

<a rel="nofollow" href="https://

But sometimes you need to use it to achieve the journal layouts:



<a href="https://programming-review.com/wp-content/uploads/2011/03/floatright.png"><img src="https://programming-review.com/wp-content/uploads/2011/03/floatright.png" alt="" title="floatright" width="291" height="348" class="aligncenter size-full wp-image-133" /></a>

 

<pre>&lt;html&gt; 

&lt;head&gt; 

&lt;style type=&quot;text/css&quot;&gt;

div#B {float: right; width: 10em; margin: 0.5em; padding: 0.5em; border: 1px solid;}

&lt;/style&gt; 
<a rel="nofollow" href="https://
&lt;/head&gt;

&lt;body&gt;

&lt;div id=&quot;A&quot;&gt;

text text text text text text text text text text text text text text text text text text text text 

&lt;div id=&quot;B&quot;&gt;journal float right&lt;/div&gt;

text text text text text text text text text text text text text text text text text text text text 

text text text text text text text text text text text text text text text text text text text text 

&lt;/div&gt;

&lt;/body&gt;

&lt;/html&gt;</pre>



In the case of jurnal layouts you must mix up your text with the markup. If you somehow manage to do the same without using "spaghetti markup" please let me know the technique. 

In the <a href="https://programming-review.com/offset/">next</a> article I will introduce you with the <strong>mister Offset</strong>.



Thanks.

  

