---
id: 562
title: Best PHP coding practices
date: 2011-09-07 20:49:32
author: taimane
layout: post
permalink: /coding-practices/
published: true
categories:
   -
tags:
   -
---
PHP is the most used programming language for the web programming.
Outlined are some of the best PHP coding practices.

<h4>Use the default PHP delimiters:</h4>
Always use <code>&lt;?php ?&gt;</code> to delimit PHP code, not the <code>&lt;? ?&gt;</code> shorthand.

<h4>Because PHP is not strongly typed language always use === operator if possible to compare values.</h4>
For instance:
<pre>$a= "";
if ($a === 0)
echo "equal";
else echo "not equal";</pre>

will return "<strong>not equal</strong>", else if <code>==</code> is used the return will be "<strong>equal</strong>". 

<h4>Optimize your code only when important.</h4> 

<h4>Analyze your variables</h4> 
Do use <code>isset()</code>, <code>empty()</code>, or <code>is_null()</code> before working with unknown variables.
Note that isset() determines if a variable is set and not <code>NULL</code>, so it is actually even better to use <code>isset()</code> than <code>is_null()</code>  

<h4>Try to return integers instead of null or bool</h4>
<pre style="color:gray">function returnVoid(){
    return;
}
function returnBool(){
    return true;
}</pre>
<pre>function returnInt(){
    return 123;
}
</pre>
Using the functions this way and obeying the code practice #2 will simplify your PHP experience. 

<h4>Whenever possible declare and assign your variables and function parameters.</h4>
Instead of this line 
<pre>$mysql = mysql_connect('localhost', 'reinhold', 'secret_hash');</pre> 
Use this:
<pre>$db_host = 'localhost';  
$db_user = 'reinhold';  
$db_password = 'secret_hash';  
$mysql = mysql_connect($db_host, $db_user, $db_password); </pre>

<h4>Comparig variables and constants</h4>
When testing variable for a value via <code>==</code> operator use the notation
<code>if( constant == $variable)</code>, this way you will never make an error like this
<code>if($variable = 5)</code> which will return <code>true</code>.

<h4>Use single quoted strings when strings are not having $variables</h4>
This is a minor performance benefit, and also a good practice if you work with HTML attributes that should have double quotes ("") for their names and values. 

<h4>You can align in array assignments and have the comma (",") at the end</h4>
<pre>$somearray = array(
    'key1'          => 'value1',
    'key2'          => 'value2',
);</pre>

<h4>Use single quote around array indexes</h4>
<code>$somearray[key1]</code> is technically incorrect, better is <code>$somearray['key1']</code>. 
This is because PHP converts unquoted index to a constant and this takes time so it is faster if you just use  quoted key.

<h4>Document your code via comments at least</h4>
C style comments (/* */) and standard C++ comments (//) are both fine. Use of Perl style comments (#) is discouraged.  

