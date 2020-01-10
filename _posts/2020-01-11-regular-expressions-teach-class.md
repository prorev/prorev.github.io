---
id: 15
title: Regular expressions teach class
date: 2011-02-28 09:10:20
author: taimane
layout: post
permalink: /regular-expressions-teach-class/
published: true
categories:
   -
tags:
   -
---
Here are some regular expressions constructed that I use everyday. These are tested in C#.

1. Matching any character from a character class [abc]


2. Matching any word b[^ "]*b


3. "" matching "[^"]*"


4. More advanced "" matching "(\"|[^"])*"


5. /**/ comments matching /*[^*]**+([^/*][^*]**+)*/


6. Matching HTML elements: <[^<^>]*>


7. Matching CSS {} content: {[^{]*}


Thanks.  

