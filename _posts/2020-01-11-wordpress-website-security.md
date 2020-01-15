---
id: 290
title: WordPress website security
date: 2011-05-12 08:43:46
author: taimane
layout: post
permalink: /wordpress-website-security/
published: true
categories:
   -
tags:
   -
---
I will cover some easy and common steps to ensure that your WordPress site is secure and hacker proof. There are 3 major things how to secure your web site: 

* To secure Apache web server settings
* To secure WordPress installation
* To install additional WordPress security plugins

<h2>Securing the Apache web server</h2>
<strong>1. Disallow bots from scanning the important Wordpress directories</strong>
By using the Robots.txt file it is always a good idea to block the wp-content, wp-admin, etc... directories. This canbe done by adding the following line:
<code>Disallow: /wp-*</code>

<strong>2. Turn off directory browsing</strong>
Many servers by default allow you to browse the listing of files with in a given directory.  You can prevent this in your .htaccess be using the code below:
<code>Options All -Indexes</code>

<strong>3. Protect your WP-ADMIN folder</strong>
If you know that you are on an IP Address that doesn’t change you can prevent any intruders by blocking every IP but your own. This can be done through your .htaccess by using the example code below:
```
<Limit GET POST PUT>
order deny,allow
deny from all
allow from 123.45.67.890
allow from 98.7.65.432
</Limit>
```

<strong>4. Protect your wp-config.php file</strong>
The password to your database is stored in plain, readable text in your configuration file (wp-config.php). Access to your database gives hackers control over your complete site, so to say you need to protect it is an understatement. The first and most obvious step is to ensure the permissions are set correctly. Some servers set the wrong permissions by default which allows anyone who wants to the ability to read the contents of that file. The permission should be set using SSH or through an FTP client to 640
<code>chmod 640 wp-config.php</code>

<strong>5. Install the 3G Blacklist</strong>
A lot of Wordpress installations are hosted on an Apache server. If your site is on an Apache server then you can improve the security (not just Wordpress) by installing the 3G Blacklist. The 3G Blacklist is:


<blockquote>“a concise, lightweight security strategy for Apache-powered websites...the 3G Blacklist serves as an extremely effective security strategy for preventing a vast majority of common exploits. The list consists of four distinct parts, providing multiple layers of protection while synergizing into a comprehensive defense mechanism.”</blockquote>


Find instructions and usage information on the 3G Blacklist <a rel="nofollow" href="http://perishablepress.com/press/2008/05/13/perishable-press-3g-blacklist/">here</a>.

<h2>WORDPRESS SECURITY CONFIGURATION</h2>

<strong>1. Remove the Wordpress version number from the META tags</strong>
Some hackers target specific versions of Wordpress because of known open venerability's.  An easy way to prevent your site from coming up as a target is to simply remove any indicators of the software version. In older version of wordpress your theme ?le would hav the following code in the header.php that generates a simple tag that outputs the current version:

```
<meta content="WordPress <?php bloginfo(’version’); ?>" name="generator" />
```

You can prevent this from being an issue by simply deleting that line of code.
Newer versions of Wordpress output the version automatically through the wp_head(); function. You can remove these by installing the Secure Wordpress plugin. 

<strong>2. Disable the Admin account</strong>
By default Wordpress creates an “admin” account every time you install it. While the passwords are generated randomly it is never a good idea to let people know the login of your most powerful account. Because all Wordpress installations have the same username for the master account you are doing just that. Simply changing the username from admin to something less obvious will improve the security of your site.

<strong>3. Change the Wordpress table prefix</strong>
All installations of Wordpress use the same name for all of the tables on the database. The problem with this is that if a hacker is able to use a SQL injection exploit they know exactly which tables to change data on. If you use an alternative prefix when you install the software this is prevented. Already have a Wordpress installation? The WP Security Scan plugin can help you switch.

<strong>4. Use secure connections when connecting to the ADMIN pages</strong>
To prevent data being intercepted between your computer and the server hosting your website you can actually force a secure connection to all of the administration panels. This will require that you purchase and implement a SSL certificate from your host first, but once you have done this you can add the following code to your `wp-config.php` file to activate secure administration:
<code>define('FORCE_SSL_ADMIN', true);</code>

<strong>5. Use Security Keys</strong>
Wordpress doesn’t require that you take advantage of their “security key” tool that better encrypts cookies, there by better protecting your passwords. Using security keys is a simple process where you generate a key and make some simple modifications to the wp-config.php file.
You can generate Wordpress security keys on this website.
 
<h2>WORDPRESS SECURITY PLUGINS</h2>

<strong>1. Login Lockdown Plugin</strong>
This simple plugin will record the IP address of every failed login attempt. If there are too many failed attempts from one IP address the login function will be disabled for that IP range. This prevents brute force password break-ins. You can download the plugin here: http://www.bad-neighborhood.com/login-lockdown.html.

<strong>2. Invisible Defender Plugin</strong>
This plugin protects registration, login and comment forms from spambots by adding two extra fields hidden by CSS. The idea behind Invisible Defender is simple: SPAMBOTs either fill every form field they find (generic spambots) or fill WordPress-specific fields only (spambots which will recognize WP or are targeting WP only). You can download the plugin here: http://wordpress.org/extend/plugins/invisible-defender/.

  
