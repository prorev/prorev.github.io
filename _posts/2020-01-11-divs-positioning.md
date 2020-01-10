---
id: 100
title: Divs Positioning
date: 2011-03-01 23:57:32
author: taimane
layout: post
permalink: /divs-positioning/
published: true
categories:
   -
tags:
   -
---
This is 3-rd. article from the <a href="https://programming-review.com/cssdivs">tutorial</a> “CSS website design using divs” explaining the CSS <strong>position </strong>keyword.

CSS layout for divs is all about <strong>positioning </strong>and <strong>floating</strong>. 

First notice that position can be either: absolute,  relative, fixed, static, or inherit — where the default position is always static. 
Let's start with the absolute position.

<h2>Position: absolute</h2>
<pre>&lt;html&gt;
&lt;head&gt;
&lt;style type=&quot;text/css&quot;&gt;
div#C {
background-color:red; width:200px; height:200px;
position:absolute;
}
div#A {
background-color:green; width:200px; height:200px;
position:absolute; top: 50%; bottom: 0; left: 50%; right: 0;}
&lt;/style&gt;
&lt;body&gt;
&lt;div id=&quot;C&quot;&gt;
&lt;div id=&quot;A&quot;&gt;&lt;/div&gt;
&lt;/div&gt;
&lt;/body&gt;
&lt;/html&gt;</pre>

<a href="https://programming-review.com/wp-content/uploads/2011/03/absolutepositioning.png"><img src="https://programming-review.com/wp-content/uploads/2011/03/absolutepositioning.png" alt="" title="absolutepositioning" width="576" height="430" class="aligncenter size-full wp-image-102" /></a> 

Now you may notice that the container div C and the child div A are both positioned absolute. Let's remove the <strong>position:absolute</strong> from the div C.

<pre>&lt;html&gt;
&lt;head&gt;
&lt;style type=&quot;text/css&quot;&gt;
div#C {
background-color:red; width:200px; height:200px;
}
div#A {
background-color:green; width:200px; height:200px;
position:absolute; top: 50%; bottom: 0; left: 50%; right: 0;}
&lt;/style&gt;
&lt;body&gt;
&lt;div id=&quot;C&quot;&gt;
&lt;div id=&quot;A&quot;&gt;&lt;/div&gt;
&lt;/div&gt;
&lt;/body&gt;
&lt;/html&gt;</pre>

<a href="https://programming-review.com/wp-content/uploads/2011/03/positionabsoluteremoved.png"><img src="https://programming-review.com/wp-content/uploads/2011/03/positionabsoluteremoved.png" alt="" title="positionabsoluteremoved" width="577" height="528" class="aligncenter size-full wp-image-103" /></a>
 
Ups, the green rectangle is no longer positioned relative to it's div parent C, but relative to the browser viewport.
<strong>The master tip here for the 2 divs to be positioned absolute, the container div must have the position absolute or relative else the absolute positioning won't work.</strong>

<h2>Position relative</h2>

Per purpose I've set the position relative after position:absolute because I wanted to show that relative position always works for the child and it's DOM parent object. 

<pre>&lt;html&gt;
&lt;head&gt;
&lt;style type=&quot;text/css&quot;&gt;
div#C {
background-color:red; width:200px; height:200px;}
div#A {
background-color:blue; width:200px; height:200px;
position:relative; top: 50%; bottom: 0; left: 50%; right: 0;}
&lt;/style&gt;
&lt;body&gt;
&lt;div id=&quot;C&quot;&gt;&lt;div id=&quot;A&quot; &gt;This is some text&lt;/div&gt;&lt;/div&gt;
&lt;/body&gt;
&lt;/html&gt;</pre>

I've set the 2 divs: div  C — that is a container and the div A that is a child. The div A has position:relative set and that position will always work in respect of A's parent element.
 
<a href="https://programming-review.com/wp-content/uploads/2011/03/relativeposition.png"><img src="https://programming-review.com/wp-content/uploads/2011/03/relativeposition.png" alt="" title="relativeposition" width="588" height="464" class="aligncenter size-full wp-image-104" /></a>

Let me show you the another example.

