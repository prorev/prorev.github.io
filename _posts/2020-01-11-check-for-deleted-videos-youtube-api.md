---
id: 1519
title: Check for deleted videos (YouTube API)
date: 2013-05-26 19:58:02
author: taimane
layout: post
permalink: /check-for-deleted-videos-youtube-api/
published: true
categories:
   -
tags:
   -
---
Using Zend_Gdata it we get an exception while retrieving the video entry flavor we can check the error response object if the response status is precisely 400.

If this is the case the video is not present any more.

PHP code for checking this would be:

```php
try {
    $yt = new Zend_Gdata_YouTube();
    $videoEntry = $yt->getVideoEntry($video_path);
    $duration = $videoEntry->getVideoDuration();
} catch (Zend_Gdata_App_HttpException $e) {
    $response = $e->getResponse();
    if ($response !== null) {
        if ($response->getStatus() == 400 && $response->getBody() == 'Invalid id') {
        // the video requested does not exist or was deleted
        } else {
        // some other error

        }

    }

}
```




  

