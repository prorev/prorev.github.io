---
id: 1839
title: Can't connect to local MySQL server through socket '/var/lib/mysql/mysql.sock'
date: 2013-12-13 21:16:18
author: taimane
layout: post
permalink: /cant-connect-to-local-mysql-server-through-socket-varlibmysqlmysql-sock/
published: true
categories:
   -
tags:
   -
---
<em><strong>This post is CENT OS based:</strong></em>



You got this error:

<pre>Warning: mysql_connect(): Can't connect to local MySQL server through socket '/var/lib/mysql/mysql.sock'</pre>

Simple troubleshoot:

1. Goto <code>/var/lib/mysql/</code> (or locate mysql.sock othervise)

2. Delete <code>mysql.sock</code>

3. Restart mysql via <code>service mysqld restart</code>



PS. Don't forget to <code>updatedb</code> to get the <code>locate</code> most accurate.



If you cannot find the socket path [socket=<code>/var/lib/mysql/</code>mysql.sock] get the path from this command:



<code>vi `locate my.cnf | awk '{if (1==NR) print $0}'`</code>
