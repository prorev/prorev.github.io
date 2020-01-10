---
id: 1145
title: Flash param AllowScriptAccess
date: 2013-03-01 16:18:58
author: taimane
layout: post
permalink: /flash-allowscriptaccess/
published: true
categories:
   -
tags:
   -
---
You need to make <strong>data communication</strong> between action script and you HTML page.

<pre>AllowScriptAccess</pre> parameter 

<code>&lt;param name=&quot;AllowScriptAccess&quot; VALUE=&quot;always&quot;/&gt;</code>

controls whether ActionScript in a SWF is permitted to call JavaScript in the HTML page that contains it.

Here are the possible values:
<code>
always: Always permit ActionScript-to-JavaScript calls.

sameDomain: Permit ActionScript-to-JavaScript calls only when the 
SWF and HTML page come from the same domain.

never: Never permit ActionScript-to-JavaScript calls.
</code>

Thanks
  

