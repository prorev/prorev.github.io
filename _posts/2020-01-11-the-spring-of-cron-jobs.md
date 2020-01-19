---
id: 2540
title: The spring of cron jobs
date: 2015-10-03 11:32:12
author: taimane
layout: post
permalink: linux/crontab/
redirect_from: 
   - /crontab-map/
   - /the-spring-of-cron-jobs/

published: true
categories:
   -
tags:
   -
---
## Where to find the cronjobs?
```
crontab -l
/etc/cron.hourly/*
/etc/cron.daily/*
/etc/cron.weekly/*
/etc/cron.monthly/*
/etc/cron.d/*
/etc/crontab
/var/spool/cron/*
```

On top of that, you can have at jobs 


```
/var/spool/at/*
/etc/anacrontab
/var/spool/anacron/*
```

## Crontab map
```
# For details see man 4 crontabs
# Example of job definition:
# .---------------- minute (0 - 59)
# |  .------------- hour (0 - 23)
# |  |  .---------- day of month (1 - 31)
# |  |  |  .------- month (1 - 12) OR jan,feb,mar,apr ...
# |  |  |  |  .---- day of week (0 - 6) (Sunday=0 or 7) 
# |  |  |  |  |
# *  *  *  *  * user-name command to be executed
```