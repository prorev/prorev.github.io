---
id: 786
title: BitBucket GIT from simple Command Line
date: 2012-10-22 12:41:52
author: taimane
layout: post
permalink: /bitbucket-git/
published: true
categories:
   -
tags:
   -
---
Today is Monday. A beautiful day for sharing some <strong>command line</strong> instructions.
The aim is to work with BitBucket from the Linux command line. Therefor you need to have GIT installed.
Just to note; GIT has been created by Linus Torvalds the same person that invited the Linux.

Basically you need to create your GIT repository in BitBucket (free) and to call the:
<pre>git clone https://username@bitbucket.org/repository/project.git</pre>
Once you provide the password you will download all the files to you side from the BitBucket.
Please you may edit the files now.
Once you complete the editing call this:
<pre>git status
git add -A
git commit -am "my edits"
git push -u origin master</pre>

You can always check your commits with: 
<pre>git log</pre>
Thanks.  

