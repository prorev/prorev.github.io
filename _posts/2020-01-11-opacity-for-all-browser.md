---
id: 600
title: Opacity for all browsers - resolved
date: 2011-11-09 13:18:01
author: taimane
layout: post
permalink: /opacity-for-all-browser/
published: true
categories:
   -
tags:
   -
---
When you need to set opacity or transparency for a div, or any visual element in fact you can do it in CSS.

Today's standard is to use the <code>opacity</code> keyword like this 
<pre class="prettyprint"> opacity: 0.44; </pre>

The problem is this won't work for all browsers so you need to set many CSS statements in order to work in different web browsers.

Here is the more general approach for element transparency (opacity).
<pre class="prettyprint">#elemenopacity{

    /* this one is for IE 5+. */
    filter:alpha(opacity=44);    
   
    /* this is for IE 8. */
    -ms-filter:"progid:DXImageTransform.Microsoft.Alpha(Opacity=44)";     

    /* Netscape Navigator. */
   -moz-opacity:0.44;     

    /* old Safary */
   -khtml-opacity: 0.44;

     /*standard in CSS, forks from Chrome, FF, Safari, Opera and should work in IE9 */
    opacity: 0.44; 
}</pre>

However if you are familiar with jQuery you can use this line of code:
<pre class="prettyprint">jQuery(document).ready(function(){ 
    jQuery("#elementopacity").css('opacity','.44');
});</pre>

As you may see jQuery is the most elegant solution

Thanks.  

