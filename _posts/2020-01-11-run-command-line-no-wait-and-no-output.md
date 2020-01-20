---
id: 2996
title: Run command line no wait and no output
date: 2016-08-01 21:16:47
author: taimane
layout: post
permalink: /linux/long-running-command/
redirect_from: /run-command-line-no-wait-and-no-output/
published: true
categories:
   -
tags:
   -
---
You can write the command like this:
```
long-running-command &
```
The ampersand in the end of this command tells this command will be executed in the background. You can press <kbd>Ctrl+</kbd><kbd>Z</kbd> to suspend the command, and then <code>bg</code> to put it in the background if you want.

To suppress possible command output (command errors) try this:

```
long-running-command > /dev/null 2>&1 &
```

With the last line you will not get the standard output ( `/dev/null` ) and the errors will not show.

