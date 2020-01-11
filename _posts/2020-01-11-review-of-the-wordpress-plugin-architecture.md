---
id: 916
title: WordPress Plugin architecture part 2
date: 2012-12-30 22:57:06
author: taimane
layout: post
permalink: /review-of-the-wordpress-plugin-architecture/
published: true
categories:
   -
tags:
   -
---
We already wrote about <a href="https://programming-review.com/wordpress-plugin-architecture/">WordPress Plugin architecture</a>. Here we will define some more details considering the existing plugins or plugin templates. We will try to present the WordPress plugins architecture based on folders/files contained in the plugin.


We will review some of the popular existing plugins and we will try to understand the general architecture of the WordPress plugins.

### WP SMS Autoresponder ( WordPress plugin that has only dashboard part = backend)

Here is WP SMS Autoresponder plugin - custom made plugin designed only for the WordPress dashboard. It doesn't have any features from the frontend.

Here is how the file structure looks like. <img class="alignnone wp-image-923" style="border: 1px solid black;" src="https://programming-review.com/wp-content/uploads/2012/12/Selection_427.png" alt="Selection_427" width="813" height="396" />

As you can see there are several files in there. Fist, there are three different folders for <strong>CSS</strong>, <strong>Images</strong>, and <strong>JavaScript</strong>. These are simple the containers for all the CSS, Images and JavaScript files we use in the plugin.



Then, there is <strong>Ajax.php</strong> file, very important for all the Ajax used in the plugin. This file simple has all the Ajax calls needed for the plugin.



Then there is a number of files like <strong>draw_gateways</strong>, <strong>draw_main</strong>, <strong>draw_lists</strong>, ... that simple represent specific Dashboard pages our plugin has. For every Dashboard page we have one specific <strong>draw_***</strong> file.



<strong>Helper file </strong>is simple a place to put all the helper functions that we may use in the other plugins also.



<strong>Init1.sql</strong> and <strong>install.php </strong>are used in tandem in the WordPress plugin installation phase.



[caption id="attachment_917" align="alignleft" width="196"]<img class=" wp-image-917 " src="https://programming-review.com/wp-content/uploads/2012/12/New-Sheet_o5tt.jpg" alt="register_activation_hook" width="196" height="249" /> WordPress Plugin installation hook[/caption]



Note: In every WordPress plugin we need to create one installation function. The installation function sets/updates the database. If the plugin is installed for the very first time, then we may simple execute the WordPress installation SQL (init1.sql). If the plugin is already installed and we try to set the new update for the specific plugin then we may consider both SQL file or the <strong>dbDelta</strong> function.



The image on the left presents the <code>register_activation_hook</code> hook.

```
function init(){

register_activation_hook( WP_PLUGIN_NAME, array(&amp;$this, 'database_setup') );

}
```

The file that is marked out <strong>layout.php</strong> contains the layout logic. That file creates the WordPress dashboard menu/submenu structure and there are several require statements for all the files we use inside of that plugin. Basically that file requires / includes all of the other plugin files.



There is also one file called <strong>widget.php</strong> that we use for establishing the WordPress widgets. Basically there may be many different widgets in the organization structure.



Lastly there is <strong>wp-sms-autoresponder.php</strong> representing the entrance point of this current plugin. Without that file the plugin would not work.



Now, let's check the content of the <strong>layout.php</strong> file. That file creates the WordPress dashboard menu/submenu structure and there and includes several required files like this:

```
function init_menu(){
if (is_admin()){
 add_menu_page('SMS Autoresponder', 'WP SMS',  'manage_options',sms-autoresponder', 'draw_main', null, 'WP_SMS_AUTORESPONDER_PATH . '/images/menu.png', 25
 );
    add_submenu_page( 'sms-autoresponder', 'Lists', 'Lists', 'manage_options', 'sms-autoresponder-lists', 'draw_lists');

    add_submenu_page( 'sms-autoresponder', 'Subscribers', 'Subscribers', 'manage_options', 'sms-autoresponder-subscribers', 'draw_subscribers');

    add_submenu_page( 'sms-autoresponder', 'Gateways', 'Gateways', 'manage_options', 'sms-autoresponder-gateways', 'draw_gateways');

    add_submenu_page( 'sms-autoresponder', 'Settings', 'Settings', 'manage_options', 'sms-autoresponder-settings', 'draw_settings');

    add_submenu_page( 'sms-autoresponder', 'CSS', 'CSS', 'manage_options', 'sms-autoresponder-css', 'draw_css');

require_once WP_SMS_AUTORESPONDER_PATH.'draw_gateways.php');
require_once(WP_SMS_AUTORESPONDER_PATH.'draw_settings.php');
require_once(WP_SMS_AUTORESPONDER_PATH.'draw_lists.php');
require_once(WP_SMS_AUTORESPONDER_PATH.'draw_subscribers.php');
require_once(WP_SMS_AUTORESPONDER_PATH.'draw_css.php');
require_once(WP_SMS_AUTORESPONDER_PATH.'draw_main.php');
}}
```

