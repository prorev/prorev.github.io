---
id: 54
title: How to set a div in the center of a web browser using margins?
date: 2011-03-01 23:38:51
author: taimane
layout: post
permalink: /automargin/
published: true
categories:
   -
tags:
   -
---
This is a first artice in the <a href="https://programming-review.com/cssdivs/">tutorial </a>"CSS website design using divs" explaining what can be achieved using auto margins in CSS.

Lets create an empty page first.

<pre><html>
&lt;head&gt;
&lt;style type="text/css"&gt;
&lt;/style&gt;
&lt;body&gt;
&lt;/body&gt;
&lt;/html</pre>

Let's add a 200px fixed length square div and color it red.

<pre><html>
&lt;head&gt;
&lt;style type="text/css"&gt;
div#A {background-color:red; width:200px; height:200px;}
&lt;/style&gt;
&lt;body&gt;
&lt;div id="A"&gt;This is a red div&lt;/div&gt;
&lt;/body&gt;
&lt;/html&gt;</pre>

Now here comes the trick. How to center it in the browser center, only by modifying its stile.

<pre><html>
&lt;head&gt;
&lt;style type="text/css"&gt;
div#A {
background-color:red; width:200px; height:200px;
margin-left:auto; margin-right:auto;}
&lt;/style&gt;
&lt;body&gt;
&lt;div id="A"&gt;This is a red div&lt;/div&gt;
&lt;/body&gt;
&lt;/html&gt;</pre>

<a href="https://programming-review.com/wp-content/uploads/2011/03/automargin.png"><img class="aligncenter size-full wp-image-56" title="automargin" src="https://programming-review.com/wp-content/uploads/2011/03/automargin.png" alt="" width="622" height="366" /></a>

The master design tip we used here is the <strong>margin:auto</strong> set for both margin-left and margin-right.
Inside the red div you can organize another divs to configure 1-column, 2-column, 3-column or other complex layouts. In the <a href="https://programming-review.com/child-divs/"> next </a> article I will describe how to add child divs to a parent div to organize the layout.

Thanks.  

