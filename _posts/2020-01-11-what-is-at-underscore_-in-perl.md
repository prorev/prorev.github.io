---
id: 3055
title: What is @_ in Perl?
date: 2016-09-08 17:33:46
author: taimane
layout: post
permalink: /what-is-at-underscore_-in-perl/
published: true
categories:
   -
tags:
   -
---
This is the first thing that confused me when I started to learn Perl. But I knew this is something important.

You can define it as <em>parameters expanded</em>.
Like the parameters are passed to a <strong>sub</strong> using the @_ variable:
<pre>sub test{
  my ($a, $b, $c) = @_;
  ...
}</pre>
# call it then with the parameters
<pre>test('perl', 'programming', 'call');</pre>
<strong>@_</strong> is the list of incoming parameters to a sub.  

