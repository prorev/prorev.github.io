---
id: 89
title: Adding child divs to a parent div
date: 2011-03-01 23:53:14
author: taimane
layout: post
permalink: /css/child-divs/
redirect_from: /child-divs/
published: true
categories:
   - css
tags:
   - 
---
_CSS website design using divs tutorial:_
<a href="https://programming-review.com/css/automargin/">How to set the div in the center of a web browser using margins</a>
<a href="https://programming-review.com/css/child-divs/">Adding child divs to a parent div</a>
<a href="https://programming-review.com/css/divs-positioning/">Divs position</a>
<a href="https://programming-review.com/css/floating-divs/">Floating divs</a>
<a href="https://programming-review.com/css/journal-style/">Journal style for divs</a>
<a href="https://programming-review.com/css/offset/">Understanding offsets</a>
<a href="https://programming-review.com/css/2-columns/">Minimal 2-columns website layout</a>

[[[]]]
Second article from the <a href="https://programming-review.com/cssdivs/">tutorial </a>CSS website design using divs explaining divs hierarchy.

Inserting a div to a container div is simple. 

```html
<html>
<head>
<style type="text/css">
div.A {
background-color:red; width:200px; height:200px; 
margin-left:auto; margin-right:auto;}
div.B {
background-color:green; 
margin-left:auto; margin-right:auto;}
</style>
<body>
<div class="A">This is a red div A
<div class="B">This is a green div B</div>
</div>
</body>
</html>
```



<a href="https://programming-review.com/wp-content/uploads/2011/03/2divs2.png"><img src="https://programming-review.com/wp-content/uploads/2011/03/2divs2.png" alt="" title="2divs2" width="431" height="316" class="aligncenter size-full wp-image-91" /></a>


You may notice the line:

```html
<div class="A">This is a red div A<div class="B">This is a green div B</div></div>
```


which I don't like, because this is typical "markup spaghetti" case. You may notice the div A that contains text and also the textual div B. I prefer to have container divs just as placeholders and without any text. This is why I will always rewrite the following example this way:



```html
<html>
<head>
<style type="text/css">

div.A {

background-color:yellow; margin-left:auto; margin-right:auto;}

div.B {

background-color:green; margin-left:auto; margin-right:auto;}

div.C {

background-color:red; width:200px; height:200px; 

margin-left:auto; margin-right:auto;}

</style>

<body>
<div class="C">
<div class="A">This is a yellow div A</div>
<div class="B">This is a green div B</div>
</div>
</body>
</html>
```


<a href="https://programming-review.com/wp-content/uploads/2011/03/3divs.png"><img src="https://programming-review.com/wp-content/uploads/2011/03/3divs.png" alt="" title="3divs" width="429" height="330" class="aligncenter size-full wp-image-92" /></a>

 

Now the container div C is a placeholder, and its child's A and B are siblings. Having the last tip in mind we can rewrite the title for this article to something like this:



**Why adding sibling child divs to a parent placeholder?**

Because this is a way to escape the markup spaghetti. Although, this may look like a minor tip, but I believe this is the most important organization idea we should follow when designing web layouts. I examined many professional web design layouts and all of them are using this idea.

In the <a href="https://programming-review.com/divs-positioning/">next</a> example I will provide div positioning tips.


