---
id: 12971
title: Python get the HTML content
date: 2020-01-22
author: taimane
layout: post
permalink: /python/html-get/
published: true
categories: 
   - python
tags:
   - html
   - https
   - get request
---
![get content](/wp-content/uploads/2020/01/request26_0.jpg)

_Table of contents:_
- [Get html content using `urllib`](#get-html-content-using-urllib)
- [Get html content using `requests`](#get-html-content-using-requests)
- [Get a text file using requests](#get-a-text-file-using-requests)
- [Get a binary file using requests](#get-a-binary-file-using-requests)
- [Get any file using wget](#get-any-file-using-wget)
- [HTTP response codes](#http-response-codes)


## Get html content using `urllib` 

You will probable ignore to use `urllib` to get HTTP content from the web page, since there is newer module called `requests` for that. However, if you need to use _urllib_, here is the tip:

_Example:_
```python
import urllib.request
url = "https://programming-review.com"
r = urllib.request.urlopen(url)
b = r.read()
print(b)
```

_Output:_
```
b'<!DOCTYPE html>\n<html lang="en">\n<head>\n<meta charset="utf-8"> ... '
```

> urllib, urllib2 and urllib3 story: ~~urllib2~~ is not present anymore, it has been split to _urllib.request_ and _urllib.error_. _urllib_ you may forget, since there is newer _urllib3_, part of the _requests_. In other words, just use _requests_.

## Get html content using `requests`

First you need to install _requests_ from the command line:
```
pip install requests
```

Then you chan check:
```
pip show requests
```
_Output:_
```
Summary: Python HTTP for Humans.
Requires: urllib3, chardet, certifi, idna
```
These are _requests_ module requirements, telling you it uses latest _urllib3_.

package | description
--------|-----------
urllib3 | HTTP library with thread-safe connection pooling, file post, and more.
chardet | Universal encoding detector for Python 3.
certfify | Package for providing Mozilla's CA Bundle.
idna | Internationalized Domain Names in Applications (IDNA)


_Example:_
```python
import requests
url = "https://programming-review.com"
try:
    r = requests.get(url) # requests.models.Response
    d = ['apparent_encoding', 'close', 'connection', 'content', 'cookies', 'elapsed', 'encoding',
     'headers', 'history', 'is_permanent_redirect', 'is_redirect', 'iter_content', 'iter_lines',
     'json', 'links', 'next', 'ok', 'raise_for_status', 'raw', 'reason', 'request', 'status_code',
     'text', 'url']
    for p in d:
        print('['+p+']')
        print(getattr(r, p))
        print("---")
        
except:
    print("Error with the request")
```
_Output:_
```
[apparent_encoding]
Windows-1252
---
[close]
<bound method Response.close of <Response [200]>>
---
[connection]
<requests.adapters.HTTPAdapter object at 0x0000013AC844D888>
---
[content]
b'<!DOCTYPE html>\n<html lang="en">...</html>\n'
---
[cookies]
<RequestsCookieJar[<Cookie __cfduid=d97d6be96c548c62b6e006d99fa31933f1580069304 for .programming-review.com/>]>
---
[elapsed]
0:00:00.166215
---
[encoding]
utf-8
---
[headers]
{'Date': 'Sun, 26 Jan 2020 20:08:24 GMT', 'Content-Type': 'text/html; charset=utf-8', 'Transfer-Encoding': 'chunked', 'Connection': 'keep-alive', ... , 'Content-Encoding': 'gzip'}
---
[history]
[]
---
[is_permanent_redirect]
False
---
[is_redirect]
False
---
[iter_content]
<bound method Response.iter_content of <Response [200]>>
---
[iter_lines]
<bound method Response.iter_lines of <Response [200]>>
---
[json]
<bound method Response.json of <Response [200]>>
---
[links]
{}
---
[next]
None
---
[ok]
True
---
[raise_for_status]
<bound method Response.raise_for_status of <Response [200]>>
---
[raw]
<urllib3.response.HTTPResponse object at 0x0000013AC845CDC8>
---
[reason]
OK
---
[request]
<PreparedRequest [GET]>
---
[status_code]
200
---
[text]
<!DOCTYPE html>
<html lang="en">
<head>
...
</html>
---
[url]
https://programming-review.com/
---
```
We usually need _requests.models.Response_ `r.text` property.

>_r.content.decode()_ is equivalent to _r.text_

To finalize this would be the code to get the content from the web page using _requests_.

```python
import requests
url = "https://programming-review.com"
try:
    r = requests.get(url) # requests.models.Response
    print(r.text) # print(r.content) if you need bytes
except:
    print("Error with the request")
```
## Get a text file using requests

Here is how to download a file using requests.

_Example:_
```python
import pandas as pd
import io
import requests
url="https://programming-review.com/wp-content/uploads/cities.csv"
bytes_data =requests.get(url).content
text =bytes_data.decode('utf-8') 

with open('cities.csv', 'w') as file:
    file.write(text)
#dataframe=pd.read_csv(io.StringIO(text))
dataframe=pd.read_csv('cities.csv')
dataframe
```
_Output:_
![loaded data](/wp-content/uploads/2020/02/pandas3.jpg)

## Get a binary file using requests

_Example:_
```python
import requests
url="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
r = requests.get(url)
with open('google.logo.png', 'wb') as f:
    f.write(r.content)
```

## Get any file using wget

_Example:_
```python
import wget
url = 'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png'
try:
    wget.download(url, 'google.logo.png')
except:
  print("An exception occurred") 
```


## HTTP response codes

While you create http requests to get the URL content and expect _200	OK_ it is nice to have this overview of the response status codes you may also get in some cases.


| code | Short text                      | Long text                                                         |
| ------------- | ------------------------------- | ----------------------------------------------------------------- |
| 100           | Continue                        | Request received, please continue                                 |
| 101           | Switching Protocols             | Switching to new protocol; obey Upgrade header                    |
| 200           | OK                              | Request fulfilled, document follows                               |
| 201           | Created                         | Document created, URL follows                                     |
| 202           | Accepted                        | Request accepted, processing continues off-line                   |
| 203           | Non-Authoritative Information   | Request fulfilled from cache                                      |
| 204           | No Content                      | Request fulfilled, nothing follows                                |
| 205           | Reset Content                   | Clear input form for further input.                               |
| 206           | Partial Content                 | Partial content follows.                                          |
| 300           | Multiple Choices                | Object has several resources -- see URI list                      |
| 301           | Moved Permanently               | Object moved permanently -- see URI list                          |
| 302           | Found                           | Object moved temporarily -- see URI list                          |
| 303           | See Other                       | Object moved -- see Method and URL list                           |
| 304           | Not Modified                    | Document has not changed since given time                         |
| 305           | Use Proxy                       | You must use proxy specified in Location to access this resource. |
| 307           | Temporary Redirect              | Object moved temporarily -- see URI list                          |
| 400           | Bad Request                     | Bad request syntax or unsupported method                          |
| 401           | Unauthorized                    | No permission -- see authorization schemes                        |
| 402           | Payment Required                | No payment -- see charging schemes                                |
| 403           | Forbidden                       | Request forbidden -- authorization will not help                  |
| 404           | Not Found                       | Nothing matches the given URI.                                     |
| 405           | Method Not Allowed              | Specified method is invalid for this server.                      |
| 406           | Not Acceptable                  | URI not available in preferred format.                            |
| 407           | Proxy Authentication Required   | You must authenticate with this proxy before proceeding.          |
| 408           | Request Timeout                 | Request timed out; try again later.                               |
| 409           | Conflict                        | Request conflict.                                                 |
| 410           | Gone                            | URI no longer exists and has been permanently removed.            |
| 411           | Length Required                 | Client must specify Content-Length.                               |
| 412           | Precondition Failed             | Precondition in headers is false.                                 |
| 413           | Request Entity Too Large        | Entity is too large.                                              |
| 414           | Request-URI Too Long            | URI is too long.                                                  |
| 415           | Unsupported Media Type          | Entity body in unsupported format.                                |
| 416           | Requested Range Not Satisfiable | Cannot satisfy request range.                                     |
| 417           | Expectation Failed              | Expect condition could not be satisfied.                          |
| 500           | Internal Server Error           | Server got itself in trouble.                                      |
| 501           | Not Implemented                 | Server does not support this operation.                            |
| 502           | Bad Gateway                     | Invalid responses from another server/proxy.                      |
| 503           | Service Unavailable             | The server cannot process the request due to a high load.          |
| 504           | Gateway Timeout                 | The gateway server did not receive a timely response.              |
| 505           | HTTP Version Not Supported      | Cannot fulfill request.                                           |