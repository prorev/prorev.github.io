---
id: 12971
title: Using GitHub via SSH
date: 2024-05-27
author: taimane
layout: post
title: Managing Multiple GitHub Repositories with Different Private Keys on One Computer (Linux based)
permalink: /github/multi-github-repos-via-ssh/
published: true
image: 
categories:
   - github
tags:
   - ssh
   - linux
---

_Table of Contents:_
- [Introduction](#introduction)
- [Configuring SSH](#configuring-ssh)
- [Creating Multiple SSH Keys](#creating-multiple-ssh-keys)
- [Cloning Repositories](#cloning-repositories)
- [Connecting Repositories](#connecting-repositories)
- [Understanding Key Components of config file](#understanding-key-components-of-config-file)
- [SSH Agent and SSH Configuration File](#ssh-agent-and-ssh-configuration-file)
- [Generating SSH Keys](#generating-ssh-keys)
- [Adding SSH Keys to GitHub](#adding-ssh-keys-to-github)
- [Understanding the ~/.ssh folder](#understanding-the-ssh-folder)
- [Understanding the .git folder](#understanding-the-git-folder)
- [Conclusion](#conclusion)



## Introduction

On Ubuntu you can follow these steps to manage multiple GitHub repositories with different private keys on one computer.


## Configuring SSH

The SSH config file allows you to specify which key to use for which host. This is crucial when you have multiple GitHub accounts. Where is this file? It is in `~/.ssh/config` file

## Creating Multiple SSH Keys

To generate multiple SSH keys, use the following command for each key:

    ssh-keygen -t ed25519 -C "your_email@example.com" -f ~/.ssh/id_ed25519_github_account1

Repeat this process for each GitHub account, changing the filename and email accordingly.

Why I use ed25519?

Because this is a public-key signature system designed for high performance and security. It is part of the Edwards-curve Digital Signature Algorithm (EdDSA) and is based on the Twisted Edwards curve known as Curve25519. 

Here are some key points about Ed25519:

* Security: The algorithm uses a 256-bit elliptic curve, providing a high level of security that is currently considered secure against quantum computers.

* Performance: Ed25519 is optimized for performance and is faster than many other public-key signature systems. It is designed to be efficient both in terms of speed and computational resources, making it suitable for a wide range of applications.

* Simplicity: The design of Ed25519 avoids common pitfalls in elliptic curve cryptography, such as side-channel attacks, by incorporating constant-time operations and other security best practices.

* Compact Keys and Signatures: Ed25519 uses relatively small keys and signatures. The public key is 32 bytes, the private key is 64 bytes, and the signature is 64 bytes. This compact size is advantageous for storage and transmission.

* Wide Adoption: Ed25519 is widely adopted in modern cryptographic systems and protocols, including OpenSSH, GnuPG, and various implementations of TLS (Transport Layer Security).

## Cloning Repositories

When cloning repositories, use the alias defined in your SSH config file to ensure the correct key is used:


    git clone git@github-account1:username/repository1.git
    git clone git@github-account2:username/repository2.git

## Connecting Repositories

Define aliases and connect repositories using the following structure in your `~/.ssh/config` file:


    # Configuration for the first GitHub account
    Host github-account1
        HostName github.com
        User git
        IdentityFile ~/.ssh/id_ed25519_github_account1

    # Configuration for the second GitHub account
    Host github-account2
        HostName github.com
        User git
        IdentityFile ~/.ssh/id_ed25519_github_account2


## Understanding Key Components of config file

* Host: An alias for the SSH connection.
* HostName: The actual hostname you are connecting to (e.g., github.com).
* User: The username for the SSH connection (GitHub uses git).
* IdentityFile: The path to the private SSH key for this connection.

## SSH Agent and SSH Configuration File

SSH Agent manages your private keys during your session. Adding a key to the SSH agent can be done with:

    ssh-add ~/.ssh/id_ed25519_github_account1

SSH Configuration File ensures the correct key is used for each host. It is located at `~/.ssh/config` and defines settings for each connection alias.

## Generating SSH Keys

To generate an SSH key, use the ssh-keygen command. The -t option specifies the type of key. The ed25519 type is recommended for its security and performance as we already covered.


    ssh-keygen -t ed25519 -C "your_email@example.com" -f ~/.ssh/id_ed25519_github_account1

## Adding SSH Keys to GitHub

After generating the key, you need to add the public key to your GitHub account:

Copy the public key to your clipboard:

    

    cat ~/.ssh/id_ed25519_github_account1.pub

Go to GitHub, navigate to Settings > SSH and GPG keys, and add a new SSH key. Paste your public key and give it a recognizable title.

## Understanding the ~/.ssh folder

The `~/.ssh` folder stores your SSH keys and configuration files. Key files include:

    id_ed25519: Your private key.
    id_ed25519.pub: Your public key.
    config: Your SSH configuration file.

This folder is crucial for managing your SSH keys and should be kept secure.

## Understanding the .git folder

The `.git` folder is a hidden directory where `user.name` and `user.email` are stored inside the `config` file. Yes, there is a config file even inside the `.git` folder.

`.git` folder is the heart of every Git project and contains all the information required to manage the repository's version control.

Contents of the `.git` Folder:

* Hooks: This directory contains scripts that are triggered by certain Git events, such as pre-commit or post-update.

* Info: This directory stores global exclude patterns, which are used to ignore files in every Git repository on your system.

* Objects: Git stores all the data for your repository in this directory. It contains all the files and their versions, as well as any other objects that Git needs to maintain, such as commit history and tree structures.

* Refs: This directory stores references to commits, branches, tags, and other objects in the repository. Each reference is stored as a file in this directory.

* Config: This file contains configuration settings for the repository, such as user information, remote repository URLs, and other settings.

* Description: This file contains a short description of the repository, which can be displayed by some Git hosting services.

* HEAD: This file points to the currently checked-out branch in the repository.

* Index: This file serves as a staging area where changes are placed before they are committed to the repository.

* Logs: This directory contains logs of changes made to the repository, including commit history and other relevant information.

Understanding the contents of the .`git` folder is essential for managing and troubleshooting Git repositories effectively. While most users interact with Git through high-level commands, having a basic understanding of the repository's internal structure can help diagnose issues and optimize workflows.

## Conclusion

Following this guide, you can efficiently manage multiple GitHub repositories with different SSH keys on one computer. This setup ensures secure and organized handling of your various projects and accounts.