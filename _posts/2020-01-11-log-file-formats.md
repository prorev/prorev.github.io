---
id: 2862
title: Log file formats
date: 2016-04-11 08:48:25
author: taimane
layout: post
permalink: /log-file-formats/
published: true
categories:
   -
tags:
   -
---
<ol>
 	<li>Common Log format (CLF)</li>
 	<li>W3C</li>
 	<li>Squid native format</li>
 	<li>NCSA Log format</li>
 	<li>Cloud Front</li>
 	<li>Google Cloud Storage</li>
 	<li>AWS elastic load balancing (https/s)</li>
</ol>
The <b>Common Log Format </b>example.
<pre>207.40.10.1 user-identifier frank [10/Oct/2000:13:55:36 -0700] "GET /apache_pb.gif HTTP/1.0" 200 2326
</pre>
Explanation:
<ul>
 	<li>If you find "-" in a field this indicates the missing data.</li>
 	<li>207.40.10.1 is the IP address of the client (remote host) which made the request to the server.</li>
 	<li>user-identifier is the RFC 1413 identity of the client.</li>
 	<li>frank is the userid of the person requesting the document.</li>
 	<li>[10/Oct/2000:13:55:36 -0700] is the date, time, and time zone that the request was received, by default in strftime format %d/%b/%Y:%H:%M:%S %z.</li>
 	<li>"GET /apache_pb.gif HTTP/1.0" is the request line from the client. The method GET, /apache_pb.gif the resource requested, and HTTP/1.0 the HTTP protocol.</li>
 	<li>200 is the HTTP status code returned to the client. 2xx is a successful response, 3xx a redirection, 4xx a client error, and 5xx a server error.</li>
 	<li>2326 is the size of the object returned to the client, measured in bytes.</li>
</ul>
&nbsp;
<h3>NGINX perspective</h3>
NGINX writes information about client requests in the access log right after the request is processed and default format is like this as set in http server block:
<pre>http {
log_format compression '$remote_addr - $remote_user [$time_local] '
'"$request" $status $body_bytes_sent '
'"$http_referer" "$http_user_agent" "$gzip_ratio"';

server {
gzip on;
access_log /spool/logs/nginx-access.log compression;
...
}
}</pre>
This would fit into the the Common Log format:
<code>%h %^[%d:%t %^] "%r" %s %b </code>  

