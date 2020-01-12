---
id: 328
title: How to implement WordPress pagination?
date: 2011-05-13 22:15:34
author: taimane
layout: post
permalink: /wordprespagination/
published: true
categories:
   -
tags:
   -
---
WordPress has nice feature to set the number of blog pages it shows for specified taxonomy.



<img class="alignnone size-medium wp-image-329" title="blogpagesatmost" src="https://programming-review.com/wp-content/uploads/2011/05/blogpagesatmost-300x153.png" alt="" width="300" height="153" />



Unfortunately, WordPress won't paginate your pages automatically. You need to manually set the so called pager_fix.

Here is how to do it:

1. Add the following function to functions.php file

<pre>function pager_fix($separator = ' | ', $after_previous = '  ', 

$before_next = '  ', $prelabel='« Previous Page', 

$nxtlabel='Next Page »', $current_page_tag = 'b')

{    

    global $posts_per_page, $paged, $wp_query;    



    $numposts = $wp_query-&gt;found_posts;

    $max_num_pages = ceil($numposts / $posts_per_page);

    if ($max_num_pages &gt; 1) {    

        for ($cnt = 1; $cnt &lt;= $max_num_pages; $cnt++) {

            if ($current_page_tag &amp;&amp; $paged == $cnt) {

                $begin_link = "&lt;$current_page_tag&gt;"; 

$end_link = "<!--$current_page_tag-->";

            } else { $begin_link = ''; $end_link = ''; }

            $x[] = $begin_link . '<a href="' . get_pagenum_link($cnt) . '">' . 

$cnt . '</a>' . $end_link;        

        }

       echo join($separator, $x);

    }    

}</pre>

2. Add the following to the end of loop.php file:

<pre>



<div id="pager">

  <!--?php if(pager_fix) pager_fix(" | ","","","","","strong");  ?--></div>



 

</pre>

The result:

<img class="alignnone size-full wp-image-332" title="pagination" src="https://programming-review.com/wp-content/uploads/2011/05/pagination.png" alt="" width="300" height="200" />



