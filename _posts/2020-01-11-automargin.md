---
id: 54
title: How to set a div in the center of a web browser using margins?
date: 2011-03-01 23:38:51
author: taimane
layout: post
permalink: /css/automargin/
published: true
categories:
   -
tags:
   -
---
This is a first article from the tutorial [CSS website design using divs](https://programming-review.com/cssdivs/) explaining what can be achieved using auto margins in CSS.


Lets create an empty page first.

```html
<html>
<head>
<style type="text/css">
</style>
<body>
</body>
</html>
```


Let's add a 200px fixed length square div and color it red.



```html
<html>
<head>
<style type="text/css">
div#A {background-color:red; width:200px; height:200px;}
</style>
<body>
<div id="A">This is a red div</div>
</body>
</html>
```



Now here comes the trick. How to center it in the browser center, only by modifying its stile.

```html
<html>
<head>
<style type="text/css">
div#A {
background-color:red; width:200px; height:200px;
margin-left:auto; margin-right:auto;}
</style>
<body>
<div id="A">This is a red div</div>
</body>
</html>
```



<a href="https://programming-review.com/wp-content/uploads/2011/03/automargin.png"><img class="aligncenter size-full wp-image-56" title="automargin" src="https://programming-review.com/wp-content/uploads/2011/03/automargin.png" alt="" width="622" height="366" /></a>


The master design tip we used here is the <strong>margin:auto</strong> set for both margin-left and margin-right.

Inside the red div you can organize another divs to configure 1-column, 2-column, 3-column or other complex layouts. In the <a href="https://programming-review.com/child-divs/"> next </a> article I will describe how to add child divs to a parent div to organize the layout.

