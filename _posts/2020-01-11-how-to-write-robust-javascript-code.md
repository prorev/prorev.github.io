---
id: 3084
title: How to write robust JavaScript code
date: 2016-09-08 21:40:36
author: taimane
layout: post
permalink: /how-to-write-robust-javascript-code/
published: true
categories:
   -
tags:
   -
---
<strong>JavaScript has syntax that is so liberal since JavaScript developers can do all kinds of <del>crazy</del> and wonderful things at the same time. </strong>

<strong>There are few tricks for writing <em>robust JavaScript</em> <em>code</em>, catching those who grow up in more restrictive class based programming systems.</strong>
<h2>Put your code inside closures to hide from global "scope" or don't use global namespace to define variables</h2>
<pre>function(){ 
 local_scope=1;
}</pre>
Technically, all JavaScript functions are closures. The advice in here is to define variables inside functions, and not to "pollute" the global namespace.

&nbsp;
<h2>Don't modify the &lt;Object<span style="font-family: monospace;">&gt;</span> class prototype</h2>
JavaScript object also inherits the properties of another object, called "<strong>prototype</strong>". The
methods of an object are typically inherited properties, and this "prototypal inheri-
tance" is a key feature of JavaScript.

If you modify JavaScript objects prototype, this is may be considered a bad practice. Why? Well, it depends, this may be the anti-pattern in case other code relay on that original prototype. However, sometimes this feature is essential, for so called JavaScript inheritance. So in general, it depends on case.
<h2>Don't use JavaScript in an inline form</h2>
This is not considered as flexible. However, this also depends on case. So, keep in mind these are the general rules.
<h2>Make sure DOM is ready</h2>
Make your events are bombed once the document model is ready. You have these two notations, and the second is <strong> $(document).ready</strong> shorthand.
<pre>$(document).ready(function(){
 $('#mybutton').on('click', function(){
 alert('Hello World!');
 });
});</pre>
<pre>$(function(){
 $('#mybutton').on('click', function(){
 alert('Hello World!');
 });
});</pre>
<h2>Use 'var' for global variables</h2>
Variables in JavaScript?? They can be global or local.

Global are those variables declared in JavaScript, outside of a function.
Variables declared in JavaScript inside a function can be both <strong>global</strong> and <strong>local</strong>.

When a variable is declared inside a function, <em>without</em> the  <strong>var</strong> keyword, it will be local.
If you declare a variable <em>with</em> <strong>var</strong> it is <strong>global,</strong> regardless of where you defined it.

This will make your JavaScript code more <strong>robust</strong>.
<h2>Use the Strict mode</h2>
Strict mode in JavaScript is <strong>more robust.</strong> It defines a subset of the language. There are no silent errors, not global objects leakage, and static scoping rules are applied. Also in <strong>strict</strong> mode you cannot delete the variable:
<pre> delete x;</pre>
<h2>Insert Semicolons</h2>
Common sense.
<h2>Try not to use eval</h2>
There are many bugs that you can achieve using the <strong>eval</strong>. If there is a workaround not to use it, do not use it. Also note that passing strings rather than functions to either <code>setTimeout</code> or <code>setInterval</code> as this triggers the use of <code>eval()</code> internally.
<h2>Avaid document.write()</h2>
When you can use <em>native DOM</em> <code>document.createElement</code>, <code>document.write</code> may be avoided. <code>document.write</code> can if not used right overwrite your page, while <code>document.createElement</code> will not.  

