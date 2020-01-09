---
id: 12971
title: USING GITHUB VIA SSH
date: 2020-01-08
author: taimani
layout: post
permalink: /using-github-via-ssh/
published: true
image: 
posno: 
categories:
   - github
tags:
   - ssh
---
This text will explain connecting to GitHub repository using SSH protocol.

You can clone github repo with SSH keys, and no username or password are needed:

```
git clone git@github.com:[username]/[reponame].github.io.git
```

where `[username]` is your GitHub username.

But before you do that you need to have SSH key set on GitHub.

<img class="alignnone" title="ssh1" src="/uploads/2020/01/ssh1.jpg" alt="ssh1"  />

To do that make sure you have on Windows:

`dir C:\Users\[uname]\.ssh`

```
Mode                LastWriteTime         Length Name
----                -------------         ------ ----
-a----        12/3/2019  11:17 AM           3389 id_rsa
-a----        12/3/2019  11:17 AM            746 id_rsa.pub
-a----        12/5/2019   2:30 PM           1193 known_hosts
```

where `[uname]` is your Windows username.

Similar on Linux and Mac you may check the same:

`ls -al ~/.ssh`

    If you don't have the `id_rsa` and `id_rsa.pub` you would have to generate them like this: 

    `ssh-keygen -t rsa -b 4096 -C "your.email@address"`


Now you need to add **SSH key** to the agent (ssh-agent).

## Adding ssh key to the agent

On Windows:

Ensure ssh-agent is enabled check:

`Get-Service ssh-agent`
```
Status   Name               DisplayName
------   ----               -----------
Stopped  ssh-agent          OpenSSH Authentication Agent
```

If the agent is stopped you need to start it.

You can start the **ssh-agent** service if you have `ssh-agent` service set on manual.


<img class="alignnone" title="ssh3" src="/uploads/2020/01/ssh3.jpg" alt="ssh3"  />


`Start-Service ssh-agent`

```
Status   Name               DisplayName
------   ----               -----------
Running  ssh-agent          OpenSSH Authentication Agent
```


And finally:

```
ssh-add C:\Users\[uname]\.ssh\id_rsa
```

This would add the RSA key to the user and you will be able to user and you will be able to clone any repo.

The next step is to add the public RSA key your GitHub account.
>Settings > SSH and GPG keys

<img class="alignnone" title="ssh2" src="/uploads/2020/01/ssh2.jpg" alt="ssh2"  />


After that you can clone the repo:
```
git clone git@github.com:[username]/[reponame].github.io.git
```
