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
In <a rel="nofollow" href="http://wordpress.org/">WordPress</a> and later you can create and name the menu. You can get all menu items using this code:

```php
$menu = wp_get_nav_menu_items('menu_name');
print_r($menu);
```


Sometimes, you will need to get only the child menu items for specified parent item. The solution is to use this function.

```php
function getMenuChilds($menu, $parent){
  $menu = wp_get_nav_menu_items('upper'); // all the "upper" menu items array
  $menuID = 0; // we need to find $menuID that corresponds to the post ID
  foreach($menu as $item){
    if($item->object_id == $post->ID)
    $menuID = $item->ID;
  }

// menuID is menuitem ID that that corresponds to specific postID
// we must be careful here not to have multiple menu items with the same postID

  $submenu = array();  // all menu items under $menuID
  foreach($menu as $item){
      if($item->menu_item_parent == $menuID)
         $submenu[] = $item;
  }    

  if ($submenu) { // if we found any
    echo 'Subpages:';
    foreach($submenu as $el){
       echo '<li><a href="'.$el->url.'">'.$el->title.'</a>'; echo '</li>';
    }
  }
}

```

The next function may also be useful when we have post or pages hierarchy:
```php
function getHierarchyChilds($menu, $parent){ // returns the array
// returns array of arrays representing objects having post_parent ==$parent
	$ret = array();
	foreach($menu as $el){
		if ($el->post_parent == $parent){
			array_push($ret,
			array(
			'id' =>	$el->object_id,
			'text' => $el->title,
			'url' => $el->url
			));
		}
	}
return $ret;
}
```

If you need simple first-level-menu-items you can call this function:
```php
$first_level_items = getMenuChilds($menu, 0);
```

