---
id: 12971
title: Pandas basic operation
date: 2020-01-22
author: taimane
layout: post
permalink: /python/pandas-basic-operation

published: true
image: 
categories: 
   - python
tags:
   - pandas
   - series
   - distribution
---
Pandas is a a great package for **data analysis**.
In Pandas you will deal with Series and DataFrames.

![pandas](/wp-content/uploads/2020/02/pandas.jpg)

_Table of contents:_
- [Reading the CSV DataFrame](#reading-the-csv-dataframe)




## Reading the CSV DataFrame

We covered already the [Pandas basic reading](/_posts/2020-02-23-python_pandas.md), and now we will dig into operations we can call on a **DataFrame** or **Series**. 


Let's open a particular CSV file first.

_Example:_
```python
df = pd.DataFrame(index=range(14),columns=range(7))
print(df)
```
_Output:_
![pandas dataframe](/wp-content/uploads/2020/02/pandas1.jpg)

In here we set the 7 columns and 14 rows. Note how in python pandas the start index is always 0.

To create a dataframe you may also provide _the column names and row index names_.

_Example:_
```python
import pandas as pd 
df = pd.DataFrame(index=['a', 'b', 'c'], columns=['time', 'date', 'name'])
print(df)
print(df.values)
```

_Output:_
```
  time date name
a  NaN  NaN  NaN
b  NaN  NaN  NaN
c  NaN  NaN  NaN
[[nan nan nan]
 [nan nan nan]
 [nan nan nan]]
```
