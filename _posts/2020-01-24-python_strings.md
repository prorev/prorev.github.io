---
id: 12971
title: Python strings
date: 2020-01-22
author: taimane
layout: post
permalink: /python/strings
published: true
image: 
categories: 
   - python
tags:
   - string
---

- [The size of a single character](#the-size-of-a-single-character)
- [The size of the empty string](#the-size-of-the-empty-string)
- [Tricky interning](#tricky-interning)
- [String operations](#string-operations)
  - [Concatenation](#concatenation)
  - [Splitting strings](#splitting-strings)
    - [Splitting by character](#splitting-by-character)
    - [Splitting by multiple characters](#splitting-by-multiple-characters)
    - [Splitting by word](#splitting-by-word)
    - [Splitting using splitlines()](#splitting-using-splitlines)
  - [Joining list elements to a string](#joining-list-elements-to-a-string)
  - [String explosion to chars](#string-explosion-to-chars)
  - [Reverse string](#reverse-string)
- [Appendix : String Methods](#appendix--string-methods)
- [String literals notation](#string-literals-notation)

---
![str](/wp-content/uploads/2020/01/string25_0.jpg)

Let's start observing the Python strings.

_Example:_
```python
s = 'string ☕'
print(type(s))
print(len(s))
```
_Output:_
```
<class 'str'>
8
```

If you create a simple string `s` you will get the class of string is _str_, and the length of string is 8 characters.

This doesn't tell much. Let's create several examples nailing it down what strings really are.

## The size of a single character

_Example:_
```python
s  = 'a'
takes_bytes = sys.getsizeof(s+s)-sys.getsizeof(s)
print(takes_bytes)
print(ord(s))

s  = 'а'
takes_bytes = sys.getsizeof(s+s)-sys.getsizeof(s)
print(takes_bytes)
print(ord(s))
```

_Output:_
```
1
97
2
1072
```

What!?

_Why there is a difference? Isn't `a` the same as `а`?_

They are not. The first _a_ uses 1 byte per char, and the `ord` function returns the code point for _a_ is 97. The second _а_ code point is 1072. 

_Example:_
```python
str  = '👍'
takes_bytes = sys.getsizeof(str+str)-sys.getsizeof(str)
print(takes_bytes)
print(ord(str))
```
_Output:_
```
4
128077
```

In here the code point for the `👍` character is 128077

> Python strings use three kind of chars: 1 byte char, 2 bytes char, and 4 bytes char.


## The size of the empty string

Another paradox:

_Example:_
```python
import sys
str  = ''
sys.getsizeof(str)
```

_Output:_
```
51
```

_Example:_
```python
import sys
str  = ' '
sys.getsizeof(str)
```

_Output:_
```
50
```

What!?

Python empty strings takes more space than the simple space string. It's true.

> Python strings will take initially 50+ bytes to store information such as: length, length in bytes, hash, the encoding, and different string flags.


## Tricky interning

When working with short strings, python may internally memorize the same character under the same memory address. This is called _string interning_.

```python
s = 'the example'
print(s)
print(s[2], s[4], s[10])
id(s[1]), id(s[4]), id(s[10])
```
_Output:_
```
the example
e e e
(2172370743728, 2172340813616, 2172340813616)
```
In here the characters _e_ from the word _"example"_ point to the same memory address. This saves memory.

Things get more evident in the next example:
_Example:_
```python
s = 'eee'
print(s)
print(s[0], s[1], s[2])
id(s[0]), id(s[1]), id(s[2])
```
_Output:_
```
eee
e e e
2172340813616, 2172340813616, 2172340813616 
```


## String operations


### Concatenation

Let's create a string of first 99 numbers:

_Example:_
```python
s = ''
for x in range(1,100):
  s=s+str(x)
  
print s
```
_Output:_
```
123456789101112131415161718192021222324252627282930313233343536373839404142434445464748495051525354555657585960616263646566676869707172737475767778798081828384858687888990919293949596979899
```

What we just did in here? We used the string concatenation operator `+`, and we converted each integer number from the range 1..100 into a string with the `str()` function.

Next we should use the `*` operator on strings.

_Example:_
```python
'string'*3
```

_Output:_
```
'stringstringstring'
```

This would be again concatenation.

> Note in Python strings do not have the `append()` method like in Java. In Python the `append` function works on lists.


### Splitting strings 

Python `split()` is one of the finest splitting methods in the world. It works on characters, special characters or on words.

#### Splitting by character


_Example:_
```python
txt = 'May the force be with you'
spl = txt.split('a')
print(spl) 
```

_Output:_
```
['M', 'y the force be with you']
```
_By default_ if you don't provide any argument to `split()` it will split by any whitespace including regular space, non breaking space, new line, tabulator, etc.

_Example:_
```python
txt = 'May the force be with you'
spl = txt.split()
print(spl) 
```
_Output:_
```
['May', 'the', 'force', 'be', 'with', 'you']
```

#### Splitting by multiple characters

_Example:_
```python
import re
res = re.split('[aeiou]', 'May the force be with you.')
print(res)
```

_Output:_
```
['M', 'y th', ' f', 'rc', ' b', ' w', 'th y', '', '.']
```


#### Splitting by word

_Example:_
```python
txt = 'May the force be with you'
spl = txt.split('force')
print(spl) 
```

_Output:_
```
['May the ', ' be with you']
```

#### Splitting using splitlines()

In some cases we need to split the text into lines first. For that we use `splitlines()`.

_Example:_
```
text='''file1.txt 2012 How to split text with success?
file2.txt 2013 How do we stop splitting?
file3.txt 2020 Example of maxsplit and splitlines'''

list =[]

for line in text.splitlines():
    list.append(line.split(' ', maxsplit=2))
    
list 
```
_Output:_
```
[['file1.txt', '2012', 'How to split text with success?'],
 ['file2.txt', '2013', 'How do we stop splitting?'],
 ['file3.txt', '2020', 'Example of maxsplit and splitlines']]
```


### Joining list elements to a string

_Example:_
```python
lst = ['Join', 'list', 'elements', 'to', 'a', 'string']
s = ''.join(lst)
print(s)
```
_Output:_
```
Joinlistelementstoastring
```

That's strange! With an additional improvement we will fix it.
_Example:_
```python
lst = ['Join', 'list', 'elements', 'to', 'a', 'string']
s = ' '.join(lst)
print(s)
```
_Output:_
```
Join list elements to a string
```

### String explosion to chars

In PHP there is `explode` method on strings. There is no such method in Python, instead you do the explosion like this:

_Example:_
```python
lst = [x for x in 'explode']
print(lst)
```
_Output:_
```
['e', 'x', 'p', 'l', 'o', 'd', 'e']
```

### Reverse string

Programming tutorials usually have examples on how to reverse a string. This is easy in Python:

_Example:_
```python
str = 'reverse'
str = str[::-1]
print(str)
```
_Output:_
```
esrever
```


## Appendix : String Methods

| []()       | []()         | []()       
| ---------- | ------------ | ---------- 
| capitalize | casefold     | center     
| count      | encode       | endswith   
| expandtabs | find         | format     
| format_map | index        | isalnum    
| isalpha    | isascii      | isdecimal  
| isdigit    | isidentifier | islower    
| isnumeric  | isprintable  | isspace    
| istitle    | isupper      | join       
| ljust      | lower        | lstrip     
| maketrans  | partition    | replace    
| rfind      | rindex       | rjust      
| rpartition | rsplit       | rstrip     
| split      | splitlines   | startswith 
| strip      | swapcase     | title      
| translate  | upper        | zfill      


## String literals notation

You can use both of the notations using single quotes `''` or double quotes `""`.

However, for printing Python uses single quotes.

_Example:_
```python
l= ["string" , 'string']
print(l)
```
_Output:_
```
['string', 'string']
```
