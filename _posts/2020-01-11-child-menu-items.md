---
id: 594
title: Wordpress child menu items
date: 2011-10-31 09:32:58
author: taimane
layout: post
permalink: /child-menu-items/
published: true
categories:
   -
tags:
   -
---
In <a title="WordPress 3.0" href="http://wordpress.org/news/2010/06/thelonious/">WordPress 3.0</a> and later you can create and name the menu. You can get all menu items using this code
<pre>
$menu = wp_get_nav_menu_items('menu_name');
//print_r($menu);</pre>

Sometimes, you will need to get only the child menu items for specified parent item. The solution is to use this function.
<pre>function getMenuChilds($menu, $parent){
  $menu = wp_get_nav_menu_items('upper'); // all the "upper" menu items array
  $menuID = 0; // we need to find $menuID that corresponds to the post ID
  foreach($menu as $item){
    if($item-&gt;object_id == $post-&gt;ID)
    $menuID = $item-&gt;ID;
  }
// menuID is menuitem ID that that corresponds to specific postID
// we must be careful here not to have multiple menu items with the same postID

  $submenu = array();  // all menu items under $menuID

  foreach($menu as $item){
      if($item-&gt;menu_item_parent == $menuID)
         $submenu[] = $item;
    }    

  if ($submenu) { // if we found any
    echo 'Subpages:';
    foreach($submenu as $el){
       echo '&lt;li&gt;&lt;a href="'.$el-&gt;url.'"&gt;'.$el-&gt;title.'&lt;/a&gt;'; echo '&lt;/li&gt;';
    }
  }
}
</pre>

The other function may also be useful when we have post or pages hierarchy
<pre>function getHierarchyChilds($menu, $parent){ // returns the array
// returns array of arrays representing objects having post_parent ==$parent
	$ret = array();
	foreach($menu as $el){
		if ($el-&gt;post_parent == $parent){
			array_push($ret,
			array(
			'id' =&gt;	$el-&gt;object_id,
			'text' =&gt; $el-&gt;title,
			'url' =&gt; $el-&gt;url
			));
		}
	}
	return $ret;
}</pre>
If you need simple the first level menu items you can call this function:
<pre>$first_level_items = getMenuChilds($menu, 0);</pre>
Thanks.  

