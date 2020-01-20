---
id: 1894
title: Basic Nginx HTTP server architecture tips
date: 2013-12-31 18:11:55
author: taimane
layout: post
permalink: /nginx-http-server-architecture/
published: false
categories:
   -
tags:
   -
---
<h2>Some facts about the Nginx</h2>

Nginx or "engine X" is popular HTTP server (<a rel="nofollow" href="http://en.wikipedia.org/wiki/Nginx">plus more</a>). It is known for high performance, stability, rich feature set, simple configuration, and low resource consumption.



Here are all the configuration files for Nginx: ( <code>rpm -qc nginx</code> )

<pre>/etc/logrotate.d/nginx

/etc/nginx/conf.d/default.conf

/etc/nginx/conf.d/ssl.conf

/etc/nginx/conf.d/virtual.conf

/etc/nginx/fastcgi.conf

/etc/nginx/fastcgi.conf.default

/etc/nginx/fastcgi_params

/etc/nginx/fastcgi_params.default

/etc/nginx/koi-utf

/etc/nginx/koi-win

/etc/nginx/mime.types

/etc/nginx/mime.types.default

/etc/nginx/nginx.conf

/etc/nginx/nginx.conf.default

/etc/nginx/scgi_params

/etc/nginx/scgi_params.default

/etc/nginx/uwsgi_params

/etc/nginx/uwsgi_params.default

/etc/nginx/win-utf

/etc/sysconfig/nginx</pre>

Most important file from this list is of course <code>nginx.conf.</code>

<h2>Nginx Architecture</h2>

<code>nginx.conf</code> file defines the architecture of the Nginx server. There you define your Nginx configuration. By default, the configuration file is pretty "skinny" (very few details in it).



Nginx doesn't rely on threads to handle requests—instead Nginx will execute a function for each request without creating threads. This makes it possible to handle thousands of requests with low memory consumption.



Nginx architecture is simple: <strong>worker processes</strong> manage the HTTP requests, but the <strong>core (main) Nginx process</strong> manages worker processes. You can state the number of worked processes directly in the Nginx configuration file. To evaluate the best number for these you can use this line:

<pre>processor /proc/cpuinfo |wc -l</pre>

Here is the configuration file for Nginx. Just follow the comments for more info.

<pre>user nginx; # the user

worker_processes 8; #should reflect the number of processes

error_log /var/log/nginx/error.log;

#error_log /var/log/nginx/error.log notice; # enable if you like

#error_log /var/log/nginx/error.log info;

pid /var/run/nginx.pid;

events {

	worker_connections  1024;  

}</pre>

There is a way to discover the Nginx process id. It is written in the file <code>/var/run/nginx.pid;</code> You can cat that file out to find your PID. I found the PID <code>#2433</code>.



To get the Nginx worker process IDs for the main process <code>#2433</code> you would write:



<code>pgrep -P 2433</code>



Worker connections variable in the events sections determine the max number of connections that can be open by a worker process. (keep alive included)



<span style="font-size: 16px;">CONCLUSION : This is just the basic Nginx HTTP introductory info; with just few concepts. Many other info can be found </span><a style="font-size: 16px;" href="http://nginx.org/en/docs/">here</a><span style="font-size: 16px;">.</span>


