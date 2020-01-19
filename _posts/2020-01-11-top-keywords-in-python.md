---
id: 1593
title: Extract frequent words from the text in Python
date: 2013-07-06 16:05:37
author: taimane
layout: post
permalink: /python/top-keywords/
redirect_from: /top-keywords-in-python/
published: true
categories:
   -
tags:
   -
---
> Tested on Python 2

To extract frequent words from some text we can work with <strong>Dict</strong> in Python.
If you need to disable some words add them to <strong>stopword</strong> string

```python
# prints 40 top keywords for the text
def PrintTopKeywords(text):
  stopwords = 'I we he she a about an and are as at be by com for from how if in is it me more my myself of on or that the this to was what when where who will with you your'
  stoplist = stopwords.split()
  print "<h3>Top keywords</h3>"
  wordList1 = []
  wordList1 = text.lower().split(None)
  wordList2 = []
  for word1 in wordList1:
    lastchar = word1[-1:]
    if lastchar in [",", ".", "!", "?", ";"]:
      word2 = word1.rstrip(lastchar)
    else:
      word2 = word1
    # build a wordList2 of lower case modified words
    if len(word2.lower()) > 1 and word2.lower() not in stoplist:
      wordList2.append(word2.lower())
    
  # create word frequency dictionary  = hashtable
  Dict = {}
  for word2 in wordList2:
    Dict[word2] = Dict.get(word2, 0) + 1
    

  # create a list of keys and sort the list
  keys = Dict.keys()
  keys.sort()

  #function inside a function
  def byvalues(d):
    return d[1] 

  items = sorted(Dict.items(), key=byvalues, reverse=True)
  # Print the first 40
  for item in items[:40]:
    print "<h5>", item[0].encode('utf-8'), item[1], "</h5>"
############################################
```
