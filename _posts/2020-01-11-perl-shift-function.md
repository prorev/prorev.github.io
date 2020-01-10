---
id: 3132
title: Perl shift function
date: 2016-09-12 09:34:59
author: taimane
layout: post
permalink: /perl-shift-function/
published: true
categories:
   -
tags:
   -
---
One very useful function in Perl is <code>shift</code>.
Larry you did it again.

The <code>shift</code> function moves the whole array to the left and will return the scalar value (first array element). As you may guess if the array was empty originally, shift will return <code>undef</code>. 

After the operation, the array will be one element shorter.

The example:
<pre>my @words = ('Give', 'Me', 'Coins');
my $first = shift @words;
print "$first\n";     # Give
print "@words\n";     # Me Coins</pre>

  

