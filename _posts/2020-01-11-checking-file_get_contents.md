---
id: 3092
title: Checking if file_get_contents works on Web server
date: 2016-09-10 19:57:37
author: taimane
layout: post
permalink: /checking-file_get_contents/
published: true
categories:
   -
tags:
   -
---

### Check `file_get_contents`

This little script will check if PHP function `file_get_contents` works from the web server.

```php
<?php
$img = 'https://pixabay.com/get/e833b2062df6093ed95c4518b74f4791e27ee4d004b0154696f5c070a4eeb2_640.jpg'

$con = file_get_contents($img);

if(strlen($con)>0){
 echo "hurray, we can get " . strlen($con) . " bytes from the image";
}else{
 echo "file_get_contents() PHP not working, we can get 0 (read:zero) bytes. This means we cannot read files";
?>
```

> Some web servers have this disabled.



### Checking the same for CURL?

Yes, the following is possible also for the CURL. 

The next script in PHP can give the feedback.


```php
<?php
function curl_get_contents($url)
{
   $ch = curl_init();
   curl_setopt($ch, CURLOPT_HEADER, 0);
   curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
   curl_setopt($ch, CURLOPT_URL, $url);

   $data = curl_exec($ch);
   curl_close($ch);
   return $data;
}
$img = 'https://pixabay.com/get/e833b2062df6093ed95c4518b74f4791e27ee4d004b0154696f5c070a4eeb2_640.jpg'

$con = curl_get_contents($img);
if( strlen( $con ) > 0 ){
  echo "Hurray, CURL way, we can get " . strlen($con) . " bytes the image";
}else{
    // This means we cannot read files
    echo "CURL PHP not working, we can get 0 (read:zero) bytes.";
}
?>
```