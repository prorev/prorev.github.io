---
id: 2646
title: Letsencrypt multiple web sites
date: 2016-01-30 11:49:14
author: taimane
layout: post
permalink: /linux/letsencrypt/
published: true
categories:
   -
tags:
   -
---
You are lucky to witness the rise of Internet awareness and letsencrypt idea sponsored by  Mozilla, Akamai, Cisco,...

I will focus on practical letsencrypt SSL certificate setup (Linux independent) for Nginx server.

Install letsencrypt using git (but make sure git has been installed) 

```
sudo git clone https://github.com/letsencrypt/letsencrypt /opt/letsencrypt
```
and create the /.well-known folder in the document root and make it accessible from outside by setting the following in the server block:

```
location ~ /.well-known {
 allow all;
}
```

This .well-known folder is used to install certificates to web sites without Nginx web server restart.

Please note that if you have prohibition for accessing the files starting with "." (read:dot) this may hurt your logic so stay alerted. Then for the website domain1.com and for multiple sub-domains on the same site your command lines may look like this.

Using letsencrypt you can create certificate for multiple domains (subdomains included), but there cannot be * domain replicator. Or you can create multiple certificates for each separate domain.

You may have domain1.com domain2.com subdomain1.domain2.com subdomain2.domain2.com domain3.com ...

```
./letsencrypt-auto certonly -a webroot --agree-tos --renew-by-default --webroot-path=/var/www/html/domain1.com -d domain1.com -d domain2.com -d subdomain1.domain2.com -d subdomain2.domain2.com -d domain3.com
```



In here <code>/var/www/html/domain1.com</code> represents the document root. The upper scenario may be perfect for WordPress multisite installation.



Or, you can have specific certificate for each domain or subdomain. Your task is to set these certificates to Nginx server blocks like this.


```bash
#inside the server block
listen 443 ssl;
server_name domain1.com;
ssl_certificate /etc/letsencrypt/live/domain1.com/fullchain.$

ssl_certificate_key /etc/letsencrypt/live/domain1.com/privke$

ssl_protocols TLSv1 TLSv1.1 TLSv1.2;
ssl_prefer_server_ciphers on;
ssl_ciphers 'EECDH+AESGCM:EDH+AESGCM:AES256+EECDH:AES256+EDH';
```
Important note: you need to set the redirection for requests on port 80, to the port 443. 

Then you will receive

```
Congratulations! Your certificate and chain have been saved at /etc/letsencrypt/live/domain1.com/fullchain.pem. Your cert will expire on 20XX-XX-XX. To obtain a new version of the certificate in  the future, simply run Let's Encrypt again. 
```
As the final step would be to add the cronjob every 60 days to update the certificates. Note this way you don't need to stop your web site, except the first time when you set the certificate.

PS. This tutorial works great in tandem with https://www.digitalocean.com/community/tutorials/how-to-secure-nginx-with-let-s-encrypt-on-ubuntu-14-04

