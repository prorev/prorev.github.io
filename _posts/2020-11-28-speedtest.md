---
id: 2987
title: Speedtest on VPN
date: 2016-07-29 14:02:58
author: taimane
layout: post
permalink: /linux/speedtest/
published: true
categories:
   - linux
tags:
   - speed
---
Testing the speed of VPN server is always a great idea.

![str](/wp-content/uploads/2020/11/vpn-speed-test.jpg)

It may be done in many ways but I love this three step process: 

1. Download the speed test 
```
> wget https://raw.github.com/sivel/speedtest-cli/master/speedtest.pywget https://raw.github.com/
sivel/speedtest-cli/master/speedtest.py
```

2. Make the test executable
```
> chmod a+rx speedtest.py
```
3. Run the test
```
> python speedtest.py
```

*Out:*

```
python speedtest.py
Retrieving speedtest.net configuration...
Testing from ABC NET (88.88.88.88)...
Retrieving speedtest.net server list...
Selecting best server based on ping...
Hosted by ABC DE (Somewhere) [105.78 km]: 8.13 ms
Testing download speed................................................................................
Download: 95.39 Mbit/s
Testing upload speed................................................................................................
Upload: 93.02 Mbit/s
```
In here you may notice this VPN has 100 Mbit/s connection.
