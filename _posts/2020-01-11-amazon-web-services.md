---
id: 358
title: Amazon Web Services in short questions and answers
date: 2011-05-18 16:58:32
author: taimane
layout: post
permalink: /amazon-web-services/
published: true
categories:
   -
tags:
   -
---
<img class="size-full wp-image-360 alignleft" title="amazon" src="https://programming-review.com/wp-content/uploads/2011/05/amazon.jpg" alt="" width="294" height="172" />



Amazon Web Services (AWS) is a set of web services for:

* web storage

* computing power

* messaging system

* payment system

* database, ...

<blockquote>

<strong>The idea of AWS is pay only for what you use. </strong></blockquote>

AWS  can be accessed by anyone with an Amazon.com account and a credit card.

You can experiment with the services or using them as a platform for web applications serving thousands of users, you rent only the infrastructure you need and only when you need it.



<strong>Why are AWS better than traditional dedicated web hosting?</strong>

Because they can provide the cost-effective infrastructure without getting you involved in managing hardware. This also significantly reduce the initial investments. AWS has all you need for a good webhosting plan + additional services integrated into your hosting.



<strong>Can I use some AWS together with my (dedicated) hosting?</strong>

Yes, this is possible. It is a very good hosting practice to combine some AWS services with the existing hosting.



<strong>OK. So what are the major AWS services?</strong>

<h4>Amazon Simple Storage Service: S3</h4>

Amazon Simple Storage Service (S3) offers secure online storage space for any kind of data, providing an alternative to building, maintaining, and backing-up your own storage systems. It makes your data accessible to any other applications or individuals you allow from anywhere on the Web. There are no limits on how much data you can store in the service, how long you can store it, or on how much bandwidth you can use to transfer or publish it.

S3 is a scalable, distributed system that stores your information reliably across multiple Amazon data centers, and it is able to serve it quickly to massive audiences. Its storage application programming interface (API) is deliberately simple and makes no assumptions about the nature of the data you are storing. This simplicity means you can maintain complete control over how your data is represented in the service.

<h4>Amazon Elastic Compute Cloud: EC2</h4>

Amazon Elastic Compute Cloud (EC2) makes it possible to run 1—many virtual Linux servers on demand, providing as many computers as you need to process your data or run your web application. EC2 gives you full control over each server (root access) to the operating system. You can configure firewalls to manage network access, and to install any software you please. Once you have set up an EC2 server the way you like it, you can save it permanently as a server image —AMI (Amazon Machine Instance). You can then launch new servers from this image to create virtual machines that are preconfigured and ready to do your bidding.

<h4>Amazon Simple Queue Service: SQS</h4>

Amazon Simple Queue Service (SQS) delivers short messages between any computers or systems with access to the Internet, allowing the components of your distributed web applications to communicate reliably without you having to build or maintain your own messaging system. With SQS you can send an unlimited number of messages via an unlimited number of message queues, and you can configure the performance characteristics and access permissions for each queue. The service uses a message locking and timeout mechanism that helps prevent messages from being delivered more than once, while still ensuring they will be delivered despite any component failures or network dropouts.

SQS is implemented as a distributed application within Amazon. Your messages are stored redundantly across multiple servers and data centers. The service's API allows you to send and receive messages, and to control their full life cycle.

<h4>Flexible Payments Service: FPS</h4>

Amazon Flexible Payments Service (FPS) transfers money between individuals or companies that have Amazon Payments accounts, allowing you to build applications that provide an online store or that implement a marketplace between customers and third-party vendors. With FPS you can make payments from traditional sources, such as credit cards and bank accounts, or from sources internal to Amazon Payments accounts that have lower fees and are designed to make micro-payment transactions feasible.

All transactions need to be authorized by everyone involved in the transaction. The parties involved can impose detailed constraints on transactions, such as how and when transactions can be performed, how much money can be transferred, and who can send and receive the funds.

Customers interact with your FPS application through an Amazon Payments gateway using their Amazon.com account. Because the transactions are mediated by Amazon, your customers are not required to provide you with their personal banking information, and you do not have the burden of securely storing this highly sensitive information.

<h4>Amazon SimpleDB</h4>

Amazon SimpleDB (SimpleDB) stores small pieces of textual information in a simple database structure that is easy to manage, modify and search. If your application relies on a relatively simple database, this service can replace your traditional relational database (RDBMS) server leaving you with one less piece of infrastructure to purchase and maintain.

SimpleDB is designed to minimize the complexity and administrative overhead involved in managing your data. It does not require a pre-defined schema so you can alter the structure and content of your database whenever you need to. It indexes every piece of information you store so all your queries run quickly. And it stores your data securely, redundantly and safely within Amazon's network of data centers.  

