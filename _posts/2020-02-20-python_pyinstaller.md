---
id: 12971
title: Python PyInstaller on Linux
date: 2020-02-20
author: taimane
layout: post
permalink: /python/pyinstaller
published: true
image: https://realpython.com/pyinstaller-python/
categories: 
   - python
tags:
   - install
   - installer
   - linux
---
_Table of contents:_
- [Install the PyInstaller](#install-the-pyinstaller)
- [Experiment: creating the installation](#experiment-creating-the-installation)
- [What will PyInstaller do?](#what-will-pyinstaller-do)
- [When PyInstaller output is not a single file](#when-pyinstaller-output-is-not-a-single-file)
- [List of switches (command line arguments)](#list-of-switches-command-line-arguments)

Thanks to **PyInstaller** it is now _easy_ to create the installation for a Python based project you distribute to: Linux, Windows or MacOS. In here I will examine the **PyInstaller on Linux**.

When on Linux, you **cannot** create the final executable for Windows or MacOS, that would be the _PyInstaller limitation_.

This is why for each OS (Operating System) you should build separate distributable executable.

In other words, PyInstaller doesn't have the platform switch, like Python [Kivy](https://kivy.org/){:rel="nofollow"} or C# [Unity](https://unity.com/){:rel="nofollow"} tools that are cross platform.

## Install the PyInstaller

_First step_ would be to download PyInstaller from PyPi, but it is even easier to install it using pip:
```
pip install pyinstaller
```

If you are not sure you have the latest PyInstaller version already you can try to install and upgrade:
```
pip install --upgrade pyinstaller
```
From now on, you can call `pyinstaller` from the command line.

## Experiment: creating the installation

Let's make our fingers dirty with some code. Let's create a program you can distribute to any Linux platform even if Python is not installed. In other words we will create the Linux standalone executable as the output of this experiment.

First we create a folder called **/content** to hold our experiment. In there we create a file called **getdatetime.py**:

```python
# save as getdatetime.py
import datetime
now = datetime.datetime.now()
print ("Current date and time : ")
print (now.strftime("%Y-%m-%d %H:%M:%S"))
```

<sub>Check here [how to work with Python date and time](https://programming-review.com/python/datetime) in detail.</sub>

Assuming we installed the PyInstaller already, we are now ready to create the one-file standalone executable.

```
pyinstaller --onefile getdatetime.py
```

If we list the **/content** folder, we will get the following output. Wow!

![list of files](/wp-content/uploads/2020/02/pyinstaller1.jpg)

If we now execute the `file` command to check the file type for the **getdatetime**:

```
file /content/dist/getdatetime
```

We get the output this is _ELF Linux executable_:
```
/content/dist/getdatetime: ELF 64-bit LSB executable, x86-64, version 1 (SYSV), dynamically linked, interpreter /lib64/l, for GNU/Linux 2.6.32, BuildID[sha1]=294d1f19a085a730da19a6c55788ec08c2187039, stripped
```

To run the executable we simple type from the command line:
```
/content/dist/getdatetime
```

_Output:_
```
Date and time is: 
2020-02-22 11:35:15
```

This is how simple it is; to create **independent executable** you may run on any Linux, with or without Python installed.

## What will PyInstaller do?

We had originally just a single **detdatetime.py** file, and after the PyInstaller command we have several files and folders more:

```
build/ 
dist/
getdatetime.py
getdatetime.spec
__pycache__/
```

`build/` folder is where PyInstaller prepares the distribution executable and stores that to `dist/` folder. The `getdatetime.spec` is a specification file that PyInstaller creates the first time you run it.

You can edit the `getdatetime.spec` file and name your output executable other way.

## When PyInstaller output is not a single file

There is another way. You can run PyInstaller with this command:
```
pyinstaller getdatetime.py
```
This time we don't use `--onefile` switch. Inside the dist folder we now have **different output**. Recall that with the `--onefile` option we had just a **single file** output.

![list of files](/wp-content/uploads/2020/02/pyinstaller2.jpg)

To run the executable and to get the output we should call from the command line:
```
/content/dist/getdatetime/getdatetime
```

> There are many `.so` files inside our **dist** folder. Files with `.so` extension are _Shared Objects_ files. In Windows these would be `.dll`s. Under Linux you can get some feedback on `.so` files using `ldd` command.


## List of switches (command line arguments)

[]() | []() 
---------|----------
 -h, --help           |  show this help message and exit
-v, --version         |Show program version info and exit.
--distpath DIR        |Where to put the bundled app (default: ./dist)
--workpath WORKPATH   |Where to put all the temporary work files, .log, .pyz and etc. (default: ./build)
-y, --noconfirm       |Replace output directory --upx-dir UPX_DIR     |Path to UPX utility (default: search the execution path)
-a, --ascii           |Do not include unicode encoding support (default: included if available)
--clean               |Clean PyInstaller cache and remove temporary files before building.
--log-level LEVEL     |Amount of detail in build-time console messages. LEVEL may be one of TRACE, DEBUG, INFO, WARN, ERROR, CRITICAL (default: INFO).

What to generate:

[]() | []() 
---------|----------
-D, --onedir          |Create a one-folder bundle containing an executable (default)
-F, --onefile         |Create a one-file bundled executable.
--specpath DIR        |Folder to store the generated spec file (default: current directory)
-n NAME, --name NAME  |Name to assign to the bundled app and spec file (default: first script's basename)


<!-- https://github.com/pyinstaller/pyinstaller/wiki/Supported-Packages -->