Finally here is the architecture of the Ajax plugin part. As you may notice some actions have been defined that are triggered on demand.

```
function init(){
 add_action('wp_ajax_wp_sms_gateway_name', array(&amp;$this, 'test_gateway_name'));
}
```

Here is how the plugin looks at the end.

<img class="alignnone size-full wp-image-931" src="https://programming-review.com/wp-content/uploads/2012/12/Selection_429.png" alt="Selection_429" width="944" height="443" />



We identified several important parts of the WordPress plugins even now. In the further analysis we may identify even more.

<h4>NEXTGEN Gallery ( plugin that has both the frontend and the backend)</h4>

<img class="alignnone wp-image-943" style="border: 1px solid black;" src="https://programming-review.com/wp-content/uploads/2012/12/Selection_430.png" alt="Selection_430" width="829" height="531" />As you see this plugin contains similar folders like the previous one, but it contains even more. Here is the full list of the folders: admin, css, fonts, images, js, lang, lib, shutter, view, widgets, and  xml.



Here is what the <strong>admin</strong> folder contains:



<img class="alignnone size-full wp-image-944" src="https://programming-review.com/wp-content/uploads/2012/12/Selection_431.png" alt="Selection_431" width="582" height="134" />



These files in the <strong>admin</strong> folder are strictly for the WordPress dashboard (WordPress backend part). So, we may say Nextgen-Gallery plugin has a separation of the admin dashboard and WordPress frontend. This is very good and handy idea since it clarifies the file organization.



The Frontend part of the Nextgen-gallery plugin are all other files except the admin folder we just examined. What we had previously as a helper.php file (a container of some functionality) we find in the Nextgen-galllery lib folder.



Here is how the <strong>lib</strong> folder looks like:



<img class="alignnone size-full wp-image-945" src="https://programming-review.com/wp-content/uploads/2012/12/Selection_433.png" alt="Selection_433" width="590" height="83" />



We will not focus on the details now. We just wanted to show the smart separation of the folder structure.

<h4>WordPress SEO (file-structure organization)</h4>

<img class="alignnone wp-image-948" style="border: 1px solid black;" src="https://programming-review.com/wp-content/uploads/2012/12/Selection_434.png" alt="Selection_434" width="740" height="301" />



The file structure of WordPress SEO is very similar to what we had in the previous two examples. But, there is one smart idea. There you may find the admin and the frontend folders. Both of these are used for just that - admin part and frontend part.



The other files are easy to understand, one file in particular: uninstall.php, that contains the following code:

```
foreach ( array('wpseo', 'wpseo_indexation', 'wpseo_permalinks', 'wpseo_titles', 'wpseo_rss', 'wpseo_internallinks', 'wpseo_xml', 'wpseo_social') as $option) {
  delete_option( $option );
}
```

To note: The <strong>inc</strong> folder contains the helper functions that can be used for different plugins, because these are general enough and multipurpose.



<img class="alignnone size-full wp-image-958" src="https://programming-review.com/wp-content/uploads/2012/12/New-Sheet_1mmdi.jpg" alt="New-Sheet_1mmdi" width="413" height="297" />



### Summary:
Even the best WordPress plugins today can still have very simple folder structure. The general folders we may outline are the admin folder, the frontend folder, the folders that contain the CSS, JavaScript, images and the other files or folders that can contain some general purpose reusable functions or classes. Also, as a cherry on top, all WordPress plugins must have the plugin entrance point that should be names exactly the same as the plugin and the two other files, **license.txt** and **readme.txt**.  

