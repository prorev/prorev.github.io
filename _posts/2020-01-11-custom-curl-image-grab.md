---
id: 1505
title: Custom CURL image grab
date: 2013-05-25 11:46:19
author: taimane
layout: post
permalink: /custom-curl-image-grab/
published: true
categories:
   -
tags:
   -
---
The code to grab and save the image based on URL:


```
function grab_image($url,$saveto){
	$ch = curl_init ($url);
	curl_setopt($ch, CURLOPT_HEADER, 0);
	curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
	curl_setopt($ch, CURLOPT_BINARYTRANSFER,1);
	$raw=curl_exec($ch);
	curl_close ($ch);
	if(file_exists($saveto)){
		unlink($saveto);
	}
	$fp = fopen($saveto,'x');
	fwrite($fp, $raw);
	fclose($fp);

}
```


