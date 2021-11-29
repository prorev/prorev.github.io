---
id: 12971
title: Python Numpy tips
date: 2020-01-22
author: taimane
layout: post
permalink: /python/numpy
published: true
image: 
categories: 
   - python
tags:
   - numpy
---

_Table of Contents:_

- [Data Types](#data-types)
- [Tensors (arrays)](#tensors-arrays)
- [Inspectors](#inspectors)
- [Creating tensors](#creating-tensors)
- [Copy related items](#copy-related-items)
- [Creating tensors with np.where()](#creating-tensors-with-npwhere)
- [np.c_ and np.r_](#npc_-and-npr_)
  - [np.c_](#npc_)
  - [np.r_](#npr_)
- [Grids](#grids)
- [Tensor operation](#tensor-operation)
  - [Transpose](#transpose)
  - [Flatten and Ravel](#flatten-and-ravel)
  - [Reshape](#reshape)
  - [Reshape(-1, 1) trick](#reshape-1-1-trick)
  - [Resize](#resize)
  - [Append, Insert, Delete](#append-insert-delete)
  - [Packing](#packing)
  - [Split tensors](#split-tensors)


## Data Types

```python
import numpy as np
np.int64         # Signed 64-bit integer types
np.float32       # Standard double-precision float
np.complex       # Complex number by two floats
np.bool          # Boolean TRUE and FALSE values
np.object        # Python object type
np.string_       # Fixed-length string type
np.unicode_      # Fixed-length unicode type
```

## Tensors (arrays)

_Example:_
```python
a = np.array([1,2,3])
print(a, a.shape)

b = np.array([(1,2,3), (4,5,6)], dtype = float)
print(b, b.shape)

c = np.array([[(1,2,3), (4,5,6)], [(3,2,1), (4,5,6)]], dtype = float)
print(c, c.shape)
```
_Output:_
```
[1 2 3] (3,) 

[[1   2.  3. ]
 [4.  5.  6. ]] (2, 3) 

[[[1   2.  3. ]
  [4.  5.  6. ]]

 [[3.  2.  1. ]
  [4.  5.  6. ]]] (2, 2, 3) 

```

## Inspectors

```python
a.shape            # Array dimensions
len(a)             # Length of array
a.ndim             # Number of array dimensions
a.size             # Number of array elements
a.dtype            # Data type of array elements
a.dtype.name       # Name of data type
np.info(a)         # Get the info
```

_Output from no.info(a):_
```
class:  ndarray
shape:  (3,)
strides:  (4,)
itemsize:  4
aligned:  True
contiguous:  True
fortran:  True
data pointer: 0x1ea3426b8d0
byteorder:  little
byteswap:  False
type: int32
```

## Creating tensors

_Example:_
```python
np.zeros((2,3))    # matrix of zeros 
np.ones((2,3,4))   # tensor of ones

e = np.arange(10,125,5)     # evenly spaced values from 10 to 125
e = np.linspace(1,10,9)     # evenly spaced 9 values

c = np.full((2,2),7)        # constant array
i = np.eye(2)               # 2X2 identity matrix

r = np.random.random((2,2)) # random values matrix
e = np.empty((3,2))         # empty matrix (undef. values)
```

Example:
```python
e = np.arange(10,125,5) 
print(e)
e = np.linspace(1,10,9) 
print(e)
```
_Output:_
```python
[ 10  15  20  25  30  35  40  45  50  55  60  65  70  75  80  85  90  95
 100 105 110 115 120]
[ 1.     2.125  3.25   4.375  5.5    6.625  7.75   8.875 10.   ]
```
## Copy related items

_Example:_
```python
h = a.view()       # view of the array
h = np.copy(a)     # copy of the array
h = a.copy()       # deep copy
```


## Creating tensors with np.where()

One another approach when we create new tensors based on other tensors and where condition:

_Example:_
```
import numpy as np
from matplotlib import pyplot as plt
n=200
np.random.seed(13)
x = np.random.rand(n)
y = np.random.rand(n)
t = np.where(x>y, 1, 0)
plt.figure(figsize=(8, 6), dpi=100)
plt.scatter(x,y, c=t)
plt.show()
```

_Output:_

![np.where](/wp-content/uploads/2020/04/np-where.jpg)

In here the tensor **t** are color values 0 and 1.

```
t = array([0, 1, 1, 1, 1, 0, 1, 1, 0, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0,...])
```

## np.c_ and np.r_

### np.c_ 


Is used to combine arrays:

```python
np.c_[np.array([1,2,3]), np.array([4,5,6])]
```
_Output:_
```
array([[1, 4],
       [2, 5],
       [3, 6]])
```

### np.r_

This is a simple way to build up arrays quickly. There are two use cases.

* If the index expression contains comma separated arrays, then stack them along their first axis.

* If the index expression contains slice notation or scalars then create a 1-D array with a range indicated by the slice notation.


```python
np.r_['0,2,0', [1,2,3], [4,5,6]]
```

_Output:_
```
array([[1],
       [2],
       [3],
       [4],
       [5],
       [6]])
```
```python
np.r_['1,2,0', [1,2,3], [4,5,6]]
```

_Output:_
```
array([[1, 4],
       [2, 5],
       [3, 6]])
```

Using 'r' or 'c' as a first string argument:

```python
np.r_['r',[1,2,3], [4,5,6]]
# matrix([[1, 2, 3, 4, 5, 6]])
```


## Grids

Often to create grids you use **meshgid** function.

_Example:_
```python
import numpy as np
x1,y1 = np.meshgrid(np.arange(1, 11, 2), np.arange(-12, -3, 3))
x1,y1
```
_Output:_
```
(array([[1, 3, 5, 7, 9],
        [1, 3, 5, 7, 9],
        [1, 3, 5, 7, 9]]), array([[-12, -12, -12, -12, -12],
        [ -9,  -9,  -9,  -9,  -9],
        [ -6,  -6,  -6,  -6,  -6]]))
```

Second function is the **mgrid**

_Example:_
```python
import numpy as np
x2,y2 = np.mgrid[1:11:2, -12:-3:3]
x2,y2
```

_Output:_
```
(array([[1, 1, 1],
        [3, 3, 3],
        [5, 5, 5],
        [7, 7, 7],
        [9, 9, 9]]), array([[-12,  -9,  -6],
        [-12,  -9,  -6],
        [-12,  -9,  -6],
        [-12,  -9,  -6],
        [-12,  -9,  -6]]))
```
> The returned **x1** and **x2** are transposed, as well is the case for **y1** and **y2**.

Often you use **meshgrid**  with **np.array**.

_Example:_
```python
x = np.array([1, 2, 3])
y = np.array([10, 20, 30]) 
xx,yy = np.meshgrid(x, y)
xx,yy
```

or **np.linespace**:

_Example:_
```python
x = np.linspace(2.0, 3.0, num=5)
y = np.linspace(5.0, 7.0, num=5)
xx,yy = np.meshgrid(x, y)
xx,yy
```

## Tensor operation

### Transpose

_Example:_
```python
a = np.empty((3,2))
print(a)
t = np.transpose(a)  # permute array dimensions
print(t)
```

_Output:_
```
[[1   3. ]
 [5.  2. ]
 [4.  6. ]]
[[1   5.  4. ]
 [3.  2.  6. ]]
```

### Flatten and Ravel

**flatten** would return a copy, **ravel** would return a view.

_Example:_
```python
t = np.array([[1,  5., 4. ], [3., 2.,  6. ]])
print(t)
f = t.flatten()
print(f)
r = t.ravel()
print(r)
```

_Output:_
```
[[1. 5. 4.]
 [3. 2. 6.]]
[1. 5. 4. 3. 2. 6.]
[1. 5. 4. 3. 2. 6.]
```

> Check **f.base** and **r.base** are different.

### Reshape

_Example:_
```python
t = np.array([[1,  5., 4. ], [3., 2.,  6. ]])
print(t)
r = t.reshape(-1)
print(r)
r = t.reshape(3,2)
print(r)
```

_Output:_
```python
[[1. 5. 4.]
 [3. 2. 6.]]
[1. 5. 4. 3. 2. 6.]
[[1. 5.]
 [4. 3.]
 [2. 6.]]
```

### Reshape(-1, 1) trick

If we have unspecified dimension such as **np.empty(4,)**, we can convert the missing dimension to 1 with the **reshape(-1,1)** trick:

_Example:_
```python
e = np.empty(4,)
print(e.shape)
e = e.reshape(-1,1)
print(e.shape)
```

_Output:_
```
(4,)
(4, 1)
```

**-1** means in here means all other dimensions except the last one.

### Resize

```python
a=np.empty((4,3))
print(a)
n=np.resize(a,(2,6))  # new array with shape (2,6)
print(n)
```
_Output:_
```
[[1.5 2.  3. ]
 [4.  5.  6. ]
 [3.  2.  1. ]
 [4.  5.  6. ]]
[[1.5 2.  3.  4.  5.  6. ]
 [3.  2.  1.  4.  5.  6. ]]
```


### Append, Insert, Delete

```python
np.append(arr, values, axis=None)
np.insert(arr, obj, values, axis=None)
np.delete(arr, obj, axis=None)
```

_Example append:_

```python
t = np.array([[1,  5., 4. ], [3., 2.,  6. ]])
print(t)
a = np.append(t,t)
print(a)
a = np.append(t,t, axis=0)
print(a)
a = np.append(t,t, axis=1)
print(a)
```

_Output:_
```
[[1. 5. 4.]
 [3. 2. 6.]] 

[1. 5. 4. 3. 2. 6. 1. 5. 4. 3. 2. 6.] 

[[1. 5. 4.]
 [3. 2. 6.]
 [1. 5. 4.]
 [3. 2. 6.]] 

[[1. 5. 4. 1. 5. 4.]
 [3. 2. 6. 3. 2. 6.]] 
```

_Example insert:_
```python
t = np.array([[1,  5., 4. ], [3., 2.,  6. ]])
print(t)
i=np.insert(t, 1, 5)
print(i)
i=np.insert(t, 1, 5, axis=0)
print(i)
i=np.insert(t, 1, 5, axis=1)
print(i)

i=np.insert(t, 1, [[1],[2],[3]], axis=0)
print(i)
i=np.insert(t, 1, [[1],[2],[3]], axis=1)
print(i)
```

_Output:_
```
[[1. 5. 4.]
 [3. 2. 6.]] 

[1. 5. 5. 4. 3. 2. 6.] 

[[1. 5. 4.]
 [5. 5. 5.]
 [3. 2. 6.]] 

[[1. 5. 5. 4.]
 [3. 5. 2. 6.]] 

[[1. 5. 4.]
 [1. 1. 1.]
 [2. 2. 2.]
 [3. 3. 3.]
 [3. 2. 6.]] 

[[1. 1. 2. 3. 5. 4.]
 [3. 1. 2. 3. 2. 6.]] 
```

_Example delete:_
```python
d=np.delete(a,[1]) 
print(d)
d=np.delete(a,[1], axis=0) 
print(d)
d=np.delete(a,[1], axis=1) 
print(d)
```

_Output:_
```
[1. 4. 1. 5. 4. 3. 2. 6. 3. 2. 6.] 

[[1. 5. 4. 1. 5. 4.]] 

[[1. 4. 1. 5. 4.]
 [3. 6. 3. 2. 6.]] 
```



### Packing

**np.concatenate**

```python
concatenate((a1, a2, ...), axis=0, out=None)
```

_Example:_
```python
a=np.array([[1,2]])
b=np.array([[1,2],[1,2]])
c=np.concatenate((a,b),axis=0) 
print(c)
c=np.concatenate((a.T,b),axis=1) 
print(c)
```
_Output:_
```
[[1 2]
 [1 2]
 [1 2]]

[[1 1 2]
 [2 1 2]]

```


**np.hstack(** and **np.vstack(**

```python
h=np.hstack((np.array([3,2,1]),np.array([1,2,3])))
print(h)
v=np.vstack((np.array([3,2,1]),np.array([1,2,3])))
print(v)
```

_Output:_
```
[3 2 1 1 2 3]
[[3 2 1]
 [1 2 3]]
 ```


**np.r_[...** and **np.c_[...**

```python
r=np.r_[np.array([3,2,1]),np.array([1,2,3])]
print(r)
c=np.c_[np.array([3,2,1]),np.array([1,2,3])]
print(c)
```
_Output:_
```
[3 2 1 1 2 3]
[[3 1]
 [2 2]
 [1 3]]
```

### Split tensors

```python
a=np.array([[1,2,3], [2,3,4]])
print(a)
print(a.shape)
h=np.hsplit(a,3)
v=np.vsplit(a,2)
print(h)
print(v)
```

```
[[1 2 3]
 [2 3 4]]
(2, 3)
[array([[1],
       [2]]), array([[2],
       [3]]), array([[3],
       [4]])] 

[array([[1, 2, 3]]), array([[2, 3, 4]])] 
```
