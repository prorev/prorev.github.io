---
id: 1099
title: Call WordPress functions from custom PHP code
date: 2013-01-22 14:07:33
author: taimane
layout: post
permalink: /wordpress-from-php-code/
published: true
categories:
   -
tags:
   -
---
In order to execute WordPress functions from any PHP code you need to load the
<code>wp-load.php</code>file like this:

<pre class="prettyprint">
require_once("/path/to/wordpress/wp-load.php");
</pre>

Thanks  

