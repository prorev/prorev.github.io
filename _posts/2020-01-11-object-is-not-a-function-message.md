---
id: 2459
title: Object is not a function message
date: 2015-02-24 23:55:00
author: taimane
layout: post
permalink: /object-is-not-a-function-message/
published: true
categories:
   -
tags:
   -
---
Received the error like this:
```
Uncaught TypeError: object is not a function jquery.min.js:3
f.event.trigger jquery.min.js:3
(anonymous function) jquery.min.js:3
e.extend.each jquery.min.js:2
e.fn.e.each jquery.min.js:2
f.fn.extend.trigger jquery.min.js:3
f.fn.(anonymous function) jquery.min.js:3
(anonymous function) (index):482
f.event.dispatch jquery.min.js:3
h.handle.i jquery.min.js:3
```
For code like this where I tried to alter the form action:
```
<script type="text/javascript">// <![CDATA[
  jQuery(function(){
    var submitted = false;
    $('form').submit(function(e){			  
    if (submitted == true) {    
      return;    
    }
    e.preventDefault();			   
    $(this).attr('action', '/alter_the_form_action');			    
    submitted = true;
    // resubmit the form
    $(this).submit();			  
    });
  });			
// ]]></script>
```
The complain was "submit is not a function" when I dug deeper.
```
<input id="submit" type="submit" value="Search" />
```
Just I updated the id of the submit button to something like "btnsubmitt".

Thanks  
