---
id: 1814
title: Generating pot files for themes and plugins
date: 2013-12-08 19:31:11
author: taimane
layout: post
permalink: /generating-pot-files-for-themes-and-plugins/
published: true
categories:
   -
tags:
   -
---
To internationalize your WordPress themes and plugins = to write themes and plugins that support different languages, use .pot, .po, or .mo files.

.pot, .po, or .mo files stand basically for the same thing = the containers mapping gettext instructions for i18n. Here are some definitions http://www.icanlocalize.com/site/tutorials/how-to-translate-with-gettext-po-and-pot-files/

<blockquote>POT – Portable Object Template. This is the file that you get when you extract texts from the application. Normally, you send this file to your translators.

PO – Portable Object. This is the file that you receive back from the translators. It’s a text file that includes the original texts and the translations.

MO – Machine Object. The MO file includes the exact same contents as PO file. The two files differ in their format. While a PO file is a text file and is easy for humans to read, MO files are compiled and are easy for computers to read. Your web server will use the MO file to display the translations.</blockquote>

Here are the functions from the <a href="https://www.gnu.org/software/gettext/">gettext</a> libraries:

```
__()
_e()
_x()
_ex()
_n()
```

You have your WordPress theme or plugin. How to create your .pot (template) files?

### First method 

Via WordPress.org web site. You need to log in to WordPress.org and then you will have something like this in /admin folder of your themes or plugins.

You need just to follow and to download the .pot file.


### Second solution:

Download `makepot.php` file via:
```
$ svn export http://i18n.svn.wordpress.org/tools/trunk/
$ php makepot.php wp-plugin /var/www/html/wordpress/wp-content/plugins/test</pre>
```
Your trunk folder will contain the `.pot` template file.

>Third solution to use some third party tools like PoEdit.



Thanks.  

