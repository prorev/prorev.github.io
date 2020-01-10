---
id: 119
title: Floating divs
date: 2011-03-02 00:01:58
author: taimane
layout: post
permalink: /floating-divs/
published: true
categories:
   -
tags:
   -
---
Floating divs is what we will examine today. As the <a href="https://programming-review.com/cssdivs/">Tutorial</a>: "CSS website design using divs" continues we are progressing more and more.

Divs are block level elements — meaning — each div will always start in a new line. But sometimes this is not desired. Let's make one simple web site with 2 column layout, header, and footer.

<pre>&lt;html&gt; 
&lt;head&gt; 
&lt;style type=&quot;text/css&quot;&gt;
div#C {margin:auto; width:40em;}
div#H {background:pink;}
div#A {float: left; width:50%; background:red;}    
div#B {float: right; width: 50%; background:green;}
div#F {background:yellow;}
&lt;/style&gt; 
&lt;/head&gt;
&lt;body&gt;
&lt;div id=&quot;C&quot;&gt;
&lt;div id=&quot;H&quot;&gt;Header&lt;/div&gt;
&lt;div id=&quot;A&quot;&gt;Left floating div&lt;/div&gt;
&lt;div id=&quot;B&quot;&gt;Right floating div&lt;/div&gt;
&lt;div id=&quot;F&quot;&gt;Footer&lt;/div&gt;
&lt;/div&gt;
&lt;/body&gt;
&lt;/html&gt;</pre>

<a href="https://programming-review.com/wp-content/uploads/2011/03/2columnsdesign.png"><img src="https://programming-review.com/wp-content/uploads/2011/03/2columnsdesign.png" alt="" title="2columnsdesign" width="767" height="274" class="aligncenter size-full wp-image-120" /></a>

You may find how to improve this basic design by adding an additional div that holds the menu from Robert Johnson web site <a href="http://www.456bereastreet.com/lab/developing_with_web_standards/csslayout/2-col/">here</a>.

Notice the perfect-body we are having here and how the divs markups do not overlap. 
<pre>&lt;body&gt;
&lt;div id=&quot;C&quot;&gt;
&lt;div id=&quot;H&quot;&gt;Header&lt;/div&gt;
&lt;div id=&quot;A&quot;&gt;Left floating div&lt;/div&gt;
&lt;div id=&quot;B&quot;&gt;Right floating div&lt;/div&gt;
&lt;div id=&quot;F&quot;&gt;Footer&lt;/div&gt;
&lt;/div&gt;
&lt;/body&gt;</pre>

All divs are inside the container div C: div H—representing the header,  div A—typically representing the main content, div B typically representing the sidebar, and div F—representing the footer. 

One small tip here: Why the div A that typicaly represents the main article content stands before the div B? Becase of SEO. You need to feed the web crowlers with the most important content first.

Also there are 2 major tips we need to learn about floating divs:

<h4>Major tip #1: When using float on divs, their position should be set to <strong>static</strong> which is by default.</h4>
Otherwise if relative, absolute, or fixed position is used you may ruin the web design.
Let's demonstrate the major tip #1:

<pre>&lt;html&gt; 
&lt;head&gt; 
&lt;style type=&quot;text/css&quot;&gt;
div#C {margin:auto; width:40em;}
div#H {background:pink;}
div#A {float: left; width:50%; background:red;}    
div#B {float: right; width: 50%; background:green; position:absolute; left:0em;}
div#F {background:yellow;}
&lt;/style&gt; 
&lt;/head&gt;
&lt;body&gt;
&lt;div id=&quot;C&quot;&gt;
&lt;div id=&quot;H&quot;&gt;Header&lt;/div&gt;
&lt;div id=&quot;A&quot;&gt;Left floating div&lt;/div&gt;
&lt;div id=&quot;B&quot;&gt;Right floating div&lt;/div&gt;
&lt;div id=&quot;F&quot;&gt;Footer&lt;/div&gt;
&lt;/div&gt;
&lt;/body&gt;
&lt;/html&gt;</pre>

Here I set the position absolute for the div B.

<a href="https://programming-review.com/wp-content/uploads/2011/03/positionabsolutebreakdown.png"><img src="https://programming-review.com/wp-content/uploads/2011/03/positionabsolutebreakdown.png" alt="" title="positionabsolutebreakdown" width="785" height="294" class="aligncenter size-full wp-image-121" /></a>
 
