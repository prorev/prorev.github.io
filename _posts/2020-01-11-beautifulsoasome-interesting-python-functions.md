---
id: 1586
title: Working with beautifulsoup in Python should be easy
date: 2013-07-06 15:52:31
author: taimane
layout: post
permalink: /beautifulsoasome-interesting-python-functions/
published: true
categories:
   -
tags:
   -
---
Here is what was needed to make <strong>BeautifulSoup</strong> project to work.

<pre class="prettyprint">#!/usr/bin/python -tt
# -*- coding: utf_8 -*-

import sys
import os
import urllib
import urllib2
import re
import cgitb
cgitb.enable()
from BeautifulSoup import BeautifulSoup
import scrape
from urlparse import urlparse</pre>

Here are few functions I used for one project:

<pre class="prettyprint">############################################
# OK, this one is not beautiful but it is useful
def FileAppendLine(filename, text):
  file = open(filename, 'a')
  file.write(text)
  file.close()
</pre>

<pre class="prettyprint">############################################
# text default extractor of Beautiful Soup - not working well
def PrintAllText(soup):
  text = ''.join(soup.findAll(text=True))
  print text</pre>

<pre class="prettyprint">
# title extractor
def PrintTitle(soup):
  print '<h3>Page title:</h3>'
  title = ''
  if soup.find('title'):
    title = soup.find('title').string
  print '<h4>' 
  print title
  print '</h4>'

# meta description extractor
def PrintMetaDescription(soup):
  print '<h3>Page meta description:</h3>'
  md = ''
  l = soup.findAll("meta", attrs={"name":"description"})
  if l == []:
    md = "No meta description"
  else:
    md = l[0]['content'].encode('utf-8')
  print '<h4>' + md + '</h4>'

# meta keywords extractor
def PrintMetaKeywords(soup):
  print '<h3>Page meta keywords:</h3>'
  mk = ''
  l = soup.findAll("meta", attrs={"name":"keywords"})
  if l == []:
    mk = "No meta keywords"
  else:
    mk = l[0]['content'].encode('utf-8')
  print '<h4>' + mk + '</h4>'

# meta robots extractor
def PrintMetaRobots(soup):
  print '<h3>Page meta robots:</h3>'
  mr = ''
  l = soup.findAll("meta", attrs={"name":"robots"})
  if l == []:
    mr = "No meta robots"
  else:
    mr = l[0]['content']
  print '<h4>' + mr + '</h4>'


#finds all p elements without links
def PrintParagraphs(soup):
  paras = soup.fetch('p')
  for p in paras:
    print p.text.encode('utf-8')

# print all links
def PrintLinks(soup, localurl):
  parse = urlparse(localurl)
  localurl = parse[0] + "://" + parse[1]
  print "<h3>Page links statistics</h3>"
  l = soup.findAll("a", attrs={"href":True})
  print "<h4>Total links count = " + str(len(l)) + '</h4>'
  externallinks = [] # external links list
  for link in l:
    # if it's external link
    if link['href'].find("http://") == 0 and link['href'].find(localurl) == -1:
      externallinks = externallinks + [link]
  print "<h4>External links count = " + str(len(externallinks)) + '</h4>'


  if len(externallinks) > 0:
    print "<h3>External links list:</h3>"
    for link in externallinks:
      if link.text != '':
        print '<h5>' + link.text.encode('utf-8')
        print ' => [' + '<a href="' + link['href'] + '" >' + link['href'] + '</a>' +  ']' + '</h5>'
      else:
        print '<h5>' + '[image]',
        print ' => [' + '<a href="' + link['href'] + '" >' + link['href'] + '</a>' +  ']' + '</h5>'
      
  
# headers printer
def PrintHeaders(soup, h):
  l = soup.findAll(re.compile(h))
  if l == []:
    return
  print "<h3>" + h + " text:</h3>"
#  l = soup.findAll(re.compile("^h\d"))# h1, h2, h3, h4, h5, h6...
#  l = soup.findAll(re.compile(h))
  print "<h5>"
  for el in l:    
    print el.text.encode('utf-8')
  print "</h5>"

# print all alt tags
def PrintAltTags(soup):
  l = soup.findAll(attrs={"alt":True})
  if l == []:
    return
  print '<h3>All alt="..." attributes text:</h3>'
  ret = ""
  for el in l:
    ret = ret + " " + el['alt']
  print "<h5>" + ret.encode('utf-8') + "</h5>"

# print title tags
def PrintTitleTags(soup):
  l = soup.findAll(attrs={"title":True})
  if l == []:
    return
  print '<h3>All title="..." attributes text:</h3>'
  ret = ""
  for el in l:
    ret = ret + " " + el['title']
  print "<h5>" + ret.encode('utf-8') + "</h5>"

# return all alt tags
def ReturnAltTags(soup):
  l = soup.findAll(attrs={"alt":True})
  if l == []:
    return ''
  ret = ""
  for el in l:
    ret = ret + " " + el['alt']
  return ret

# return title tags
def ReturnTitleTags(soup):
  l = soup.findAll(attrs={"title":True})
  if l == []:
    return ''
  ret = ""
  for el in l:
    ret = ret + " " + el['title']
  return ret</pre>


Thanks  

