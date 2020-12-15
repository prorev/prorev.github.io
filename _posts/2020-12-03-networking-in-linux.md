---
id: 2987
title: Linux networking terms
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

![Protocols](/wp-content/uploads/2020/11/ipsec.jpg)

## Check your IP Address

One of the first items you have to check for the host you are running is to get the IP address.

On a Linux system start typing `ip a` to get the IP address of the system. The `ifconfig` command is not reliable any more.

You will see all the interfaces, and usually there will be the `eth0` interface connected with your IP address.

To check if interface is UP type this:
```
cat /sys/class/net/eth0/operstate
```


### Private IP Address ranges

IP addresses (IPv4) vary from 0.0.0.0 to 255.255.255.255 but not all are meant to be public. Next are the IP addresses of *Private Internet*:

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

## DNS

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



Linux DNS client has a file called `resolv.conf`. This file contains the names of DNS servers, client should ask for help.

Typical `resolv.conf` may look like:

```
# Famous Google DNS servers
nameserver 8.8.8.8
nameserver 8.8.4.4
```

> Google Public DNS started to work at 3 December 2009, in an effort described as "making the web faster and more secure".

> You may also add IPv6 DNS servers into `resolv.conf`

## What is inside rc.local?


## Routers

Display routes

```
route -n
```
Kernel IP routing table. Destination Gateway Genmask Flags Metric Ref Use Iface. ...

```
netstat -rn. 
```

```
ip route list
```

192.168.0.0/24 dev eth0 proto kernel scope link src 192.168.0.103.

## Bridges

## Gateways 

How to get default gateway (def-gw) ?
```
ip route show
```
*Out:*

```
default via 85.80.130.1 dev eth0
85.80.130.0/24 dev eth0 proto kernel scope link src 85.80.130.120
```

### Default gateways

## DNS querying 

`dig` is a command line DNS querying to get info about domain name resolution.
It is standard DNS tool part of *Bind DNS server*.

To install it:
```
apt install dnsutils
```

> On Centos search for *bind-utils*.




## Subnets


 	Addresses 	Hosts 	Netmask 	Amount of a Class C
/ 30 	4 	2 	255.255.255.252 	1 / 64
/ 29 	8 	6 	255.255.255.248 	1 / 32
/ 28 	16 	14 	255.255.255.240 	1 / 16
/ 27 	32 	30 	255.255.255.224 	1 / 8
/ 26 	64 	62 	255.255.255.192 	1 / 4
/ 25 	128 	126 	255.255.255.128 	1 / 2
/ 24 	256 	254 	255.255.255.0 	1
/ 23 	512 	510 	255.255.254.0 	2
/ 22 	1024 	1022 	255.255.252.0 	4
/ 21 	2048 	2046 	255.255.248.0 	8
/ 20 	4096 	4094 	255.255.240.0 	16
/ 19 	8192 	8190 	255.255.224.0 	32
/ 18 	16384 	16382 	255.255.192.0 	64
/ 17 	32768 	32766 	255.255.128.0 	128
/ 16 	65536 	65534 	255.255.0.0 	256



### Subnet mask 255.255.255.255

### Subnet mask 255.255.255.192

A network with a subnet mask of 255.255.255.255 puts each device inside its own subnet, forcing them to communicate with the router before communicating with any other device.

A network with a subnet mask of 255.255.255.255 means just a single computer.

## OpenVPN

The holy ~~grale~~ grape of networking is OpenVPN. At least I would say if you can configure OpenVPN both client end server you reached the milestone.

There are OpenVPN client and server, there are TUN and TAP devices, there are TCP and UDP protocols and there are port numbers.

Client and server paradigm you know from before, these are just two ~~friends~~ that communicate.

Check this [more detailed OpenVPN intro](/protocols/openvpn).
