---
id: 1509
title: Some functions for YouTube API
date: 2013-05-25 18:34:04
author: taimane
layout: post
permalink: /some-functions-for-youtube-api/
published: true
categories:
   -
tags:
   -
---
This post is as is and may contain errors, or the future versions of YouTube API may not work well with this code:
Getting the playlist title:
```
function get_playlist_title($pid){
	$uri = 'http://gdata.youtube.com/feeds/api/playlists/'.$pid.'?v=2';
	$data = file_get_contents($uri);
	$xml = simplexml_load_string($data);
	return $xml->title;
}
```
Get some video data
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
Get array of video Id's in playlist 
```
function videos_in_playlist($playlist_id){ 
	$si = 1; // start index
	$cnt = 0; // videos counter
	$varr = array();
	while (1){
		$uri = 'http://gdata.youtube.com/feeds/api/playlists/' . $playlist_id . '?v=2&start-index=' . $si;
		$data = file_get_contents($uri);
		$xml = simplexml_load_string($data);
		// print and do
		foreach ($xml->entry as $entry){
			$cnt++;			
			$url = $entry->link[0]['href']; 
			$id = str_replace('&feature=youtube_gdata', "", $url);
			$id = str_replace('http://www.youtube.com/watch?v=', "", $id);
			$varr[] = $id;
		}
		// break the loop condition
		if (count($xml->entry) < 25) break;
		else $si = $si + 25;
	}
	return $varr;
}
```
