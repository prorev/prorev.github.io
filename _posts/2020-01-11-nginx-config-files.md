---
id: 2733
title: Nginx config files
date: 2016-02-10 19:26:04
author: taimane
layout: post
permalink: /nginx-config-files/
published: true
categories:
   -
tags:
   -
---
I needed to find the Nginx config files aligned somewhere somehow. And I was aware of limitations apt packaging system have, when I simple need to list the config files. Lucky for me lists of config files exist in 



<code>/var/lib/dpkg/info</code>



and specifically for ngnix I found them with this command



<code>cat nginx-common.conffiles</code>



and this is not all since I was able to list the configs



<pre>/etc/default/nginx

/etc/init.d/nginx

/etc/init/nginx.conf

/etc/logrotate.d/nginx

/etc/nginx/fastcgi.conf
Thanks
/etc/nginx/fastcgi_params

/etc/nginx/koi-utf

/etc/nginx/koi-win

/etc/nginx/mime.types

/etc/nginx/nginx.conf

/etc/nginx/proxy_params

/etc/nginx/scgi_params

/etc/nginx/sites-available/default

/etc/nginx/snippets/fastcgi-php.conf

/etc/nginx/snippets/snakeoil.conf

/etc/nginx/uwsgi_params

/etc/nginx/win-utf

/etc/ufw/applications.d/nginx</pre>



Thanks.  

