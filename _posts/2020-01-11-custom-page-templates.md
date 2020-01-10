---
id: 17
title: Creating custom WordPress page templates
date: 2011-02-28 09:11:39
author: taimane
layout: post
permalink: /custom-page-templates/
published: true
categories:
   -
tags:
   -
---
You have several WordPress <strong>pages</strong>: P1, P2, …, Pn — and need to customize look and feel for each page, so that the layout of the visual elements (categories, tags, search buttons, sidebars) differs from page to page. This text will explain how to customize look and feel for your pages by introducing the “page template” and provide you the clue how you can create the page template in WordPress. 

<h3>The page template</h3>
There is a concept of a “page template” in all major CMS systems. In Joomla! page templates are used very transparently. In WordPress page templates are also possible, but WordPress developers doesn’t use them so often because:
* WordPress it is designed as a blogging CMS at first place
* Many free or non-free WordPress themes doesn’t even provide prepared templates.

By bad fortune, for WordPress <strong>posts </strong>you cannot set the template. Fortunately from the  WordPress version 3.1 and newer you can set the post formats that is a substitution for the page templates.

<a href="https://programming-review.com/wp-content/uploads/2011/02/postformats.png"><img src="https://programming-review.com/wp-content/uploads/2011/02/postformats.png" alt="" title="postformats" width="303" height="327" class="aligncenter size-full wp-image-231" /></a>


<h3>Adding a page template for WordPress page</h3>
In your active WordPress theme you should find index.php and page.php files. Both those files can be used to show a specific page.

Example 1- Using index.php and page.php to show a specific page:
Rename page.php to page.php2. Open any page from your WordPress blog. You will note that there will be no problems opening the page because index.php will be used to open a page. Please rename page.php2 again to the original name page.php. Open the page again. This time page.php will be used to open the page.

Example 2- Creating a new page template:
Copy page.php to a new file nondefaultpage.php. Open nondefaultpage.php from any editor and add at the beginning of a file
/*
Template name: Nondefaultpage
*/
?>
Remove from nondefaultpage.php. Now the nondefaultpage.php differs from page.php
Now you can quick edit your page from your WordPress administration console and set a new Nondefaultpagetemplate for the page.

<h3>Possible problem with page templates</h3>
Maybe you cannot find a newly created template. If this is a case you need to restart your WordPress theme by activating any other theme and re-activating your theme again. This will make sure your new page template is visible when you quick edit your page.
To show a page WordPress checks the following:
If non-default “Page Template” PT is selected for a page it will be used
Else If page.php exists it will be used else
Else index.php will be used.
Note: Default page template in WordPress is either page.php or index.php.
Note: If there is no index.php file the WordPress theme cannot work properly nor it can be installed.

Conclusion:
In order to use non-default page template you need to create one and the best way to do it is to copy-paste the existing page.php to a new name and to add “Template name: XYZ” name to the beginning of a new template file.

Thanks.  

