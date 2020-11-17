---
id: 13353
title: Bearer Token
date: 2020-11-17
author: taimane
layout: post
permalink: /auth/bearer
published: true
image: 
categories:
   - auth
tags:
   - oauth
---
In OAuth 1, requests can be made in both HTTP and HTTPS, while in OAuth 2.0 requests HTTPS connection (SSL/TLS).

In OAuth 1 to grab the access token, a public and private string are needed. The private string is used when signing the request, and never sent across the wire.

![oauth 2](/wp-content\uploads\2020\11\oauth2.jpg)

*Bearer Token* is OAuth 2 API **single string** which acts as the authentication of the API request, sent as part of HTTP *Authorization* header. The string is meaningless to clients, and may vary in length.

Bearer tokens are easy to implement when making API requests, comparing to cryptographic signing of each request.

The downside to Bearer tokens is that there is nothing preventing other apps from using a Bearer token if it can get access to it.

The Bearer Token is created by the Authentication server. When a user authenticates the application (client), the authentication server then generates a Bearer token.

The Bearer Token isn't random; it is created based upon the user giving you access and the client your application getting access.

## Access Token

The whole idea of Bearer token is to get an Access token. 

In order to access an API you need an Access Token. Access tokens are short lived (around an hour). You use the Bearer token to get a new Access token. 

To get an access token you send the Authentication server this bearer token along with your client id. This way the server knows that the application using the bearer token is the same application that the bearer token was created for. Example: I can't just take a bearer token created for your application and use it with my application it wont work because it wasn't generated for me.

## How it works

A Bearer token is part of *Authorization* header of every HTTP Request. For example:

```
POST /tmp?bid=123 HTTP/2.0
Host: blah.com
Authorization: Bearer AABBCCDDEEFFGG
Content-Type: application/x-www-form-urlencoded
User-Agent: ...
```

The string "AABBCCDDEEFFGG" in the example above is the Bearer token.

