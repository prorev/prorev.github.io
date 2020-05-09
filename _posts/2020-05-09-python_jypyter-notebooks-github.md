---
id: 12971
title: Using Jupyter Notebooks with GitHub/Gist
date: 2020-05-03
author: taimane
layout: post
permalink: /python/jypyter-notebooks-github
published: true
image: 
categories: 
   - python
tags:
   - jupyter
---
## Jupyter notebooks

These notebooks are very important in everyday routine of the data analyst.

Here it will be explained how to open the notebook from GitHub and how to fast save the notebook to the GitHub.

## Save the notebook from the GitHub to local environment

1. Open the GitHub URL such as this [PyTorch example](https://gist.github.com/dejanbatanjac/16b3db27fe81fa58564565fb2ab52cd2). 
2. Open the [**Raw URL**](https://gist.githubusercontent.com/dejanbatanjac/16b3db27fe81fa58564565fb2ab52cd2/raw/9fe6bcf53a4eb672cc1d3e1d5349eccb2d391aca/Sum.ipynb).
3. Save the text to a file on your local computer

In case of the Windows environment you can check the **!dir** command inside the Jupyter to understand where the file should be saved. In case of Mac or Linux try **!ls**.

4. Once you save the file you open it from Jupyter command palette menu **File > Open**.





## Read the notebook from the GitHub and save it to local environment

You can do it in the next slightly more elegant way.
1. Copy the [**Raw URL**](https://gist.githubusercontent.com/dejanbatanjac/16b3db27fe81fa58564565fb2ab52cd2/raw/9fe6bcf53a4eb672cc1d3e1d5349eccb2d391aca/Sum.ipynb) to clipboard.
2. Download file using Python:

```python
import requests
url = 'https://gist.githubusercontent.com/dejanbatanjac/16b3db27fe81fa58564565fb2ab52cd2/raw/9fe6bcf53a4eb672cc1d3e1d5349eccb2d391aca/Sum.ipynb'

response = requests.get(url, allow_redirects=True) # nostream
with open('sum.ipynb', 'wb') as handle:
    handle.write(response.content)
```
3. Open the file from Jupyter command palette menu **File > Open**


## Save the notebook to Gist

The previous two tricks did open the notebook from some GitHub url, and this one will help you save you notebook to the GitHub fast.

You can always use GitHub for the same, but this is a neat little trick that you may use frequently once you understand how it works.

1. First enable Jupyter Notebook Extensions:

```
pip install jupyter_contrib_nbextensions
jupyter contrib nbextension install 

```

or using Conda

```
conda install -c conda-forge jupyter_contrib_nbextensions
```

You should now see the **Nbextensions tab**

![nbextensions](/wp-content/uploads/2020/05/nbextensions.jpg)


Then enable GistIt

![gistit](/wp-content/uploads/2020/05/gistit.jpg)

After you finish you will be able to find the button

![gistit](/wp-content/uploads/2020/05/gistit.button.jpg)

This will export the notebook to gist.