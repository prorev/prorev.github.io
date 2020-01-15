---
id: 496
title: Deleting WordPress pseudo cron jobs
date: 2011-06-22 08:21:03
author: taimane
layout: post
permalink: /wordpress-cron-jobs/
published: true
categories:
   -
tags:
   -
---
I needed to crate a <a rel="nofollow" href="http://codex.wordpress.org/Function_Reference/wp_schedule_event">pseudo cron job</a> in wordpress, but I was not careful and I created >100 jobs. Here is the preview:
<img src="https://programming-review.com/wp-content/uploads/2011/06/cronscheduler-e1308729303177.png" alt="" title="cronscheduler" width="500" height="398" class="alignnone size-full wp-image-497" />

I caught this image via <a rel="nofollow" href="http://wordpress.org/extend/plugins/gd-press-tools/">GD Press Tools</a> plugin. Now deleting all the cron jobs is not easy even using this plugin. One should click and wait hundred times to delete all the jobs.

It came out that the solution to delete all the cron jobs is possible using this PHP code.
```
$crons = _get_cron_array();
foreach ($crons as $key=>$job){
	if (isset($job['my_hourly_action'])){
		unset($crons[$key]);			
	}
}	
_set_cron_array($crons);
```
After that I checked from the GD Press Tools and found that the unwanted cron jobs are gone.
<img src="https://programming-review.com/wp-content/uploads/2011/06/pseudocron1-e1308731005309.png" alt="" title="pseudocron" width="500" height="144" class="alignnone size-full wp-image-502" />
  
