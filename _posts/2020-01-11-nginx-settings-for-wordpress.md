---
id: 2538
title: Nginx settings for WordPress
date: 2015-10-02 19:36:47
author: taimane
layout: post
permalink: /nginx-settings-for-wordpress/
published: true
categories:
   -
tags:
   -
---
This part of code need to be under etc/nginx/sites-available/yourwebsite

<pre>server{
listen 80;
# listen [::]:80 default_server ipv6only=on;

root /var/www/html; # or where your folder is
index index.php;

# Make site accessible from http://localhost/
server_name your-website.com;
error_page 404 /404.html;
error_page 500 502 503 504 /50x.html;
location = /50x.html {
root /usr/share/nginx/html;
}

location / {
try_files $uri /index.php$is_args$args;
rewrite /wp-admin/$ $scheme://$host$uri/index.php permanent;
}
# important to disallow any .htaccess or similar file
location ~ /\. {
deny all;
}

# what about favicon
location = /favicon.ico {
log_not_found off;
access_log off;
}

# what about robots control
location = /robots.txt {
allow all;
log_not_found off;
access_log off;
}

# Deny access to any files with a .php extension in the uploads directory
# Works in sub-directory installs and also in multisite network
# Keep logging the requests to parse later (or to pass to firewall utilities such # as fail2ban)
location ~* /(?:uploads|files)/.*\.php$ {
deny all;
}

location ~ \.php$ {
try_files $uri =404;
fastcgi_split_path_info ^(.+\.php)(/.+)$;
fastcgi_pass unix:/var/run/php5-fpm.sock;
fastcgi_index index.php;
fastcgi_param SCRIPT_FILENAME $document_root$fastcgi_script_name;
include fastcgi_params;

}
location ~* \.(jpg|jpeg|png|gif|ico|css|js)$ {
expires 365d;
}
}</pre>

and then /etc/nginx/sites-enabled should have symbolic link to that file  

