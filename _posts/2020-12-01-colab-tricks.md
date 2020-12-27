---
id: 2987
title: 16 Google Colab Tricks
date: 2016-07-29 14:02:58
author: taimane
layout: post
permalink: /colab/tricks
published: true
categories:
   - colab
tags:
   - tricks
   - google
---
- [1. Use GPU](#1-use-gpu)
- [2. Use Google drive](#2-use-google-drive)
- [3. Execute Linux commands](#3-execute-linux-commands)
- [4. Get interactive shell](#4-get-interactive-shell)
- [5. Clone the entire repo from GitHub](#5-clone-the-entire-repo-from-github)
- [6. Get data using `wget`](#6-get-data-using-wget)
- [7. Upload file from local file system](#7-upload-file-from-local-file-system)
- [8. Navigate using `%cd` command](#8-navigate-using-cd-command)
- [9. Use `gdown` to download Google drive resources](#9-use-gdown-to-download-google-drive-resources)
- [10. Preview text file or image](#10-preview-text-file-or-image)
- [11. Rename files](#11-rename-files)
- [12. Delete file](#12-delete-file)
- [13. Stop Google Colab From Disconnecting](#13-stop-google-colab-from-disconnecting)
- [14. Basic Preview of a website](#14-basic-preview-of-a-website)
- [15. Use Conda without installing](#15-use-conda-without-installing)
- [16. Combine two audio files together](#16-combine-two-audio-files-together)


Google Colaboratory (Colab) gives the ability to build complex and heavy machine learning and deep learning models without having to expend our machine's limited resources, but it is even more than that.

## 1. Use GPU

To use GPU and speed up machine learning tasks you need to enable it.

Runtime -> Change runtime type
![Protocols](/wp-content/uploads/2020/12/runtime.png)
![Protocols](/wp-content/uploads/2020/12/gpu.png)



## 2. Use Google drive

At some point you may need to mount use Google drive to your Colab notebook. This is often because you need data. The next code will make this possible:

```python
from google.colab import drive
drive.mount('/content/gdrive')
```
The process has the authentication step but it's fairly easy.


## 3. Execute Linux commands

To execute any Linux shell command just use `!` in front of the command. This way you can list the content of a current folder, for instance.

```
!ls
```

## 4. Get interactive shell

You can also use the interactive shell:

```
!bash
```

![bash](/wp-content/uploads/2020/12/bash.png)

> I prefer to use just the `!` command to run bash commands.



## 5. Clone the entire repo from GitHub

To bring data to Colab notebook is to clone some data from GitHub:

```
!git clone -l -s https://github.com/pytorch/pytorch cloned-repo
%cd cloned-repo
!ls
```

Note that you need to set the `!` sign to execute Linux command.

## 6. Get data using `wget`

If you have a file on web the simplest way to get that file is to use `wget`:

```
!wget https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Kust_till_kust_banan.JPG/1200px-Kust_till_kust_banan.JPG -O image.jpg
```
Now, your Google Colab notebook will have the image.jpg

![train](/wp-content/uploads/2020/12/train.png)


## 7. Upload file from local file system

```python
from google.colab import files

uploaded = files.upload()

for fn in uploaded.keys():
  print('User uploaded file "{name}" with length {length} bytes'.format(
      name=fn, length=len(uploaded[fn])))
```
This script is officially part of Google Colab.

![upload](/wp-content/uploads/2020/12/upload.png)

and importing .py files in Google Colab

```python
from google.colab import files
src = list(files.upload().values())[0]
open('mylib.py','wb').write(src)
import mylib
```

![upload import](/wp-content/uploads/2020/12/upload-import.png)

## 8. Navigate using `%cd` command

To navigate to a folder you can use `%cd` command: 

```
!pwd
%cd /
!pwd
%cd /content
!pwd
```

Out:
```
/content
/
/content
```


## 9. Use `gdown` to download Google drive resources

`gdown` tool is already installed Linux command on Google Colab so you just need to call:

```python
!gdown --id 1uWdQ2kn25RSQITtBHa9_zayplm27IXNC -O clothing.json
```
The next image shows how to find the document id

![document id](/wp-content/uploads/2020/12/document-id.png)


To can also download documents Python way:

```python
import gdown
gdown.download("https://drive.google.com/uc?id=1uWdQ2kn25RSQITtBHa9_zayplm27IXNC", output="cloting.json", quiet=True)
```


## 10. Preview text file or image

This is one of the best tricks. You can actually open and edit text files if you just **double click** them:

![open file](/wp-content/uploads/2020/12/dbl.png)

Quite similar you can preview the images.

## 11. Rename files

To simple rename file you don't need to use anything other than right click the file name.

![rename file](/wp-content/uploads/2020/12/rename.png)



## 12. Delete file

To delete a file just right click the file, select "Delete" and confirm.

![delete file](/wp-content/uploads/2020/12/delete.png)


## 13. Stop Google Colab From Disconnecting

Open browser console **F12** on Firefox or **Ctrl+Shift+I** and write down the following JavaScript code:

```js
function KeepClicking(){
   console.log("Clicking");
   document.querySelector("colab-toolbar-button#connect").click()
}setInterval(KeepClicking,60000)
```
This way your notebook will be open for the 12 hours.


## 14. Basic Preview of a website

I found it nice to create basic website preview if you run this code.

```python
import requests
url = "https://programming-review.com"
try:
    r = requests.get(url) # requests.models.Response
    from IPython.display import HTML
    display(HTML(r.text))
except:
    print("Error with the request")
```

![Protocols](/wp-content/uploads/2020/12/website.png)


## 15. Use Conda without installing

For some project you need to have Conda, and then to install these projects you need to run `conda install`.

To save some time you can specify the directory to install Conda in on Google drive:

```
conda install -p path_to_your_dir
```
So, you can just mount your Google drive and use Conda without installing each time.


## 16. Combine two audio files together

Nice option you will have when working with Google Colab is to use run resource intensive tasks such as `ffmpeg`:

```
! ffmpeg -i "concat:first.mp3|second.mp3" -acodec copy combined.mp3
```





