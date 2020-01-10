---
id: 89
title: Adding child divs to a parent div
date: 2011-03-01 23:53:14
author: taimane
layout: post
permalink: /child-divs/
published: true
categories:
   -
tags:
   -
---
Second artice from the <a href="https://programming-review.com/cssdivs/">tutorial </a>“CSS website design using divs” explaining divs hierarchy.

Inserting a div to a container div is simple. 

<pre>&lt;html&gt;
&lt;head&gt;
&lt;style type=&quot;text/css&quot;&gt;
div#A {
background-color:red; width:200px; height:200px; 
margin-left:auto; margin-right:auto;}
div#B {
background-color:green; 
margin-left:auto; margin-right:auto;}
&lt;/style&gt;
&lt;body&gt;
&lt;div id=&quot;A&quot;&gt;This is a red div A
&lt;div id=&quot;B&quot;&gt;This is a green div B&lt;/div&gt;
&lt;/div&gt;
&lt;/body&gt;
&lt;/html&gt;</pre>

 
<a href="https://programming-review.com/wp-content/uploads/2011/03/2divs2.png"><img src="https://programming-review.com/wp-content/uploads/2011/03/2divs2.png" alt="" title="2divs2" width="431" height="316" class="aligncenter size-full wp-image-91" /></a>


You may notice the line:
<pre>&lt;div id=&quot;A&quot;&gt;This is a red div A&lt;div id=&quot;B&quot;&gt;This is a green div B&lt;/div&gt;&lt;/div&gt;</pre>

which I don't like, because this is typical "markup spaghetti" case. You may notice the div A that contains text and also the textual div B. I prefer to have container divs just as placeholders and without any text. This is why I will always rewrite the following example this way:

<pre>&lt;html&gt;
&lt;head&gt;
&lt;style type=&quot;text/css&quot;&gt;
div#A {
background-color:yellow; margin-left:auto; margin-right:auto;}
div#B {
background-color:green; margin-left:auto; margin-right:auto;}
div#C {
background-color:red; width:200px; height:200px; 
margin-left:auto; margin-right:auto;}
&lt;/style&gt;
&lt;body&gt;
&lt;div id=&quot;C&quot;&gt;
&lt;div id=&quot;A&quot;&gt;This is a yellow div A&lt;/div&gt;
&lt;div id=&quot;B&quot;&gt;This is a green div B&lt;/div&gt;
&lt;/div&gt;
&lt;/body&gt;
&lt;/html&gt;</pre>

<a href="https://programming-review.com/wp-content/uploads/2011/03/3divs.png"><img src="https://programming-review.com/wp-content/uploads/2011/03/3divs.png" alt="" title="3divs" width="429" height="330" class="aligncenter size-full wp-image-92" /></a>
 
Now the container div C is a placeholder, and its childs A and B are siblings. Having the last tip in mind we can rewrite the title for this article to something like this:

"Adding sibling child divs to a parent placeholder div". Why? Because this is a way to escape the markup spaghetti. Although, this may look like a minor tip, but I believe this is the most important organization idea we should follow when designing web layouts. I examined many professional web design layouts and all of them are using this idea.
In the <a href="https://programming-review.com/divs-positioning/">next</a> example I will proived some killer div positioning tips.

Thanks.  

