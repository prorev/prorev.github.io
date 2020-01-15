---
id: 3047
title: Preparing Vim for Perl?
date: 2016-09-08 15:57:41
author: taimane
layout: post
permalink: /vim-for-perl/
published: true
categories:
   -
tags:
   -
---
<h2>Syntax highlighting</h2>

Vim is excellent in syntax highlighting. Since all popular languages are supported, Perl is also..

Vim identifies comments, strings, keywords, variables, ... and other.

<h2>Text completion</h2>

Do you think that Vim has excellent text completion? I do not.



Vim has <code>Ctrl-n</code> / <code>Ctrl-p</code> press to cycle word completion suggestions. These suggestions Vim generates based on the words <strong>in the current file</strong>. Yes, only in the current file.



You need key completion (suggestions) from other files, then you use Vim's <code>ctags</code> file.



You simply run

<pre>ctags *.p?</pre>

to generate <code>ctags</code> for all Perl files and modules in the current folder. I take for granted that you are using <code>.pl</code> extension for Perl scripts and <code>.pm</code> extension for Perl modules

<h2>Line numbers</h2>

Next  Vim should set lines numbers. Just add <code>set number</code> to <code>.vimrc</code>.

<h2>Working with multiple files</h2>

Vim supports editing of several Perl files simultaneously. Start <em><strong>Vim</strong></em> as “<code>vim file1.pl file2.pl</code>” and then use <code>:next</code> and <code>:previous</code> to navigate through open file. It is also possible to open files for editing without exiting Vim.



Use use simple <code>:e file2.pl</code> command.

<h2>To use Perl 5 and Perl 6</h2>

Just check this out: <a rel="nofollow" href="https://github.com/vim-perl/vim-perl" rel="nofollow">https://github.com/vim-perl/vim-perl</a>

<h2>Reformat your code to look nice</h2>

There are different options to do that in Vim, but <strong>perltidy</strong><em> is fair one.

It will reformat your file (whole file) based on settings.</em>



<summary>Hope this helps, this is just a basic view, how you can use Vim for Perl programming. Vim also has plugins, that you can use to further improve functionality of this great file editor.</summary>  

