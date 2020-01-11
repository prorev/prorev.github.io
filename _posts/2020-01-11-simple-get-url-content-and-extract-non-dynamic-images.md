---
id: 1871
title: Simple get URL content and extract non dynamic images
date: 2013-12-20 21:25:46
author: taimane
layout: post
permalink: /simple-get-url-content-and-extract-non-dynamic-images/
published: true
categories:
   -
tags:
   -
---
This code loads the entire content of the URL and extracts the images from it.

```
function get_content($url)
{
    $ch = curl_init();
    curl_setopt ($ch, CURLOPT_URL, $url);
    curl_setopt ($ch, CURLOPT_HEADER, 0);
    ob_start();
    curl_exec ($ch);
    curl_close ($ch);
    $string = ob_get_contents();
    ob_end_clean();
    return $string;    
}

function print_images($url){
    $string = $this->get_content($url);
    preg_match_all('/<img src="([^"]+)"/i', $string, $matches);
    foreach($matches[0] as $k=>$v){
      $url = $matches[1][$k];
      echo $v . ' width="75px" height="75px" onclick=img("' . $url . '") />'     ;
    }
    echo '<script> function img(i){ jQuery("textarea#_image").val(i); };</script>';
}
```
