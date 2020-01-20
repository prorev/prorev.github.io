---
id: 23
title: How WordPress redirects URLs for renamed posts?
date: 2011-02-28 09:14:38
author: taimane
layout: post
permalink: /wordpress/redirection/
published: true
categories:
   -
tags:
   -
---
If your WordPress posts are indexed in major search engines (Google, Yahoo, Ask, Bing, Baidu, …) but from some reason you changed post names (your post URLs) how does WordPress knows to redirect your Google indexed pages to the new URLs?

In order to determine I have exported my MySQL database to a file and did a text search. It happens that the wp_postmeta database table is where the info has been stored.

```sql
INSERT INTO `wp_postmeta` 
VALUES(35019, 3080, '_wp_old_slug', 'old-post-name-slug');
```
Based on the last line WordPress will redirect old-post-name-slug to a new URL slug defined in wp_posts table under ID=3080.
This feature is available since WP 2.1

Basically this is what <a rel="nofollow" href="http://wordpress.org/extend/plugins/redirection/">WordPress Redirection</a> plugin will do for you.
Redirection plugin is available for WP 2.3 and higher. I checked this plugin and it looks secure. It was made by John Godley that works for <a rel="nofollow" href="http://automattic.com/">Automattic</a>.

To outline once more: The "_wp_old_slug" keys for redirection will be added only in case of posts. For the pages or custom post types this is not working.

Are the other redirecting alternatives?

Yes. One alternative is to use _.htaccess_ file Redirect tag
```
# BEGIN WordPress
RewriteEngine On
RewriteBase /
RewriteRule ^index.php$ - [L]
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule . /index.php [L]
Redirect 301 /old-post-name-slug /new-post-name-slug
# END WordPress
```
