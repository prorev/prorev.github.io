---
id: 799
title: Disable INNODB and gain little more memory for your web server
date: 2012-10-29 21:31:33
author: taimane
layout: post
permalink: /disable-innodb/
published: true
categories:
   -
tags:
   -
---
I am writing this article in a good hope hurricane Sandy will not cause any damage. Well it is reaching the east coast and the news are bloated.

The InnoDB is just more proficient database manager for MySQL then the default MyISAM. Well it uses 100MB of RAM as I believe. In cases when you are down to 512MB of RAM this is a huge percentage.

Because of that, I created this little tuto for disabling the InnoDB. Very simple. Navigate to the MySQL configuration file and edit it via VI editor.
<pre>vi /etc/my.cnf</pre>
In there simple enter this line.
<pre>skip-innodb</pre>
After that save the my.cnf file by hitting the ESC and pressing ZZ.
Simple restart the MySQL
<pre>service mysqld restart</pre>
And no InnoDB = more memory on your web server.
Here are the two shots examples before and after.

<a href="https://programming-review.com/wp-content/uploads/2012/10/Selection_271.png"><img class="alignnone size-full wp-image-803" title="Selection_271" src="https://programming-review.com/wp-content/uploads/2012/10/Selection_271.png" alt="" width="628" height="93" /></a>

<a href="https://programming-review.com/wp-content/uploads/2012/10/Selection_272.png"><img class="alignnone size-full wp-image-804" title="Selection_272" src="https://programming-review.com/wp-content/uploads/2012/10/Selection_272.png" alt="" width="639" height="87" /></a>

Thanks  

