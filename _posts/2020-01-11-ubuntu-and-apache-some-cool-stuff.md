---
id: 2054
title: Ubuntu and Apache some cool stuff
date: 2014-03-08 13:12:04
author: taimane
layout: post
permalink: /ubuntu-and-apache-some-cool-stuff/
published: false
categories:
   -
tags:
   -
---
Some useful commands:

#1 Retrieve the list of packages installed on the computer which will serve as the “model” to copy.
<pre>$dpkg --get-selections |grep apache 
apache2 install
apache2-mpm-prefork install
apache2-utils install
apache2.2-bin install
apache2.2-common install
libapache2-mod-auth-mysql install
libapache2-mod-php5 install</pre>
#2 Check if package (here: apache2) h/b installed.
<pre>$dpkg -l apache2
Desired=Unknown/Install/Remove/Purge/Hold
| Status=Not/Inst/Conf-files/Unpacked/halF-conf/Half-inst/trig-aWait/Trig-pend
|/ Err?=(none)/Reinst-required (Status,Err: uppercase=bad)
||/ Name Version Description
+++-==============-==============-============================================
ii apache2 2.2.22-1ubuntu Apache HTTP Server metapackage</pre>
#3 List directory locations where the package (here: apache2) h/b installed
<pre>$ dpkg -L apache2
/.
/usr
/usr/share
/usr/share/bug
/usr/share/bug/apache2
/usr/share/bug/apache2/control
/usr/share/doc
/usr/share/bug/apache2/script
/usr/share/doc/apache2</pre>
#4 List configuration files for apache
<pre>$ls /var/lib/dpkg/info/ |grep apache |grep conffiles
apache2.2-common.conffiles
libapache2-mod-auth-mysql.conffiles
libapache2-mod-php5.conffiles

$cat /var/lib/dpkg/info/apache2.2-common.conffiles
/etc/init.d/apache2
/etc/ufw/applications.d/apache2.2-common
/etc/bash_completion.d/apache2.2-common
/etc/default/apache2
/etc/cron.daily/apache2
/etc/apache2/mods-available/auth_basic.load
/etc/apache2/mods-available/authn_alias.load
/etc/apache2/mods-available/suexec.load
/etc/apache2/mods-available/dav.load
/etc/apache2/mods-available/deflate.load
/etc/apache2/mods-available/cache.load
/etc/apache2/mods-available/proxy_balancer.load
/etc/apache2/mods-available/expires.load
/etc/apache2/mods-available/ext_filter.load
/etc/apache2/mods-available/ldap.load
/etc/apache2/mods-available/env.load
/etc/apache2/mods-available/proxy_ftp.load
/etc/apache2/mods-available/reqtimeout.conf
/etc/apache2/mods-available/userdir.conf
/etc/apache2/mods-available/rewrite.load
/etc/apache2/mods-available/proxy_ajp.load
/etc/apache2/mods-available/include.load
/etc/apache2/mods-available/proxy_scgi.load
/etc/apache2/mods-available/filter.load
/etc/apache2/mods-available/authz_owner.load
/etc/apache2/mods-available/negotiation.conf
/etc/apache2/mods-available/vhost_alias.load
/etc/apache2/mods-available/alias.conf
/etc/apache2/mods-available/cgid.load
/etc/apache2/mods-available/dav_fs.load
/etc/apache2/mods-available/auth_digest.load
/etc/apache2/mods-available/mime.load
/etc/apache2/mods-available/userdir.load
/etc/apache2/mods-available/dump_io.load
/etc/apache2/mods-available/authn_default.load
/etc/apache2/mods-available/actions.conf
/etc/apache2/mods-available/status.load
/etc/apache2/mods-available/headers.load
/etc/apache2/mods-available/authn_file.load
/etc/apache2/mods-available/info.conf
/etc/apache2/mods-available/mime_magic.conf
/etc/apache2/mods-available/imagemap.load
/etc/apache2/mods-available/cgid.conf
/etc/apache2/mods-available/proxy_balancer.conf
/etc/apache2/mods-available/authn_dbd.load
/etc/apache2/mods-available/mem_cache.load
/etc/apache2/mods-available/proxy_connect.load
/etc/apache2/mods-available/ident.load
/etc/apache2/mods-available/status.conf
/etc/apache2/mods-available/authn_dbm.load
/etc/apache2/mods-available/speling.load
/etc/apache2/mods-available/disk_cache.load
/etc/apache2/mods-available/proxy_http.load
/etc/apache2/mods-available/mem_cache.conf
/etc/apache2/mods-available/authz_dbm.load
/etc/apache2/mods-available/alias.load
/etc/apache2/mods-available/ssl.conf
/etc/apache2/mods-available/dir.load
/etc/apache2/mods-available/proxy.load
/etc/apache2/mods-available/cern_meta.load
/etc/apache2/mods-available/dir.conf
/etc/apache2/mods-available/version.load
/etc/apache2/mods-available/actions.load
/etc/apache2/mods-available/autoindex.conf
/etc/apache2/mods-available/authz_host.load
/etc/apache2/mods-available/charset_lite.load
/etc/apache2/mods-available/dav_lock.load
/etc/apache2/mods-available/cgi.load
/etc/apache2/mods-available/autoindex.load
/etc/apache2/mods-available/substitute.load
/etc/apache2/mods-available/asis.load
/etc/apache2/mods-available/setenvif.conf
/etc/apache2/mods-available/authz_user.load
/etc/apache2/mods-available/file_cache.load
/etc/apache2/mods-available/mime_magic.load
/etc/apache2/mods-available/negotiation.load
/etc/apache2/mods-available/log_forensic.load
/etc/apache2/mods-available/mime.conf
/etc/apache2/mods-available/unique_id.load
/etc/apache2/mods-available/info.load
/etc/apache2/mods-available/ldap.conf
/etc/apache2/mods-available/dav_fs.conf
/etc/apache2/mods-available/deflate.conf
/etc/apache2/mods-available/disk_cache.conf
/etc/apache2/mods-available/usertrack.load
/etc/apache2/mods-available/proxy.conf
/etc/apache2/mods-available/authn_anon.load
/etc/apache2/mods-available/reqtimeout.load
/etc/apache2/mods-available/proxy_ftp.conf
/etc/apache2/mods-available/authz_groupfile.load
/etc/apache2/mods-available/setenvif.load
/etc/apache2/mods-available/dbd.load
/etc/apache2/mods-available/authz_default.load
/etc/apache2/mods-available/authnz_ldap.load
/etc/apache2/mods-available/ssl.load
/etc/apache2/magic
/etc/apache2/conf.d/charset
/etc/apache2/conf.d/security
/etc/apache2/conf.d/other-vhosts-access-log
/etc/apache2/conf.d/localized-error-pages
/etc/apache2/ports.conf
/etc/apache2/sites-available/default
/etc/apache2/sites-available/default-ssl
/etc/apache2/envvars
/etc/apache2/apache2.conf
/etc/logrotate.d/apache2</pre>
#5 Get processes by apache
<pre>ps -ef | grep apache2</pre>
#6 To make apache start with the system
<pre>update-rc.d apache2 enable
#or
sudo apt-get install chkconfig
sudo chkconfig nginx on</pre>
