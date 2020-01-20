---
id: 2525
title: Good Linux command prompt
date: 2015-09-28 00:12:08
author: taimane
layout: post
permalink: /linux/ps1/
redirect_from: /good-linux-command-prompt/
published: true
categories:
   -
tags:
   -
---
How to keep the Linux command prompt like this:?

```
export PS1='[\w]\n\u\$ '
```

One minor issue entering the command prompt at the command line, as above is: it will disappear next time you log in.

Simple solution: Edit the .bashrc file in your home folder, and at the very bottom of that file, enter

```
export PS1='[\w]\n\u\$ '
```

Save the file and log out. When you next log in, you will see the new command prompt in all its glory.

