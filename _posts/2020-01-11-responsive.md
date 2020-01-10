---
id: 2085
title: Ways for achieving responsive layout
date: 2014-05-14 11:25:41
author: taimane
layout: post
permalink: /responsive/
published: true
categories:
   -
tags:
   -
---
<p lang="en">How to make a website look more friendly for multiple devices with different resolutions?</p>
Some ideas already being practiced:
<ul>
	<li>fluid layouts,</li>
	<li>media queries and</li>
	<li>scripts that can reformat Web pages and mark-up effortlessly (or automatically).</li>
</ul>
<h3>Flexible (responsible) Images and video (fluid image technique)</h3>
It is very complicated to hold separate images for different resolution<span lang="en">. A workaround would be to use max-width.</span>
<pre>img, object { max-width: 100%; }</pre>
The max-width property in <abbr title="cascading stylesheets">CSS</abbr> is used to set the maximum width of a specified element. The max-width property overrides the width property, but min-width will always override max-width whether followed before or after width in your declaration.

TIP: use width:100% for IE &lt;9

&nbsp;
<h3>Filament Group's Responsive Images</h3>
This technique requires a few files, all of which are available on <a href="https://github.com/filamentgroup/Responsive-Images">Github</a>. First, a JavaScript file (rwd-images.js), the .htaccess file and an image file (rwd.gif). Then, we can use just a bit of HTML to reference both the larger and smaller resolution images: first, the small image, with an .r prefix to clarify that it should be responsive, and then a reference to the bigger image using data-fullsrc.
<pre>&lt;img src="smallRes.jpg" data-fullsrc="largeRes.jpg"&gt; The data-fullsrc is a custom HTML5 attribute, defined in the files linked to above. For any screen that is wider than 480 pixels, the larger-resolution image (largeRes.jpg) will load; smaller screens wouldn’t need to load the bigger image, and so the smaller image (smallRes.jpg) will load.

</pre>
<h3>Custom Layout Structure</h3>
For example, we could have one main style sheet (which would also be the default) that would define all of the main structural elements, such as #wrapper, #content, #sidebar, #nav, along with colors, backgrounds and typography. Default flexible widths and floats could also be defined.

If a style sheet made the layout too narrow, short, wide or tall, we could then detect that and switch to a new style sheet. This new child style sheet would adopt everything from the default style sheet and then just redefine the layout’s structure.

Here is the style.css (default) content:
<pre>/* Default styles that will carry to the child style sheet */

html,body{
   background...
   font...
   color...
}

h1,h2,h3{}
p, blockquote, pre, code, ol, ul{}

/* Structural elements */
#wrapper{
        width: 80%;
        margin: 0 auto;

        background: #fff;
        padding: 20px;
}

#content{
        width: 54%;
        float: left;
        margin-right: 3%;
}

#sidebar-left{
        width: 20%;
        float: left;
        margin-right: 3%;
}

#sidebar-right{
        width: 20%;
        float: left;
}</pre>
Here is the mobile.css (child) content:
<pre>#wrapper{
        width: 90%;
}

#content{
        width: 100%;
}

#sidebar-left{
        width: 100%;
        clear: both;

        /* Additional styling for our new layout */
        border-top: 1px solid #ccc;
        margin-top: 20px;
}

#sidebar-right{
        width: 100%;
        clear: both;

        /* Additional styling for our new layout */
        border-top: 1px solid #ccc;
        margin-top: 20px;
}</pre>
<h3>Media Queries</h3>
<pre>&lt;link rel='stylesheet' media='screen and (min-width: 701px) and (max-width: 900px)' href='css/medium.css' /&gt;</pre>
This media query is fairly self-explanatory: if the browser width is &gt;700px and less then 900 px we will have medium.css loaded.
<pre>@media screen and (min-width: 600px) {
     .hereIsMyClass {
          width: 30%;
          float: right;
     }
}</pre>
The class specified in the media query above (hereIsMyClass) will work only if the browser or screen width is above 600 pixels. Can also be used max-width property.

In CSS3 are defined max-device-width and min-device-width.
<pre>@media screen and (max-device-width: 480px) {
     .classForiPhoneDisplay {
          font-size: 1.2em;
     }
}</pre>
In general widthis more versatile when it comes to creating responsive webpages, though device-width is useful when you wish to specifically target mobile devices.

For the iPad specifically, there is also a media query property called orientation. The value can be either landscape (horizontal orientation) or portrait (vertical orientation).
<pre>@media screen and (orientation: landscape) {
     .iPadLandscape {
          width: 30%;
                  float: right;
     }
}
@media screen and (orientation: portrait) {
     .iPadPortrait {
          clear: both;
     }
}</pre>
<h3>JavaScript</h3>
Another method that can be used is JavaScript, especially as a back-up to devices that don’t support all of the CSS3 media query options.

In addition, below is a sample jQuery snippet that detects browser width and changes the style sheet accordingly — if one prefers a more hands-on approach:
<pre class="prettyprint"><script>// <![CDATA[
$(document).ready(function(){
  $(window).bind("resize", resizeWindow);
  function resizeWindow(e){
    var newWindowWidth = $(window).width();
    // If width width is below 600px, switch to the mobile stylesheet
    if(newWindowWidth < 600){
      $("link[rel=stylesheet]").attr({href : "mobile.css"});                          
    }
    // Else if width is above 600px, switch to the large stylesheet                         
    else if(newWindowWidth > 600){
      $("link[rel=stylesheet]").attr({href : "style.css"});
    }
  }
});
// ]]></script></pre>
Thanks
-J  

