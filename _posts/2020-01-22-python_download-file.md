---
id: 12971
title: Python download file
date: 2020-02-14
author: taimane
description: Using different libraries in Python to download a file and unzip it afterwords. Most common way would be to use wget and requests packages, and in some cases tqdm to create the progress bar while downlaoding. Examples cover all cases.
layout: post
permalink: /python/download-file/
published: true
image: 
categories: 
   - python
tags:
   - download file
   - python wget
   - pip install wget
   - python wget downlad
   - python download file
   - python requests
   - python progress bar
   - progress bar python
   - unzip a file
---
_Table of contents_:
- [Using `wget` to download file](#using-wget-to-download-file)
- [Using `requests` to download file](#using-requests-to-download-file)
  - [Download file with python progress bar](#download-file-with-python-progress-bar)
- [Unzip a file after download](#unzip-a-file-after-download)

To download a file in Python you can do many things. Here are some options:

## Using `wget` to download file

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

## Using `requests` to download file

_Example_:
```python
import requests
url = 'https://files.pythonhosted.org/packages/68/75/d1d7b7340b9eb6e0388bf95729e63c410b381eb71fe8875cdfd949d8f9ce/setuptools-45.2.0.zip'
response = requests.get(url, allow_redirects=True) # nostream
with open('file.zip', 'wb') as handle:
    handle.write(response.content)
```

### Download file with python progress bar

_Example_:
```python
from tqdm import tqdm
import requests
url = 'https://files.pythonhosted.org/packages/68/75/d1d7b7340b9eb6e0388bf95729e63c410b381eb71fe8875cdfd949d8f9ce/setuptools-45.2.0.zip'
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
## Unzip a file after download

Here is how to unzip file after download (in case of zip file):

_Example_:
```python
import zipfile
with zipfile.ZipFile('file.zip', 'r') as h:
    h.extractall('folder')
```