---
id: 2987
title: Linux networking terms and commands
date: 2016-07-29 14:02:58
author: taimane
layout: post
permalink: /linux/networking/
published: true
categories:
   - linux
tags:
   - networking
   - subnets
   - gateways
   - bridges
---

_Table of Contents:_

- [Networking commands](#networking-commands)
- [Hostname](#hostname)
- [Check your IP Address](#check-your-ip-address)
  - [Private IP Address ranges](#private-ip-address-ranges)
  - [Ipcalc](#ipcalc)
  - [`/24` subnet](#24-subnet)
  - [DNS](#dns)
- [Ping](#ping)
- [Route](#route)
  - [Bridges (let the two become one)](#bridges-let-the-two-become-one)
  - [Gateways (outgoing networking paths)](#gateways-outgoing-networking-paths)
- [Dig](#dig)
- [Arp](#arp)
- [Netstat](#netstat)
- [Tcpdump](#tcpdump)
- [Traceroute](#traceroute)
- [Nslookup](#nslookup)
- [Appendix (OpenVPN)](#appendix-openvpn)

![2,3,4, and 5 levels of protocols](/wp-content/uploads/2020/11/ipsec.jpg)

## Networking commands
One can argue that to understand a network you just need few commands to ask:

command | description
--- | ---
hostname | Display the name of the local system
ip | Display and configure network interfaces
dig | DNS lookup utility
ping | Perform a simple network connectivity test
arp | Display or modify the IP-to-MAC address-translation tables
netstat | Network usage statistics
route | Display or modify the static routing tables
traceroute | Determine the route to a specified target host
tcpdump | Dump network traffic (not just the tcp protocol)
nslookup | IP address-to-hostname lookup and other translations by DNS


In here we will explain in some detail some of these commands to create a big picture.

## Hostname

`hostname` actually is used to set or display the system's name. It goes in tandem with other similar commands:

command | description
--- | ---
hostname | Show or set the system's host name
domainname | Show or set the system's NIS/YP domain name
ypdomainname | Show or set the system's NIS/YP domain name
nisdomainname | Show or set the system's NIS/YP domain name
dnsdomainname | Show the system's DNS domain name


## Check your IP Address

One of the first items you have to check for the host you are running is to get the IP address.

On a Linux system start typing `ip a` to get the IP address of the system. The `ifconfig` command is not reliable any more.

You will see all the interfaces, and usually there will be the `eth0` interface connected with your IP address.

To check if interface is UP type this:
```
cat /sys/class/net/eth0/operstate
```


### Private IP Address ranges

IP addresses (IPv4) vary from 0.0.0.0 to 255.255.255.255 but not all are meant to be public. There is so called *Private Internet*:

    10.0.0.0/8
    from 10.0.0.0 to 10.255.255.255

    172.16.0.0/12 
    from 172.16.0.0 to 172.31.255.255

    192.168.0.0/16 
    from 192.168.0.0 to 192.168.255.255



### Ipcalc

`ipcalc` provides a simple IP information calculator. 

Simple install it:

`apt install ipcalc`

*Example:* Calculate netmask (CIDR prefix)

```
ipcalc 10.8.0.4/30
```

*Out:*
```
Address:   10.8.0.4             00001010.00001000.00000000.000001 00
Netmask:   255.255.255.252 = 30 11111111.11111111.11111111.111111 00
Wildcard:  0.0.0.3              00000000.00000000.00000000.000000 11
=>
Network:   10.8.0.4/30          00001010.00001000.00000000.000001 00
HostMin:   10.8.0.5             00001010.00001000.00000000.000001 01
HostMax:   10.8.0.6             00001010.00001000.00000000.000001 10
Broadcast: 10.8.0.7             00001010.00001000.00000000.000001 11
Hosts/Net: 2                     Class A, Private Internet
```

### `/24` subnet

Very common subnet is **/24** subnet

```
ipcalc 192.168.1.0/24
```
This represents all the IP addresses after the last dot.



**Out:**
```
Address:   192.168.1.0          11000000.10101000.00000001. 00000000
Netmask:   255.255.255.0 = 24   11111111.11111111.11111111. 00000000
Wildcard:  0.0.0.255            00000000.00000000.00000000. 11111111
=>
Network:   192.168.1.0/24       11000000.10101000.00000001. 00000000
HostMin:   192.168.1.1          11000000.10101000.00000001. 00000001
HostMax:   192.168.1.254        11000000.10101000.00000001. 11111110
Broadcast: 192.168.1.255        11000000.10101000.00000001. 11111111
Hosts/Net: 254                   Class C, Private Internet
```

### DNS

Domain Name System (DNS) means there are:

* DNS servers and
* DNS clients

*DNS server* help us provide the IP address of the server based on saver human readable name.

*DNS client* are pretty much every computer in the planet that accesses the Internet.

> For example: programming-review.com would translate to 104.28.15.92 ip address

We can get the previous info using the `dig` command:

*Example:*
```
dig programming-review.com
```

*Out:*
```
; <<>> DiG 9.10.3-P4-Debian <<>> programming-review.com
;; global options: +cmd
;; Got answer:
;; ->>HEADER<<- opcode: QUERY, status: NOERROR, id: 17599
;; flags: qr rd ra; QUERY: 1, ANSWER: 3, AUTHORITY: 0, ADDITIONAL: 1

;; OPT PSEUDOSECTION:
; EDNS: version: 0, flags:; udp: 512
;; QUESTION SECTION:
;programming-review.com.                IN      A

;; ANSWER SECTION:
programming-review.com. 299     IN      A       104.28.15.92
programming-review.com. 299     IN      A       104.28.14.92
programming-review.com. 299     IN      A       172.67.133.194

;; Query time: 28 msec
;; SERVER: 8.8.8.8#53(8.8.8.8)
;; WHEN: Sat Dec 05 14:38:03 EET 2020
;; MSG SIZE  rcvd: 99
```

Linux DNS client has a file called `resolv.conf`. This file contains the names of DNS servers in use.
If you don't know what to put inside `resolv.conf` set famous Google DNS servers:

```
nameserver 8.8.8.8
nameserver 8.8.4.4
```

> Google Public DNS started to work at 3 December 2009, in an effort described as "making the web faster and more secure".

> You may also add IPv6 DNS servers into `resolv.conf`


## Ping

`ping` command sends `ICMP ECHO_REQUEST` to network hosts checking if they are alive.

```
ping www.google.com
```



## Route 

`route` command shows or alter the kernel the IP routing table. 

To list the routing table you may use these variations:
```
route -n
; route -rn
; ip route list
```
> To make sure you after the restart you keep the routing instruction put your routing commands into `rc.local`.
> 
> By default `rc.local` is empty. This script is executed at the end of each multiuser runlevel at boot time. It's the last script that will run as part of the startup process.


### Bridges (let the two become one)

A bridge is a way to connect two _ethernet_ segments together in a protocol independent way. Packets are forwarded based on ethernet (MAC) address, rather than IP address.

This means packets are forwarded like in a router. To create bridges you need to use `brctl` commands found in bridge-utils package:

```
# debian based
apt install bridge-utils
```

`brctl` is used to set up, maintain, and inspect the ethernet bridge configuration in the linux kernel.

An ethernet bridge is a device commonly used to connect different networks of ethernets together, so that these ethernets will appear as one ethernet to the participants.

### Gateways (outgoing networking paths)

If you use `route -n` command you may noticed the gateway column. Similarly the `ip route show` command. The part after _via_ is the gateway.

```
# ip route show

default via 85.80.130.1 dev eth0
85.80.130.0/24 dev eth0 proto kernel scope link src 85.80.130.120
```

> You probable heard for the _default gateway_. A default gateway is the IP of the router that sits between your home network and rest of the Internet. It is the IP address where all the traffic is directed.

## Dig

`dig` is a command line DNS querying to get info about domain name resolution. It is standard DNS tool part of *Bind DNS server*.

To install:
```
apt install dnsutils
```
> On Centos search for *bind-utils*.

## Arp

ARP stands for Address Resolution Protocol, which is used to find the MAC address of a network host sitting on a given IPv4 address.

`arp` command can add entries to the table, delete one or display the current ARP table. 

## Netstat

`netstat` command is to monitor system TCP/IP network activity. It provides data about network activity and can provide a summary information for the recent past.

Without arguments, `netstat` lists all active network connections on a host. This can be a quite long list so you usually use pipes.


To get a summary of the network interfaces:
```
netstat -i
```
To get statistics for each network protocol (cumulative since the last boot):

```
netstat -s
```

## Tcpdump

`tcpdump` has long been the industry-standard sniffer, and allows you to examine the headers of TCP/IP packets. 

Tools like Wireshark or TShark tools are just more advanced tcpdump based tools.

Using `tcpdump` you can find traffic by:
* Source or Destination IP / IPv6 
* Network
* Port (port ranges)
* Protocol
* Port Ranges
* Packet Size
* TCP Flags
* HTTP request fields
* ...

_Example:_
```
tcpdump -i eth0 -nn -s0 -v port 22
```

_Comments:_

`-i` : interface select

`-nn` : do not resolve hostnames and ports (fast)

`-s0` : snap length to unlimited 

`-v` : verbose, use `-vv` for more verbose

`port 22` : just this port

## Traceroute

Use the `traceroute` to:

* discover routing paths on your network
* get how many hops does it take to reach your destination IP
* find in-between routers 
* identify bottlenecks
* detect if website is multihomed

_Example:_

```
traceroute google.com
```

## Nslookup

Use Nslookup ("Name Server Lookup") toget info from DNS server. 

_Example:_

```
nslookup google.com
```


## Appendix (OpenVPN)

The holy ~~grale~~ grape of networking is OpenVPN. At least I would say if you can configure OpenVPN both client end server you reached the milestone.

There are OpenVPN client and server, there are TUN and TAP devices, there are TCP and UDP protocols and there are port numbers.

Client and server paradigm you know from before, these are just two ~~friends~~ that communicate.

Check this [more detailed OpenVPN intro](/protocols/openvpn).
