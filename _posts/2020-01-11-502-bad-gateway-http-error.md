---
id: 866
title: 502 Bad gateway HTTP error
date: 2012-11-22 21:31:32
author: taimane
layout: post
permalink: /502-bad-gateway-http-error/
published: false
categories:
   -
tags:
   -
---
Taken From Wikipedia:



>Response status codes beginning with the digit "5" indicate cases in which the server is aware that it has encountered an error or is otherwise incapable of performing the request.

Except when responding to a HEAD request, the server should include an entity containing an explanation of the error situation, and indicate whether it is a temporary or permanent condition."

502 Bad Gateway error occurs when using proxy (intermediate) CDN servers. These intermediate servers stay between the original server and the clients assessing the original web site.

502 indicates a failure or luck of info on CDN proxy side. Before analyzing this problem, you should clear your browser cache completely.

If you ask yourself about the location of the proxy server you should analyze the the receiving traffic route for instance like this:


```wget https://google.com

--2012-11-22 22:21:54--  https://google.com/

Resolving google.com... 79.101.110.94, 79.101.110.98, 79.101.110.99, ...

Connecting to google.com|79.101.110.94|:80... connected.

HTTP request sent, awaiting response... 301 Moved Permanently

Location: https://www.google.com/ [following]
--2012-11-22 22:22:09--  https://www.google.com/
```



If you are surfing the Web and see this problem is for all Web sites you try to visit, then either your ISP has a major equipment failure/overload problem or there is something wrong with your internal Internet connection.



If you get this problem for only some of the Web sites you try to visit then it is likely to be a problem at those sites.



Use of proxies and caching is increasing on the Web and there must be a way to get the traffic from the original web site (not using the proxy web servers) and this can be done without using the DNS by direct IP address typing the HTTP requests.



Any Web browser goes through the following cycle when it communicates with the Web server:



Obtain an IP address from the IP name of the site (the site URL without the leading 'https://'). This lookup (conversion of IP name to IP address) is provided by domain name servers (DNSs).

Open an IP socket connection to that IP address.

Write an HTTP data stream through that socket.

Receive an HTTP data stream back from the Web server in response. This data stream contains status codes whose values are determined by the HTTP protocol. Parse this data stream for status codes and other useful information.



The list of other 5xx errors:

500 Internal Server Error - A generic error message, given when no more specific message is suitable.

501 Not Implemented -The server either does not recognize the request method, or it lacks the ability to fulfill the request.

502 Bad Gateway - The server was acting as a gateway or proxy and received an invalid response from the upstream server.

503 Service Unavailable - The server is currently unavailable (because it is overloaded or down for maintenance). Generally, this is a temporary state.

504 Gateway Timeout - The server was acting as a gateway or proxy and did not receive a timely response from the upstream server.

505 HTTP Version Not Supported - The server does not support the HTTP protocol version used in the request.[2]

599 Network connect timeout error (Unknown) - This status code is not specified in any RFCs, but is used by Microsoft Corp. HTTP proxies to signal a network connect timeout behind the proxy to a client in front of the proxy.  

