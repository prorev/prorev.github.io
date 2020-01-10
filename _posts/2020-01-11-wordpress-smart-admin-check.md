---
id: 1502
title: WordPress smart admin check
date: 2013-05-25 11:18:17
author: taimane
layout: post
permalink: /wordpress-smart-admin-check/
published: true
categories:
   -
tags:
   -
---
Case users are not administrators they could not enter the WordPress dashboard, else they can.
<hr />
<code>function admin_check_access($content) {
	return ( current_user_can("administrator") ) ? $content : false;
}
add_filter( 'show_admin_bar' , 'admin_check_access');</code>


<hr />
Thanks

  