<pre>&lt;html&gt;
&lt;head&gt;
&lt;style type=&quot;text/css&quot;&gt;
div#C {
background-color:red; width:200px; height:200px;
position:relative; top: 50%; bottom: 0; left: 50%; right: 0;
}
div#A {
background-color:blue; width:200px; height:200px;
position:relative; top: 50%; bottom: 0; left: 50%; right: 0;}
&lt;/style&gt;
&lt;body&gt;
&lt;div id=&quot;C&quot;&gt;&lt;div id=&quot;A&quot; &gt;This is some text&lt;/div&gt;&lt;/div&gt;
&lt;/body&gt;
&lt;/html&gt;</pre>

Now the container div C is relatively positioned to the center of a browser, and the div A is relatively positioned to C.

<img src="https://programming-review.com/wp-content/uploads/2011/03/relativeposition2.png" alt="" title="relativeposition2" width="672" height="748" class="aligncenter size-full wp-image-105" />
 
<strong>The master tip here is the child div A will be positioned relatively to its DOM parent object C no matter how parent object is positioned itself (absolutely or fixed or any other position)</strong>.

<h2>Position: fixed</h2>
Position: fixed concerns how a single div is positioned relative to the visible browser area. I will just show you this effective example how it can be used.

<pre>&lt;html&gt;
&lt;head&gt;
&lt;style type=&quot;text/css&quot;&gt;
div#A {
background-color:red; width:100%; height:20px;
position:fixed;
top:0;
text-align:center;
}
div#b {
background-color:green; width:100%; height:20px;
position:fixed;
bottom:0;
text-align:center;
}
&lt;/style&gt;
&lt;body&gt;
&lt;div id=&quot;A&quot;&gt;This will be allways on top &lt;/div&gt;
&lt;div id=&quot;B&quot;&gt;This will be allways at the bottom &lt;/div&gt;
&lt;pre&gt;
Text
Text
Text
Text
Text
Text
&lt;/pre&gt;
&lt;/body&gt;
&lt;/html&gt;</pre>

<img src="https://programming-review.com/wp-content/uploads/2011/03/fixed.png" alt="" title="fixed" width="391" height="200" class="aligncenter size-full wp-image-106" />
 
No matter what 's on the page the 2 divs will be always in the visible browser viewport. 

<h2>Position static</h2>
For the divs static positioning is by default. 

<pre>&lt;html&gt;
&lt;head&gt;
&lt;style type=&quot;text/css&quot;&gt;
div#C {
background-color:red; width:200px; height:200px;}
div#A {
background-color:blue; width:200px; height:200px;}
&lt;/style&gt;
&lt;body&gt;
&lt;div id=&quot;C&quot;&gt;&lt;/div&gt;
&lt;div id=&quot;A&quot;&gt;&lt;/div&gt;
&lt;/body&gt;
&lt;/html&gt;</pre>

In this example div C and A are siblings and there will be no overlapping nor in-lining. Divs are block level elements — which means that they will start in a new line.

<a href="https://programming-review.com/wp-content/uploads/2011/03/staticposition1.png"><img src="https://programming-review.com/wp-content/uploads/2011/03/staticposition1.png" alt="" title="staticposition1" width="296" height="572" class="aligncenter size-full wp-image-108" /></a> 

But consider also the following:

<pre>&lt;html&gt;
&lt;head&gt;
&lt;style type=&quot;text/css&quot;&gt;
div#C {
background-color:red; width:200px; height:200px;}
div#A {
background-color:blue; width:200px; height:200px;}
&lt;/style&gt;
&lt;body&gt;
&lt;div id=&quot;C&quot;&gt;&lt;div id=&quot;A&quot;&gt;&lt;/div&gt;&lt;/div&gt;
&lt;/body&gt;
&lt;/html&gt;</pre>

<a href="https://programming-review.com/wp-content/uploads/2011/03/staticposition.png"><img src="https://programming-review.com/wp-content/uploads/2011/03/staticposition.png" alt="" title="staticposition" width="379" height="334" class="aligncenter size-full wp-image-107" /></a> 

You may notice that div C's red color is completely overlapped. Actually this is quite cool and this is what we will use because we want the div C as a placeholder for other divs. 
In the <a href="https://programming-review.com/floating-divs/">next</a> article I will continue with the position: static and I will introduce divs floating, because divs floating works together with position: static (typically it is allways used with position static). 

Summary: We noted first the distinction between absolute and relative position. Then we showed the example for the fixed position and we ended with the 2 most important static position examples.

Thanks.  

