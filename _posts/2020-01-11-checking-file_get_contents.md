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
Hire is little handy script how to check if function <code>file_get_contents</code> works on the web server.

<pre>&lt;?php

$con = file_get_contents('https://pixabay.com/get/e833b2062df6093ed95c4518b74f4791e27ee4d004b0154696f5c070a4eeb2_640.jpg');

if(strlen($con)&gt;0){

 echo "hurray, we can get " . strlen($con) . " bytes from https://pixabay.com/get/e833b2062df6093ed95c4518b74f4791e27ee4d004b0154696f5c070a4eeb2_640.jpg";

}else{

 echo "file_get_contents() PHP not working, we can get 0 (read:zero) bytes from https://pixabay.com/get/e833b2062df6093ed95c4518b74f4791e27ee4d004b0154696f5c070a4eeb2_640.jpg.

 This means we cannot read files";

<a rel="nofollow" href="https://

?&gt;</pre>

This is important since some system have this disabled.



<a href="https://programming-review.com/wp-content/uploads/2016/09/file_get_contents.png"><img class="alignnone size-medium wp-image-3105" src="https://programming-review.com/wp-content/uploads/2016/09/file_get_contents-300x55.png" alt="file_get_contents" width="300" height="55" /></a>

<h2>Checking the same for CURL?</h2>

Yes, the following is possible also for the CURL. The next script in PHP can give the feedback.



<a href="https://programming-review.com/wp-content/uploads/2016/09/Curl-OK-on-web-server.png"><img class="alignnone size-medium wp-image-3104" src="https://programming-review.com/wp-content/uploads/2016/09/Curl-OK-on-web-server-300x81.png" alt="curl-ok-on-web-server" width="300" height="81" /></a>

<pre>&lt;?php



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



$con = curl_get_contents('https://pixabay.com/get/e833b2062df6093ed95c4518b74f4791e27ee4d004b0154696f5c070a4eeb2_640.jpg');



if(strlen($con)&gt;0){

 echo "hurray, CURL way, we can get " . strlen($con) . " bytes from https://pixabay.com/get/e833b2062df6093ed95c4518b74f4791e27ee4d004b0154696f5c070a4eeb2_640.jpg";

}else{

 echo "CURL PHP not working, we can get 0 (read:zero) bytes from https://pixabay.com/get/e833b2062df6093ed95c4518b74f4791e27ee4d004b0154696f5c070a4eeb2_640.jpg.

 This means we cannot read files";

}

?&gt;</pre>  

