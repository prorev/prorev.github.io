---
id: 2987
title: Raspberry Pi Quiz Questions with Answers
date: 2020-12-05 17:02:58
author: taimane
layout: post
permalink: /linux/raspberry-pi/
published: true
categories:
   - linux
tags:
   - microcontroler
   - raspberry-pi
   - camera
   - 8GB
   - GPIO
   - pico
   - wifi
   - specs
   - zero
   - models
   - Pi 4
   - Raspbian
   - Ubuntu
   - voltage
   - GPU
   - Face Recognition
---
_Table of contents:_
- [1. Who created Raspberry Pi?](#1-who-created-raspberry-pi)
- [2.Raspbian is the only operating system available for Raspberry Pi?](#2raspbian-is-the-only-operating-system-available-for-raspberry-pi)
- [3. Raspberry Pi usually runs from an SD card?](#3-raspberry-pi-usually-runs-from-an-sd-card)
- [4. What is magic smoke?](#4-what-is-magic-smoke)
- [5. Hardware has a tendency not to work for the smallest reasons.](#5-hardware-has-a-tendency-not-to-work-for-the-smallest-reasons)
- [6. Can you netboot the Pi?](#6-can-you-netboot-the-pi)
- [7. What is a GPIO pin?](#7-what-is-a-gpio-pin)
- [8. In the image we have?](#8-in-the-image-we-have)
- [9.What will you get if you run the pinout command on Pi?](#9what-will-you-get-if-you-run-the-pinout-command-on-pi)
- [10. How do we get the power for RPi?](#10-how-do-we-get-the-power-for-rpi)
- [11. What is NOOBS?](#11-what-is-noobs)
- [12. Raspberry Pi foundation also provides Raspbian disk images on raspberrypi.org. From the next two images which one is meant to work from CLI only?](#12-raspberry-pi-foundation-also-provides-raspbian-disk-images-on-raspberrypiorg-from-the-next-two-images-which-one-is-meant-to-work-from-cli-only)
- [13. gEDA is?](#13-geda-is)
- [14. Ohm's law is not important when working on Raspberry Pi projects?](#14-ohms-law-is-not-important-when-working-on-raspberry-pi-projects)
- [15. What may happen if the Pi voltage is too low?](#15-what-may-happen-if-the-pi-voltage-is-too-low)
- [16. The on board voltage between TP1 and TP2 should be around?](#16-the-on-board-voltage-between-tp1-and-tp2-should-be-around)
- [17. Your multimeter shows -5V DC on TP1, TP2 probe. Is this bad?](#17-your-multimeter-shows--5v-dc-on-tp1-tp2-probe-is-this-bad)
- [18. What is LXDE?](#18-what-is-lxde)
- [19. Is Python the recommended language to work with Raspberry Pi?](#19-is-python-the-recommended-language-to-work-with-raspberry-pi)
- [20. You can use both Python 2 and Python 3 to program Raspberry Pi?](#20-you-can-use-both-python-2-and-python-3-to-program-raspberry-pi)
- [21. What connection will provide the best screen resolution?](#21-what-connection-will-provide-the-best-screen-resolution)
- [22. Raspberry Pi has a network connector?](#22-raspberry-pi-has-a-network-connector)
- [23. The Raspberry Pi should work with most USB keyboards and mice available?](#23-the-raspberry-pi-should-work-with-most-usb-keyboards-and-mice-available)
- [24. You can run Raspberry Pi on battery?](#24-you-can-run-raspberry-pi-on-battery)
- [25. What is the proper connection?](#25-what-is-the-proper-connection)
- [26. Raspberry Pi uses MBR (Master Boot Record) to bootstrap from?](#26-raspberry-pi-uses-mbr-master-boot-record-to-bootstrap-from)
- [27. You can boot Raspberry Pi from USB?](#27-you-can-boot-raspberry-pi-from-usb)
- [28. You installed Raspbian from an ISO image file. The size of the disk image is less than 4G and your SD card is 16GB. Can you make a system partition to use all available space on the SD card?](#28-you-installed-raspbian-from-an-iso-image-file-the-size-of-the-disk-image-is-less-than-4g-and-your-sd-card-is-16gb-can-you-make-a-system-partition-to-use-all-available-space-on-the-sd-card)
- [29. You use Windows to read from a Pi SD card. What file system is not supported by default in Windows?](#29-you-use-windows-to-read-from-a-pi-sd-card-what-file-system-is-not-supported-by-default-in-windows)
- [30. What is the default Raspbian desktop sharing system to connect to RPi?](#30-what-is-the-default-raspbian-desktop-sharing-system-to-connect-to-rpi)
- [31. What will happen if you remove the SD card (system partition). Will Pi work?](#31-what-will-happen-if-you-remove-the-sd-card-system-partition-will-pi-work)
- [32. How can you enable SSH on Raspbian?](#32-how-can-you-enable-ssh-on-raspbian)
- [33. How much GPU memory is recommended on Raspberry Pi?](#33-how-much-gpu-memory-is-recommended-on-raspberry-pi)
- [34. Can I update Raspberry Pi firmware?](#34-can-i-update-raspberry-pi-firmware)
- [35. Is RPi suitable for 24/7 work?](#35-is-rpi-suitable-for-247-work)
- [36. What is the RPi SoC manufacturer?](#36-what-is-the-rpi-soc-manufacturer)
- [37. Is there a self-assembly kit for RPi?](#37-is-there-a-self-assembly-kit-for-rpi)
- [38. Is there an RTC (Real Time Clock)?](#38-is-there-an-rtc-real-time-clock)
- [39. Can RPi add extra memory?](#39-can-rpi-add-extra-memory)
- [40. RPi has an integrated Camera?](#40-rpi-has-an-integrated-camera)
- [41. How many GPIO pins are there?](#41-how-many-gpio-pins-are-there)
- [42. You have an analog-to-digital converter (ADC) that you want to use with your Raspberry Pi. What would you use to connect if speed is important?](#42-you-have-an-analog-to-digital-converter-adc-that-you-want-to-use-with-your-raspberry-pi-what-would-you-use-to-connect-if-speed-is-important)
- [43. Can you supply power to Raspberry Pi via GPIO 5V pin?](#43-can-you-supply-power-to-raspberry-pi-via-gpio-5v-pin)
- [44. You want to connect external electronics to your Raspberry Pi, but don't want to accidentally damage or break it.](#44-you-want-to-connect-external-electronics-to-your-raspberry-pi-but-dont-want-to-accidentally-damage-or-break-it)
- [45. How can you check your RPi revision info?](#45-how-can-you-check-your-rpi-revision-info)
- [46. You have an I2C device that you want to use with your Raspberry Pi, so you want to know how to make I2C work with the Raspberry Pi. What to do?](#46-you-have-an-i2c-device-that-you-want-to-use-with-your-raspberry-pi-so-you-want-to-know-how-to-make-i2c-work-with-the-raspberry-pi-what-to-do)
- [47. You have an I2C device attached to your Raspberry Pi. How to check and find I2C addresses in use?](#47-you-have-an-i2c-device-attached-to-your-raspberry-pi-how-to-check-and-find-i2c-addresses-in-use)
- [48. Raspberry Pi has BIOS?](#48-raspberry-pi-has-bios)
- [49. Whose GPIO pins respond quicker?](#49-whose-gpio-pins-respond-quicker)
- [50. You want to run the Arduino IDE on a Raspberry Pi so that you can write and upload programs to Arduino. Is this possible?](#50-you-want-to-run-the-arduino-ide-on-a-raspberry-pi-so-that-you-can-write-and-upload-programs-to-arduino-is-this-possible)


![Raspberry Pi](/wp-content/uploads/2021/11/rpi.jpg)



## 1. Who created Raspberry Pi?
 
+ ☐ ODROID
+ ☐ Arduino
+ ☑ **Raspberry Pi foundation**
+ ☐ DIY
 
The Raspberry Pi Foundation (UK) is a charity founded in 2009 to promote the study of basic computer science in schools, and is responsible for developing a single-board computer called the Raspberry Pi.
 
The ODROID is a series of single-board computers and tablet computers created by an open-source hardware company located in South Korea.
 
Arduino is an open-source electronic prototyping platform enabling users to create interactive electronic objects.
 
DIY is short for Do It Yourself.
 
 
 
## 2.Raspbian is the only operating system available for Raspberry Pi?
 
☐ True  ☑ False
 
Raspbian is the official operating system for all models of the Raspberry Pi (RPi), but not the only one.
 
Raspbian is a Linux distribution based on Debian, with all packages compiled specifically for the Raspberry Pi.
 
Although it is a separate project, Raspberry Pi foundation creates images of Raspbian and maintains a repository containing additional software.
 
There are other systems available for Pi: Pidora is a remix of Fedora, Arch Linux ARM is based on Arch, Windows 10, Adafruit Occidentalis and many others...
 
 
## 3. Raspberry Pi usually runs from an SD card?
 
☑ True  ☐ False
 
By default Raspberry Pi runs from the OS installed on SD card, but it is possible to boot Raspberry Pi also from the USB disk.
 
Note: Make sure you are using the Class-10 SD card or better.
 
 
## 4. What is magic smoke?
 
+ ☐ What makes Electronic Circuit work
+ ☑ **A joke**
 
The magic smoke is an inside joke in the electronics field.
 
Apparently there is a magic smoke that lives in all electronics components and that makes them work.
If the magic smoke runs out of the component, it would no longer work.
 
 
 
## 5. Hardware has a tendency not to work for the smallest reasons.
☑ True  ☐ False
 
 
You might have had a bad solder joint or soldered something in backward.
 
You may think it sounds so silly, but it's often the smallest things that trip you up.
 
 
 
 
## 6. Can you netboot the Pi?
☑ **YES**  ☐ NO
 
Yes. The Raspberry Pi 3 can be set up to network boot without an SD card present.
 
Note: Earlier models could PXE/netboot with an appropriately set up SD card.
 
 
 
## 7. What is a GPIO pin?

+ ☑ **General Purpose Input Output pin**
+ ☐ Gigabyte Pin Output
 
 
GPIO stands for General Purpose Input/Output.
 
GPIO pin is a Raspberry Pi pin controlled by software.
 
 
![Raspberry Pi](/wp-content/uploads/2021/11/rpi.jpg)

 
## 8. In the image we have?

![joined wires](/wp-content/uploads/2021/11/joined.jpg)

+ ☑ Joined wires
+ ☐ Unjoined wires
 
This is the joined wires schematics with the dot in the center.
 
Without that dot, we would have unjoined wires.
 
 
## 9.What will you get if you run the pinout command on Pi?
 
+ ☐ get GPIO pin-out information
+ ☐ get RPi revision number
+ ☐ get model and hardware info
+ ☑ **All true**
 
**pinout tool** is provided by the GPIO Zero Python library, which is installed by default on the Raspbian desktop image.
 
If you run the command pinout on Pi you can get the output like this:
```
Revision           : a02082
SoC                : BCM2837
RAM                : 1024Mb
Storage            : MicroSD
USB ports          : 4 (excluding power)
Ethernet ports     : 1
Wi-fi              : True
Bluetooth          : True
Camera ports (CSI) : 1
Display ports (DSI): 1
J8:
3V3  (1)        (2)  5V
GPIO2  (3)        (4)  5V
GPIO3  (5)        (6)  GND
GPIO4  (7)        (8)  GPIO14
GND  (9)        (10)  GPIO15
GPIO17 (11)     (12) GPIO18
GPIO27 (13)     (14) GND
GPIO22 (15)     (16) GPIO23
3V3 (17)         (18) GPIO24
GPIO10 (19)     (20) GND
GPIO9 (21)      (22) GPIO25
GPIO11 (23)     (24) GPIO8
GND (25)        (26) GPIO7
GPIO0 (27)      (28) GPIO1
GPIO5 (29)      (30) GND
GPIO6 (31)      (32) GPIO12
GPIO13 (33)     (34) GND
GPIO19 (35)     (36) GPIO16
GPIO26 (37)     (38) GPIO20
GND (39)         (40) GPIO21
```
 
 
## 10. How do we get the power for RPi?
 
+ ☐ Only via the motherboard  
+ ☑ **Via motherboard or externally**
 
Power sources don't need much representation in our schematics as the Pi is powered externally. However, some of the GPIO projects take external power as well.
 
Note: In the electronics world you refer to a ground or voltage source as a rail. When you see the term <b>ground rail</b>, for example, that would mean the ground terminal on the physical circuit.
 
## 11. What is NOOBS?
 
+ ☑ **New Out Of the Box Software**
+ ☐ No OBS
 
NOOBS is a smart OS installing tool.
 
NOOBS contains Raspbian OS out of the box.
 
NOOBS also provides a choice to install an alternative operating system that can be downloaded from the Internet.
 
 
 
 
## 12. Raspberry Pi foundation also provides Raspbian disk images on raspberrypi.org. From the next two images which one is meant to work from CLI only?
 
+ ☐ Raspbian Stretch with desktop
+ ☑ **Raspbian Stretch Lite**
 
Lite is a very basic Linux OS with only a command line interface (CLI).
 
In Lite there is no Desktop or GUI of any kind, and it does not include the educational or productivity software included with the Desktop disk image. To interact with the Lite version you will need to type commands (CLI).
 
For new users and people not familiar with Linux the Desktop version is recommended.
 
## 13. gEDA is?
+ ☑ **Software**
+ ☐ Hardware
 
The word gEDA is a conjunction of GPL and EDA.
 
GNU is short for General Public License. EDA is short for electronic design automation.
The term gEDA refers to a set of software tools used for electronic design.
 
These tools are used for electrical circuit design, schematic capture, simulation, prototyping, and production.
 
![Raspberry Pi](/wp-content/uploads/2021/11/rpi.jpg)
 
## 14. Ohm's law is not important when working on Raspberry Pi projects?
 
☐ True  ☑ **False**
 
Ohm's law is actually important when dealing with electronic circuits.
 
An electronic circuit is composed of individual electronic components, such as resistors, transistors, capacitors, inductors and diodes, connected by conductive wires or traces through which electric current can flow.
 
 
## 15. What may happen if the Pi voltage is too low?
 
+ ☐ Pi may boot and run but crash later
+ ☐ Pi may crash when using the GPIO
+ ☐ Pi may freeze or work unstable
+ ☑ **All possible**
 
Pi is a highly sophisticated electronic device with a very complex system on chip (SoC) on board.
 
Having a reliable power source is very important. The device is powered by 5V micro-USB. Exactly how much current (mA) the Raspberry Pi requires is dependent on which model you are using, and what you hook up to it.
 
Recommended is 2.5A (2500mA) power supply, from a reputable retailer, that will provide enough power to run your Raspberry Pi for most applications, including use of the 4 USB ports.
 
Very high-demand USB devices may however require the use of a powered hub.
If voltage is too low, Pi may crash.
 
 
 
## 16. The on board voltage between TP1 and TP2 should be around?
 
+ ☑ 4.75 and 5.25V  
+ ☐ 3.75 and 6.25V
+ ☐ 12V
+ ☐ It depends
 
If you take a look at your Pi board you will notice some small round hole contact points called TP1 and TP2.
 
TP1 is located under the Raspberry Pi logo and TP2 is located between the GPIO and the RCA video jack.
The Pi has a voltage tolerance of 0.75 V DC or 15% tolerance. Anything outside this range is bad and you will need to investigate your power source or cable or maybe both. If your voltage reads very close to the 15% tolerance take a look at your power supply or cables.
 
Being very close to the 15% is just as bad as being over it; when you put the Pi under load you will go over the 15% tolerance very quickly.
 
 
 
## 17. Your multimeter shows -5V DC on TP1, TP2 probe. Is this bad?
+ ☐ Very bad
+ ☑ **NO**t bad
 
TP1 is where you will place the positive probe from the multimeter. TP2 is where you will place the negative probe from the multimeter.
 
On negative voltage readings you may think Pi went crazy. This is still a valid reading of the voltage if you ignore the negative sign. Swap the probes and check it again. It's a good idea to get into a good habit from the start.
 
 
 
## 18. What is LXDE?
+ ☐ User interface
+ ☐ Lightweight X11 Desktop Environment
+ ☐ Free and low resource consuming software
+ ☑ **All true**
 
LXDE (Lightweight X11 Desktop Environment) is a user interface which sits on top of a system called X, a client-server windowing system.
 
When an application starts, it requests a window in which to work from the X server program; the server also takes care of things like detecting mouse and keyboard input, and putting windows on the screen.
 
 
 
 
## 19. Is Python the recommended language to work with Raspberry Pi?
 
☑ **YES**  ☐ NO
 
The name, Raspberry Pi, was the combination of the desire to create an alternative fruit-based computer (such as Apple, BlackBerry, and Apricot) and a nod to the original concept of a simple computer that can be programmed using Python (shortened to Pi).
 
Why has Python been selected as the language to use on the Raspberry Pi?
 
There are many programming languages that you can choose, from high-level graphical block programming, such as Scratch, to traditional C, right down to BASIC, and even raw machine code assembler.
 
Python has been selected to start when learning RPi programming because it provides a rich set of coding tools while allowing simple programs to be written without fuss.
 
Python is very modular with lots of additional libraries that can be imported to quickly extend the functionality.
 
## 20. You can use both Python 2 and Python 3 to program Raspberry Pi?
 
☑ **YES**  ☐ NO
 
You can use both.
 
Also you have the option to convert from Python 2 to Python 3 (2to3 tool). This process is not perfect, and in some cases, you'll need to manually rewrite sections and fully retest everything.
 
You can write the code and libraries that will support both. The import __future__ statement  allows you to import the friendly methods of Python 3 and run them using Python 2.7.
 

![Raspberry Pi](/wp-content/uploads/2021/11/rpi.jpg)


## 21. What connection will provide the best screen resolution?
 
+ ☑ **HDMI**
+ ☐ Analogue (RCA socket)
 
For best results, use a TV or monitor that has an HDMI connection, thus allowing the best resolution display (1080p) and also digital audio output.
 
An alternative display method is to use the analogue composite video connection (via the RCA socket); this can also be attached to an S-Video or European SCART adapter. However, the analogue video output has a maximum resolution of 640 x 480 pixels, so it is not ideal for general use.
 
 
## 22. Raspberry Pi has a network connector?
 
+ ☐ True
+ ☐  False
+ ☑ **It depends on model**
+ ☐ No, you should use the USB network adapter
 
Network connector exists on Model B Only.
 
For the Model A Raspberry Pi it is possible to add a USB network adapter to add wired or even wireless networking.
 
 
## 23. The Raspberry Pi should work with most USB keyboards and mice available?
 
☑ True  ☐ False
 
Yes, but you may encounter issues if your device draws more than 140mA, in which case a powered USB hub is recommended.
 
You can also use wireless mice and keyboards, which use RF Dongles. Additional configuration is required for items that use the Bluetooth dongles.
 
If there is a lack of power supplied by your power supply or the devices are drawing too much current, you may experience the keyboard keys appearing to stick.
 
 
 
 
## 24. You can run Raspberry Pi on battery?
 
☑ **YES**  ☐ NO
 
The Raspberry Pi requires a 5V power supply, which can comfortably supply at least 700mA (1A or more recommended) with a micro USB connection.
 
It is possible to power the unit using portable battery packs, such as the ones suitable for powering or recharging tablets.
 
Note: Ensure that they can supply 5V at 700mA or over.
 
## 25. What is the proper connection?
 
+ ☑ You should make all other connections to Pi before connecting the power
+ ☐ The order of connections is not important
 
You should aim to make all other connections to the Raspberry Pi before connecting the power.
 
However, USB devices, audio, and network may be connected and removed while it is running without problems.
 
## 26. Raspberry Pi uses MBR (Master Boot Record) to bootstrap from?
 
☐ True  ☑ **False**
 
Unlike a traditional PC, a Raspberry Pi doesn't use bootstrap code stored in the MBR. When the Raspberry Pi is powered on by default:
 
1. loads and runs the bootcode.bin file from the first partition /dev/mmcblk0p1 on the SD card, provided the partition has a FAT filesystem.
2. bootcode.bin in turn then loads and runs start.elf (and fixup.dat) also from the first partition.
3. start.elf then reads config.txt and sets up any GPU configuration requested.
4. start.elf then loads the kernel image and parses the command-line file from /dev/mmcblk0p2 (in most cases).
6. The Linux kernel then mounts the /dev/mmcblk0p2 partition as the root / filesystem, and continues booting the rest of the system from there.
 
 
 
## 27. You can boot Raspberry Pi from USB?
 
☑ True  ☐ False
 
Usually RPi systems like Raspbian have two partitions on SD cards: BOOT and SYSTEM.
 
You will have to boot from the SD card but you will set the system partition in cmdline.txt file in order to boot Linux from the hard drive instead of from the SD card system partition.
 
Since the bootloader enumerates the USB drives asynchronously you will need to switch from MBR to GPT filesystem.
 
In other words you will set your hard drive to use the GUID partition table (GPT).
 
The latest firmware/software, however, allows booting to be set up without an SD card, for example from a USB stick or other mass storage device.
 


![Raspberry Pi](/wp-content/uploads/2021/11/rpi.jpg)

## 28. You installed Raspbian from an ISO image file. The size of the disk image is less than 4G and your SD card is 16GB. Can you make a system partition to use all available space on the SD card?
 
+ ☐ Nothing this is the limitation
+ ☐ Lock the SD card
+ ☑ Expand the system partition on SD card
+ ☐ Create another partition on SD card
 
A manually written image will be of a fixed size. These are made small for the small sized SD cards.
 
To make full use of the SD card, you will need to expand the system partition to fill the remainder of the SD card. This can be achieved using the raspi-config tool on Raspbian.
 
## 29. You use Windows to read from a Pi SD card. What file system is not supported by default in Windows?
 
+ ☐ NTFS
+ ☑ EXT3
+ ☐ FAT32
+ ☐ RAW
 
If you do need to read files from the SD card using Windows, the only non supported file system is EXT3.
 
RAW means the system cannot detect a valid partition. Should be ignored.
NTFS and FAT32 is something that both Windows and Linux can read nowadays.
 
## 30. What is the default Raspbian desktop sharing system to connect to RPi?
 
+ ☐ Remote Desktop
+ ☑ VNC
+ ☐ Teamviewer
+ ☐ ARD
 
VNC should be installed but disabled on Raspbian by default.
 
VNC is just one way in which you can remotely connect to the Raspberry Pi.
 
ARD - Apple Remote Desktop, Teamviewer and Remote Desktop are not installed by default.
 
To connect from Windows to RPi you may use Remote Desktop if you install xrdp on RPi:
sudo apt-get install xrdp
 
 
 
## 31. What will happen if you remove the SD card (system partition). Will Pi work?
 
+ ☐ it will soon crash
+ ☑ system may become unstable and opening programs may not work
+ ☐ it will work and open programs without problems
+ ☐ system will freeze
 
Pi is meant to work with the system partition set on either SD card or USB.
 
If we remove the system partition the system will still work since it is loaded into RAM. However, the programs that are not loaded into RAM cannot work.
 
Note: For Pi 2 and 3 Model B system RAM is 1GB.
 
## 32. How can you enable SSH on Raspbian?
 
+ ☑ **go to Raspberry Pi configuration**
+ ☐ go to Raspberry Pi recommended software and install it
 
 
Raspbian already has an SSH server installed but disabled by default. There are multiple ways to enable SSH.
 
From the desktop: Launch Raspberry Pi Configuration from the Preferences menu, navigate to the Interfaces tab and select Enabled next to SSH.
 
The same can be done from sudo raspi-config in a terminal window.
 
You could start the SSH service with systemctl.
sudo systemctl enable ssh
sudo systemctl start ssh
 
SSH can be enabled by placing a file named ssh, without any extension, onto the boot partition of the SD card. When the Pi boots, it looks for the ssh file. If it is found, SSH is enabled, and the file is deleted. The content of the file does not matter: it could contain text, or nothing at all.
 
 
 
## 33. How much GPU memory is recommended on Raspberry Pi?
 
+ ☐ 16
+ ☐ 64
+ ☐ 128
+ ☑ The best thing you can do is experiment
 
 
You can edit /boot/config.txt and add or edit the following line:
gpu_mem=64
 
GPU memory is set in megabytes. This sets the memory split between the CPU and GPU; the CPU gets the remaining memory. Minimum value is 16; maximum value is 192, 448, or 944, depending on whether you are using a 256M, 512MB, or 1024MB Pi. The default value is 64.
 
 
 
 
## 34. Can I update Raspberry Pi firmware?
 
☑ **YES**  ☐ NO
 
 
Raspberry Pi is divided into three sections:
1. GPU firmware (not open source),
2. ARM Linux kernel (modified)
3. user space software
On Raspbian, you can update the GPU firmware using the rpi-update command.
 
rpi-update should be installed by default on Raspbian, but if this is not the case you run:
sudo apt-get install rpi-update
 
To update the GPI firmware you run:
sudo rpi-update
 
Please reboot the device to activate the new firmware.
 
Note: Updating the firmware may also update the kernel modules.
 

![Raspberry Pi](/wp-content/uploads/2021/11/rpi.jpg)

## 35. Is RPi suitable for 24/7 work?
 
☑ **YES**  ☐ NO
 
Raspberry Pi is perfectly suitable for running continuously.
 
Draws very little power, can be used for a number of server tasks that imply continuous uptime.
 
 
 
 
 
## 36. What is the RPi SoC manufacturer?
 
+ ☑ Broadcom
+ ☐ Samsung
+ ☐ MediaTek
+ ☐ Qualcomm
 
 
All models of Raspberry Pi use Broadcom SoC's containing a Videocore4 GPU, but with various ARM CPU cores.
 
A System on a Chip (SoC) is a method of placing all necessary electronics for running a computer on a single chip. Instead of having an individual chip for the CPU, GPU, USB controller, RAM, northbridge, southbridge, and so on, everything is compressed down into one tidy package.
 
 
 
## 37. Is there a self-assembly kit for RPi?
 
☐ YES  ☑ **NO**
 
 
It would be too expensive for us to provide kits alongside finished boards, which would mean introducing another step in manufacturing.
 
A kit would also be impossible to hand-solder. RPi's are assembled using special equipment robots.
 
## 38. Is there an RTC (Real Time Clock)?
 
☐ YES  ☑ **NO**
 
 
There is no RTC as that would be surprisingly expensive.
 
One can set RTC using the GPIO pins for an interesting electronics project.
 
## 39. Can RPi add extra memory?
 
☐ YES  ☑ **NO**
 
With SoC there are some limitations.
 
The RAM on the model A, A+, B, B+, and Zero is a Package on Package (POP) on top of the SoC, so it is not removable or swappable.
 
The RAM on the Pi 2 and 3 Model B versions is on a separate chip on the bottom of the PCB, but 1GB is the maximum RAM that the SoC used by the Pi 2 and 3 Model B versions can support.
 
 
## 40. RPi has an integrated Camera?
 
☐ YES  ☑ **NO**
 
 
The Camera Module is a small PCB (Printed Circuit Board) that connects to the CSI-2 camera port on the Raspberry Pi using a short but extendable ribbon cable.
 
Current default camera module is Sony IMX219 (V2) which is an improvement over the old Omnivision OV5647 (V1). These are the only cameras that are compatible with the Raspberry Pi.
 
 
 
 
 
## 41. How many GPIO pins are there?
 
+ ☐ 26
+ ☐ 40
+ ☐ **depends on a model**
+ ☐ always 33
 
Depending on the model, the Raspberry Pi has either 40 or 26 dedicated GPIO pins.
 
In all cases, these include a UART, I2C bus, a SPI bus with two chip selects, I2S audio, 3V3, 5V, and ground. The maximum number of GPIOs can theoretically be indefinitely expanded by making use of the I2C or SPI bus.
 
Note: Depending on revision number the GPIO pins may be labeled differently.
 

![Raspberry Pi](/wp-content/uploads/2021/11/rpi.jpg)

## 42. You have an analog-to-digital converter (ADC) that you want to use with your Raspberry Pi. What would you use to connect if speed is important?
 
+ ☑ **SPI**
+ ☐ I2C
 
 
SPI is generally faster than I2C.
 
SPI allows serial transfer of data between the Raspberry Pi and peripheral devices, such as analog-to-digital converter (ADC) among other devices.
 
I2C is a serial protocol for two-wire interfaces to connect low-speed devices. It was invented by Philips and now it is used by almost all major IC manufacturers.
 
The I2C wires are known as the SDA and SCL lines; SDA stands for Serial Data, and SCL is Serial Clock.
 
## 43. Can you supply power to Raspberry Pi via GPIO 5V pin?
 
☑ **YES**  ☐ NO
 
 
It is possible but you need to be careful.
 
When using 5V GPIO pins to add more power (usually pins #2 and #4) you are bypassing the input fuse that is on the RPi. This means you have no protection in case you make some shortcut that can damage your Pi.
 
You are also bypassing the TVS diode so you are basically without any protection.
 
## 44. You want to connect external electronics to your Raspberry Pi, but don't want to accidentally damage or break it.
 
+ ☑ Do not put more than 3.3V on any GPIO pin
+ ☐ Do not draw more than 3mA per output
+ ☐ Do not power the Pi with more than 5V
+ ☐ All good
 
 
There is no doubt about it, the Raspberry Pi is a little fragile when it comes to adding external electronics.
 
There are some rules of thumbs.
 
Do not power the Pi with more than 5V and do not put more than 3.3V on any GPIO pin.
 
You can get away with drawing more, but this may shorten the life of the Pi. 3mA is enough to light a red LED with a 470Ω series resistor.
 
Also do not poke at the GPIO connector with a screwdriver or any metal object when the Pi is powered up.
Do not draw more than a total of 50mA from the 3.3V supply pins.
Do not draw more than a total of 250mA from the 5V supply pins.
Also do not draw more than 3mA per output.
 
 
 
## 45. How can you check your RPi revision info?
 
+ ☐ check mounting holes
+ ☐ cat /proc/device-tree/model
+ ☐ cat /proc/cpuinfo
+ ☑ all true ***4
 
 
Each variant of the Raspberry Pi has a different Pi Revision Number.
 
On Raspbian you can retrieve the Pi model as a string using either of these:
1. cat /proc/device-tree/model
2. cat /proc/cpuinfo
3. raspi-config which will prompt the revision value.
 
The changes among revisions include mounting holes, color of the audio socket, modifications to the power supply circuitry, different GPIO headers and varying numbers of USB ports....
 
The Pi 2 and Pi 3 introduced new CPUs and additional memory.
Finding your Pi Revision Number is a useful technique to identify what model of Pi you have and, in some cases, where it was manufactured.
 
## 46. You have an I2C device that you want to use with your Raspberry Pi, so you want to know how to make I2C work with the Raspberry Pi. What to do?
 
 
+ ☑ Use the Device Tree
+ ☐ comment I2C from raspi-blacklist.conf
 
 
Adding a new device driver module to the kernel doesn't automatically result in a module being loaded - the appropriate nodes must also be added to the DT (Device Tree).
 
Use raspi-config to enable IC2.
 
Note: Editing /etc/modprobe.d/raspi-blacklist.conf and commenting out #blacklist i2c-bcm2708 is no longer in use since RPi switched to the DT architecture.
 
 
## 47. You have an I2C device attached to your Raspberry Pi. How to check and find I2C addresses in use?
 
+ ☑ **use i2cDetect tool**
+ ☐ there are no addresses
 
 
i2cDetect is a useful diagnostic tool and one that is worth running the first time you use a new I2C device i2cdetect -y 1
 
It scans I2C bus for devices and outputs the addresses in use (a table with the list of detected devices).
 
Note: i2cDetect program can confuse your I2C bus and cause data loss.
 
## 48. Raspberry Pi has BIOS?
 
☐ YES  ☑ **NO**
 
 
The Raspberry Pi uses a configuration file instead of the BIOS you would expect to find on a conventional PC.
 
The system configuration parameters, which would traditionally be edited and stored using a BIOS, are stored instead in an optional text file named /boot/config.txt
 
This is read by the GPU before the ARM CPU and Linux are initialised. It must therefore be located on the first (boot) partition of your SD card, alongside bootcode.bin and start.elf.

![Raspberry Pi](/wp-content/uploads/2021/11/rpi.jpg)
 
## 49. Whose GPIO pins respond quicker?
 
+ ☐ Raspberry Pi  
+ ☑ **Arduino**
 
 
Even if we use the fastest C library wrapped in Python RPi.GPIO (apt-get install python-rpi.gpio) to make the IO as fast as possible Pi will perform slower than Arduino.
 
Pi is not really designed as a microcontroller, so the GPIO pins will not respond as quickly as an Arduino.
 
 
 
## 50. You want to run the Arduino IDE on a Raspberry Pi so that you can write and upload programs to Arduino. Is this possible?
 
☑ **YES**  ☐ NO
 
 
The Arduino IDE is available for the Raspberry Pi.
 
Turns out you need to install arduino like this:
```
$sudo apt-get update
$sudo apt-get install arduino
```
 
The Arduino IDE connects to the Raspberry Pi through its USB cable to program it.
 
The Arduino IDE includes a feature called the serial monitor, which allows you to both send text messages to the Arduino and see messages from the Arduino over the USB cable.
