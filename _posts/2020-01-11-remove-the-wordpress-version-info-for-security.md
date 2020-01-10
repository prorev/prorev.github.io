---
id: 2917
title: Remove the WordPress Version Info for Security
date: 2016-07-11 09:41:48
author: taimane
layout: post
permalink: /remove-the-wordpress-version-info-for-security/
published: true
categories:
   -
tags:
   -
---
The following code you need to add to the special functions.php file, or some other smart place inside WordPress.<code> </code>
<pre class="default prettyprint prettyprinted"><code><span class="com">// remove version info from head and feeds</span>
<span class="kwd">function</span><span class="pln"> complete_version_removal</span><span class="pun">()</span> <span class="pun">{</span>
    <span class="kwd">return</span> <span class="str">''</span><span class="pun">;</span>
<span class="pun">}</span><span class="pln">
add_filter</span><span class="pun">(</span><span class="str">'the_generator'</span><span class="pun">,</span> <span class="str">'complete_version_removal'</span><span class="pun">);</span></code></pre>
This would also be called removing entropy from WordPress.  

