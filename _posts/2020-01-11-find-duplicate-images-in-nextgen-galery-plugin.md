---
id: 2786
title: Find duplicate images in Nextgen galery plugin
date: 2016-03-31 19:15:51
author: taimane
layout: post
permalink: /find-duplicate-images-in-nextgen-galery-plugin/
published: true
categories:
   -
tags:
   -
---
<pre  class="prettyprint">//nextgen
add_action('admin_menu', 'submenu_duplicates');

function submenu_duplicates() {
	add_submenu_page( NGGFOLDER , 'Find duplicates','Find duplicates', 'manage_options', 'find-duplicates', 'find_duplicates');
}

function find_duplicates() {

	global $nggdb;
	$gals = $nggdb->find_all_galleries();
	$arrpath = array();
	$arrmd5 = array();

	foreach ($gals as $gal){
		$gid = $gal->gid;
		$imgs = $nggdb->get_gallery($gid); // all images in gallery
		foreach($imgs as $img){

			//$arrpath[] = $img->imagePath;
			$arrmd5[$img->imagePath] = md5_file($img->imagePath);

		}
	}

	$cv = array_count_values($arrmd5);
	foreach($cv as $k=>$v){
		if($v>1) {
			echo $k; echo '|'; echo $v; echo '<br>';
			foreach ($arrmd5 as $elk=> $elv){
				if ($k == $elv){
					echo $elk;echo '<br>';
				}
			}
			echo '<hr>';
		}
	}


}</pre>  

