---
id: 1680
title: WordPress action hooks and how to define them in example
date: 2013-08-07 15:58:40
author: taimane
layout: post
permalink: /wordpress-action-hooks-example/
published: true
categories:
   -
tags:
   -
---
WordPress custom action hooks are super easy to define.

Just in your theme, plugin or whatever you need to set your new custom action like:


```
do_action('your_new_action_name', $parameter)
```


This is all the "hard job" you need to do. Nothing more, but it cannot be done for less, unless you do not need the <code>$parameter</code>



In order to use the action hooks you can refer to <a href="https://programming-review.com/wordpress/add_filter-hook/">already created article</a>.



Here is the simple use of `your_new_action_name` hook.

```
function shoot_clay_pigeons($parameter) {
// some work in here
}
add_filter('your_new_action_name','shoot_clay_pigeons');
```

