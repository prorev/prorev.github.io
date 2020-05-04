---
id: 12971
title: Encode Categorical Features
date: 2020-05-03
author: taimane
layout: post
permalink: /machine-learning/encode-categorical
published: true
image: 
categories: 
   - machine-learning
tags:
   - encoder
   - pandas
   - sklearn
---
In machine learning when you deal with pandas datasets you often have to convert categorical features to numerical since machine learning algorithms work with numerical values.

In case we have our data as pandas DataFrame, we **encode** categorical features (read:columns) of a DataFrame. For conversion you can use pandas and scikit-learn methods:

- [The **get_dummies** method](#the-getdummies-method)
- [**LabelEncoder** method](#labelencoder-method)
- [**OneHotEncoder** method](#onehotencoder-method)
- [**OrdinalEncoder** method](#ordinalencoder-method)
- [**DictVectorizer** method](#dictvectorizer-method)


> All mentioned scikit-learn methods are called transformers.


Let's use a subset from Kaggle [wine-reviews](https://www.kaggle.com/zynicide/wine-reviews){:rel="nofollow"} dataset:


<!-- python
import os
import pandas as pd
os.environ['KAGGLE_USERNAME'] = "uname" # username from the .json file
os.environ['KAGGLE_KEY'] = "kry..." # key from the .json file
!kaggle datasets download -d zynicide/wine-reviews
df=pd.read_csv("winemag-data_first150k.csv",
                sep=r',', 
                engine='python',
                index_col=0)
-->

```python
import pandas as pd
import io

text=u""" 	points 	price 	country 	region_1 	variety 	winery
0 	96 	235.0 	US 	Napa Valley 	Cabernet Sauvignon 	Heitz
1 	96 	110.0 	Spain 	Toro 	Tinta de Toro 	Bodega Carmen Rodríguez
2 	96 	90.0 	US 	Knights Valley 	Sauvignon Blanc 	Macauley
3 	96 	65.0 	US 	Willamette Valley 	Pinot Noir 	Ponzi
4 	95 	66.0 	France 	Bandol 	Provence red blend 	Domaine de la Bégude
5 	95 	73.0 	Spain 	Toro 	Tinta de Toro 	Numanthia
6 	95 	65.0 	Spain 	Toro 	Tinta de Toro 	Maurodos
7 	95 	110.0 	Spain 	Toro 	Tinta de Toro 	Bodega Carmen Rodríguez
8 	95 	65.0 	US 	Chehalem Mountains 	Pinot Noir 	Bergström
9 	95 	60.0 	US 	Sonoma Coast 	Pinot Noir 	Blue Farm
10 	95 	80.0 	Italy 	Collio 	Friulano 	Borgo del Tiglio
11 	95 	48.0 	US 	Ribbon Ridge 	Pinot Noir 	Patricia Green Cellars
12 	95 	48.0 	US 	Dundee Hills 	Pinot Noir 	Patricia Green Cellars
13 	95 	90.0 	France 	Madiran 	Tannat 	Vignobles Brumont
14 	95 	185.0 	US 	Dundee Hills 	Pinot Noir 	Domaine Serene"""

df=pd.read_csv(io.StringIO(text), 
               sep=r'\t',                
               engine='python', 
               encoding = "utf8")
print(df)
```


First we identify categorical features (columns).

```python
cc = df.columns[df.dtypes==object].tolist()
cc
```

_Output:_
```
['country', 'region_1', 'variety', 'winery']
```

**Remove the NaN values first**

You do machine learning algorithms, but in case on NaN values you have options. One of the options is to remove rows with the NaN. 

In here we have string **'NaN'** conversion to `np.nan` and then we use **dropna** to drop NaN values.


```python
df.replace('NaN', np.nan, inplace=True, regex=True)
# print(df.columns)
df.dropna(inplace=True, subset=['points','price','region_1','variety','winery'])
df
```

Instead setting the **subset** parameter to all the columns (**df.columns**) we may set just the columns we will be using further.


## The **get_dummies** method 


We will use the get_dummies for the whole DataFrame. We can/could specify the columns, the default prefix is **_**, and **drop_first** is smart to use with any machine learning algorithm to remove redundancy.


_Example:_
```python
X = pd.get_dummies(df, columns=df.columns, prefix_sep='_', drop_first=True)
X.shape, X.columns 
```

Output:
```
((12, 32),
 Index(['points', 'price', 'region_1_Carneros ', 'region_1_Central Coast ',
        'region_1_Columbia Valley (WA) ',
        'region_1_Conegliano Valdobbiadene Prosecco Superiore ',
        'region_1_Livermore Valley ', 'region_1_Mendoza ',
        'region_1_Paso Robles ', 'region_1_Puget Sound ',
        'region_1_Sonoma Coast ', 'variety_Chardonnay ', 'variety_Glera ',
        'variety_Malbec ', 'variety_Merlot ', 'variety_Pinot Noir ',
        'variety_Red Blend ', 'variety_Riesling ', 'variety_Sangiovese Grosso ',
        'variety_Siegerrebe ', 'variety_Syrah ', 'winery_Burt Street Cellars',
        'winery_Calcareous', 'winery_Casisano Colombaio',
        'winery_Familia Los Agüeros', 'winery_Mahoney', 'winery_Merryvale',
        'winery_Ruggeri & C.', 'winery_Sineann', 'winery_Vihuela',
        'winery_Wente', 'winery_Whidbey Island Winery'],
       dtype='object'))
```

## **LabelEncoder** method

_Example:_

```python
from sklearn.preprocessing import LabelEncoder
le = LabelEncoder()
df[cc] = df[cc].apply(lambda c: le.fit_transform(c))
df
```

_Output:_

```
 	points 	price 	country 	region_1 	variety 	winery
0 	96 	235.0 	3 	6 	0 	6
1 	96 	110.0 	2 	9 	6 	2
2 	96 	90.0 	3 	4 	4 	7
3 	96 	65.0 	3 	10 	2 	11
4 	95 	66.0 	0 	0 	3 	5
5 	95 	73.0 	2 	9 	6 	9
6 	95 	65.0 	2 	9 	6 	8
7 	95 	110.0 	2 	9 	6 	2
8 	95 	65.0 	3 	1 	2 	0
9 	95 	60.0 	3 	8 	2 	1
```

Label encoder works fine. The problem is if you have columns with more than 2 values it will not provide optimal results for machine learning problems.

The reason behind this non optimal results is because it introduces relation such as label encoded with 4 is greater than label encoded with 2 or 0. This may hurt the performance.

> The documentation say this transformer should be used to encode target values **y** and not the input **X**. 

However, it may be used for encoding the X if we insist, although better methods exist.



This is why we use **OneHotEncoder**.


## **OneHotEncoder** method

**OneHotEncoder** works almost exactly like **dummy_encoder** function 

_Example:_
```python
import pandas as pd
import numpy as np
import io

s="""points	price	country	region_1	variety	winery
0 	96 	235.0 	US 	Napa Valley 	Cabernet Sauvignon 	Heitz
1 	96 	110.0 	Spain 	Toro 	Tinta de Toro 	Bodega Carmen Rodríguez
2 	96 	90.0 	US 	Knights Valley 	Sauvignon Blanc 	Macauley
3 	96 	65.0 	US 	Willamette Valley 	Pinot Noir 	Ponzi
4 	95 	66.0 	France 	Bandol 	Provence red blend 	Domaine de la Bégude
5 	95 	73.0 	Spain 	Toro 	Tinta de Toro 	Numanthia"""

df=pd.read_csv(io.StringIO(s), 
               sep=r'\t',                
               engine='python', 
               encoding = "utf8")
from sklearn.preprocessing import OneHotEncoder
ohe = OneHotEncoder(sparse=False)
ohe.fit_transform(df[['country']]), ohe.categories_
```

_Output:_
```
(array([[0., 0., 1.],
        [0., 1., 0.],
        [0., 0., 1.],
        [0., 0., 1.],
        [1., 0., 0.],
        [0., 1., 0.]]), [array(['France ', 'Spain ', 'US '], dtype=object)])
```

You can encode multiple columns:

```python
from sklearn.preprocessing import OneHotEncoder
ohe = OneHotEncoder(sparse=False)
ohe.fit_transform(df[['country','winery']]), ohe.categories_
```


_Example:_
```python
from sklearn.preprocessing import OneHotEncoder
ohe = OneHotEncoder(sparse=False, categories='auto' )
df_ohe = ohe.fit_transform(df, df.columns)
df_ohe.shape # (15, 47)
```

_Output:_
```
(array([[0., 0., 1., 0., 0., 1., 0., 0., 0.],
        [0., 1., 0., 1., 0., 0., 0., 0., 0.],
        [0., 0., 1., 0., 0., 0., 1., 0., 0.],
        [0., 0., 1., 0., 0., 0., 0., 0., 1.],
        [1., 0., 0., 0., 1., 0., 0., 0., 0.],
        [0., 1., 0., 0., 0., 0., 0., 1., 0.]]),
 [array(['France ', 'Spain ', 'US '], dtype=object),
  array(['Bodega Carmen Rodríguez', 'Domaine de la Bégude', 'Heitz',
         'Macauley', 'Numanthia', 'Ponzi'], dtype=object)])
```

By using the **make_column_transformer** you can automate the process:

```python
from sklearn.compose import make_column_transformer
ct = make_column_transformer( 
    (OneHotEncoder(sparse=False), ['country','winery']), remainder='drop')
ct.fit_transform(df)
```

_Output:_
```
array([[0., 0., 1., 0., 0., 1., 0., 0., 0.],
       [0., 1., 0., 1., 0., 0., 0., 0., 0.],
       [0., 0., 1., 0., 0., 0., 1., 0., 0.],
       [0., 0., 1., 0., 0., 0., 0., 0., 1.],
       [1., 0., 0., 0., 1., 0., 0., 0., 0.],
       [0., 1., 0., 0., 0., 0., 0., 1., 0.]])
```

In case we like to keep the all non categorical columns, and convert all categorical columns:
we can use the **cc** list (categorical columns list):

```python
from sklearn.compose import make_column_transformer
cc = df.columns[df.dtypes==object].tolist()
ct = make_column_transformer( 
    (OneHotEncoder(sparse=True), cc), remainder='passthrough')
ct.fit_transform(df)
```

And of course we can use sparse columns.

## **OrdinalEncoder** method

This type of encoder can be use on categorical features that involve graduation such as education. It also works for prices


```python
from sklearn.preprocessing import OrdinalEncoder
oe = OrdinalEncoder()
oe.fit_transform(df[['price']]), oe.categories_
```

_Output:_
```
(array([[5.],
        [4.],
        [3.],
        [0.],
        [1.],
        [2.]]), [array([ 65.,  66.,  73.,  90., 110., 235.])])
```

If you note the original data:

```
 	points 	price 	country
0 	96 	235.0 	US
1 	96 	110.0 	Spain
2 	96 	90.0 	US
3 	96 	65.0 	US
4 	95 	66.0 	France
5 	95 	73.0 	Spain
```


## **DictVectorizer** method

DictVectorized need to be applied on a dict, so we need to convert the DataFrame to a dict first.

This may not be optimal.

_Example:_

```python
d = df.to_dict(orient='records')
d
```

_Output:_
```
[{'points ': 96,
  'price': 235.0,
  'country': 'US ',
  'region_1': 'Napa Valley ',
  'variety': 'Cabernet Sauvignon ',
  'winery': 'Heitz'},
 {'points ': 96,
  'price': 110.0,
  'country': 'Spain ',
  'region_1': 'Toro ',
  'variety': 'Tinta de Toro ',
  'winery': 'Bodega Carmen Rodríguez'},
 {'points ': 96,
  'price': 90.0,
  'country': 'US ',
  'region_1': 'Knights Valley ',
  'variety': 'Sauvignon Blanc ',
  'winery': 'Macauley'},
 {'points ': 96,
  'price': 65.0,
  'country': 'US ',
  'region_1': 'Willamette Valley ',
  'variety': 'Pinot Noir ',
  'winery': 'Ponzi'},
 {'points ': 95,
  'price': 66.0,
  'country': 'France ',
  'region_1': 'Bandol ',
  'variety': 'Provence red blend ',
  'winery': 'Domaine de la Bégude'},
 {'points ': 95,
  'price': 73.0,
  'country': 'Spain ',
  'region_1': 'Toro ',
  'variety': 'Tinta de Toro ',
  'winery': 'Numanthia'}]
```

Next:

```python
from sklearn.feature_extraction import DictVectorizer
dv = DictVectorizer(sparse=False)
e = dv.fit_transform(d)
e
```


_Output:_
```
array([[  0.,   0.,   1.,  96., 235.,   0.,   0.,   1.,   0.,   0.,   1.,
          0.,   0.,   0.,   0.,   0.,   0.,   1.,   0.,   0.,   0.],
       [  0.,   1.,   0.,  96., 110.,   0.,   0.,   0.,   1.,   0.,   0.,
          0.,   0.,   0.,   1.,   1.,   0.,   0.,   0.,   0.,   0.],
       [  0.,   0.,   1.,  96.,  90.,   0.,   1.,   0.,   0.,   0.,   0.,
          0.,   0.,   1.,   0.,   0.,   0.,   0.,   1.,   0.,   0.],
       [  0.,   0.,   1.,  96.,  65.,   0.,   0.,   0.,   0.,   1.,   0.,
          1.,   0.,   0.,   0.,   0.,   0.,   0.,   0.,   0.,   1.],
       [  1.,   0.,   0.,  95.,  66.,   1.,   0.,   0.,   0.,   0.,   0.,
          0.,   1.,   0.,   0.,   0.,   1.,   0.,   0.,   0.,   0.],
       [  0.,   1.,   0.,  95.,  73.,   0.,   0.,   0.,   1.,   0.,   0.,
          0.,   0.,   0.,   1.,   0.,   0.,   0.,   0.,   1.,   0.]])
```

