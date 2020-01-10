---
id: 2945
title: Remove role="search" attribute for get_search_form()
date: 2016-07-11 12:32:14
author: taimane
layout: post
permalink: /remove-rolesearch-attribute-for-get_search_form/
published: true
categories:
   -
tags:
   -
---
<pre>function remove_role_search($role)
{
    $result = array();
    preg_match_all('|role="[^"]*"|U', $role, $result);
    foreach ($result[0] as $role_tag) {
        $role = str_replace($role_tag, '', $role);
    }
    return $role;
}
add_filter('get_search_form', 'remove_role_search');</pre>  

