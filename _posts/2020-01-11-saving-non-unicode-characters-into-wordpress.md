---
id: 3000
title: Saving non Unicode characters into WordPress
date: 2016-08-02 09:04:06
author: taimane
layout: post
permalink: /saving-non-unicode-characters-into-wordpress/
published: true
categories:
   -
tags:
   -
---
Found a problem when trying to save non Unicode characters to the database.
In PHP this way I was able to fix this problem.
<code>
$unicode = mb_convert_encoding($nonunicode, 'UTF-8', 'UTF-8');
update_post_meta($post_id, 'unicode', $unicode);
</code>

Thanks  

