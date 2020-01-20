---
id: 2675
title: Convert Serbian Cyrillic to Latin
date: 2016-02-01 01:40:19
author: taimane
layout: post
permalink: /convert-serbian-cyrillic-to-latin/
published: false
categories:
   -
tags:
   -
---
<pre>function sr2lat($str){

$tr = array(

"?" =&gt; "A",

"?" =&gt; "B",

"?" =&gt; "V",

"?" =&gt; "G",

"?" =&gt; "D",

"?" =&gt; "?",

"?" =&gt; "E",

"?" =&gt; "Ž",

"?" =&gt; "Z",

"?" =&gt; "I",

"?" =&gt; "J",

"?" =&gt; "K",

"?" =&gt; "L",

"?" =&gt; "Lj",

"?" =&gt; "M",

"?" =&gt; "N",

"?" =&gt; "Nj",

"?" =&gt; "O",

"?" =&gt; "P",

"?" =&gt; "R",

"?" =&gt; "S",

"?" =&gt; "Š",

"?" =&gt; "T",

"?" =&gt; "?",

"?" =&gt; "U",

"?" =&gt; "F",

"?" =&gt; "H",

"?" =&gt; "C",

"?" =&gt; "?",

"?" =&gt; "Dž",

"?" =&gt; "Š",

"?" =&gt; "a",

"?" =&gt; "b",

"?" =&gt; "v",

"?" =&gt; "g",

"?" =&gt; "d",

"?" =&gt; "?",

"?" =&gt; "e",

"?" =&gt; "ž",

"?" =&gt; "z",

"?" =&gt; "i",

"?" =&gt; "j",

"?" =&gt; "k",

"?" =&gt; "l",

"?" =&gt; "lj",

"?" =&gt; "m",

"?" =&gt; "n",

"?" =&gt; "nj",

"?" =&gt; "o",

"?" =&gt; "p",

"?" =&gt; "r",

"?" =&gt; "s",

"?" =&gt; "š",

"?" =&gt; "t",

"?" =&gt; "?",

"?" =&gt; "u",

"?" =&gt; "f",

"?" =&gt; "h",

"?" =&gt; "c",

"?" =&gt; "?",

"?" =&gt; "dž",

"?" =&gt; "š");

return strtr($str,$tr);

}</pre>



