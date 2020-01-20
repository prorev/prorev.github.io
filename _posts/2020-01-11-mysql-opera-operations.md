---
id: 2573
title: MySql operations
date: 2016-01-05 12:27:54
author: taimane
layout: post
permalink: /mysql/operations/
published: true
categories:
   -
tags:
   -
---
First, enter MySQL space with this typing followed by your password:

<code>mysql -u root -p</code>

You will get a prompt. `>`


Let's check where is the Unix Socket file so type:

```
>status
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
```

## Common operations: 

### Show living users:
```sql
SELECT User FROM mysql.user;
```
### Show variables: 
```sql
SHOW variables;
```

### Show databases 
```sql
SHOW databases;
```

### Show users 
``` sql
SELECT User FROM mysql.user;
```

### Create database 
```sql
CREATE DATABASE name;
```

### Drop database
```sql
DROP DATABASE name;
```
### Select user
``` sql 
USE name;
```
### See an overview of the tables database contains 
```sql
SHOW tables;
```

### Create user in MySQL
```sql
CREATE USER 'newuser'@'localhost' IDENTIFIED BY 'password';
GRANT ALL PRIVILEGES ON *.* TO 'newuser'@'localhost';
FLUSH PRIVILEGES;
```

### Granting on database **blog** 
```sql
CREATE DATABASE blog;
GRANT ALL PRIVILEGES ON blog.* TO 'newuser' WITH GRANT OPTION;
FLUSH PRIVILEGES;
EXIT
```

> `WITH GRANT OPTION` means this new user can grant privileges on other users.

