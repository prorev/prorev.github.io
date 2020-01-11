---
id: 1512
title: Zend Gdata YouTube API = get all videos from a playlist
date: 2013-05-25 19:30:46
author: taimane
layout: post
permalink: /zend-gdata-youtube-api-get-all-videos-from-a-playlist/
published: true
categories:
   -
tags:
   -
---
Zend_Gdata_YouTube is an important YouTube helper. 
It is the service class for interacting with the YouTube Data API.
For certain playlistEntry(playlist) we can get all the videos(videoEntry).
The following function returns array of video entries for certain playlistEntry (playlist):
```
function getVideosArray($playlistEntry){
	$rArr = array();	
	$yt = new Zend_Gdata_YouTube();
	$yt->setMajorProtocolVersion(2);	
	$feedUrl = $playlistEntry->getPlaylistVideoFeedUrl();
	$playlistVideoFeed = $yt->getPlaylistVideoFeed($feedUrl);
	foreach($playlistVideoFeed as $videoEntry){
		$rArr[] = $videoEntry; //$videoEntry->getVideoId() would return ID
	}
	return $rArr;
}
```
This function returns only 25 results; because 25 is the default pagination in YouTube API.
So in order to get all the results we use the while loop.
```
function getVideosArray($playlistEntry){
	$rArr = array();	
	$yt = new Zend_Gdata_YouTube();
	$yt->setMajorProtocolVersion(2);	
	$feedUrl = $playlistEntry->getPlaylistVideoFeedUrl();
	$playlistVideoFeed = $yt->getPlaylistVideoFeed($feedUrl);	
	foreach($playlistVideoFeed as $videoEntry){
	  $rArr[] = $videoEntry->getVideoId(); //$videoEntry would return all
	}		  
	while(1){
	  try {
  		  $playlistVideoFeed = $playlistVideoFeed->getNextFeed();  		  
  		  foreach($playlistVideoFeed as $videoEntry){
  		  	$rArr[] = $videoEntry->getVideoId(); //$videoEntry would return all
  		  }  		  
	  }catch (Zend_Gdata_App_Exception $e) {		  
		  break;
	  }
	}    
	return $rArr;
}
```
There is one more function for the same thing that works smart, but it may add extra garbage to the list of videos.
```
function getVideosArray_old($playlist_id){ 
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
None of these functions have conditions for getting the public videos.