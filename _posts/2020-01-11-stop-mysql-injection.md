---
id: 46
title: What is the best way to stop MySQL injection in C# and PHP?
date: 2011-02-28 16:48:59
author: taimane
layout: post
permalink: /stop-mysql-injection/
published: true
categories:
   -
tags:
   -
---
I know [SQL injection](http://en.wikipedia.org/wiki/SQL_injection) is not related just to C# and PHP, however the general solution to all SQL injection problems is the same: 

**use parameterized queries.**

Here is how parameterized queries may look in C# (ODBC connection):
```c#
const string connectionString = "Driver={MySQL ODBC 5.1 Driver};
Server=localhost;Database=testdb; User=root;Password=;Option=3;";
// all input will become
// a parameter (not part of the SQL statement)

string cmdStr = @"INSERT INTO `table1` 
(`title`, `source`,  `category`, `occasion`, `comment`, `image`, `note`) " 
+ "VALUES(?, ?, '', '', ?, ?, ?)";

using (OdbcConnection conn = new OdbcConnection(connectionString))
using (OdbcCommand cmd = new OdbcCommand(cmdStr, conn))
{
conn.Open();
// add parameters in sequence order
cmd.Parameters.Add("@strTitle", OdbcType.VarChar, 300).Value = strTitle;
cmd.Parameters.Add("@strSource", OdbcType.VarChar, 300).Value = strSource;
cmd.Parameters.Add("@strComments", OdbcType.Text).Value = strComments;
cmd.Parameters.Add("@strImage", OdbcType.VarChar, 300).Value = strImage;
cmd.Parameters.Add("@strNote", OdbcType.Int).Value = 5;
cmd.ExecuteNonQuery();
}
}
catch (Exception ex)
{
// your code here;
}
```
In PHP the best way to prevent MySQL injection would be again to use parameterized queries as explained [here](http://us2.php.net/manual/en/pdo.prepared-statements.php): 

```php
<?php
$stmt = $dbh->prepare("INSERT INTO REGISTRY (name, value) VALUES (?, ?)");
$stmt->bindParam(1, $name);
$stmt->bindParam(2, $value);

// insert one row
$name = 'one';
$value = 1;
$stmt->execute();

// insert another row with different values
$name = 'two';
$value = 2;
$stmt->execute();
?>
```
Using parameterized queries is general solution for the SQL injection problem and it is even faster comparing to `mysql_real_escape_string` or `mysql_escape_string` functions. 

> Note that `mysql_real_escape_string` and `mysql_escape_string` are escaping possible special characters in a string for use in an SQL statement.  
