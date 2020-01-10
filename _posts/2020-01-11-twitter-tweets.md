---
id: 888
title: Twitter tweets from URL and post title.
date: 2012-12-13 10:12:18
author: taimane
layout: post
permalink: /twitter-tweets/
published: true
categories:
   -
tags:
   -
---
Here is a little trick how to set the Twitter tweets links look good even if you use special character & in your title.
The following code will encode your titles for URL's.
Because the & is special character for URL's you need to eliminate the trails ulrencode function inserts.

Here is the code.

<pre class="prettyprint">
$new_title = str_replace(&quot;%23038%3B&quot;, &quot;&quot;, urlencode($old_title) );
<pre></pre>

Sorry but there will be no URL encoding of the URL. This is not needed.
Now you can create a tweet links like this.

<pre class="prettyprint">
&lt;a href=&quot;http://twitter.com/home?status=&lt;?php echo $new_title.&quot;+&quot;.$URL; ?&gt;&quot;&gt;
&lt;img src=&quot;&lt;?php echo get_bloginfo('stylesheet_directory'); ?&gt;/img/twitter.png&quot; alt=&quot;&quot;&gt;
tweet this post					
&lt;/a&gt;
</pre>

Thanks  

