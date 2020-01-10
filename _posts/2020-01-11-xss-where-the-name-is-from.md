---
id: 2120
title: XSS - Where the name is from?
date: 2014-05-19 22:34:08
author: taimane
layout: post
permalink: /xss-where-the-name-is-from/
published: true
categories:
   -
tags:
   -
---
Cross-site scripting (XSS) vulnerabilities occur in the following scenario:
<div>
<ul>
	<li>From a web request not trusted data enters a web application (blog, whatever...)</li>
	<li>The web application dynamically generates a web page that contains this not trusted data.</li>
	<li>The application does not prevent the data from containing the content that is executable by a web browser, such as JavaScript, HTML tags, HTML attributes, mouse events, Flash, ActiveX, etc.</li>
	<li>Browsers access the the generated web page and execute malicious code.</li>
	<li>Since the script comes from a web page that was sent by the web server, the victim's web browser executes the malicious script in the context of the web server's domain.</li>
	<li>This violates the web browser's same-origin policy, which states that scripts in one domain should not be able to access resources or run code in a different domain and there for the name XSS</li>
</ul>
Thanks

</div>  

