---
id: 2445
title: nO way for nO admin
date: 2014-12-11 11:08:14
author: taimane
layout: post
permalink: /no-way-for-no-admin/
published: true
categories:
   -
tags:
   -
---
The script that disables all non admin users to enter the web site:

<code>function admin_maintenace_mode() {
global $current_user;
get_currentuserinfo();
if($current_user->user_login != 'admin') {
echo "UNDER CONSTRUCTION";
wp_die();
}
}
add_action('wp_head', 'admin_maintenace_mode');
</code>

Thanks
=D  