In some case you may use position: relative, but with caution.

<h4>Major tip #2: Clearing the float.</h4>
Divs are block level elements — meaning — each div will always start in a new line. We used floats to make divs float in same line as shown above.  When you need to revert to the normal document flow you need to use <strong>clear:both;</strong>. 
Here is the perfect example:

<pre>&lt;html&gt; 
&lt;head&gt; 
&lt;style type=&quot;text/css&quot;&gt;
div#C {margin:auto; width:40em;}
div#H {background:pink;}
div#A {float: left; width:30%; background:red;}    
div#B {float: right; width: 30%; background:green; }
div#F {background:yellow;}
&lt;/style&gt; 
&lt;/head&gt;
&lt;body&gt;
&lt;div id=&quot;C&quot;&gt;
&lt;div id=&quot;H&quot;&gt;Header&lt;/div&gt;
&lt;div id=&quot;A&quot;&gt;Left floating div&lt;/div&gt;
&lt;div id=&quot;B&quot;&gt;Right floating div&lt;/div&gt;
&lt;div id=&quot;F&quot;&gt;Footer&lt;/div&gt;
&lt;/div&gt;
&lt;/body&gt;
&lt;/html&gt;</pre>

<a href="https://programming-review.com/wp-content/uploads/2011/03/clearboth.png"><img src="https://programming-review.com/wp-content/uploads/2011/03/clearboth.png" alt="" title="clearboth" width="727" height="199" class="aligncenter size-full wp-image-122" /></a>
 
Now you will see the footer between the "Left floating div" and "Right floating div", but that's not good. We need the footer in the separate line. Here is how to do it.

<pre>&lt;html&gt; 
&lt;head&gt; 
&lt;style type=&quot;text/css&quot;&gt;
div#C {margin:auto; width:40em;}
div#H {background:pink;}
div#A {float: left; width:30%; background:red;}    
div#B {float: right; width: 30%; background:green; }
div#F {background:yellow; clear:both;}
&lt;/style&gt; 
&lt;/head&gt;
&lt;body&gt;
&lt;div id=&quot;C&quot;&gt;
&lt;div id=&quot;H&quot;&gt;Header&lt;/div&gt;
&lt;div id=&quot;A&quot;&gt;Left floating div&lt;/div&gt;
&lt;div id=&quot;B&quot;&gt;Right floating div&lt;/div&gt;
&lt;div id=&quot;F&quot;&gt;Footer&lt;/div&gt;
&lt;/div&gt;
&lt;/body&gt;
&lt;/html&gt;</pre>

And the result will be like this:
 
<a href="https://programming-review.com/wp-content/uploads/2011/03/clearboth2.png"><img src="https://programming-review.com/wp-content/uploads/2011/03/clearboth2.png" alt="" title="clearboth2" width="716" height="202" class="aligncenter size-full wp-image-123" /></a>

The last image shows that after we "cleared" floating the footer div is looking OK. The reason why div floating is most used web site layout technique is the ability to clear the floating anytime and to return to the normal document flow with a single "clear:both", "clear:left", or "clear:right".

In the <a href="https://programming-review.com/journal-style/">next</a> article I will demonstrate how to achieve journal styles using divs. 

<h4>"clear:both", "clear:left", "clear:right"</h4>
Let's explain "<code>clear:both</code>", "<code>clear:left</code>", "<code>clear:right</code>" statements further. To clear a div with additional "<code>clear</code>" instruction has sense only when the divs are floating. No floating no clearing is possible.

If we have only two divs A and B on the entire HTML page, that are floating, then we can add <code>clear</code> style to the second div B. Adding a <code>clear</code> code to the first div A doesn't have any sense. Meaning, the relation exists between the element having the <code>clear</code> style and between the element(s) preceding it.

Sometimes developers create divs only for clearing like this:
<pre><div style="clear:both"></div></pre>
This may be considered as good practice.

In a case we have added <code>clear:left</code> to a div B and div A has float:right then div B will go to the new line.
In a case we have added <code>clear:right</code> to a div B and div A has float:left then div B will go to the new line.
Without clearing both divs in previous 2 cases will be inline.

Goto <a href="https://programming-review.com/journal-style/">Next</a> article.

Thanks.  

