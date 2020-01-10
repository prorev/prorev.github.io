---
id: 338
title: Flickr script in the sidebar
date: 2011-05-16 02:04:12
author: taimane
layout: post
permalink: /flickr-script-in-the-sidebar/
published: true
categories:
   -
tags:
   -
---
To add Flickr images to the sidebar you don't actually need a Flickr plugin or Flickr widget. All you need is this code:
<pre><div id="flickrimg"><h4>Flickr</h4>           
<script type="text/javascript" src="http://www.flickr.com/badge_code_v2.gne?
count=8&amp;display=random&amp;&amp;layout=x&amp;source=user&amp;user=36062640@N08&amp;size=s">
</script>   
</div></pre>

Note that I hard-coded the Flickr ID (user=36062640@N08), the number of images to 8 (count=8), display (random),...

I use the following styles
<pre>#flickrimg img
{
	margin:5px;
	padding:5px;
    float:left;
    border:4px solid #EEEEEE;
}</pre>

And the output is like this:
<img src="https://programming-review.com/wp-content/uploads/2011/05/flickr.png" alt="" title="flickr" width="235" height="448" class="alignnone size-full wp-image-339" />
  

