---
id: 2603
title: WordPress security is based on secure written APIs
date: 2016-01-15 14:51:35
author: taimane
layout: post
permalink: /wordpress-security-apis/
published: true
categories:
   -
tags:
   -
---
Together with the WordPress Core API, following WordPress APIs are the most beneficial for WordPress security:
(For the full list of wordPress APIs check <a rel="nofollow" href="https://codex.wordpress.org/WordPress_APIs)">WordPress APIs</a>)

<strong>The Database API</strong>

Database API, added in WordPress 0.71, provides the correct method for accessing data as named values which are stored in the database layer. If you access the database some other way this is may be the security risk.

<strong>Filesystem API</strong>

The Filesystem API25, added in WordPress 2.626, was originally created for WordPress' own automatic updates feature. The Filesystem API abstracts out the functionality needed for reading and writing local files to the filesystem to be done securely, on a variety of host types.

It does this through the WP_Filesystem_Base class, and several subclasses which implement different ways of connecting to the local filesystem, depending on individual host support. Any theme or plugin that needs to write files locally should do so using the WP_Filesystem family of classes.

This would be the correct way of accessing the files in WordPress, however, this may not be true, and usually this may not be the case.

<strong>HTTP API</strong>

The HTTP, added in WordPress 2.728 and extended further in WordPress 2.8, standardizes the HTTP requests for WordPress. The API handles cookies, gzip encoding and decoding, chunk decoding (if HTTP 1.1), and various other HTTP protocol implementations. The API standardizes requests, tests each method prior to sending, and, based on your server configuration, uses the appropriate method to make the request.
Permissions and current user API

<strong>The permissions and current user API</strong>

This is a set of functions which will help verify the current user's permissions and authority to perform any task or operation being requested, and can protect further against unauthorized users accessing or performing functions beyond their permitted capabilities.

Thanks.  
