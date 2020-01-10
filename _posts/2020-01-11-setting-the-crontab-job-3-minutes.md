---
id: 1112
title: Setting your crontab job every 3 minutes
date: 2013-02-06 11:27:43
author: taimane
layout: post
permalink: /setting-the-crontab-job-3-minutes/
published: true
categories:
   -
tags:
   -
---
In case you have set your crontab and you need to call web page <code>http://example.com/webpage.html</code> the every 3 minutes

<code>*/3 * * * * /usr/bin/wget -O /dev/null http://example.com/webpage.html</code>


To set the cron service execute:
<code>service crond start</code>

Edit crontab call:
<code>crontab -e</code>
<code>service crond restart</code>

Thanks  

