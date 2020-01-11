---
id: 1104
title: Just log in some user and no worry
date: 2013-02-01 12:32:08
author: taimane
layout: post
permalink: /just-log-in-some-user-and-no-worry/
published: true
categories:
   -
tags:
   -
---
Here is the simple script to set some particular user as currently logged. 

<a href="https://programming-review.com/wp-content/uploads/2012/09/default_thumb.png"><img src="https://programming-review.com/wp-content/uploads/2012/09/default_thumb.png" alt="test" width="50" height="50" class="alignnone size-full wp-image-779" /></a>

```
function auto_login( $user ) {
	$username   = $user;
	// log in automatically
	if ( !is_user_logged_in() ) {
		$user = get_userdatabylogin( $username );
		$user_id = $user-&gt;ID;
		wp_set_current_user( $user_id, $user_login );
		wp_set_auth_cookie( $user_id );
		do_action( 'wp_login', $user_login );
	}
}
```
As you may see the process will also set the authentication cookie.
Please note we don't user <code>wp_signon</code> function here and there will be no error messages in case of errors.

