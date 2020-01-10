---
id: 670
title: Install git on CentOS
date: 2012-05-25 08:18:56
author: taimane
layout: post
permalink: /install-git-on-centos/
published: true
categories:
   -
tags:
   -
---
First of all check if GIT has already been installed with this line:
<pre>git --version</pre>
Depending on the return value you can assume git has been installed or not. 

<strong>Two ways to install:</strong>
A). Easy install on my side is via <pre>yum install git</pre>

B). Install it from source:

1. Make sure you log in as root or another user with sudo access.
2. Install dependencies 
<code>yum -y install zlib-devel openssl-devel cpio expat-devel gettext-devel</code>
3. Download Git source from <code>wget http://git-core.googlecode.com/files/git-1.*.*.tar.gz </code>
4. Untar it to /usr/local/src (tar xvzf git-1.*.*.tar.gz)
5. Goto folder where you extracted it cd git-1.*.*
6. Configure/make/make install
<pre>./configure
make
make install
</pre>

Make sure you have success install now <code>git --version</code> should return good value.
Test if <pre>git init</pre> in your for some test folder.
<pre>mkdir test
cd test
git init
</pre>

If all goes well, you should see similar output:
<pre>Initialized empty Git repository in */test/</pre>

Thanks.  

