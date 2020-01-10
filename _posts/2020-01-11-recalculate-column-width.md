---
id: 1523
title: JQuery + CSS recalculate column width
date: 2013-06-08 11:11:38
author: taimane
layout: post
permalink: /recalculate-column-width/
published: true
categories:
   -
tags:
   -
---
Showcase how to use outerWidth, width, and css functions to get the widths of particular columns

<pre class="prettyprint">
<script type="text/javascript">
jQuery(function()
{
if($('.colCenter table').outerWidth(true)>500){
$('.colCenter').css({'float':'none','clear':'both','width':'auto'});
}else{
$('.colCenter').width(jQuery('.post-content').width()-$('.colLeft').outerWidth(true)).css('margin','0');
}
})
</script>
</pre>

Thanks  

