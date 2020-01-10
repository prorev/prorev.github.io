---
id: 2565
title: Gimp the latest on U
date: 2015-11-18 16:59:05
author: taimane
layout: post
permalink: /gimp-the-latest-on-u/
published: true
categories:
   -
tags:
   -
---
Of course on Ubuntu, the procedure to install it / update it is the following...
<ol>
	<li>Uninstall GIMP
<pre>sudo apt-get autoremove gimp gimp-plugin-registry
</pre>
</li>
	<li>Add the following PPA
<pre>sudo add-apt-repository ppa:otto-kesselgulasch/gimp
sudo apt-get update
</pre>
</li>
	<li>Reinstall the latest GIMP
<pre>sudo apt-get install gimp
</pre>
</li>
</ol>
Thanks

&nbsp;  

