---
id: 508
title: PHP creating variables from strings and associative arrays
date: 2011-06-25 22:39:31
author: taimane
layout: post
permalink: /php-creating-variables/
published: false
categories:
   -
tags:
   -
---
Often having the URL string you need to parse the URL string and to have the variables for each GET parameter. This is actually what PHP does when creating the $_GET "superglobal" variable. Here is the function behind it: <a rel="nofollow" href="http://php.net/manual/en/function.parse-str.php"><code>parse_str </code></a>

<pre>$url = "user=123&amp;actionid=2345&amp;status=yes&amp;plantype=121&amp;day=20110623";



parse_str($url);

print ($user);
<a rel="nofollow" href="http://
print ($actionid);

print ($status);

print ($plantype);

print ($day);</pre>

Also, when speaking of creating variables, I find the <a rel="nofollow" href="http://php.net/manual/en/function.extract.php"><code>extract </code></a> function being very handy.

<pre>$size = "large";

$var_array = array("color" =&gt; "blue",

"size"  =&gt; "medium",

"shape" =&gt; "sphere");

extract($var_array, EXTR_PREFIX_SAME, "wddx");

echo "$color, $size, $shape, $wddx_size\n";</pre>

The output for the last example will be: <code>blue, large, sphere, medium</code>




