---
id: 2456
title: Column text replace
date: 2015-02-16 19:17:23
author: taimane
layout: post
permalink: /column-text-replace/
published: true
categories:
   -
tags:
   -
---
Here I used wp_postmeta table and meta_value column in WordPress (MySQL database)
This could be used for any other table and column. I checked this for MySQL and similar functions should exist in other databases also.

<code>SELECT * FROM `wp_postmeta` where `meta_value` LIKE '%unwanted_text%'</code>

The Update looks like this:
<code>UPDATE `wp_postmeta`
 SET `meta_value` = replace(`meta_value`, 'unwanted_text', 'wanted_text')</code>

Thanks
  

