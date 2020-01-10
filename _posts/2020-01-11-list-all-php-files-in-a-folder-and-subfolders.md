---
id: 1089
title: List all PHP files in a folder and subfolders
date: 2013-01-10 11:33:50
author: taimane
layout: post
permalink: /list-all-php-files-in-a-folder-and-subfolders/
published: true
categories:
   -
tags:
   -
---
It is needed to list all PHP files inside some folder including subfolders. 
Also we would like to see what files are contained in specific subfolders.

<pre class="prettyprint">//*Prints PHP files under some folder.*/
function phpFilesList($dir){
	$ffs = scandir($dir);
	$lst = array();
	
	foreach($ffs as $ff){
		if($ff != '.' && $ff != '..'){
			$file_parts = pathinfo($ff);
			if(!empty($file_parts['extension']) && "php" == $file_parts['extension']) $lst[] = $ff;
			if(is_dir($dir.'/'.$ff)) phpFilesList($dir.'/'.$ff);
	
		}
	}
	echo $dir . ":::"; print_r($lst);

}

phpFilesList('/var/www/html/db');

exit();
</pre>

Here is how the result may look like
<pre>/var/www/html/db/contrib:::Array
(
)
/var/www/html/db/js/jquery:::Array
(
)
/var/www/html/db/js:::Array
(
		[0] => messages.php
)
/var/www/html/db/libraries/auth/swekey:::Array
(
		[0] => authentication.inc.php
		[1] => swekey.auth.lib.php
		[2] => swekey.php
)
/var/www/html/db/libraries/auth:::Array
(
		[0] => config.auth.lib.php
		[1] => cookie.auth.lib.php
		[2] => http.auth.lib.php
		[3] => signon.auth.lib.php
)
...
</pre>

Lastly here is the function that extracts <strong>php files</strong> full paths for the files in a folder:

<pre class="prettyprint">
public function php_files_array($dir){
  $ffs = scandir($dir);
  $a = array();

  foreach($ffs as $ff){
    if($ff != '.' && $ff != '..'){
    $file_parts = pathinfo($ff);
    if(!empty($file_parts['extension']) && "php" == $file_parts['extension']) 
      $a[] = $dir . "/" . $ff;
    if(is_dir($dir.'/'.$ff)) 
      $a = array_merge($a, $this->php_files_array($dir.'/'.$ff));
    }
  }
  return $a;	
}
</pre>


Thanks  

