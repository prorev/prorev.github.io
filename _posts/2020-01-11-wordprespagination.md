---
id: 328
title: How to implement WordPress pagination?
date: 2011-05-13 22:15:34
author: taimane
layout: post
permalink: /wordpress/pagination/
redirect_from: /wordprespagination/
published: true
categories:
   - wordpress
tags:
   - pagination
---
WordPress has nice feature to set the number of blog pages it shows for specified taxonomy.

<img class="alignnone size-medium wp-image-329" title="blogpagesatmost" src="https://programming-review.com/wp-content/uploads/2011/05/blogpagesatmost-300x153.png" alt="" width="300" height="153" />


Unfortunately, WordPress won't paginate your pages automatically. You need to manually set the so called pager_fix.

Here is how to do it:

1. Add the following function to functions.php file

``` php
function pager_fix($separator = ' | ', $after_previous = ' ', $before_next = ' ', $prelabel='« Previous Page', 
$nxtlabel='Next Page »', $current_page_tag = 'b'){
   global $posts_per_page, $paged, $wp_query;
   $numposts = $wp_query->found_posts;
   $max_num_pages = ceil($numposts / $posts_per_page);
   if ($max_num_pages > 1) {    
     for ($cnt = 1; $cnt <= $max_num_pages; $cnt++) {
         if ($current_page_tag && $paged == $cnt) {
             $begin_link = "<$current_page_tag>"; 
             $end_link = "<!--$current_page_tag-->";
         } else { $begin_link = ''; $end_link = ''; }
         $x[] = $begin_link . '<a href="' . get_pagenum_link($cnt) . '">' . 
   $cnt . '</a>' . $end_link;
     }
    echo join($separator, $x);
   }
}
```

2. Add the following to the end of loop.php file:

```php
<div id="pager">
  <?php if(pager_fix) pager_fix(" | ","","","","","strong");?>
</div>
```

The result:

<img class="alignnone size-full wp-image-332" title="pagination" src="https://programming-review.com/wp-content/uploads/2011/05/pagination.png" alt="" width="300" height="200" />



