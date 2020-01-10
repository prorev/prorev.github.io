---
id: 2678
title: Step by step normal wp-cli installation
date: 2016-02-01 22:25:15
author: taimane
layout: post
permalink: /step-by-step-normal-wp-cli-installation/
published: true
categories:
   -
tags:
   -
---
You need to install wp-cli — command line interface for WordPress.
Here is a step by step tutorial how do it right.

Step 1.
<pre>cd /opt; mkdir wpcli; cd wpcli;</pre>

Step 2.
<pre>wget https://raw.githubusercontent.com/wp-cli/builds/gh-pages/phar/wp-cli.phar</pre>
(if it doesn't work try installing wget)

Step 3.
Test if it works
<pre>php wp-cli.phar --info</pre>

Step 4.
<pre>sudo chmod +x wp-cli.phar</pre>
This gives wp-cli.phar executable permission

Step5.
<pre>sudo mv wp-cli.phar /usr/local/bin/wp</pre>
This enables calling simple wp instead wp-cli.phar every time
end without even using php interpreter like php wp-cli.phar --info
simple call wp --info to confirm it works.

Now you are on your way and just go to the WordPress document root folder and from there, from command line you can call any of the commands available:
<pre>
wp core [download|config|install|install_network|version|update|update_db]
wp db [create|drop|optimize|repair|connect|cli|query|export|import]
wp eval-file
wp eval
wp export [validate_arguments]
wp generate [posts|users]
wp home
wp option [add|update|delete|get]
wp plugin [activate|deactivate|toggle|path|update|uninstall|delete|status|install]
wp post-meta [get|delete|add|update]
wp post [create|update|delete]
wp theme [activate|path|delete|status|install|update]
wp transient [get|set|delete|type]
wp user-meta [get|delete|add|update]
wp user [list|delete|create|update]
</pre>
Thanks  

