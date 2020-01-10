---
id: 3068
title: How to check if file exists (Perl)
date: 2016-09-08 18:20:10
author: taimane
layout: post
permalink: /how-to-check-if-file-exists-perl/
published: true
categories:
   -
tags:
   -
---
To check if <strong><em>anything</em></strong> exists at given file path use the <code>-e</code> operator.
<pre class="lang-perl prettyprint prettyprinted"><code><span class="kwd">print</span> <span class="str">"$anything exists!\n"</span> <span class="kwd">if</span> <span class="pun">-</span><span class="pln">e $in_path</span><span class="pun">;</span></code></pre>
This is the broad test for also directory, a named pipe, a symlink.

If you need just a file (preferable with extension, like <strong>.txt</strong>) you need <strong>-f switch</strong>. The <code>-f</code> file-test operator asks whether a plain <strong>file exists</strong>.
<pre class="lang-perl prettyprint prettyprinted"><code><span class="kwd">print</span> <span class="str">"plain $file exists!\n"</span> <span class="kwd">if</span> <span class="pun">-f</span><span class="pln"> $in_path</span><span class="pun">;
</span></code></pre>
<a href="https://programming-review.com/wp-content/uploads/2016/09/perl-file.png"><img class="size-full wp-image-3069" src="https://programming-review.com/wp-content/uploads/2016/09/perl-file.png" alt="" width="183" height="163" /></a>  

