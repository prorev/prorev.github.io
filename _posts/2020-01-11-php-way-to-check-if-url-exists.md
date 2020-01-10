---
id: 1097
title: PHP way to check if URL exists
date: 2013-01-22 13:21:30
author: taimane
layout: post
permalink: /php-way-to-check-if-url-exists/
published: true
categories:
   -
tags:
   -
---
There are two scripts both of them are good to check if the URL exists or not. 

Solution #1

<pre class="prettyprint">
function url_exists($url){
$file_headers = @get_headers($file);
if($file_headers[0] == 'HTTP/1.1 404 Not Found') return false;
else return true;
}
</pre>


Solution #2 using CURL
<pre class="prettyprint">
function url_exists($url) {
    if (!$fp = curl_init($url)) return false;
    return true;
}
</pre>

Thanks
  

