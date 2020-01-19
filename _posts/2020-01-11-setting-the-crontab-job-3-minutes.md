---
id: 1112
title: Setting your crontab job every 3 minutes
date: 2013-02-06 11:27:43
author: taimane
layout: post
permalink: /linux/setting-cron-frequency/
redirect_from: /setting-the-crontab-job-3-minutes/
published: true
categories:
   -
tags:
   -
---
In case you have set your crontab and you need to call web page <code>http://example.com/webpage.html</code> the every 3 minutes:

```
*/3 * * * * /usr/bin/wget -O /dev/null http://example.com/webpage.html
```

_To set the cron service execute:_
```
service crond start
```
_Edit crontab call:_
```
crontab -e
```
_Restart crond:_
```
service crond restart
```
