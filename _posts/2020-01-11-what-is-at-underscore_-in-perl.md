---
id: 3055
title: What is @_ in Perl?
date: 2016-09-08 17:33:46
author: taimane
layout: post
permalink: /perl/underscore/
redirect_from: /what-is-at-underscore_-in-perl/
published: true
categories:
   -
tags:
   -
---
This is the first thing that confused me when I started to learn Perl. But I knew this is something important.


You can define it as <em>parameters expanded</em>.

Like the parameters are passed to a `sub` using the `@_` variable:

```perl
sub test{
  my ($a, $b, $c) = @_;
  ...
}

# call it then with the parameters
test('perl', 'programming', 'call');
```

`@_` is the list of incoming parameters to a sub.  

