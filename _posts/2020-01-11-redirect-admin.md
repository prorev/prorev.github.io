---
id: 873
title: Redirect admins to the dashboard
date: 2012-11-23 13:47:52
author: taimane
layout: post
permalink: /redirect-admin/
published: true
categories:
   -
tags:
   -
---
Here is the WordPress script that redirects admins to the dashboard once they log in from the front end:

<pre class="prettyprint">// redirects all admins to the Dashboard
add_filter( 'login_redirect', 'my_login_redirect', 10, 3 );
function my_login_redirect( $redirect_to, $request, $user ) {
	// Is there a user?
	if ( is_array( $user->roles ) ) {
		// Is it an administrator?
		if ( in_array( 'administrator', $user->roles ) )
			return home_url( '/wp-admin/' );
		else
			return home_url();		
	}
}</pre>

Thanks  

