---
id: 132
title: Journal style for the divs
date: 2011-03-02 00:04:31
author: taimane
layout: post
permalink: /css/journal-style/
redirect_from: /journal-style/
published: true
categories:
   -
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
In this <a href="https://programming-review.com/cssdivs/">tutorial</a> so far I've tried not to use "spaghetti markup" code which looks like this:

```html
<div id="A">A text
   <div id="B">B text</div>
</div>
<!-- or -->
<div id="A">
   <div id="B">B text</div>
   A text
</div>
```


But sometimes you need to use it to achieve the journal layouts:



<a href="https://programming-review.com/wp-content/uploads/2011/03/floatright.png"><img src="https://programming-review.com/wp-content/uploads/2011/03/floatright.png" alt="" title="floatright" width="291" height="348" class="aligncenter size-full wp-image-133" /></a>

 
```html
<html> 
<head> 
<style type="text/css">

div#B {float: right; width: 10em; margin: 0.5em; padding: 0.5em; border: 1px solid;}

</style> 
</head>
<body>
<div id="A">
text text text text text text text text text text text text text text text text text text text text 
<div id="B">journal float right</div>
text text text text text text text text text text text text text text text text text text text text 
text text text text text text text text text text text text text text text text text text text text 
</div>
</body>
</html>
```

In case of journal layouts you must mix up your text with the markup. If you somehow manage to do the same without using "spaghetti markup" please let me know the technique. 

In the <a href="https://programming-review.com/offset/">next</a> article I will introduce you with the _mister Offset_.


