---
id: 2987
title: Disable Password Authentication on Ubuntu
date: 2016-07-29 14:02:58
author: taimane
layout: post
permalink: /linux/disable-password/
published: true
categories:
   - linux
tags:
   - authentication
   - ubuntu
   - linux
   - ssh
   - username
   - password
   - PKA
---
 
 
_Table of Contents_:
- [Intro](#intro)
- [Steps to disable username password auth](#steps-to-disable-username-password-auth)
- [sshd_config config file](#sshd_config-config-file)
- [VIM commands to edit the `sshd_config` file](#vim-commands-to-edit-the-sshd_config-file)
 
 
You need to make your Linux dedicated server or virtual private server (VPS) more reliable.
 
## Intro
 
There is PKA ([Public Key Authentication](https://programming-review.com/linux/pub-key-auth/)).
 
Using the PKA you don't need to use a username password to get into your server, you just use private and public keys.
 
 
## Steps to disable username password auth
 
Here is how you can disable username password authentication for Ubuntu in a few simple steps.
 
**Step 1**. Go to the file `/etc/ssh/sshd_config`
 
**Step 2**. Find the line where it reads:
 
```bash
#PasswordAuthentication yes
```
 
![auth](/wp-content/uploads/2021/11/pka1.jpg)
 
**Step 3**. Replace this line with the new line:
```bash
PasswordAuthentication no
```
 
![auth](/wp-content/uploads/2021/11/pka2.jpg)
 
**Step 4**. Restart the ssh server.
 
```bash
sudo service ssh restart
```
 
or:
 
```bash
sudo restart ssh
```
 
This way you will only have public key authentication, and username password authentication will be disabled.

As a consequence of your actions you will get this message if you try to authenticate using Putty: 

![auth](/wp-content/uploads/2021/11/pka3.jpg)

**Step 4**: Make sure your `/etc/ssh/sshd_config` has:

```bash
ChallengeResponseAuthentication no
```
If this field would be `yes` you can still use password to login.

## sshd_config config file
 
Here is the complete content of the `/etc/ssh/sshd_config` file once we set PKA and disabled username password auth:
 
```bash
# Package generated configuration file
# See the sshd_config(5) manpage for details
 
# What ports, IPs and protocols we listen for
Port 22
# Use these options to restrict which interfaces/protocols sshd will bind to
#ListenAddress ::
ListenAddress 0.0.0.0
Protocol 2
# HostKeys for protocol version 2
HostKey /etc/ssh/ssh_host_rsa_key
HostKey /etc/ssh/ssh_host_dsa_key
HostKey /etc/ssh/ssh_host_ecdsa_key
HostKey /etc/ssh/ssh_host_ed25519_key
#Privilege Separation is turned on for security
UsePrivilegeSeparation yes
 
# Lifetime and size of ephemeral version 1 server key
KeyRegenerationInterval 3600
ServerKeyBits 1024
 
# Logging
SyslogFacility AUTH
LogLevel INFO
 
# Authentication:
LoginGraceTime 120
PermitRootLogin yes
StrictModes yes
 
RSAAuthentication yes
PubkeyAuthentication yes
#AuthorizedKeysFile     %h/.ssh/authorized_keys
 
# Don't read the user's ~/.rhosts and ~/.shosts files
IgnoreRhosts yes
# For this to work you will also need host keys in /etc/ssh_known_hosts
RhostsRSAAuthentication no
# similar for protocol version 2
HostbasedAuthentication no
# Uncomment if you don't trust ~/.ssh/known_hosts for RhostsRSAAuthentication
#IgnoreUserKnownHosts yes
 
# To enable empty passwords, change to yes (NOT RECOMMENDED)
PermitEmptyPasswords no
 
# Change to yes to enable challenge-response passwords (beware issues with
# some PAM modules and threads)
ChallengeResponseAuthentication no
 
# Change to no to disable tunnelled clear text passwords
PasswordAuthentication no
 
# Kerberos options
#KerberosAuthentication no
#KerberosGetAFSToken no
#KerberosOrLocalPasswd yes
#KerberosTicketCleanup yes
 
# GSSAPI options
#GSSAPIAuthentication no
#GSSAPICleanupCredentials yes
 
X11Forwarding yes
X11DisplayOffset 10
PrintMotd no
PrintLastLog yes
TCPKeepAlive yes
#UseLogin no
 
#MaxStartups 10:30:60
#Banner /etc/issue.net
 
# Allow client to pass locale environment variables
AcceptEnv LANG LC_*
 
Subsystem sftp /usr/lib/openssh/sftp-server
 
# Set this to 'yes' to enable PAM authentication, account processing,
# and session processing. If this is enabled, PAM authentication will
# be allowed through the ChallengeResponseAuthentication and
# PasswordAuthentication.  Depending on your PAM configuration,
# PAM authentication via ChallengeResponseAuthentication may bypass
# the setting of "PermitRootLogin without-password".
# If you just want the PAM account and session checks to run without
# PAM authentication, then enable this but set PasswordAuthentication
# and ChallengeResponseAuthentication to 'no'.
UsePAM yes
```
 
## VIM commands to edit the `sshd_config` file
 
* Exit VIM without saving: `:q! [Enter]`
* Exit VIM and save changes: `:x [Enter]`
* VIM enter insert mode: `i`
* VIM enter the command mode: `[Esc]`

