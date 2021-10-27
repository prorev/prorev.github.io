---
id: 2277
title: Node.js Grunt tool installing troubleshoot
date: 2014-06-01 21:56:30
author: taimane
layout: post
permalink: /javascript/node-grunt/
redirect_from: /node-js-grunt-tool-installing-troubleshoot/
published: false
categories:
   - javascript
tags:
   - node
---
You may installed **node.js**

```
apt-get install nodejs
apt-get install npm
```


Since I discovered the Grunt tool for working with my web site assets I tried to install command line grunt:

<pre>#npm install -g grunt-cli</pre>



The problem was I had outdated version on <code>npm</code>&nbsp;(0.6.12)---and I got the following error:



<code>npm ERR! Error: failed to fetch from registry: grunt-cli</code>



To resolve---I needed to install newer version of&nbsp;<code>npm</code>&nbsp;and I found suggested resolution online:

```
#npm cache clean -f
#npm install -g n
#npm http GET https://registry.npmjs.org/n
```



But this lead to different problems again, since I had no <code>curl</code> installed; and basically I resolved all problems except: 



```
#n stable
#node -v
```



Node version was still the old one.



Final solution was to:

```
apt-get install python-software-properties
apt-add-repository ppa:chris-lea/node.js
apt-get update
apt-get remove nodejs
apt-get install nodejs
```



where

<code>node -v returned

v0.10.28

npm -v returned

1.4.9

</code>



After that

<pre># npm install -g grunt-cli</pre>



went just fine. 


