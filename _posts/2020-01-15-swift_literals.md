---
id: 12971
title: Swift literals
date: 2020-01-15
author: taimani
layout: post
permalink: /swift/literals/
published: false
image: 
categories:
   - swift
tags:
   - strings
---
_Table of Contents:_
- [String Literals](#string-literals)
- [Concatenating Strings](#concatenating-strings)
  - [Special characters](#special-characters)
  - [String concatenation is not perfect](#string-concatenation-is-not-perfect)
  - [String Interpolation](#string-interpolation)
- [The string length](#the-string-length)
- [Split a string into an array](#split-a-string-into-an-array)
  - [Split by single delimiter](#split-by-single-delimiter)
    - [Empty subsequences](#empty-subsequences)
  - [Split by multiple delimiters](#split-by-multiple-delimiters)

---

[\u200B\u2060\uFFFE\u200E\u206E]


- \xAD [­]- \uFEFF [﻿]- \uFEFF [﻿]- \uFFF9 [￹]- \uFFFA [￺]
\0-\x08- 0001 []- 0002 []- 0003 []- 0004 []- 0005 []- 0006 []- 0007 []
\u000E-\u001F- 000E []- 000F []- 0010 []- 0011 []- 0012 []- 0013 []- 0014 []- 0015 []- 0016 []- 0017 []- 0018 []- 0019 []- 001A []- 001B []- 001C []- 001D []- 001E []
\x7F-\u0084- 007F []- 0080 [€]- 0081 []- 0082 [‚]- 0083 [ƒ]
\u0086-\x9F- 0086 [†]- 0087 [‡]- 0088 [ˆ]- 0089 [‰]- 008A [Š]- 008B [‹]- 008C [Œ]- 008D []- 008E [Ž]- 008F []- 0090 []- 0091 [‘]- 0092 [’]- 0093 [“]- 0094 [”]- 0095 [•]- 0096 [–]- 0097 [—]- 0098 [˜]- 0099 [™]- 009A [š]- 009B [›]- 009C [œ]- 009D []- 009E [ž]
\u200B-\u200F- 

200B [​]


- 200C [‌]- 200D [‍]- 200E [‎]
\u202A-\u202E- 202A [‪]- 202B [‫]- 202C [‬]- 202D [‭]
\u2060-\u2064- 2060 [⁠]- 2061 [⁡]- 2062 [⁢]- 2063 [⁣]
\u206A-\u206E- 206A [⁪]- 206B [⁫]- 206C [⁬]- 206D [⁭]