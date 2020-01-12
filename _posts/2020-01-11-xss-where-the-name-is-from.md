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

* From a web request not trusted data enters a web application (blog, whatever...)
* The web application dynamically generates a web page that contains this not trusted data.
* The application does not prevent the data from containing the content that is executable by a web browser, such as JavaScript, HTML tags, HTML attributes, mouse events, Flash, ActiveX, etc.
* Browsers access the the generated web page and execute malicious code.
* Since the script comes from a web page that was sent by the web server, the victim's web browser executes the malicious script in the context of the web server's domain.
* This violates the web browser's same-origin policy, which states that scripts in one domain should not be able to access resources or run code in a different domain and there for the name XSS