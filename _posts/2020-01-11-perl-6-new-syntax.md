---
id: 3058
title: Perl 6 new syntax
date: 2016-09-08 18:04:24
author: taimane
layout: post
permalink: /perl-6-new-syntax/
published: true
categories:
   -
tags:
   -
---
<em><strong>This is an incomplete list just to bring you the small overview for the Perl 6 new syntax.</strong></em>

0. Global variables use <strong>twigil</strong>. It is the second character in the variable name.
<del>Was: $ENV{FOO}</del>
Now: %*ENV

1. <del>eval {}</del> is now try {}
2. foreach becomes for
3. for becomes loop

4.no parens on control structure conditions (Larry you did it again)
<del>Was: if ($a &lt; $b) { ... }</del>
Now: if $a &lt; $b { ... }

5. string concatenation is now done with ~.

6. still the same contexts: <strong>void</strong>, <strong>item</strong> (scalar) and <strong>list</strong>, but operators can force the special context

7. the command-line arguments are now in <strong>@*ARGS</strong>, not <del>@ARGV</del>. Note the * <strong>twigil</strong> because @*ARGS is a global.

8. The double-underscore keywords are gone

<del>__LINE__</del> is gone
and now:  <strong>$?LINE</strong>
<del>__FILE__</del> is gone
and now: <strong>$?FILE</strong>
<del>__PACKAGE__</del> is gone
and now: <strong>$?PACKAGE</strong>
<del>__END__</del> is gone
and now: <strong>=begin END</strong>
<del>__DATA__</del> is gone
and now <strong>=begin DATA</strong>

9. @array.elems for number of elements in an array:
Was: <del>$#array+1</del> or scalar(@array)

10 @array.end to get the index of last element in an array:
Was: <del>$#array</del>

9-10 combined. to get the last element of the array@array[@array.end]
Was: <del>$array[$#array]</del>  

