---
id: 12971
title: Advanced Function and Class Concepts in Python
date: 2020-11-24
author: taimane
layout: post
permalink: /python/advanced-functions-classes
published: true
image: 
categories: 
   - python
tags:
   - advanced
---
- [Functions](#functions)
  - [Function inside a function](#function-inside-a-function)
  - [Closure](#closure)
  - [Methods and functions difference](#methods-and-functions-difference)
  - [Function decorators](#function-decorators)
  - [Partials](#partials)
- [Classes](#classes)
  - [Partials](#partials-1)
  - [Print public methods of a class](#print-public-methods-of-a-class)
  - [Printing class types](#printing-class-types)
  - [Get class variables without instantiating](#get-class-variables-without-instantiating)
  - [What is class dict?](#what-is-class-dict)
  - [How to add property to a class dynamically?](#how-to-add-property-to-a-class-dynamically)
- [Appendix](#appendix)
  - [Printing](#printing)

![functions and classes advanced](/wp-content/uploads/2020/12/fc.png)

## Functions

### Function inside a function

This is an easy concept almost any programming language has:

```python
def count():
    def count_to(n):
        for i in range(1, n+1):
            print(i)

    count_to(3)
count()
```
Out:

```
1
2
3
```

### Closure

A closure is very similar to simple nested function, except it references one or more variables from its enclosing scope.

```python
def count():
    n=3
    def count_to(n):
        for i in range(1, n+1):
            print(i)

    count_to(n)
count()
```
Out:

```
1
2
3
```

### Methods and functions difference

Python built-in `type()` can provide good debugging information.

_Example:_

```python
class C:
    def __init__(self, name, age):
        self.name = name
        self.age = age

    def m1(self, x):
        print("Excellent {}".format(x))

    @classmethod
    def m2(cls, x):
        print("Excellent cls {}".format(x))

    @staticmethod
    def m3(x):
        print("Excellent static {}".format(x))    

ci=C("John", 36)
L=dir(C) # c is a class
for i in L:
    print("C::", i, type(eval('ci.'+i)))
```

_Output:_
```
C:: m1 <class 'method'>
C:: m2 <class 'method'>
C:: m3 <class 'function'>
```

On the other hand we know that anything we define out-of-the-class with def keyword is a **function**:

```python
def foo():
    pass
type(foo)  # function
```

### Function decorators

Function decorators allow you to execute code before and after the function itself. Here is a basic example.

```python
def decorator1(func):
    def stub():
        print("before f1")
        func()
        print("after f1")
    return stub

@decorator1
def f1():
    print("f1")

f1()
```
_Out:_
```
before f1
f1
after f1
```


### Partials

Partials are imported from `functools`. They enable you to create new kind of _functions or classes_ of type (functools.partial).

This _new function_ will have some implicit parameters.

The _partial_ is like a function without a body, entirely dependent on the host function being specified, but with some parameter predefined.

_Example:_
```python
from functools import partial 
def multiply(x,y): return x * y 

# create a new kind of function that multiplies by 2 
fdouble = partial(multiply,2) 
fdouble(4)
```

_Out:_
```
8
```

```python
type(fdouble)
```

_Out:_
```
functools.partial
```




## Classes


### Partials

Partials are not just functions, they can help us define a class:

```python
from functools import partial

class C:
    def __init__(self, a,b):
        pass

c = C(1,2)  
print(type(c))
cp = partial(C,1)
print(cp)
print(type(cp))

def fun1(a,b,c):
    print(a,b,c)
    return a+b+c

fun2 = partial(fun1,c=3)
fun2(4,5)
print(fun2)
print(type(fun2))
```
_Out:_

```
<class '__main__.C'>
functools.partial(<class '__main__.C'>, 1)
<class 'functools.partial'>
4 5 3
functools.partial(<function fun1 at 0x00000298EA515708>, c=3)
<class 'functools.partial'>
```


### Print public methods of a class

You can use inspect module:

```python
class SimulationApi(object):

  def hello(self):
    return "Hi"

  def echo(self, string):
    return string

  def get_foo(self):
    return self.foo

  def __init__(self):
    self.foo = 50


import inspect
inspect.getmembers(SimulationApi)
```

_Out:_

```
[('__class__', type),
 ('__delattr__', <slot wrapper '__delattr__' of 'object' objects>),
 ('__dict__',
  mappingproxy({'__module__': '__main__',
                'hello': <function __main__.SimulationApi.hello(self)>,
                'echo': <function __main__.SimulationApi.echo(self, string)>,
                'get_foo': <function __main__.SimulationApi.get_foo(self)>,
                '__init__': <function __main__.SimulationApi.__init__(self)>,
                '__dict__': <attribute '__dict__' of 'SimulationApi' objects>,
                '__weakref__': <attribute '__weakref__' of 'SimulationApi' objects>,
                '__doc__': None})),
 ('__dir__', <method '__dir__' of 'object' objects>),
 ('__doc__', None),
 ('__eq__', <slot wrapper '__eq__' of 'object' objects>),
 ('__format__', <method '__format__' of 'object' objects>),
 ('__ge__', <slot wrapper '__ge__' of 'object' objects>),
 ('__getattribute__', <slot wrapper '__getattribute__' of 'object' objects>),
 ('__gt__', <slot wrapper '__gt__' of 'object' objects>),
 ('__hash__', <slot wrapper '__hash__' of 'object' objects>),
 ('__init__', <function __main__.SimulationApi.__init__(self)>),
 ('__init_subclass__', <function SimulationApi.__init_subclass__>),
 ('__le__', <slot wrapper '__le__' of 'object' objects>),
 ('__lt__', <slot wrapper '__lt__' of 'object' objects>),
 ('__module__', '__main__'),
 ('__ne__', <slot wrapper '__ne__' of 'object' objects>),
 ('__new__', <function object.__new__(*args, **kwargs)>),
 ('__reduce__', <method '__reduce__' of 'object' objects>),
 ('__reduce_ex__', <method '__reduce_ex__' of 'object' objects>),
 ('__repr__', <slot wrapper '__repr__' of 'object' objects>),
 ('__setattr__', <slot wrapper '__setattr__' of 'object' objects>),
 ('__sizeof__', <method '__sizeof__' of 'object' objects>),
 ('__str__', <slot wrapper '__str__' of 'object' objects>),
 ('__subclasshook__', <function SimulationApi.__subclasshook__>),
 ('__weakref__', <attribute '__weakref__' of 'SimulationApi' objects>),
 ('echo', <function __main__.SimulationApi.echo(self, string)>),
 ('get_foo', <function __main__.SimulationApi.get_foo(self)>),
 ('hello', <function __main__.SimulationApi.hello(self)>)]
```

> Your methods (the methods you like to get info) are also the `SimulationApi` class dictionary dict.

You can get the full code for your `echo()` function like this:

```python
import inspect
lines = inspect.getsource(SimulationApi.echo)
print(lines)

  def echo(self, string):
    return string
```

### Printing class types

Example:
```python
class test(object):
    def __init__(self):
        self.a = 1
        self.b = "abc"

test_obj = test()
print(vars(test_obj))


for k, v in vars(test_obj).items():
    print('variable is {0}: and variable value is {1}, of type {2}'.format(k,v, type(v)))
```

_Out:_

```
{'a': 1, 'b': 'abc'}
variable is a: and variable value is 1, of type <class 'int'>
variable is b: and variable value is abc, of type <class 'str'>
```

### Get class variables without instantiating

It is possible to do that using the `type` keyword in Python. There you have the example like this:

```python
class X:
     a = 1

X = type('X', (object,), dict(a=1))
print(X)
```

_Out:_

```
<class '__main__.X'>
```

### What is class dict?

Class dict is a mappingproxy. A mappingproxy is simply a dict with no `__setattr__` method.

You can check out and refer to this code.

```python
from types import MappingProxyType
d={'key': "value"}
m = MappingProxyType(d)
print(type(m)) # <class 'mappingproxy'>
m['key']='new' #TypeError: 'mappingproxy' object does not support item assignment
```

mappingproxy is since Python 3.3. The following code shows dict types:

```python
class C:pass
ci=C()
print(type(C.__dict__)) #<class 'mappingproxy'>
print(type(ci.__dict__)) #<class 'dict'>
```

### How to add property to a class dynamically?

```python
class C:
    def __init__(self):
        self._x=None

    def g(self):
        return self._x

    def s(self, x):
        self._x = x

    def d(self):
        del self._x

    def s2(self,x):
        self._x=x+x

    x=property(g,s,d)

c = C()
c.x="a"
print(c.x)
C.x=property(C.g, C.s2)
C.x=C.x.deleter(C.d)
c2 = C()
c2.x="a"
print(c2.x)
```

_Out:_

```
a
aa
```

> `getattr(object, 'x')` is completely equivalent to `object.x`.


## Appendix

### Printing

Python `dir` command can't provide you all. It's just a list of what you have inside a module. 

How to provide also the type of the object?

```python
import matplotlib.pyplot as plt
# type(plt) # module
# dir(plt) # what is in the plot object
d=dir(plt)

def dirtype(d):
    for i in d:
        print(i, type(eval('plt.'+i)))

dirtype(d)
```
_Out:_
```
Annotation <class 'type'>
Arrow <class 'type'>
Artist <class 'type'>
AutoLocator <class 'type'>
Axes <class 'type'>
Button <class 'type'>
Circle <class 'type'>
Figure <class 'type'>
FigureCanvasBase <class 'type'>
FixedFormatter <class 'type'>
FixedLocator <class 'type'>
FormatStrFormatter <class 'type'>
Formatter <class 'type'>
FuncFormatter <class 'type'>
GridSpec <class 'type'>
IndexLocator <class 'type'>
Line2D <class 'type'>
LinearLocator <class 'type'>
Locator <class 'type'>
LogFormatter <class 'type'>
LogFormatterExponent <class 'type'>
LogFormatterMathtext <class 'type'>
LogLocator <class 'type'>
MaxNLocator <class 'type'>
MultipleLocator <class 'type'>
Normalize <class 'type'>
NullFormatter <class 'type'>
NullLocator <class 'type'>
Number <class 'abc.ABCMeta'>
PolarAxes <class 'type'>
Polygon <class 'type'>
Rectangle <class 'type'>
ScalarFormatter <class 'type'>
Slider <class 'type'>
Subplot <class 'type'>
SubplotTool <class 'type'>
Text <class 'type'>
TickHelper <class 'type'>
Widget <class 'type'>
_INSTALL_FIG_OBSERVER <class 'bool'>
_IP_REGISTERED <class 'function'>
__builtins__ <class 'dict'>
__cached__ <class 'str'>
__doc__ <class 'str'>
__file__ <class 'str'>
__loader__ <class '_frozen_importlib_external.SourceFileLoader'>
__name__ <class 'str'>
__package__ <class 'str'>
__spec__ <class '_frozen_importlib.ModuleSpec'>
_auto_draw_if_interactive <class 'function'>
_backend_mod <class 'module'>
_get_running_interactive_framework <class 'function'>
_interactive_bk <class 'list'>
_log <class 'logging.Logger'>
_pylab_helpers <class 'module'>
_setp <class 'function'>
_setup_pyplot_info_docstrings <class 'function'>
_show <class 'function'>
acorr <class 'function'>
angle_spectrum <class 'function'>
annotate <class 'function'>
arrow <class 'function'>
autoscale <class 'function'>
autumn <class 'function'>
axes <class 'function'>
axhline <class 'function'>
axhspan <class 'function'>
axis <class 'function'>
axvline <class 'function'>
axvspan <class 'function'>
bar <class 'function'>
barbs <class 'function'>
barh <class 'function'>
bone <class 'function'>
box <class 'function'>
boxplot <class 'function'>
broken_barh <class 'function'>
cbook <class 'module'>
cla <class 'function'>
clabel <class 'function'>
clf <class 'function'>
clim <class 'function'>
close <class 'function'>
cm <class 'module'>
cohere <class 'function'>
colorbar <class 'function'>
colormaps <class 'function'>
connect <class 'function'>
contour <class 'function'>
contourf <class 'function'>
cool <class 'function'>
copper <class 'function'>
csd <class 'function'>
cycler <class 'function'>
dedent <class 'function'>
delaxes <class 'function'>
deprecated <class 'function'>
disconnect <class 'function'>
docstring <class 'module'>
draw <class 'function'>
draw_all <class 'method'>
draw_if_interactive <class 'function'>
errorbar <class 'function'>
eventplot <class 'function'>
figaspect <class 'function'>
figimage <class 'function'>
figlegend <class 'function'>
fignum_exists <class 'function'>
figtext <class 'function'>
figure <class 'function'>
fill <class 'function'>
fill_between <class 'function'>
fill_betweenx <class 'function'>
findobj <class 'function'>
flag <class 'function'>
functools <class 'module'>
gca <class 'function'>
gcf <class 'function'>
gci <class 'function'>
get <class 'function'>
get_backend <class 'function'>
get_cmap <class 'function'>
get_current_fig_manager <class 'function'>
get_figlabels <class 'function'>
get_fignums <class 'function'>
get_plot_commands <class 'function'>
get_scale_docs <class 'function'>
get_scale_names <class 'function'>
getp <class 'function'>
ginput <class 'function'>
gray <class 'function'>
grid <class 'function'>
hexbin <class 'function'>
hist <class 'function'>
hist2d <class 'function'>
hlines <class 'function'>
hot <class 'function'>
hsv <class 'function'>
importlib <class 'module'>
imread <class 'function'>
imsave <class 'function'>
imshow <class 'function'>
inferno <class 'function'>
inspect <class 'module'>
install_repl_displayhook <class 'function'>
interactive <class 'function'>
ioff <class 'function'>
ion <class 'function'>
isinteractive <class 'function'>
jet <class 'function'>
legend <class 'function'>
locator_params <class 'function'>
logging <class 'module'>
loglog <class 'function'>
magma <class 'function'>
magnitude_spectrum <class 'function'>
margins <class 'function'>
matplotlib <class 'module'>
matshow <class 'function'>
minorticks_off <class 'function'>
minorticks_on <class 'function'>
mlab <class 'module'>
new_figure_manager <class 'method'>
nipy_spectral <class 'function'>
np <class 'module'>
pause <class 'function'>
pcolor <class 'function'>
pcolormesh <class 'function'>
phase_spectrum <class 'function'>
pie <class 'function'>
pink <class 'function'>
plasma <class 'function'>
plot <class 'function'>
plot_date <class 'function'>
plotfile <class 'function'>
plotting <class 'function'>
polar <class 'function'>
prism <class 'function'>
psd <class 'function'>
pylab_setup <class 'function'>
quiver <class 'function'>
quiverkey <class 'function'>
rc <class 'function'>
rcParams <class 'matplotlib.RcParams'>
rcParamsDefault <class 'matplotlib.RcParams'>
rcParamsOrig <class 'matplotlib.RcParams'>
rc_context <class 'function'>
rcdefaults <class 'function'>
rcsetup <class 'module'>
re <class 'module'>
register_cmap <class 'function'>
rgrids <class 'function'>
savefig <class 'function'>
sca <class 'function'>
scatter <class 'function'>
sci <class 'function'>
semilogx <class 'function'>
semilogy <class 'function'>
set_cmap <class 'function'>
set_loglevel <class 'function'>
setp <class 'function'>
show <class 'function'>
silent_list <class 'type'>
specgram <class 'function'>
spring <class 'function'>
spy <class 'function'>
stackplot <class 'function'>
stem <class 'function'>
step <class 'function'>
streamplot <class 'function'>
style <class 'module'>
subplot <class 'function'>
subplot2grid <class 'function'>
subplot_tool <class 'function'>
subplots <class 'function'>
subplots_adjust <class 'function'>
summer <class 'function'>
suptitle <class 'function'>
switch_backend <class 'function'>
sys <class 'module'>
table <class 'function'>
text <class 'function'>
thetagrids <class 'function'>
tick_params <class 'function'>
ticklabel_format <class 'function'>
tight_layout <class 'function'>
time <class 'module'>
title <class 'function'>
tricontour <class 'function'>
tricontourf <class 'function'>
tripcolor <class 'function'>
triplot <class 'function'>
twinx <class 'function'>
twiny <class 'function'>
uninstall_repl_displayhook <class 'function'>
violinplot <class 'function'>
viridis <class 'function'>
vlines <class 'function'>
waitforbuttonpress <class 'function'>
warn_deprecated <class 'function'>
winter <class 'function'>
xcorr <class 'function'>
xkcd <class 'function'>
xlabel <class 'function'>
xlim <class 'function'>
xscale <class 'function'>
xticks <class 'function'>
ylabel <class 'function'>
ylim <class 'function'>
yscale <class 'function'>
yticks <class 'function'>
```