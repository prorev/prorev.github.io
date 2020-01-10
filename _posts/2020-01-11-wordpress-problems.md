---
id: 641
title: WordPress problems troubleshooting
date: 2011-12-21 10:45:08
author: taimane
layout: post
permalink: /wordpress-problems/
published: true
categories:
   -
tags:
   -
---
Here are outlined typical WordPress development problems and how to troubleshoot them.

* Empty white screen in the dashboard
* Permalinks are not working
* Cannot log in to WordPress anymore
* WordPress errors and warnings show up
* Problem when changing WordPress domain
* Access denied errors

<strong> Empty white screen of death in the dashboard</strong>
This problem can be because of bad .htaccess. Delete  .htaccess file and you will eliminate 

<strong>Permalinks are not working</strong>
Can be because .htaccess file is not readable. Just change .htaccess permissions to 777 

<strong>Cannot log in to WordPress any more</strong>
Try to delete wp-admin and wp-includes folders and copy the new wp-admin and wp-includes folders to your hosting.

<strong>WordPress errors and warnings show up</strong>
Add the following line to your wp-config.php file <pre>define('WP_DEBUG', false);</pre>

<strong>Problem when changing WordPress domain</strong>
You need to update your database records and to replace old domain with the new one. Alternative you may change options table records 1 and 37.

<strong>Access denied errors</strong>
Either apache user doesn't have enough permissions to access the files or the .htaccess file is broken.
Try chown, chgrp the folder and setting the apache owner.

  

