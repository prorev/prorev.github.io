---
id: 2573
title: MySql opera operations
date: 2016-01-05 12:27:54
author: taimane
layout: post
permalink: /mysql-opera-operations/
published: true
categories:
   -
tags:
   -
---
First, enter MySQL space with this typing followed by your password:
<code>mysql -u root -p</code>

You will get a prompt. >

Let's check where is the Unix Socket file so type:
<code>>status</code>

<pre>--------------
mysql  Ver 14.14 Distrib 5.5.46, for debian-linux-gnu (x86_64) using readline 6.2

Connection id:		2229
Current database:	
Current user:		root@localhost
SSL:			Not in use
Current pager:		stdout
Using outfile:		''
Using delimiter:	;
Server version:		5.5.46-0ubuntu0.12.04.2 (Ubuntu)
Protocol version:	10
Connection:		Localhost via UNIX socket
Server characterset:	latin1
Db     characterset:	latin1
Client characterset:	utf8
Conn.  characterset:	utf8
UNIX socket:		/var/run/mysqld/mysqld.sock
Uptime:			1 day 3 hours 36 min 16 sec

Threads: 1  Questions: 7672  Slow queries: 0  Opens: 4818  Flush tables: 1  Open tables: 400  Queries per second avg: 0.077
--------------
</pre>

This return shows the <code>/var/run/mysqld/mysqld.sock</code> file.

Show living users:
<code>SELECT User FROM mysql.user;</code>

Show variables
<code>show variables;</code>

Show databases
<code>show databases;</code>

Show users:
<code>SELECT User FROM mysql.user;</code>

Very basic are:
<code>CREATE DATABASE name;
DROP DATABASE name; // don't do that now
USE name;</code>

You can see an overview of the tables that the database contains.

<code>SHOW tables; </code>

Create user in MySQL

<code>CREATE USER 'newuser'@'localhost' IDENTIFIED BY 'password';
GRANT ALL PRIVILEGES ON *.* TO 'newuser'@'localhost';
FLUSH PRIVILEGES;</code>

Here is final part of granting on database <strong>"blog"</strong> we just created.
<code>CREATE DATABASE blog;
GRANT ALL PRIVILEGES ON blog.* TO 'newuser' WITH GRANT OPTION;
FLUSH PRIVILEGES;
EXIT</code>

<code>WITH GRANT OPTION</code> means this new user can grant privileges on other users.

Thanks  

