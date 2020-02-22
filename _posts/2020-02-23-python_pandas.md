---
id: 12971
title: Pandas load data
date: 2020-01-22
author: taimane
layout: post
permalink: /python/pandas-load-data
published: true
image: 
categories: 
   - python
tags:
   - pandas
   - string
   - load
---
_Table of contents:_
- [Creating a dataframe](#creating-a-dataframe)
  - [Read textual dataframe](#read-textual-dataframe)
    - [Comma separator](#comma-separator)
    - [Space as separator](#space-as-separator)
    - [More than 1 spaces as separator](#more-than-1-spaces-as-separator)
    - [New line as a separator](#new-line-as-a-separator)
    - [error_bad_lines=False](#errorbadlinesfalse)
  - [Read dataframe from the CSV file](#read-dataframe-from-the-csv-file)
  - [Read dataframe from URL](#read-dataframe-from-url)
  - [Read dataframe from HTML page](#read-dataframe-from-html-page)

![pandas](/wp-content/uploads/2020/02/pandas.jpg)

## Creating a dataframe

Let's create a dataframe in pandas. Dataframe is **a table**. To create a table we just need the table size.

_Example:_
```python
df = pd.DataFrame(index=range(14),columns=range(7))
print(df)
```
_Output:_
![pandas dataframe](/wp-content/uploads/2020/02/pandas1.jpg)

In here we set the 7 columns and 14 rows. Note how in python pandas the start index is always 0

To create a dataframe you my provide the column names and row index names.

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
As yuo may mark in the output when we called `print(df.values)`. What is this. It looks like a list.

Actually if we check the type of that object we will get `type(df.values)` is *numpy.ndarray*.

> Like Don Quixote is on ass, Pandas is on Numpy.

<big>Does this just menas we need Numpy array to provide data to pandas dataframe?</big>

Yes, but pandas is smart. Consider this example:

_Example:_
```python

data = pd.DataFrame([[10, 11, 12, 13, 14],
                   [22, 23, 24, 25, 26], 
                   [31, 32, 33, 34, 35]])
print(data)
```
_Output:_
```
    0   1   2   3   4
0  10  11  12  13  14
1  22  23  24  25  26
2  31  32  33  34  35
```
In here we haven't provided any Numpy arrays, the input data for the DataFrame was list of lists.

<big>What will happen infernally?</big>
```
import numpy as np
ll = [[10, 11, 12, 12, 14],
      [22, 23, 21, 22, 23], 
      [31, 35, 32, 34, 34]]
npa = np.asarray(ll)      
data = pd.DataFrame(npa)
print(data)
```

This will also work:

```
data = pd.DataFrame({'Col1': [10, 11, 12, 13, 14],
                  'Col2': [22, 23, 24, 25, 26], 
                  'Col3': [31, 32, 33, 34, 35]})
print(data)
```

_Output:_
```
   Col1  Col2  Col3
0    10    22    31
1    11    23    32
2    12    24    33
3    13    25    34
4    14    26    35
```

If we plan to set the row names, this would be also possible:

_Example:_
```
data = pd.DataFrame({'Col1': [10, 11, 12, 13, 14],
                  'Col2': [22, 23, 24, 25, 26], 
                  'Col3': [31, 32, 33, 34, 35]},
                  index=['row1', 'row2', 'row3', 'row4', 'row5'])
print(data)
```
Output:
```
      Col1  Col2  Col3
row1    10    22    31
row2    11    23    32
row3    12    24    33
row4    13    25    34
row5    14    26    35
```
### Read textual dataframe 

#### Comma separator

First example will use the `read_csv()` function to read a multiline text. CSV means _Comma Separated Values_. Using csv format is very frequent in pandas.

_Example:_
```python
import pandas as pd
import io

text=u"""asdf,333
asdf,444
asdf,555"""

df=pd.read_csv(io.StringIO(text), 
               sep=r',', 
               header=None, 
               engine='python', 
               encoding = "iso-8859-1")
print(df)
```
_Output:_
```
      0    1
0  asdf  333
1  asdf  444
2  asdf  555
```
> Default `read_csv` separator is `sep=r','`.


#### Space as separator

Let's now use the same function but **space as a separator**.

```python
import pandas as pd
import io

temp=u"""
NSW     VIC
6718023   5023203
6735528 5048207
6742690  5061266
6766133     5083593
6786160 5103965"""

df=pd.read_csv(io.StringIO(temp), 
                sep=r'\s{1,}', # one or more spaces
                engine='python', 
                encoding = "iso-8859-1")
print(df)
```

_Output:_
```
       NSW      VIC
0  6718023  5023203
1  6735528  5048207
2  6742690  5061266
3  6766133  5083593
4  6786160  5103965
```
#### More than 1 spaces as separator

The next example will have NEW YORK as the index name, however, this should still be the single index name.

_Example:_
```python
import pandas as pd
import io

s=u"""      one  two  three  four
INDIANA     0    1      2     3
COLORADO    4    5      6     7
NEW YORK    8    9     10    11
"""

df =pd.read_csv(io.StringIO(s), 
                sep=r'\s{2,}', # one or more spaces
                engine='python', 
                encoding="iso-8859-1")
print(df)
```
The solution in here is to use two spaces as a separator.

_Output:_
```
          one  two  three  four
INDIANA     0    1      2     3
COLORADO    4    5      6     7
NEW YORK    8    9     10    11
```

In here the dataframe index names are:
* INDIANA
* COLORADO
* NEW YORK 

#### New line as a separator

Very similar example, but now, we use the new line as a separator.

_Example:_
```python
from io import StringIO
import pandas as pd

text="""The lion (Panthera leo) is a species in the family Felidae.
It is a muscular, deep-chested cat with a short, rounded head.
A reduced neck and round ears, and a hairy tuft at the end of its tail. 
The lion males are larger than females.
A typical weight range of 150 to 250 kg (330 to 550 lb) for males and 120 to 182 kg (265 to 400 lb) for females."""
df =pd.read_csv(StringIO(text),
                sep=r'\n', 
                header=None, 
                engine='python', 
                encoding = "iso-8859-1", 
                names=["cname"])
print(df)
print("size:", df.size)
```

Output:
![loaded data](/wp-content/uploads/2020/02/pandas2.jpg)

#### error_bad_lines=False

One special option to read so called **bad lines**, where the code execution will fail is the `error_bad_lines=False`.

_Example:_
```
import pandas as pd
import io

s=u"""      one  two  three  four
INDIANA     0    1      2     3
COLORADO    4    5      6     7
NEW YORK    8    9     10    11
"""

df =pd.read_csv(io.StringIO(s), 
                sep=r'\s{1,}', # one or more spaces
                engine='python', 
                error_bad_lines=False,
                encoding = "iso-8859-1")
print(df)
```
In here the NEW YORK row will fail, because it has extra column. If we use the `error_bad_lines=False` option we will ignore this problem.

Output:
```
          one  two  three  four
INDIANA     0    1      2     3
COLORADO    4    5      6     7

Skipping line 4: Expected 5 fields in line 4, saw 6. Error could possibly be due to quotes being ignored when a multi-char delimiter is used.
```


### Read dataframe from the CSV file

Another approach would be to read the CSV on disk file.

Again we will use `read_csv` function which is [almost identical](https://github.com/pandas-dev/pandas/blob/master/pandas/io/parsers.py#L681){:rel="nofollow"} as the `read_table` function. The only difference is: 
* `read_csv` uses comma separator
* `read_table` uses tab as separator

Usually the code to read the csv file will be short as this:

```python
import pandas as pd 
dataframe = pd.read_csv("test.csv") 
```
<big>Problems when loading csv files:</big>

First if there is no file you may get the `FileNotFoundError`. Frequent problem is the `UnicodeDecodeError`, where you should first to understand the encoding of your file. To get the encoding of a file on Linux you may run `file -i` command and use that. If you think the things will work with the **utf-8** encoding, you may use this trick:

* Read the text from a file
* Decode the text with `text.decode('utf-8')`

Usually **utf-8** encoding, should cover the non-standard characters. If this doesn't work try with the **utf-16** encoding. 

> To fix the encoding problems you may use your editor and save csv file to particular encoding.

In some cases you may get the parsing errors. If this is the case, use the **engine='python'** option.

### Read dataframe from URL

Again, the same `read_csv` function works. This time we will use the `requests` package.

<sub>Check here -> [how to use requests package](https://programming-review.com/python/html-get/).</sub>

_Example:_
```python
import pandas as pd
import io
import requests
url='https://programming-review.com/wp-content/uploads/cities.csv'
s=requests.get(url).content
c=pd.read_csv(io.StringIO(s.decode('utf-8')))
```
_Output:_
![loaded data](/wp-content/uploads/2020/02/pandas3.jpg)

### Read dataframe from HTML page

If there is a table on a web page page, pandas can read that. 

_Example:_
```python
import pandas as pd
df = pd.read_html('https://en.wikipedia.org/wiki/Comparison_of_web_browsers')[0]
df
```
This is equivalent to:
```python
url = 'https://en.wikipedia.org/wiki/Comparison_of_web_browsers'
html_data = requests.get(url)
df = pd.read_html(html_data.text)[0]
df
```

_Output:_
![browsers](/wp-content/uploads/2020/02/pandas4.jpg)
