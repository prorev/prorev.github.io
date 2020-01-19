---
id: 2801
title: Secure WordPress
date: 2016-04-02 10:17:39
author: taimane
layout: post
permalink: /wordpress/secure/
redirect_from: /secure-wordpress/
published: true
categories:
   -
tags:
   -
---
You work exclusively work with VPS or dedicated hosting. This is a matter of choice, as you may use Docker and skip this step, but in general you don't like shared hosting.

In there you follow some security rules presented on Linode web site

https://www.linode.com/docs/security/securing-your-server



As well in this <a rel="nofollow" href="https://github.com/arrivu/beacon/wiki/AAAAA-All-At-First-Step-by-Step-Configuring-Servers-%28VPS%29">article</a>.



Then you make sure all login attempt are kept in auth.log either from SFTP and SCP or from SSH.

Then you keep your eye on wtmp and btmp logs as well as well you have skills to check access logs.



Then you configure the firewall called iptables using csf/lfd that sends emails to me in case of possible problems.



Then you have a cronjob that per minute checks if all your services are up, and if no, you receive the email.



Possible you run some root-kit hunter, OSSEC....



On WordPress level you try to follow these rules:

One great resource to read is: https://www.owasp.org/index.php/OWASP_Wordpress_Security_Implementation_Guideline



In order to perform static plugin source code audit, you use these tools:



RIPS: A static source code analyser for vulnerabilities in PHP scripts

PHP-sat: Static analysis for PHP

Yasca: It could best be described as a "glorified grep script" plus an aggregation of other open-source tools.



At least one of the above you use because on every plugin update the there may be a hidden bug.



You don't use dynamic code analysis because these tools may took great resources, and the above tools are smart to predict and issue warnings on any possible non secure code (and there are about 4-5 functions in PHP that can do nasty things.)



So keeping the eye on plug-ins, and theme updates in automated way you are informed of possible risks and your WordPress is more secure.


