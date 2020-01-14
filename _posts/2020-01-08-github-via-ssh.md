---
id: 12971
title: Using GitHub via SSH
date: 2020-01-08
author: taimani
layout: post
permalink: /github/using-github-via-ssh/
published: true
image: 
categories:
   - github
tags:
   - ssh
---
_Table of Contents:_

- [Adding ssh keys to the `ssh-agent`](#adding-ssh-keys-to-the-ssh-agent)
- [Adding a new SSH key to your GitHub account](#adding-a-new-ssh-key-to-your-github-account)
- [Cloning the repo](#cloning-the-repo)

---

>> This text will explain connecting to GitHub using SSH protocol.

You can connect and authenticate to remote servers and services using the SSH protocol. With SSH keys, no username or password are needed.

There are always two SSH keys:
* **private key** and 
* **public key**.

Before you even generate a new SSH keys, check to see if you have any existing SSH keys.

On Windows :



```
> dir C:\Users\uname\.ssh
Mode                LastWriteTime         Length Name
----                -------------         ------ ----
-a----        12/3/2019  11:17 AM           3389 id_rsa
-a----        12/3/2019  11:17 AM            746 id_rsa.pub
-a----        12/5/2019   2:30 PM           1193 known_hosts
```

`id_rsa` and `id_rsa.pub` are typical names for the private and the public keys, although you can rename it to anything you like.

Similar on Linux and Mac from the terminal you can check if you have any keys with this _one-liner_:
```
ls -al ~/.ssh
```

If you already have keys (these `ide_rsa` files) add them to the agent: `ssh-agent`.

## Adding ssh keys to the `ssh-agent`

The procedure on Windows:

Ensure first the `ssh-agent` is enabled. Check like this:

`Get-Service ssh-agent`

```
Status   Name               DisplayName
------   ----               -----------
Stopped  ssh-agent          OpenSSH Authentication Agent
```

If the agent is stopped you need to start it. You can start the `ssh-agent` service when you set _service **Startup type**_ to: **_Manual_**.

<img alt="ssh3" src="https://programming-review.com/wp-content/uploads/2020/01/ssh3.jpg">


`Start-Service ssh-agent`

```
Status   Name               DisplayName
------   ----               -----------
Running  ssh-agent          OpenSSH Authentication Agent
```


Then 
```
ssh-add C:\Users\uname\.ssh\id_rsa_intel
Identity added: C:\Users\dj\.ssh\id_rsa_intel C:\Users\dj\.ssh\id_rsa_intel)
```

Note the _**uname**_ represents the actual **_user name_**.

>>_If you don't have SSH keys, you can [generate](https://help.github.com/en/enterprise/2.16/user/github/authenticating-to-github/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent#generating-a-new-ssh-key) a new SSH key pair._

```
$ ssh-keygen -t rsa -b 4096 -C "your_email@example.com"
```

## Adding a new SSH key to your GitHub account

To configure your GitHub account to use your new (or existing) SSH keyS, you'll also need to add _the public key_ to your GitHub account.

Go to the your GitHub account [settings](https://github.com/settings/profile). _You need to be logged in._

<img alt="adding ssh key" src="https://programming-review.com/wp-content/uploads/2020/01/ssh2.jpg">

Click <kbd>New SSH key</kbd> button and add upload the key with the extension `.pub` (the public key).


## Cloning the repo
From now on, you can open your terminal and clone GitHub repos in SSH style like 
this:
```
git clone git@github.com:uname/pname.github.io.git
```
where **uname** and **pname** are _username_ and _project name_.

