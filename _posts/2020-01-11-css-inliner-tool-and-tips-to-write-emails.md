---
id: 2795
title: CSS inliner tool and tips to write emails in PHP
date: 2016-04-01 00:04:45
author: taimane
layout: post
permalink: /css-inliner-tool-and-tips-to-write-emails/
published: true
categories:
   -
tags:
   -
---
You need to create emails in PHP.

Here are some tips:

<ul>

	<li>Use <a rel="nofollow" href="http://templates.mailchimp.com/resources/inline-css/">in-line CSS tool</a> since styles aren't always supported.</li>

	<li>Don't use button element: use anchors instead.</li>

	<li>Use table layouts: best supported.</li>

	<li>Don't use rowspan: spacing issues.</li>

	<li>Don't use background images: Limited support.</li>

	<li>Style image tags with "display:block": fixes weird spacing issues with hotmail.</li>

	<li>If using multiple tables nest them in one parent table: stops spacing issues.</li>

	<li>Don't use Javascript: not well supported.</li>

	<li>Make sure email looks good even with no images: may not load.</li>

</ul>

Thanks  

