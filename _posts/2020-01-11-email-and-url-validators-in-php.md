---
id: 2400
title: Email and URL validators in PHP
date: 2014-08-31 20:43:00
author: taimane
layout: post
permalink: /email-and-url-validators-in-php/
published: true
categories:
   -
tags:
   -
---
<pre class="prettyprint">public static function is_valid_url($url){
  return preg_match('!^(http|https)://([\w-]+\.?)+[\w-]+(:\d+)?(/[\w- ./?~%&=+\']*)?$!', $url);
}

public static function is_valid_email($email){
  return preg_match('/^(([a-zA-Z0-9_.\-+!#$&\'*+=?^`{|}~])+\@((([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+|localhost) *,? *)+$/', $email);
}</pre>

Thanks
--D  

