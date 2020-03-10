---
id: 12971
title: How to use Kaggle?
date: 2020-01-22
author: taimane
layout: post
permalink: /kaggle/how-to
published: false
image: 
categories: 
   - kaggle
tags:
   - data
---
- [Long tail distribution](#long-tail-distribution)



## Installation & Authentication

### Install the Kaggle package

If you have Python 3 and pip installed, run:

```
pip install kaggle 
```


### Authentication

In order to use the Kaggle's API, download the token that is inside json file.

From **My Account** dropdown menu  click 

<kbd>Create New API Token</kbd>. In there you will find authentication token.

Frmo Jupyter kernels:

```
! touch /root/.kaggle/kaggle.json
! chmod 600 /root/.kaggle/kaggle.json
! echo '{"username":"kaggle_user_name","key":"0000000000000000000000000000000000"}' >> /root/.kaggle/kaggle.json
! kaggle competitions download -c "dogs-vs-cats-redux-kernels-edition"
```

In here I opened **dogs-vs-cats-redux-kernels-edition** competition.


## Actions in Kaggle 

### List competitions


```
kaggle competitions list:
```
This will list currently active competitions. The output may look like this

![kaggle](/wp-content/uploads/2020/03/kaggle1.jpg)


### Download competition

```
kaggle competitions download -c "dogs-vs-cats-redux-kernels-edition"
```

This will download files associated with a competition "dogs-vs-cats-redux-kernels-edition". 

> Some competitions may have 50GB of files. Make sure you check this first.


### Submitting Kaggle competition

To submit a competition you need to accepted the terms of a competition. This cannot be done via CLI only via website.

```
kaggle competitions submit -c "COMPETITION NAME" -f "FILE PATH"

# or with the message

kaggle competitions submit -c "COMPETITION NAME" -f "FILE PATH" -m "MESSAGE"
```

List previous submission to a competition:

```
kaggle competitions submissions -c "COMPETITION NAME"
```


### Datasets commands

To list datasets based on a search term:

```
kaggle datasets list -s "KEYWORD" 
```

To download files associated with a dataset:

```
kaggle datasets download -d "DATASET"
```



~~~

If you are creating or updating a dataset on Kaggle, you can also use the API to make maintenance convenient or even programmatic. Read more here.

The Kaggle API can be used to to create new Datasets and Dataset versions on Kaggle from the comfort of the command-line. This can make sharing data and projects on Kaggle a simple part of your workflow. You can even use the API plus a tool like crontab to schedule programmatic updates of your Datasets to keep them well maintained.

If you haven’t installed the Kaggle Python package needed to use the command line tool or generated an API token, check out the getting started steps first.
Create a New Dataset

Here are the steps you can follow to create a new dataset on Kaggle:

    Create a folder containing the files you want to upload

    Run kaggle datasets init -p /path/to/dataset to generate a metadata file

    Add your dataset’s metadata to the generated file, datapackage.json

    Run kaggle datasets create -p /path/to/dataset to create the dataset

Your dataset will be private by default. You can also add a -u flag to make it public when you create it, or navigate to “Settings” > “Sharing” from your dataset’s page to make it public or share with collaborators.
Create a New Dataset Version

If you’d like to upload a new version of an existing dataset, follow these steps:

    Run kaggle datasets init -p /path/to/dataset to generate a metadata file (if you don’t already have one)

    Make sure the id field in dataset-metadata.json (or datapackage.json) points to your dataset

    Run kaggle datasets version -p /path/to/dataset -m "Your message here"

These instructions are the basic commands required to get started with creating and updating Datasets on Kaggle. You can find out more details from the official documentation on GitHub:

    Initializing metadata

    Create a Dataset

    Update a Dataset

Working with Dataset Metadata

If you want a faster way to complete the required dataset-metadata.json file (for example, if you want to add column-level descriptions for many tabular data files), we recommend using Frictionless Data’s Data Package Creator. Simply upload the dataset-metadata.json file that you’ve initialized for your dataset, fill out metadata in the user interface, and download the result.

To explore some further CLI arguments, remember that you can always append -h after any call to see the help menu for that command.
Interacting with Kernels

The Kaggle API and CLI tool provide easy ways to interact with Kernels on Kaggle. The commands available enable both searching for and downloading published Kernels and their metadata as well as workflows for creating and running Kernels using computational resources on Kaggle.

If you haven’t installed the Kaggle Python package needed to use the command line tool or generated an API token, check out the getting started steps first.

Some of the commands for interacting with Kernels via CLI include:

    kaggle kernels list -s [KEYWORD]: list Kernels matching a search term

    kaggle kernels push -k [KERNEL] -p /path/to/kernel : create and run a Kernel on Kaggle

    kaggle kernels pull -k [KERNEL] -p /path/to/download -m: download code files and metadata associated with a Kernel

If you are creating a new Kernel or running a new version of an existing Kernel on Kaggle, you can also use the API to make this workflow convenient or even programmatic. Read more here.

View all available commands on the official documentation on GitHub and keep up-to-date with the latest features and bug fixes in the changelog.

To explore additional CLI arguments, remember that you can always append -h after any call to see the help menu for that command.
Creating and Running a New Kernel

The Kaggle API can be used to to create new Kernels and Kernel versions on Kaggle from the comfort of the command-line. This can make executing and sharing code on Kaggle a simple part of your workflow.

If you haven’t installed the Kaggle Python package needed to use the command line tool or generated an API token, check out the getting started steps first.

Here are the steps you can follow to create and run a new Kernel on Kaggle:

    Create a local folder containing the code files you want to upload (e.g., your Python or R notebooks, scripts, or RMarkdown files)

    Run kaggle kernels init -p /path/to/kernel to generate a metadata file

    Add your kernel's metadata to the generated file, kernel-metadata.json; As you add your title and slug, please be aware that Kernel titles and slugs are linked to each other. A Kernel slug is always the title lowercased with dashes (-) replacing spaces and removing special characters.

    Run kaggle kernels push -p /path/to/kernel to create and run the Kernel on Kaggle

Your Kernel will be private by default unless you set it to public in the metadata file. You can also navigate to "Options" > “Sharing” from your published Kernel's page to make it public or share with collaborators.
Creating and Running a New Kernel Version

If you’d like to create and run a new version of an existing Kernel, follow these steps:

    Run kaggle kernels pull -k [KERNEL] -p /path/to/download -m to download your Kernel's most recent code and metadata files (if you your local copies aren't current)

    Make sure the id field in kernel-metadata.json points to your kernel; you no longer need to include the title field which is optional for Kernel versions unless you want to rename your Kernel (make sure to update the id field in your next push AFTER the rename is complete)

    Run kaggle kernels push -p /path/to/kernel

These instructions are the basic commands required to get started with creating, running, and updating Kernels on Kaggle. You can find out more details from the official documentation on GitHub:



