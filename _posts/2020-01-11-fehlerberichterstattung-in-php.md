---
id: 1804
title: Wie man can die Fehlerberichterstattung in PHP und WordPress aktivieren
date: 2013-12-04 22:47:33
author: taimane
layout: post
permalink: /fehlerberichterstattung-in-php/
published: true
categories:
   -
tags:
   -
---
Sie erhalten Ihre leere Web-Seite, und Sie haben keine Ahnung, warum. 
Verwenden Sie dann den folgenden PHP-Code:

<pre class="prettyprint" >ini_set('display_errors',1);
ini_set('display_startup_errors',1);
error_reporting(-1);
</pre>

In WordPress bitte setzen Sie die folgende in <code>config.php</code>:

<pre class="prettyprint" >
if($_GET["d"]){
  ini_set('display_errors',1);
  ini_set('display_startup_errors',1);
  error_reporting(-1);
  define('WP_DEBUG', true);
}
</pre>

Danke  

