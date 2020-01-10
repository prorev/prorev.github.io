---
id: 1725
title: Add WordPress Plugin to the WordPress Public Repository Using Subversion
date: 2013-09-18 13:46:22
author: taimane
layout: post
permalink: /wordpress-plugin-subversion-tasks/
published: true
categories:
   -
tags:
   -
---
Demonstration will be for the phpinfo-print plugin, but very similar for any other plugin.

First you log in to wordpress.org and then you visit this URL: https://wordpress.org/plugins/add/

After providing the plugin name and description you need to provide the zip URL of your plugin

After the approval you will get an email like this:
<pre class="prettyprint lang-html">Your plugin hosting request has been approved.
Within one hour, you will have access to your SVN repository at
http://plugins.svn.wordpress.org/phpinfo-print/
with your WordPress.org username and password (the same one you use on the forums).
Here's some handy links to help you get started.
Using Subversion with the WordPress Plugins Directory
http://wordpress.org/plugins/about/svn/
FAQ about the WordPress Plugins Directory
http://wordpress.org/plugins/about/faq/
WordPress Plugins Directory readme.txt standard
http://wordpress.org/plugins/about/readme.txt
readme.txt validator:
http://wordpress.org/plugins/about/validator/

Enjoy!
</pre>
Goto your plugins folder
<pre class="prettyprint">svn co http://plugins.svn.wordpress.org/phpinfo-print phpinfo-print</pre>
Add your plugin to the trunk folder and screenshots to the assets folder
<pre class="prettyprint lang-html">svn add trunk/*
svn add assets/*
svn stat
svn diff
svn commit -m 'Initial version'
</pre>
Here is another very interesting question: How to update the subversion with the plugin improvements?

Here is the process of improving the plugin description and eliminating some warnings...
<pre class="prettyprint lang-html">-&gt;svn co http://plugins.svn.wordpress.org/phpinfo-print phpinfo-print
</pre>
-&gt;. cd phpinfo-print folder
-&gt;. Modify your files
<pre class="prettyprint lang-html">-&gt; 
svn status
svn update
svn commit -m "Updated description and eliminated one warning in the footer..." 
</pre>

Useful links:
https://wordpress.org/plugins/about/svn/
https://wordpress.org/plugins/about/faq/

Thanks.  

