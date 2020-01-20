---
id: 670
title: Install git on CentOS
date: 2012-05-25 08:18:56
author: taimane
layout: post
permalink: /linux/install-git-centos/
redirect_from: /install-git-on-centos/
published: false
categories:
   -
tags:
   -
---
First of all check if GIT has already been installed with this line:
```
git --version
```
Depending on the return value you can assume git has been installed or not. 

Two ways to install:

## I) Easy install on my side is via 

```
yum install git
```

##  II) Install it from source:

1. Make sure you log in as root or another user with sudo access.
2. Install dependencies 
```
yum -y install zlib-devel openssl-devel cpio expat-devel gettext-devel
```
3. Download Git source from <code>wget http://git-core.googlecode.com/files/git-1.*.*.tar.gz </code>
4. Untar it to /usr/local/src (tar xvzf git-1.*.*.tar.gz)
5. Goto folder where you extracted it cd git-1.*.*
6. Configure/make/make install

```
./configure
make
make install
```
Make sure you have success install now <code>git --version</code> should return good value.

_Test `git init`:_
```
mkdir test
cd test
git init
```

If all goes well, you should see similar output:
```
Initialized empty Git repository in */test/
```


