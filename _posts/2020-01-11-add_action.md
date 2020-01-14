---
id: 25
title: add_action hooks in WordPress
date: 2011-02-28 09:15:54
author: taimane
layout: post
permalink: /add_action/
published: true
categories:
   - wordpress
tags:
   - add_action
---
**WordPress hooks** change how the WordPress behaves without needing to edit any PHP source files.

Here I will provide simple working example for the <code>add_action</code> hook filter in WordPress:


```php
function hello_header() {
  echo "I'm in the header!";
}
add_action('wp_head', 'hello_header');
```


The result adding this code to the <strong>functions.php</strong> file of my theme would be echoing "I'm in the header!" string.


Here <code>wp_head</code> represents the moment before the “head” section for the page is ready. Some other moments you can use are:



*   `init` — moment when creating a page, both front end and administration
*   `admin_init` — the first thing done on every administration page
*   `admin_head` — the last moment in the administration page’s “head” section
*   `admin_menu` — constructing the navigation menu in the administration pages
*   `template_redirect` — occurs before the theme template file bas been chosen
*   `wp_enqueue_scripts` — moment to eliminate duplicate scripts
*   `wp_enqueue_style` — moment to eliminate duplicate styles
*   `widgets_init` — moment for constructing the list of active widgets
*   `loop_start` and `loop_end` — surrounding the Loop
*   `wp_footer` — moment to insert additional stuff before closing the `body` tag


And <a href="https://adambrown.info/p/wp_hooks/hook">here</a> is the complete WordPress hooks list. And <a href="https://adambrown.info/p/wp_hooks/hook/actions">here</a> is the <code>add_action</code> hooks list.


How about adding meta keywords to our post via a hook? How do we get meta keywords from the post tags and categories. 

Here is the code I used:

```php
function add_metatags()
{
 if (is_single()){
 // posttags takes all post tags
 $posttags = get_the_tags();
    if ($posttags){
       foreach($posttags as $tag){
          $keywords[] = strtolower($tag->name);
       }
    }

 // now adding post categories
 foreach((get_the_category()) as $category){
    $keywords[] = strtolower($category->cat_name);
 }
 $list = implode(", ", array_unique($keywords));
 echo '';
 }
}

add_action('wp_head', 'add_metatags');

```

Note, apart from the <code>add_action</code> hooks there are also <code>add_filter</code> hooks described <a href="https://programming-review.com/add_filter-hook/">here</a>.



