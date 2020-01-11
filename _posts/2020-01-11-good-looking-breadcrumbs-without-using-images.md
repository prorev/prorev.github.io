---
id: 906
title: Good looking breadcrumbs without using images
date: 2012-12-22 15:19:50
author: taimane
layout: post
permalink: /good-looking-breadcrumbs-without-using-images/
published: true
categories:
   -
tags:
   -
---
Here is an example of the super neat breadcrumbs that are not using any images, just the CSS and HTML.

```
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
<style>
.breadcrumb { 
			list-style: none; 
			overflow: hidden; 
			font: 18px Helvetica, Arial, Sans-Serif;
		}
		.breadcrumb li { 
			float: left; 
		}
		.breadcrumb li a {
			color: white;
			text-decoration: none; 
			padding: 10px 20px 10px 25px;
			background: brown;                   /* fallback color */
			background: hsla(34,85%,35%,1); 
			position: relative; 
			display: block;
			float: left;
		}
		.breadcrumb li a:after { 
			content: " "; 
			display: block; 
			width: 0; 
			height: 0;
			border-top: 10px solid transparent;           /* Go big on the size, and let overflow hide */
			border-bottom: 10px solid transparent;
			border-left: 10px solid hsla(34,85%,35%,1);
			position: absolute;
			top: 50%;
			margin-top: -10px; 
			left: 100%;
			z-index: 2; 
		}	
		.breadcrumb li a:before { 
			content: " "; 
			display: block; 
			width: 0; 
			height: 0;
			border-top: 10px solid transparent;           /* Go big on the size, and let overflow hide */
			border-bottom: 10px solid transparent;
			border-left: 10px solid white;
			position: absolute;
			top: 50%;
			margin-top: -10px; 
			margin-left: 1px;
			left: 100%;
			z-index: 1; 
		}	
		.breadcrumb li:first-child a {
			padding-left: 10px;
		}
		.breadcrumb li:nth-child(2) a       { background:        hsla(34,85%,45%,1); }
		.breadcrumb li:nth-child(2) a:after { border-left-color: hsla(34,85%,45%,1); }
		.breadcrumb li:nth-child(3) a       { background:        hsla(34,85%,55%,1); }
		.breadcrumb li:nth-child(3) a:after { border-left-color: hsla(34,85%,55%,1); }
		.breadcrumb li:nth-child(4) a       { background:        hsla(34,85%,65%,1); }
		.breadcrumb li:nth-child(4) a:after { border-left-color: hsla(34,85%,65%,1); }
		.breadcrumb li:nth-child(5) a       { background:        hsla(34,85%,75%,1); }
		.breadcrumb li:nth-child(5) a:after { border-left-color: hsla(34,85%,75%,1); }
		.breadcrumb li:nth-child(6) a       { background:        hsla(34,85%,85%,1); }
		.breadcrumb li:nth-child(6) a:after { border-left-color: hsla(34,85%,85%,1); }		
		.breadcrumb li:nth-child(7) a       { background:        hsla(34,85%,95%,1); }
		.breadcrumb li:nth-child(7) a:after { border-left-color: hsla(34,85%,95%,1); }
		
		.breadcrumb li:last-child { margin-right:40px; }
		.breadcrumb li a:hover { background: hsla(34,85%,25%,1); }
		.breadcrumb li a:hover:after { border-left-color: hsla(34,85%,25%,1) !important; }
		

</style>
</head>
<body>

<ol class="breadcrumb">
			<li><a href="#">Home</a></li>
			<li><a href="#">Vehicles</a></li>
			<li><a href="#">Vans</a></li>
			<li><a href="#">Camper Vans</a></li>
			<li><a href="#">1989 VW Westfalia Vanagon</a></li>
</ol>
		

</body>
</html>
```

Finally the end result is like this:

<a href="https://programming-review.com/good-looking-breadcrumbs-without-using-images/selection_391/" rel="attachment wp-att-907"><img src="https://programming-review.com/wp-content/uploads/2012/12/Selection_391.png" alt="Selection_391" width="775" height="80" class="alignnone size-full wp-image-907" /></a>

I took the idea from here http://css-tricks.com/triangle-breadcrumbs/ as a starting point.

Thanks  
