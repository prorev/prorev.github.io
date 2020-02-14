---
id: 12971
title: Python download file
date: 2020-02-14
author: taimane
layout: post
permalink: /python/download-file/
published: true
image: 
categories: 
   - python
tags:
   - download
   - file   
---
To download file in Python you can do many things. Here are some optiosn.

## Using `wget`

You will need to install wget first:
`pip install wget` since wget is not in standard library.

_Example_:
```python
import wget
url = 'https://files.pythonhosted.org/packages/68/75/d1d7b7340b9eb6e0388bf95729e63c410b381eb71fe8875cdfd949d8f9ce/setuptools-45.2.0.zip'
# wget.download(url) in case we just like to use the default file name
wget.download(url, out='file.zip') # will use file.zip as output file name
```

Where `wget.download` signature is:
```python
def download(url, out=None, bar=bar_adaptive):
    """High level function, which downloads URL into tmp file in current
    directory and then renames it to filename autodetected from either URL
    or HTTP headers.

    :param bar: function to track download progress (visualize etc.)
    :param out: output filename or directory
    :return:    filename where URL is downloaded to
    """
```

## Using `requests`

```python
import requests
response = requests.get(url, allow_redirects=True) # nostream
with open('f4.zip', 'wb') as handle:
    handle.write(response.content)
```

If you need a progress bar:

```python
from tqdm import tqdm
import requests

url = "http://download.thinkbroadband.com/10MB.zip"
response = requests.get(url, stream=True)

with open('file.zip', 'wb') as handle:
    for data in tqdm(response.iter_content()):
        handle.write(data)
```

Here is `requests.get` signature:
```python
def get(url, params=None, **kwargs):
    r"""Sends a GET request.

    :param url: URL for the new :class:`Request` object.
    :param params: (optional) Dictionary, list of tuples or bytes to send
        in the body of the :class:`Request`.
    :param \*\*kwargs: Optional arguments that ``request`` takes.
    :return: :class:`Response <Response>` object
    :rtype: requests.Response
    """
```