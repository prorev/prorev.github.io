---
id: 1459
title: Regular Expression teach class
date: 2013-05-14 23:31:35
author: taimane
layout: post
permalink: /php/regex/
published: true
categories:
   -
tags:
   -
---
In PHP we can create regular expressions of two types:
* Posix 
* PERL.
 
In here since we will use **PERL** `preg_match()` function.
If we would like to use **Posix** syntax we would use `eregi()` function.

## Comparing the same expression

_PERL syntax:_
```
#^\/articles\/([^.\/ ]+)[\/]*$#
```
_Posix syntax:_
```
^\/articles\/([^.\/ ]+)[\/]*$
```


## Special characters:

char | meaning
------- | -------
^	| beginning of string
$	| end of string
.	| any character except newline
*	| match 0 or more times
+	| match 1 or more times
?	| match 0 or 1 times; or: shortest match
\|	| alternative
( )	| grouping; "storing"
[ ]	| set of characters
{ }	| repetition modifier
\	| quote or special
\t	| tab
\n	| newline
\r	| return (CR)
\xhh	| character with hex. code hh
\b	| "word" boundary
\B	| not a "word" boundary
\w	| matches any single character classified as a "word" character (alphanumeric or "_")
\W	| matches any non-"word" character
\s	| matches any whitespace character (space, tab, newline)
\S	| matches any non-whitespace character
\d	| matches any digit character, equiv. to [0-9]
\D	| matches any non-digit character
a*	| zero or more a's
a+	| one or more a's
a?	| zero or one a's (i.e., optional a)
a{m}	| exactly m a's
a{m,}	| at least m a's
a{m,n}	| at least m but at most n a's repetition? Same as repetition but the shortest match is taken
[characters]	| matches any of the characters in the sequence
[x-y]	| matches any of the characters from x to y (inclusively) in the ASCII code
[\-]	| matches the hyphen character "-"
[\n]	| matches the newline; other single character denotations with \ apply normally, too
[^something]	| matches any character except those that [something] | denotes; that is, immediately after the leading "[", the circumflex "^" means "not" applied to all of the rest


_Example understanding regex:_
`#^\/articles\/([^.\/ ]+)[\/]*$#`

`^` and `$` = respectively the beginning and the end of the pattern that we match.

`\` = the escape character (where `\/` means actually `/` character.

`[\/]*$` = We may have `/` character at the end but also we may not.

If it would read `[\/]+$` this would mean we must have one or more `/` characters at the end.

This is because:
`*` It will match the preceding pattern zero or more times.
`+` It will match the preceding pattern one or more times.

There is also:
`?` It will match the preceding pattern zero or one time.

At the very beginning we should have `/articles/` text:
`^\/articles\/`

Everything inside `()` brackets is a match.
`[^.\/ ]+` = any character but not `/` and not " " (white space).


To recap meta-characters:

char | meaning
------- | -------
.  | any character
*  | zero of more of the preceding
+  | one or more of the preceding
{} | minimum to maximum quantifier
?  | ungreedy modifier
!  | at start of string means "negative pattern"
^  | start of string, or "negative" if at the start of a range
$  | end of string
[]  | match any of contents
-  | range if used between square brackets
()  | group, referenced group
|  | alternative, or
\  | the escape character itself
