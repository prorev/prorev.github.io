---
id: 812
title: How do you run your PHP?
date: 2012-10-31 11:29:15
author: taimane
layout: post
permalink: /how-do-you-run-your-php/
published: true
categories:
   -
tags:
   -
---
There is test PHP function to detect if you are using PHP aside from Apache (CGI) or within Apache (mod_php). 

The function name is: <code>php_sapi_name()</code>



Here is the test programming code:

<code>

$sapi_type = php_sapi_name();

if (substr($sapi_type, 0, 3) == 'cgi') {

    echo "You are using CGI PHP\n";

} else {

    echo "You are not using CGI PHP\n";

}

</code>





The feedback you may also get via the <code>phpinfo()</code> command. Just check the loaded modules part.

<a rel="nofollow" href="http://

<pre>Loaded Modules	core prefork http_core mod_so mod_auth_basic mod_auth_digest mod_authn_file mod_authn_alias mod_authn_anon mod_authn_dbm mod_authn_default mod_authz_host mod_authz_user mod_authz_owner mod_authz_groupfile mod_authz_dbm mod_authz_default util_ldap mod_authnz_ldap mod_include mod_log_config mod_logio mod_env mod_ext_filter mod_mime_magic mod_expires mod_deflate mod_headers mod_usertrack mod_setenvif mod_mime mod_dav mod_status mod_autoindex mod_info mod_dav_fs mod_vhost_alias mod_negotiation mod_dir mod_actions mod_speling mod_userdir mod_alias mod_substitute mod_rewrite mod_proxy mod_proxy_balancer mod_proxy_ftp mod_proxy_http mod_proxy_ajp mod_proxy_connect mod_cache mod_suexec mod_disk_cache mod_cgi mod_version mod_dnssd mod_php5</pre>



If you get smt. like <code>mod_php5</code> you do use the Apache module (handler) for PHP.



Now we may ask the question which one is better?



Running PHP as a CGI means that you basically tell your web server the location of the PHP executable file, and the server runs that executable, giving it the script you called, each time you visit a page. Means, each time you load a page, PHP needs to read php.ini and set its settings, it needs to load all its extensions, and then it needs to start work parsing the script - there is a lot of repeated work.



When you run PHP as a module, PHP sits inside your web server and it is memory <a href="https://programming-review.com/process-memory-check/">efficient</a> - it starts only once, loads its settings and extensions only once, and can also store information across sessions. For example, PHP <a rel="nofollow" href="http://en.wikipedia.org/wiki/List_of_PHP_accelerators">accelerators</a> rely on PHP being able to save cached data across requests, which is impossible using the CGI version.



The obvious advantage of using PHP as a module is speed - you will see a big speed boost if you convert from CGI to a module. 



There is one key advantage to using the CGI version, though, and that is that PHP reads its settings every time you load a page. With PHP running as a module, any changes you make in the php.ini file do not kick in until you restart your web server, which makes the CGI version preferable if you are testing a lot of new settings and want to see instant responses.



Also please note you may runn mod_php and FastCGI <a rel="nofollow" href="http://mwop.net/blog/243-Running-mod_php-and-FastCGI-side-by-side.html">side-by-side</a>.



Thanks  

