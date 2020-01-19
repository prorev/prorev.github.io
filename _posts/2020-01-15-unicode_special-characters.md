---
id: 12971
title: Intro to Swift programming
date: 2020-01-15
author: taimane
layout: post
permalink: /swift/hello/
published: false
image: 
categories:
   - swift
tags:
   - intro
---
_Table of Contents:_


---


Space characters and **zero-width spaces** in Unicode
Code | Name of the character | Sample | Width of the character
-----|-----------------------|--------|-----------------------
U+0020 | SPACE | foo bar | Depends on font, typically 1/4 em, often adjusted
U+00A0 | NO-BREAK SPACE | foo bar | As a space, but often not adjusted
U+1680 | OGHAM SPACE MARK | foo bar | Unspecified; usually not really a space but a dash
U+180E | MONGOLIAN VOWEL SEPARATOR | foo᠎bar | 0
U+2000 | EN QUAD | foo bar | 1 en (= 1/2 em)
U+2001 | EM QUAD | foo bar | 1 em (nominally, the height of the font)
U+2002 | EN SPACE (nut) | foo bar | 1 en (= 1/2 em)
U+2003 | EM SPACE (mutton) | foo bar | 1 em
U+2004 | THREE-PER-EM SPACE (thick space) | foo bar | 1/3 em
U+2005 | FOUR-PER-EM SPACE (mid space) | foo bar | 1/4 em
U+2006 | SIX-PER-EM SPACE | foo bar | 1/6 em
U+2007 | FIGURE SPACE | foo bar | “Tabular width”, the width of digits
U+2008 | PUNCTUATION SPACE | foo bar | The width of a period “.”
U+2009 | THIN SPACE | foo bar | 1/5 em (or sometimes 1/6 em)
U+200A | HAIR SPACE | foo bar | Narrower than THIN SPACE
U+200B | ZERO WIDTH SPACE | foo​bar | 0
U+202F | NARROW NO-BREAK SPACE | foo bar | Narrower than NO-BREAK SPACE (or SPACE), “typically the width of a thin space or a mid space”
U+205F | MEDIUM MATHEMATICAL SPACE | foo bar | 4/18 em
U+3000 | IDEOGRAPHIC SPACE | foo　bar | The width of ideographic (CJK) characters.
U+FEFF | ZERO WIDTH NO-BREAK SPACE | foo﻿bar | 0
