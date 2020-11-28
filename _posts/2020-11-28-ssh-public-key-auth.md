---
id: 2987
title: Public key authentication from Windows to Linux
date: 2016-07-29 14:02:58
author: taimane
layout: post
permalink: /linux/pub-key-auth/
published: true
categories:
   - linux
tags:
   - auth
   - ssh
   - vpn
---
- [About Public Key Authentication)](#about-public-key-authentication)
- [Generate SSH keys on Windows](#generate-ssh-keys-on-windows)
- [Move public key to VPN (Linux server)](#move-public-key-to-vpn-linux-server)
- [Disable username password authentication](#disable-username-password-authentication)
- [Appendix: Typical `sshd` commands](#appendix-typical-sshd-commands)
- [Appendix: Setting Putty to use PKA](#appendix-setting-putty-to-use-pka)

## About Public Key Authentication)

Public key authentication to connect to VPN Linux server means you don't have to use passwords anymore when using `ssh`. 

You can fully disable username password authentication later.

![Public Key Authentication](/wp-content/uploads/2020/11/pka.jpg)

With public key auth there are two keys:

* private key
* public key

And you need to create (have) both.

## Generate SSH keys on Windows

Since I am on Windows here is how to generate the keys:

```
$ ssh-keygen -t rsa -b 4096 -C "your_email@example.com" -f folder 
```

*Out:*
```
-a----        11/6/2020  12:45 AM           1675 id_rsa
-a----        11/6/2020  12:45 AM            401 id_rsa.pub
```

If you cannot recall the full line you can just run:

```
ssh-keygen
```


## Move public key to VPN (Linux server)

Keep the private key secret and store it on your Windows computer from where you connect to the remote VPN server. Public key is to be set inside:
```
~/.ssh/authorized_keys
```

We create `authorized_keys` if this is not present already.

```
mkdir -p ~/.ssh; touch ~/.ssh/authorized_keys
```
The command will create folder `.ssh` if not present and `~/.ssh/authorized_keys` if not present.

> `touch` is not able to create directories, you need `mkdir` for that. `mkdir` has the useful `-p` switch (parents) to create a directory structure.

Copy the content of public key to:

`~/.ssh/authorized_keys`

Public key has the `.pub` extension.

## Disable username password authentication

The trick is to alter the `/etc/ssh/sshd_config` file.

Navigate the following lines:
```
# To disable tunneled clear text passwords, change to no here!
# PasswordAuthentication no
# PermitEmptyPasswords no
```

And uncomment the `PasswordAuthentication no`

```
# To disable tunneled clear text passwords, change to no here!
PasswordAuthentication no
# PermitEmptyPasswords no
```

Then restart the `sshd` service.
```
service sshd restart
```

## Appendix: Typical `sshd` commands

```
service sshd status
service sshd stop
service sshd start
service sshd restart
```

## Appendix: Setting Putty to use PKA

You need to have two more files inside `.ssh` folder on Windows generated based on 
`id_rsa` and `id_rsa.pub`.

```
-a----        11/6/2020   1:38 AM           1464 private.putty.ppk
-a----        11/6/2020   1:36 AM            477 public.putty.ppk
```

Create them using PuttyGen. Steps:
* Conversions => Import Key => `id_rsa` key on you computer
* Click "Save Private Key" without a passphrase
* Choose folder for `.ppk` keys same as for `id_rsa` and `id_rsa.pub`.
