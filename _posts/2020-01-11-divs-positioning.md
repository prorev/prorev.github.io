---
id: 100
title: Divs Positioning
date: 2011-03-01 23:57:32
author: taimane
layout: post
permalink: /css/divs-positioning/
redirect_from: /divs-positioning/
published: true
categories:
   -
tags:
   -
---
<a href="https://programming-review.com/css/automargin/">How to set the div in the center of a web browser using margins</a>
<a href="https://programming-review.com/css/child-divs/">Adding child divs to a parent div</a>
<a href="https://programming-review.com/css/divs-positioning/">Divs position</a>
<a href="https://programming-review.com/css/floating-divs/">Floating divs</a>
<a href="https://programming-review.com/css/journal-style/">Journal style for divs</a>
<a href="https://programming-review.com/css/offset/">Understanding offsets</a>
<a href="https://programming-review.com/css/2-columns/">Minimal 2-columns website layout</a>

[[[]]]
This is 3-rd. article from the <a href="https://programming-review.com/cssdivs">tutorial</a> “CSS website design using divs” explaining the CSS <strong>position </strong>keyword.



CSS layout for divs is all about <strong>positioning </strong>and <strong>floating</strong>. 



First notice that position can be either: absolute,  relative, fixed, static, or inherit — where the default position is always static. 

Let's start with the absolute position.



### Position: absolute
``` html
<html>
<head>
<style type="text/css">
   div.C {
   background-color:red; width:200px; height:200px;}
   div.A {
   background-color:green; width:200px; height:200px;
   position:absolute; top: 50%; bottom: 0; left: 50%; right: 0;}
</style>

<body>
<div class="C">
<div class="A"></div>
</div>
</body>
</html>
```



<a href="https://programming-review.com/wp-content/uploads/2011/03/absolutepositioning.png"><img src="https://programming-review.com/wp-content/uploads/2011/03/absolutepositioning.png" alt="" title="absolutepositioning" width="576" height="430" class="aligncenter size-full wp-image-102" /></a> 



Now you may notice that the container div C and the child div A are both positioned absolute. Let's remove the <strong>position:absolute</strong> from the div C.



```html
<html>
<head>
<style type="text/css">
div.C {
background-color:red; width:200px; height:200px;
}
div.A{
background-color:green; width:200px; height:200px;
position:absolute; top: 50%; bottom: 0; left: 50%; right: 0;}
</style>
<body>
<div class="C">
<div class="A"></div>
</div>
</body>
</html>
```



<a href="https://programming-review.com/wp-content/uploads/2011/03/positionabsoluteremoved.png"><img src="https://programming-review.com/wp-content/uploads/2011/03/positionabsoluteremoved.png" alt="" title="positionabsoluteremoved" width="577" height="528" class="aligncenter size-full wp-image-103" /></a>

 

Ups, the green rectangle is no longer positioned relative to it's div parent C, but relative to the browser viewport.

<strong>The master tip here for the 2 divs to be positioned absolute, the container div must have the position absolute or relative else the absolute positioning won't work.</strong>



### Position relative



Per purpose I've set the position relative after position:absolute because I wanted to show that relative position always works for the child and it's DOM parent object. 



```html
<html>
<head>
<style type="text/css">
div.C {
background-color:red; width:200px; height:200px;}
div.A {
background-color:blue; width:200px; height:200px;
position:relative; top: 50%; bottom: 0; left: 50%; right: 0;}
</style>
<body>
<div class="C"><div class="A" >This is some text</div></div>
</body>
</html>
```

I've set the 2 divs: div  C — that is a container and the div A that is a child. The div A has position:relative set and that position will always work in respect of A's parent element.

 

<a href="https://programming-review.com/wp-content/uploads/2011/03/relativeposition.png"><img src="https://programming-review.com/wp-content/uploads/2011/03/relativeposition.png" alt="" title="relativeposition" width="588" height="464" class="aligncenter size-full wp-image-104" /></a>



Let me show you the another example.



```html
<html>
<style type="text/css">
div.C {
background-color:red; width:200px; height:200px;
position:relative; top: 50%; bottom: 0; left: 50%; right: 0;
}
div.A {
background-color:blue; width:200px; height:200px;
position:relative; top: 50%; bottom: 0; left: 50%; right: 0;}
</style>
<body>
<div class="C"><div class="A" >This is some text</div></div>
</body>
</html>
```



Now the container div C is relatively positioned to the center of a browser, and the div A is relatively positioned to C.



<img src="https://programming-review.com/wp-content/uploads/2011/03/relativeposition2.png" alt="" title="relativeposition2" width="672" height="748" class="aligncenter size-full wp-image-105" />

 

<strong>The master tip here is the child div A will be positioned relatively to its DOM parent object C no matter how parent object is positioned itself (absolutely or fixed or any other position)</strong>.




### Position: fixed

Position: fixed concerns how a single div is positioned relative to the visible browser area. I will just show you this effective example how it can be used.

```html
<html>
<head>
<style type="text/css">
div.A {
background-color:red; width:100%; height:20px;
position:fixed;
top:0;
text-align:center;
}
div.b {
background-color:green; width:100%; height:20px;
position:fixed;
bottom:0;
text-align:center;
}
</style>
<body>
<div class="A">This will be allways on top </div>
<div class="B">This will be allways at the bottom </div>
<pre>
Text
Text
Text
Text
Text
Text
</pre>
</body>
</html>
```


<img src="https://programming-review.com/wp-content/uploads/2011/03/fixed.png" alt="" title="fixed" width="391" height="200" class="aligncenter size-full wp-image-106" />

 

No matter what 's on the page the 2 divs will be always in the visible browser viewport. 



### Position static

For the divs static positioning is by default. 

``` html
<html>
<head>
<style type="text/css">
div.C {
background-color:red; width:200px; height:200px;}
div.A {
background-color:blue; width:200px; height:200px;}
</style>
<body>
<div class="C"></div>
<div class="A"></div>
</body>
</html>
```

In this example div C and A are siblings and there will be no overlapping nor in-lining. Divs are block level elements — which means that they will start in a new line.



<a href="https://programming-review.com/wp-content/uploads/2011/03/staticposition1.png"><img src="https://programming-review.com/wp-content/uploads/2011/03/staticposition1.png" alt="" title="staticposition1" width="296" height="572" class="aligncenter size-full wp-image-108" /></a> 



But consider also the following:



```html
<html>
<head>
<style type="text/css">
div.C {
background-color:red; width:200px; height:200px;}
div.A {
background-color:blue; width:200px; height:200px;}
</style>
<body>
<div class="C"><div class="A"></div></div>
</body>
</html>
```



<a href="https://programming-review.com/wp-content/uploads/2011/03/staticposition.png"><img src="https://programming-review.com/wp-content/uploads/2011/03/staticposition.png" alt="" title="staticposition" width="379" height="334" class="aligncenter size-full wp-image-107" /></a> 



You may notice that div C's red color is completely overlapped. Actually this is quite cool and this is what we will use because we want the div C as a placeholder for other divs. 

In the <a href="https://programming-review.com/css/floating-divs/">next</a> article I will continue with the position: static and I will introduce divs floating, because divs floating works together with position: static (typically it is allways used with position static). 



**Summary**: We noted first the distinction between absolute and relative position. Then we showed the example for the fixed position and we ended with the 2 most important static position examples.



