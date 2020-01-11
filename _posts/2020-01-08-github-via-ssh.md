---
id: 12971
title: Using GitHub via ssh
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
This text will explain connecting to GitHub using SSH protocol.

You can connect and authenticate to remote servers and services using the SSH protocol. With SSH keys, no username or password are needed.

Before you even generate a new SSH key, you can check to see if you have any existing SSH keys.

On Windows :

`dir C:\Users\uname\.ssh`

```
Mode                LastWriteTime         Length Name
----                -------------         ------ ----
-a----        12/3/2019  11:17 AM           3389 id_rsa
-a----        12/3/2019  11:17 AM            746 id_rsa.pub
-a----        12/5/2019   2:30 PM           1193 known_hosts
```

Similar on Linux and Mac:

`ls -al ~/.ssh`

Now you need to add **SSH key** to the agent (ssh-agent).


## Adding ssh key to the agent

On Windows:

If you have GitHub for Windows installed, you can use it to clone repositories and not deal with SSH keys. It also comes with the Git Bash tool, which is the preferred way of running git commands on Windows.

Ensure ssh-agent is enabled check:

`Get-Service ssh-agent`
```
Status   Name               DisplayName
------   ----               -----------
Stopped  ssh-agent          OpenSSH Authentication Agent
```

If the agent is stopped you need to start it. You can start the **ssh-agent** service if you have `ssh-agent` service set on manual.

<img alt="ssh3" src="/wp-content/uploads/2020/01/ssh3.jpg">


`Start-Service ssh-agent`

```
Status   Name               DisplayName
------   ----               -----------
Running  ssh-agent          OpenSSH Authentication Agent
```


Then 

```
ssh-add C:\Users\dj\.ssh\id_rsa_intel
Identity added: C:\Users\dj\.ssh\id_rsa_intel (C:\Users\dj\.ssh\id_rsa_intel)
```




One could install Git for Windows and subsequently run ssh-add:



After you've checked for existing SSH keys, you can generate a new SSH key to use for authentication, then add it to the ssh-agent.

Adding a new SSH key to your GitHub account→
To configure your GitHub account to use your new (or existing) SSH key, you'll also need to add it to your GitHub account.

Testing your SSH connection→
After you've set up your SSH key and added it to your GitHub account, you can test your connection.

Working with SSH key passphrases→
You can secure your SSH keys and configure an authentication agent so that you won't have to reenter your passphrase every time you use your SSH keys.

In here I will set my setup how to fix,...

>You don't have any public SSH keys in your GitHub account. You can add a new public key, or try cloning this repository via 


