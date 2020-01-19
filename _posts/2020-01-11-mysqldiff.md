---
id: 2638
title: Mysqldiff why it may be used in WordPress
date: 2016-01-24 01:39:29
author: taimane
layout: post
permalink: /wordpress/mysqldiff/
redirect_from: /mysqldiff/
published: true
categories:
   - wordpress
tags:
   - diff
   - mysql
---
MySQLDiff is command line utility from the set of MySQL <a rel="nofollow" href="http://dev.mysql.com/downloads/utilities/">utilities</a> that is perfect for web servers database analysis and Quality Insurance.

With WordPress in mind on a web server you would typically use it like this:

```
mysqldiff --server1=root:password@localhost  db1.wp_options:db2r.wp_options
```

```mysql
--- db1.wp_options
+++ db2.wp_options
@@ -1,8 +1,8 @@
 CREATE TABLE `wp_options` (
   `option_id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
-  `option_name` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
-  `option_value` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
-  `autoload` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'yes',
+  `option_name` varchar(191) DEFAULT NULL,
+  `option_value` longtext NOT NULL,
+  `autoload` varchar(20) NOT NULL DEFAULT 'yes',
   PRIMARY KEY (`option_id`),
   UNIQUE KEY `option_name` (`option_name`)
-) ENGINE=InnoDB AUTO_INCREMENT=1626 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci
+) ENGINE=MyISAM AUTO_INCREMENT=239115 DEFAULT CHARSET=utf8
```

In here we use it to detect the MySQL engine and collate differences for the two tables (scheme).

The other implication may be to generate the equalizer script:

```mysql
mysqldiff --server1=root:password@localhost  db1.wp_options:db2.wp_options --difftype=sql 
```

Where it will produce the `ALTER TABLE` instruction.

```
ALTER TABLE `db1`.`wp_options` 
  DROP INDEX option_name, 
  DROP PRIMARY KEY, 
  ADD PRIMARY KEY(`option_id`), 
  ADD UNIQUE INDEX option_name (option_name), 

ENGINE=MyISAM, AUTO_INCREMENT=239115, COLLATE=utf8_general_ci;
```

