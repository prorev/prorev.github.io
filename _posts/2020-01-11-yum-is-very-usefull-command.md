---
id: 1478
title: Yum is very usefull command
date: 2013-05-15 10:09:27
author: taimane
layout: post
permalink: /yum-is-very-usefull-command/
published: true
categories:
   -
tags:
   -
---
CentOS has yum - very useful command for package management.

<code>Usage: yum [options] COMMAND

List of Commands:

check          Check for problems in the rpmdb
check-update   Check for available package updates
clean          Remove cached data
deplist        List a package's dependencies
distribution-synchronization Synchronize installed packages to the latest available versions
downgrade      downgrade a package
erase          Remove a package or packages from your system
groupinfo      Display details about a package group
groupinstall   Install the packages in a group on your system
grouplist      List available package groups
groupremove    Remove the packages in a group from your system
help           Display a helpful usage message
history        Display, or use, the transaction history
info           Display details about a package or group of packages
install        Install a package or packages on your system
list           List a package or groups of packages
load-transaction load a saved transaction from filename
makecache      Generate the metadata cache
provides       Find what package provides the given value
reinstall      reinstall a package
repolist       Display the configured software repositories
resolvedep     Determine which package provides the given dependency
search         Search package details for the given string
shell          Run an interactive yum shell
update         Update a package or packages on your system
upgrade        Update packages taking obsoletes into account
version        Display a version for the machine and/or available repos.
</code>

One of the commands is for sure: <code>yum -v repolist</code> that can give the list of installed packages with associated info.
The repos are stored in /etc/yum.repos.d/ folder.

Thanks  

