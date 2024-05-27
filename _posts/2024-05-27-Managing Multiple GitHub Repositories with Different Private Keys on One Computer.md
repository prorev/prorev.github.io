---
published: true
layout: post
title: Managing Multiple GitHub Repositories with Different Private Keys on One Computer
---



## Introduction
Managing multiple GitHub repositories with different private keys on one computer can be streamlined by configuring SSH settings appropriately. This guide will walk you through setting up and using SSH config files, creating multiple public and private keys, cloning repositories, and connecting them properly.


When working with multiple GitHub repositories, particularly those associated with different accounts, managing SSH keys becomes essential. This guide explains how to configure your environment to handle multiple SSH keys efficiently.

## Configuring SSH

The SSH config file allows you to specify which key to use for which host. This is crucial when you have multiple GitHub accounts.
3. Creating Multiple SSH Keys

To generate multiple SSH keys, use the following command for each key:

bash

ssh-keygen -t ed25519 -C "your_email@example.com" -f ~/.ssh/id_ed25519_github_account1

Repeat this process for each GitHub account, changing the filename and email accordingly.
4. Cloning Repositories

When cloning repositories, use the alias defined in your SSH config file to ensure the correct key is used:

bash

git clone git@github-account1:username/repository1.git
git clone git@github-account2:username/repository2.git

5. Connecting Repositories

Define aliases and connect repositories using the following structure in your ~/.ssh/config file:

plaintext

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

6. Understanding Key Components

    Host: An alias for the SSH connection.
    HostName: The actual hostname you are connecting to (e.g., github.com).
    User: The username for the SSH connection (GitHub uses git).
    IdentityFile: The path to the private SSH key for this connection.

7. SSH Agent and SSH Configuration File

SSH Agent manages your private keys during your session. Adding a key to the SSH agent can be done with:

bash

ssh-add ~/.ssh/id_ed25519_github_account1

SSH Configuration File ensures the correct key is used for each host. It is located at ~/.ssh/config and defines settings for each connection alias.
8. Generating SSH Keys

To generate an SSH key, use the ssh-keygen command. The -t option specifies the type of key. The ed25519 type is recommended for its security and performance.

bash

ssh-keygen -t ed25519 -C "your_email@example.com" -f ~/.ssh/id_ed25519_github_account1

9. Adding SSH Keys to GitHub

After generating the key, you need to add the public key to your GitHub account:

    Copy the public key to your clipboard:

    bash

    cat ~/.ssh/id_ed25519_github_account1.pub

    Go to GitHub, navigate to Settings > SSH and GPG keys, and add a new SSH key. Paste your public key and give it a recognizable title.

10. Understanding the ~/.ssh Folder

The ~/.ssh folder stores your SSH keys and configuration files. Key files include:

    id_ed25519: Your private key.
    id_ed25519.pub: Your public key.
    config: Your SSH configuration file.

This folder is crucial for managing your SSH keys and should be kept secure.

By following this guide, you can efficiently manage multiple GitHub repositories with different SSH keys on one computer. This setup ensures secure and organized handling of your various projects and accounts.