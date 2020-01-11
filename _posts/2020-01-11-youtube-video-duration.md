---
id: 1446
title: YouTube video duration pattern matching
date: 2013-04-25 07:24:28
author: taimane
layout: post
permalink: /youtube-video-duration/
published: true
categories:
   -
tags:
   -
---
You need to get the YouTube video duration in seconds. Here is a little pattern matching function that can help you provide that.
```
function get_seconds($str){
	$mm =  "/<yt:duration seconds='([0-9]*)'/";
	$found = preg_match($mm, $str, $matches);
	return (int)$matches[1];
}
```
Above that there is a function to get the data from the YouTube resource.
```
function get_video_data($vid){
	
	$uri = 'https://gdata.youtube.com/feeds/api/videos/'.$vid.'?v=2';
	$data = file_get_contents($uri);
	$content = value_in( "media:description",$data, true);
	$dur = get_seconds($data);
	$xml = simplexml_load_string($data);
	$title = (string)$xml->title;
	$published = (string)$xml->published;
	$arr = array();
	$arr['title'] = $title;
	$arr['content'] = $content;
	$arr['date'] = $published;
	$arr['duration'] = $dur;
	return $arr;
}
```
<a href="https://programming-review.com/wp-content/uploads/2013/04/Selection_9251.png"><img src="https://programming-review.com/wp-content/uploads/2013/04/Selection_9251.png" alt="Selection_925" width="639" height="569" class="alignnone size-full wp-image-1449" /></a>
This post would not be complete without the another pattern matching function for getting the published date value:
```
function value_in($element_name, $xml, $content_only = true) {
	if ($xml == false) {
		return false;
	}
	$mm =  '#<'.$element_name.'(?:\s+[^>]+)?>(.*?)'.'</'.$element_name.'>#s';
	$found = preg_match($mm, $xml, $matches);
	if ($found != false) {
		if ($content_only) {
			return $matches[1];  //ignore the enclosing tags
		} else {
			return $matches[0];  //return the full pattern match
		}
	}
	// No match found: return false.
	return false;
}
```