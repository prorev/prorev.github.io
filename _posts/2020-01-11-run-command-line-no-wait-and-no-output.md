---
id: 2996
title: Run command line no wait and no output
date: 2016-08-01 21:16:47
author: taimane
layout: post
permalink: /run-command-line-no-wait-and-no-output/
published: true
categories:
   -
tags:
   -
---
<pre><code>long-running-command &amp;</code></pre>
The ampersand in the end of this command tells this command will be executed in the background. After starting a command, you can press <kbd>Ctrl+</kbd><kbd>Z</kbd> to suspend it, and then <code>bg</code> to put it in the background if you want.

This way still command output and command errors will show up in the terminal. But you can try this:
<pre><code>long-running-command &gt; /dev/null 2&gt;&amp;1 &amp;</code></pre>
<code></code>With the last line you will not get the standard output (/dev/null ) and the errors will be redirected also to the standard output meaning will not show.  

