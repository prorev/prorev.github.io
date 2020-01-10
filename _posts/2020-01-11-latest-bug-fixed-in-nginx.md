---
id: 1604
title: Latest bugs fixed in Nginx
date: 2013-07-12 21:54:33
author: taimane
layout: post
permalink: /latest-bug-fixed-in-nginx/
published: true
categories:
   -
tags:
   -
---
From http://nginx.org/en/CHANGES

Changes with nginx 1.5.2                                         02 Jul 2013

    *) Feature: now several "error_log" directives can be used.

    *) Bugfix: the $r->header_in() embedded perl method did not return value
       of the "Cookie" and "X-Forwarded-For" request header lines; the bug
       had appeared in 1.3.14.

    *) Bugfix: in the ngx_http_spdy_module.
       Thanks to Jim Radford.

    *) Bugfix: nginx could not be built on Linux with x32 ABI.
       Thanks to Serguei Ivantsov.


Changes with nginx 1.5.1                                         04 Jun 2013

    *) Feature: the "ssi_last_modified", "sub_filter_last_modified", and
       "xslt_last_modified" directives.
       Thanks to Alexey Kolpakov.

    *) Feature: the "http_403" parameter of the "proxy_next_upstream",
       "fastcgi_next_upstream", "scgi_next_upstream", and
       "uwsgi_next_upstream" directives.

    *) Feature: the "allow" and "deny" directives now support unix domain
       sockets.

    *) Bugfix: nginx could not be built with the ngx_mail_ssl_module, but
       without ngx_http_ssl_module; the bug had appeared in 1.3.14.

    *) Bugfix: in the "proxy_set_body" directive.
       Thanks to Lanshun Zhou.

    *) Bugfix: in the "lingering_time" directive.
       Thanks to Lanshun Zhou.

    *) Bugfix: the "fail_timeout" parameter of the "server" directive in the
       "upstream" context might not work if "max_fails" parameter was used;
       the bug had appeared in 1.3.0.

    *) Bugfix: a segmentation fault might occur in a worker process if the
       "ssl_stapling" directive was used.
       Thanks to Piotr Sikora.

    *) Bugfix: in the mail proxy server.
       Thanks to Filipe Da Silva.

    *) Bugfix: nginx/Windows might stop accepting connections if several
       worker processes were used.

Thanks  

