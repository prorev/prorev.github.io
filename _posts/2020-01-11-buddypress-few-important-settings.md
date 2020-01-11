---
id: 871
title: BuddyPress few important settings
date: 2012-11-23 13:42:36
author: taimane
layout: post
permalink: /buddypress-few-important-settings/
published: true
categories:
   -
tags:
   -
---
Found these are very useful:

```
function bp_displayed_user_is_loggedin() {
global $bp;
if ( bp_is_profile_component() || bp_is_member() ) {

if ( ('is_friend' != BP_Friends_Friendship::check_is_friend( $bp-&gt;loggedin_user-&gt;id, $bp-&gt;displayed_user-&gt;id )) &amp;&amp; (bp_loggedin_user_id() != bp_displayed_user_id()) )

if ( !is_super_admin( bp_loggedin_user_id() ) )
return is_user_logged_in() ? true : false;
}
return false;
}

add_action("bp_is_member", "bp_displayed_user_is_loggedin");

add_action("bp_is_profile_component", "bp_displayed_user_is_loggedin");

define ( 'BP_DISABLE_ADMIN_BAR', true );
define( 'BP_SILENCE_THEME_NOTICE', true );
define( 'BP_DTHEME_DISABLE_CUSTOM_HEADER', true );
```
