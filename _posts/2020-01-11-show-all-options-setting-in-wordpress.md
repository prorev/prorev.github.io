---
id: 2948
title: Show all options (setting) in WordPress
date: 2016-07-11 12:56:04
author: taimane
layout: post
permalink: /show-all-options-setting-in-wordpress/
published: true
categories:
   -
tags:
   -
---
Just navigate to this URL when logged in and you will get all settings.
/wp-admin/options.php

You can do it also little programming:
<pre>function all_settings_link() {
add_options_page(__('All Settings'), __('All Settings'), 'administrator', 'options.php');
}
add_action('admin_menu', 'all_settings_link');</pre>

It will add an additional option to your settings menu with a link to "all settings" which will show you a complete list of all the settings you have within your database related to your WordPress site. 

The code will only work for an admin user.
  

