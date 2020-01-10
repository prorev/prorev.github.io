---
id: 19
title: How to install WAMP and WordPress?
date: 2011-02-28 09:12:57
author: taimane
layout: post
permalink: /how-to-install-wamp-and-wordpress/
published: true
categories:
   -
tags:
   -
---
On Windows to work with WordPress locally on your computer you can use WAMP. WAMP server is Windows Apache MySQL PHP Server.

Todo:
1. Download the WordPress.
2. Download the WAMP.
3. Install WAMP.  It is recommended to install it in the default <code>C:\Wamp</code> folder.
4. To start WAMP server click on the WAMP  shortcut or click on the Wamp Icon in System tray and click <code>Start all Services</code>.

If you have the problems to start the server try the following:
4.1-troubleshoot: If you have installed Skype you must disable <code>"Use port 80…"</code> to avoid port confusion.
Go to Skype <code>Tools>Options>Advanced>Connections</code>.

4.2-troubleshoot: If you have installed IIS (Windows Web Server) you must stop this server.
Click <code>Start>Run</code> and type <code>inetmgr</code> and stop it.

5. When you start Wamp server open <code>http://localhost/</code>.
Use phpmyadmin to create a database for your WordPress install.
Type the database name (say: wpbase) and click Create.

6. Navigate to <code>C:\wamp\www</code> and Create a Folder. Name it "wordpress".
Copy all WordPress Files to that folder: <code>C:\wamp\www\wordpress</code>.

Open wp-config-sample.php in any Text Editor.
Change the following:
<pre class="prettyprint">define('DB_NAME', 'wpbase'); //you can set any name
define('DB_USER', 'me');
define('DB_PASSWORD', 'pass');
</pre>

Rename  <strong>wp-config-sample.php</strong> to <strong>wp-config.php</strong> and save the changes.

7. Open http://localhost/wordpress/wp-admin/install.php to install WordPress.
Enter a Site title, username, password and your email. Press “Install WordPress”
If everything goes according to the plan, you’ll see the Success! screen.

8. To check your site open <code>http://localhost/wordpress</code>

9. To work in WP dashboard open<code> http://localhost/wordpress/wp-admin</code>

I hope that this will be helpful to someone.

Thanks 
-J  

