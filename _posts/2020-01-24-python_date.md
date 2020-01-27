---
id: 12971
title: Python date and time
date: 2020-01-22
author: taimane
layout: post
permalink: /python/datetime
published: true
image: 
categories: 
   - python
tags:
   - date
   - time
   - string
---

- [Meet datetime](#meet-datetime)
  - [Create datetime from year, month, date ...](#create-datetime-from-year-month-date)
  - [Create datetime from timestamp](#create-datetime-from-timestamp)
  - [Getting date and time from datetime](#getting-date-and-time-from-datetime)
  - [Combine date and time to datetime](#combine-date-and-time-to-datetime)
- [Convert string to datetime](#convert-string-to-datetime)
- [Convert datetime to string](#convert-datetime-to-string)
- [Using the `dateparser` library](#using-the-dateparser-library)
- [Strftime](#strftime)

---
Working with _date_ and _time_ in python is important, and it should be fun and easy, but if you know how.

## Meet datetime

_Example:_
```python
import datetime
dt = datetime.datetime.now()
print(dt)
```
_Output:_
```
2020-01-27 18:42:21.070687
```

What's inside the datetime object dt?

Properties like year, month, day, ... 

property | value
---| ---
year | 2020
month |1
day  |27
hour | 18
minute |58
second |44
microsecond |800037
tzinfo |None 


Further general properties:

property | value
---| ---
min | 0001-01-01 00:00:00
max | 9999-12-31 23:59:59.999999
resolution |0:00:00.000001
fold | 0


Important methods:

method | description
---| ---
astimezone | convert to local time in new timezone.
ctime | return ctime() style string.
date | return date object with same year, month and day.
dst | return self.tzinfo.dst(self)
fromisoformat | datetime from datetime.isoformat() output
fromordinal | date corresponding to a proleptic Gregorian ordinal.
fromtimestamp | local time from POSIX timestamp.
isocalendar | return a 3-tuple containing ISO year, week number, and weekday.
isoformat | string in ISO 8601 format
isoweekday | return the day of the week represented by the date. 
now | returns new datetime object representing current time local to tz.
replace | return datetime with new specified fields.
strftime | format style string.
strptime | new datetime parsed from a string
time | return time object with same time but with tzinfo=None.
timestamp | return POSIX timestamp as float.
timetuple | return time tuple, compatible with time.localtime().
timetz | return time object with same time and tzinfo.
today | current date or datetime
toordinal | return proleptic Gregorian ordinal. January 1 of year 1 is day 1.
tzname | return self.tzinfo.tzname(self).
utcfromtimestamp | construct a naive UTC datetime from a POSIX timestamp.
utcnow | return a new datetime representing UTC day and time.
utcoffset | return self.tzinfo.utcoffset(self).
utctimetuple | return UTC time tuple
weekday | return the day of the week represented by the date.

### Create datetime from year, month, date ...

_Example:_

```python
import datetime
dt = datetime.datetime(2020, 1, 27, 7, 6, 5)
print(dt) # 2020-01-27 07:06:05
```

### Create datetime from timestamp

_Example:_

```python
import datetime
timestamp = 1580099322
dt = datetime.datetime.fromtimestamp(timestamp)
print(dt) # 2020-01-27 05:28:42
```

### Getting date and time from datetime

Call the methods `date()` and `time()` to get date and time part respectively.

_Example:_
```python
import datetime
dt = datetime.datetime.now()
d = dt.date()
t = dt.time()
print(d) # 2020-01-27
print(t) # 21:22:26.005131
print(t.strftime("%H:%M:%S")) # 21:22:26
```

### Combine date and time to datetime

This would be an easy showcase to combine date and time parts to datetime format.

_Example:_
```python
import datetime
d = datetime.datetime.now().date()
t = datetime.datetime.now().time()
dt = datetime.datetime.combine(d,t)
print(dt)
```



## Convert string to datetime

This conversion assumes we use `strptime` function where we take the existing string and apply [formating](#strftime) to get the datetime object.

_Example:_
```python
str = '01/27/2020 17:55:26'
dt = datetime.datetime.strptime(str, '%m/%d/%Y %H:%M:%S')
print(dt) # 2020-01-27 17:55:26

str = '1/27/2020 17:55:26'
dt = datetime.datetime.strptime(str, '%m/%d/%Y %H:%M:%S')
print(dt) # 2020-01-27 17:55:26

str = '1-27-2020 17:55:26'
dt = datetime.datetime.strptime(str, '%m-%d-%Y %H:%M:%S')
print(dt) # 2020-01-27 17:55:26

str = '1-27-20 17:55:26'
dt = datetime.datetime.strptime(str, '%m-%d-%y %H:%M:%S')
print(dt) # 2020-01-27 17:55:26

str = '27 January 2020 17:55:26'
dt = datetime.datetime.strptime(str, '%d %B %Y %H:%M:%S')
print(dt) # 2020-01-27 17:55:26

str = 'Jan 27 20 17:55:26'
dt = datetime.datetime.strptime(str, '%b %d %y %H:%M:%S')
print(dt) # 2020-01-27 17:55:26
```



## Convert datetime to string

This conversion assumes we use `strftime` function:

_Example:_
```python
import datetime
dt = datetime.datetime.now()
print(dt) # 2020-01-27 20:36:40.814245
d = dt.strftime('%m/%d/%Y, %H:%M:%S')
print(d) # 01/27/2020, 20:37:31
d = dt.strftime('%d %b, %Y')
print(d) # 27 Jan, 2020
d = dt.strftime('%d %B, %Y')
print(d) # 27 January, 2020
d = dt.strftime('%I%p')
print(d) # 08PM
```

## Using the `dateparser` library

_dateparser_ is a date parsing library designed to parse dates from HTML pages.

_To install:_
```
pip install dateparser
```

_Example:_
```python
import dateparser
d = dateparser.parse('yesterday')
print(d) # 2020-01-26 19:01:57.348509
d = dateparser.parse('two days ago')
print(d) # 2020-01-25 19:02:31.545787
d = dateparser.parse('2020 January 27th 00:05:23')
print(d) # 2020-01-27 00:00:00
d = dateparser.parse('2020 27 Jan T00:05:23')
print(d) # 2020-01-27 00:05:23
d = dateparser.parse('2020-01-27 00:05:23.283')
print(d) # 2020-01-27 00:05:23.283000
d = dateparser.parse('2020-01-27 00:05:23.283+00:00')
print(d) # 2020-01-27 00:05:23.283000+00:00
d = dateparser.parse('2020-01-27T00:05:23+04:00')
print(d) # 2020-01-27 00:05:23+04:00
```

As you can see you can parse dates ending with _st_, _nd_, _rd_, and in general can convert almost any date formated string to a datetime.


## Strftime

Check the [strftime website](http://strftime.org/){: rel="nofollow"} for mote details

Code | Example
---| ---
%a | Mon
%A | Monday
%w | 0-6 (Sunday-Saturday)
%d | 30 (day of the month)
%b | Sep
%B | September
%m | 09 (month)
%y | 20 (year)
%Y | 2020
%H | 07 (24-hour clock)
%I | 07 (12-hour clock)
%p | AM
%M | 06 (min)
%S | 05 (sec)
%f | 000000 (microsec)
%j | 273 (day of the current year)
%U | 39 (week of the current year)
%c | Mon Sep 30 07:06:05 2013
%x | 09/30/13
%X | 07:06:05



