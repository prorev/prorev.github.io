---
id: 12971
title: mysqldump smart database backups
date: 2020-01-10
author: taimani
layout: post
permalink: /database/mysqldump/
published: true
image: 
categories:
   - database
tags:
   - mysqldump
---
To backup a database via **mysqldump** is most likely the simplest way.

You just need to be careful in case of big databases to split inserts into separate lines for every record, else you may not be able to execute the backup.
```
mysqldump --user=myusername --password=mypassword --extended-insert=false 
--databases mydatabasename > /backup/backup_databasename.sql
```

* `–user=myusername` specific mysql user name
* `–password=mypassword` specific mysql password
* `–extended-insert=false`  separate Insert lines for every table record
* `–databases mydatabasename > /backup/backup_databasename.sql` will set specific database to sql file.

Here is the shell script that you can cron
```
#purpose = Backup of any database
#created on Nov 20th 2012
#author = programming-review.com
#version 1.1
#START

echo 'start'
TIME=date +"%b-%d-%y-%T"          # Backup File Name date and time

FILENAME="backup-$1-$TIME"      # Here i define Backup file name format.
mysqldump --user=myusername --password=mypassword --extended-insert=false --databases $1 > /backup/$FILENAME.sql

echo 'stop'
#END
```

At the end one simple note how you can execute script `sqlscript.sql` for the database `dbname`. Just note how username and password are glued (no empty spaces) next to the _-u_ and _-p_ switches.
```
$>mysql dbname < sqlscript.sql -umyuser -pmypassword
```
or
```
$>mysql -u username -p database_name < sqlscript.sql
```
Few more tips:
```
mysql -u root -p
:type your password here
# your are now into mysql
# create database
>CREATE DATABASE test;
# show list of databases
>show databases;
# use your databse
>USE test;
# show tables in selected database
>show tables;
>DROP DATABASE test;
# create a table in a database in use
>CREATE TABLE tableintest (id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
name VARCHAR(20),
food VARCHAR(30),
confirmed CHAR(1),
signup_date DATE);
# describe table
>DESCRIBE tableintest;
```