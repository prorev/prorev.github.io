---
id: 2775
title: WordPress logout and goto home page
date: 2016-03-30 18:25:11
author: taimane
layout: post
permalink: /wordpress-logout-and-goto-home-page/
published: true
categories:
   -
tags:
   -
---
How bad, once you logout from WordPress you end on page: <code>/wp-login.php?loggedout=true</code>

With the next code you can goto home page:

```
add_action('wp_logout','go_home');
function go_home(){
wp_redirect( home_url() );
exit();
}
```


