---
id: 2004
title: How to install LAMP and WordPress (yum based)
date: 2014-01-10 11:16:49
author: taimane
layout: post
permalink: /how-to-install-lamp-and-wordpress-yum-based/
published: true
categories:
   -
tags:
   -
---
<p dir="ltr"><span style="font-size: 16px;">LAMP(Linux, Apache, MySQL, and PHP)  is open source Web application platform that runs on Linux systems.</span></p>
<p dir="ltr"><strong>Note: To install all above,  the user needs to have root privileges.</strong></p>
<p dir="ltr">1. To install Apache, open terminal and type in this command:</p>
<p dir="ltr"><code>yum install httpd</code></p>
<p dir="ltr">To start Apache, type next command:</p>
<p dir="ltr"><code>service httpd start</code></p>
<b><b> </b></b>
<p dir="ltr">2. To install MySQL, open terminal and type in this command:</p>
<p dir="ltr"><code>yum install mysql-server</code></p>
<p dir="ltr">During the installation, MySQL will ask you for your permission twice. After you say Yes to both, MySQL will install.</p>
<p dir="ltr">With the following command starts the MySQL:</p>
<p dir="ltr"><code>service mysqld start</code></p>
<b><b> </b></b>
<p dir="ltr">3.To install PHP, open terminal and type in this command:</p>
<p dir="ltr"><code>yum install php php-mysql</code></p>
<p dir="ltr">Once you answer yes to the PHP prompt, PHP will be installed.</p>

<h4 dir="ltr">Install WordPress</h4>
<b><b> </b></b>
<p dir="ltr">1. Download WordPress:</p>
<code>cd /tmp
<span style="font-family: Monaco, Consolas, 'Andale Mono', 'DejaVu Sans Mono', monospace; font-size: 13px;">wget </span><a style="font-size: 13px;" href="http://wordpress.org/latest.tar.gz">http://wordpress.org/latest.tar.gz</a></code>

<span style="font-size: 16px;">Then extract:</span>
<p dir="ltr"><code>tar -xvzf latest.tar.gz -C /var/www/html</code></p>
<b><b> </b></b>
<p dir="ltr">2.Connect to MySQL server and run the following commands to create database and grant privileges.</p>

<pre>## Connect to MySQL server and enter password ##
mysql -u root -p
Enter password:
## Create new user for WordPress database ##
<code>CREATE USER wordpress@localhost IDENTIFIED BY "yuor_password_here";
## Create new database ##
create database wordpress;
## Grant privileges to database ##
GRANT ALL ON wordpress.* TO wordpress@localhost;
</code>## Flush privileges ##
FLUSH PRIVILEGES;
## Exit ##
exit</pre>
<p dir="ltr">Please replace the text in quotes with the proper password. <b><b> </b></b></p>
<p dir="ltr">3.Open the file /etc/httpd/conf/httpd.conf with gedit editor.</p>
<p dir="ltr"><code>gedit /etc/httpd/conf/httpd.conf</code></p>
<p dir="ltr">Add the following lines of code at the bottom of the file. Replace the text shown in red color with your required settings.</p>

<pre dir="ltr">&lt;VirtualHost *:80&gt;
Server Admin <a href="mailto:progreview@gmail.com">progreview@gmail.com</a>
DocumentRoot /var/www/html/wordpress
ServerName wordpress
ErrorLog /var/log/httpd/wordpress-error-log
CustomLog /var/log/httpd/wordpress-acces-log common</pre>
<p dir="ltr">Next, restart the Apache service to reflect changes.
<code>service httpd restart</code></p>
<p dir="ltr">Add the following line to <code>/etc/hosts</code> file.
<code>127.0.0.1 wordpress</code></p>
<p dir="ltr">Copy default wp-config-sample.php to wp-config.php to configure WordPress installation.</p>
<p dir="ltr"><code>cd /var/www/html/wordpress
cp wp-config-sample.php wp-config.php</code></p>
<p dir="ltr">Open wp-config.php file and change database settings.</p>
<p dir="ltr"><code>gedit wp-config.php</code></p>

<pre dir="ltr">/** The name of the database for WordPress */
define(‘DB_NAME’,’database_name’);
/** MySQL database username */
define(‘DB_USER’,’username’);
/** MySQL database password */ 
define(‘DB_PASSWORD’,’password’);
/** MySQL hostname */
define(‘DB_HOST’,’localhost’);</pre>
<p dir="ltr">Open your browser and type the following address.
<code>httpd://localhost</code></p>  

