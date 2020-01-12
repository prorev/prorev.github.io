---
id: 250
title: WordPress profile extra fields
date: 2011-05-09 11:35:49
author: taimane
layout: post
permalink: /wordpress-profile-extra-fields/
published: true
categories:
   -
tags:
   -
---
There is a way in WordPress to add extra fields to WordPress users.
While there's a "default" set of contact fields AIM, Yahoo IM and Jabber / Google Talk, oftentimes even more fields are required. This is particulary true if you need to create WordPress customization where each user should have its own home page and functionality.

Here is how I added textarea field for the job position. I got the idea from <a href="http://justintadlock.com/archives/2009/09/10/adding-and-using-custom-user-profile-fields">Justin Tadlock</a> website.

<a href="https://programming-review.com/wp-content/uploads/2011/05/wp_developer.png"><img class="alignnone size-full wp-image-251" title="wp_developer" src="https://programming-review.com/wp-content/uploads/2011/05/wp_developer.png" alt="" width="942" height="170" /></a>

The PHP code you need for a custom textarea would look like this:

<pre>add_action( 'show_user_profile', 'my_show_extra_profile_fields' );
add_action( 'edit_user_profile', 'my_show_extra_profile_fields' );

function my_show_extra_profile_fields( $user ) { ?>

	<h3>Extra profile information</h3>

	<table class="form-table">

		<tr>
			<th><label for="jobpos">Job Position</label></th>

			<td>
				<textarea name="jobpos" id="jobpos" class="regular-text"><?php echo esc_attr( get_the_author_meta( 'jobpos', $user->ID ) ); ?></textarea>                
				<span class="description">Describe what you do.</span>
			</td>
		</tr>

	</table>
<?php }

add_action( 'personal_options_update', 'my_save_extra_profile_fields' );
add_action( 'edit_user_profile_update', 'my_save_extra_profile_fields' );

function my_save_extra_profile_fields( $user_id ) {

	if ( !current_user_can( 'edit_user', $user_id ) )
		return false;

	update_usermeta( $user_id, 'jobpos', $_POST['jobpos'] );
}</pre>


And that's it.You'll just need to add this code to your functions.php file and it will rock. Just to mention that if you need straight textfields there is probable the better solution you can find on <a href="http://yoast.com/user-contact-fields-wp29/">Yoast's</a> website. As I tested Yoast's code works in WordPress 3.0 perfectly.

Thanks.  
