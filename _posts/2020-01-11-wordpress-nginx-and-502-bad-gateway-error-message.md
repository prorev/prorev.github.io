---
id: 2570
title: Wordpress, Nginx and 502 Bad Gateway error message
date: 2016-01-04 22:08:29
author: taimane
layout: post
permalink: /wordpress-nginx-and-502-bad-gateway-error-message/
published: true
categories:
   -
tags:
   -
---
Since Linux sockets should be faster then TCP sockets (IP and port) it may be better to use them in Nginx configuration, even though by default TCP sockets are used in Nginx.

To list the open ports on say localhost use this command:

```
nmap localhost
```

However, after switching to Linux socket "502 Bad Gateway" error may appear. The reason may be the missing listen.owner and listen.group values from `/etc/php5/fpm/pool.d/www.conf`.

```
;listen = 127.0.0.1:9000
listen = /var/run/php5-fpm.sock
listen.owner = www-data
listen.group = www-data
```

A gateway, is like an access point, a bridge that communicate one service with another, in this case the gateway can be a service/application (WordPress, running on PHP) that is working and receiving requests from NGINX web server. So this was a communication problem between PHP and Nginx.



By all means you need to 

<code>sudo service php5-fpm restart</code> to see the updates.

Make sure you have php5-fpm installed on your system:

```
apt-get install php5-fpm
```


  

