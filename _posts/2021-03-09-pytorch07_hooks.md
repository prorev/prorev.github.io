---
id: 100
title: PyTorch | Hooks
date: 2021-03-09 23:57:32
author: taimane
layout: post
permalink: /pytorch/hooks
published: true
categories:
   - pytorch
tags:
   - hooks
---
<script type="text/x-mathjax-config">
    MathJax.Hub.Config({
      tex2jax: {
        skipTags: ['script', 'noscript', 'style', 'textarea', 'pre'],
        inlineMath: [['$','$']]
      }
    });
</script>
<script src="https://cdn.mathjax.org/mathjax/latest/MathJax.js?config=TeX-AMS-MML_HTMLorMML" type="text/javascript"></script>


- [About PyTorch Hooks](#about-pytorch-hooks)
- [Use hooks to customize machine learning procedure](#use-hooks-to-customize-machine-learning-procedure)
- [Traverse all Resnet modules using hooks](#traverse-all-resnet-modules-using-hooks)
- [Bonus : Inspecting using `inspect` package](#bonus--inspecting-using-inspect-package)

![hooks](/wp-content/uploads/2021/03/hooks.png)

## About PyTorch Hooks

PyTorch hooks are great and powerful. There are three main types: 

* forward hooks
* backward hooks and
* state dict hooks

In here I will just explain forward hooks. There are two types of forward hooks:

* one that can alter the input
* one that can alter the output


Let's create a module `M` based on `nn.Module` with just a single `nn.Linear` layer inside, and let's update the input and the output using hooks.

**Example**: Print tensors using hooks

```python
import torch
import torch.nn as nn

class M(nn.Module):
    def __init__(self):        
        super().__init__()
        self.hooks= {}
        self.l1 = nn.Linear(1,2)

        for name, module in self.named_modules():
            module.name = name  
            if isinstance(module, (nn.Conv2d, nn.BatchNorm2d, nn.Linear)):            
                self.hooks["pre."+name]= module.register_forward_pre_hook(self.forward_pre_hook)
                self.hooks[name]= module.register_forward_hook(self.forward_hook)
            

    def forward(self, x):
        x = self.l1(x)
        return x

    def forward_pre_hook(self, module,  input):      
        
        print(f'\nInside {module.name} forward_pre_hook')      
        print(f'type(input): {type(input)}')
        print(f'type(input[0]): {type(input[0])}')      
        print(f'input: {input} is the same as model input')         
        return (2*input[0]) # double the input
       
    def forward_hook(self, module, input, output):
        print(f'\nInside {module.name} forward_hook')
        print(f'type(input): {type(input)}')
        print(f'type(input[0]): {type(input[0])}')        
        print(f'input: {input} is doubled') 
        print(f'input[0]: {input[0]} is doubled')         
        print(f'\ntype(output): {type(output)}')      
        print(f'output.size(): {output.size()}')
        print(f'output: {output}')
        print(f'output.data.size(): {output.data.size()}')
        print(f'output.data: {output.data}') 
        return 2*output # double the output for the next layer          
      
    def clearhooks(self):
        self.hooks.clear()      


model = M()
print(f'hooks {model.hooks}')

model.train()
x = torch.randn(1)
print(f'\nmodel input: {x}')
output = model(x)
print(f'\nmodel output: {output} is doubled')
model.clearhooks()
```

Out:
```
hooks {'pre.l1': <torch.utils.hooks.RemovableHandle object at 0x000002476365E888>, 'l1': <torch.utils.hooks.RemovableHandle object at 0x000002476365E9C8>}

model input: tensor([0.8730])

Inside l1 forward_pre_hook
type(input): <class 'tuple'>
type(input[0]): <class 'torch.Tensor'>
input: (tensor([0.8730]),) is the same as model input

Inside l1 forward_hook
type(input): <class 'tuple'>
type(input[0]): <class 'torch.Tensor'>
input: (tensor([1.7461]),) is doubled
input[0]: tensor([1.7461]) is doubled

type(output): <class 'torch.Tensor'>
output.size(): torch.Size([2])
output: tensor([0.1557, 0.6437], grad_fn=<AddBackward0>)
output.data.size(): torch.Size([2])
output.data: tensor([0.1557, 0.6437])

model output: tensor([0.3115, 1.2875], grad_fn=<MulBackward0>) is doubled
```

We looped trough all the named modules checking if the module is either `Linear`, `Conv2d` or `BatchNorm2d`.
Only for these module types we registered the `forward_hook` and the `forward_pre_hook`.

We used the main module `self.hooks` dict because then in one place I can have all the hook names.
If we don't set our `hooks` dictionary than the default location for the hooks inside module `m` would be:

```python
m._forward_pre_hooks # or
m._forward_hooks
```

Note the execution sequence prints:

* `Inside l1 forward_pre_hook` 
* `Inside l1 forward_hook`

We should note the value of `input` is doubled when it reaches **Inside l1 forward_hook**. We should also note the `output` tensor elements are doubled as well. 

This was the proof of the concept we can alter the input and output module values.


## Use hooks to customize machine learning procedure

In `forward_pre_hook` can can only update the input if we return modified input.

```python
def forward_pre_hook(self, module,  input):  
```

In `forward_hook` we can only update the output if we return modified output.

```python
def forward_hook(self, module, input, output):
```

This tells that hooks are not used just for introspection but also to customize machine learning procedure.


**Example** : Read or edit parameters inside the hooks

We may not print and update the input and output inside the hook function. We may also print and update the parameters. The following example will show just that.

```python
from time import sleep

import torch
import torch.nn as nn
class M(nn.Module):
    def __init__(self):        
        super().__init__()        
        self.l1 = nn.Linear(1,2)
        
    def forward(self, x):
        x = self.l1(x)
        return x

model = M()
model.train()
model.passedbatches=0

def batch_print(module, inp, outp):
    sleep(1)
    module.passedbatches +=1
    print("batch number", module.passedbatches)
    print(module.l1.weight)
    print(module.l1.bias)
    module.l1.weight = nn.Parameter(module.l1.weight*2)
    module.l1.bias = nn.Parameter(module.l1.bias*2)
    print("inp ", inp)
    print("outp ", outp)


h = model.register_forward_hook(batch_print)
for i in range(1,4):
    # simplified batches
    x = torch.randn(1)
    output = model(x)

h.remove()
```

Out:
```
batch number 1
Parameter containing:
tensor([[-0.7107],
        [-0.4657]], requires_grad=True)
Parameter containing:
tensor([-0.3114, -0.6753], requires_grad=True)
inp  (tensor([0.6417]),)
outp  tensor([-0.7674, -0.9742], grad_fn=<AddBackward0>)
batch number 2
Parameter containing:
tensor([[-1.4215],
        [-0.9315]], requires_grad=True)
Parameter containing:
tensor([-0.6227, -1.3507], requires_grad=True)
inp  (tensor([0.3611]),)
outp  tensor([-1.1361, -1.6871], grad_fn=<AddBackward0>)
batch number 3
Parameter containing:
tensor([[-2.8429],
        [-1.8629]], requires_grad=True)
Parameter containing:
tensor([-1.2455, -2.7014], requires_grad=True)
inp  (tensor([0.7600]),)
outp  tensor([-3.4063, -4.1173], grad_fn=<AddBackward0>)
```

As we stepped trough the batches we updated the parameters at the same time. Calling `loss.backward()` followed by `optimizer.step()` is not the only way to update the parameters.





## Traverse all Resnet modules using hooks

To traverse resnet modules add hooks for all of these.

```python
import torchvision
resnet = torchvision.models.resnet18()
resnet.train()
resnet.dict={} # {module_id : module name}
resnet.hooks={} # hooks to remove later
resnet.name_ids=[] # module names
resnet.modules=[] # list of module objects
resnet.mdict={} # modules dict

def has_children(module):
    '''check if module has children'''
    if len(list(module.children())) > 0:
        return True
    else:
        return False

def hook(module, inp, outp): 
    if module.name:
        resnet.name_ids.append(module.name)# + " " + module.__class__.__name__)
        resnet.modules.append(module)
    
for name, module in resnet.named_modules():
    #     if isinstance(module, (nn.Conv2d, nn.BatchNorm2d, nn.Linear)):                
    module.name = name
    module.type = module.__class__.__name__
    module.has_children = has_children(module)
    resnet.hooks[name]= module.register_forward_hook(hook)
    
out = resnet(torch.randn(1,3,224,224))
resnet.dict = dict(zip(range(len(resnet.name_ids)),resnet.name_ids))
resnet.mdict = dict(zip(range(len(resnet.modules)),resnet.modules))
resnet.dict
```

Out:
```
{0: 'conv1',
 1: 'bn1',
 2: 'relu',
 3: 'maxpool',
 4: 'layer1.0.conv1',
 5: 'layer1.0.bn1',
 6: 'layer1.0.relu',
 7: 'layer1.0.conv2',
 8: 'layer1.0.bn2',
 9: 'layer1.0.relu',
 10: 'layer1.0',
 11: 'layer1.1.conv1',
 12: 'layer1.1.bn1',
 13: 'layer1.1.relu',
 14: 'layer1.1.conv2',
 15: 'layer1.1.bn2',
 16: 'layer1.1.relu',
 17: 'layer1.1',
 18: 'layer1',
 19: 'layer2.0.conv1',
 20: 'layer2.0.bn1',
 21: 'layer2.0.relu',
 22: 'layer2.0.conv2',
 23: 'layer2.0.bn2',
 24: 'layer2.0.downsample.0',
 25: 'layer2.0.downsample.1',
 26: 'layer2.0.downsample',
 27: 'layer2.0.relu',
 28: 'layer2.0',
 29: 'layer2.1.conv1',
 30: 'layer2.1.bn1',
 31: 'layer2.1.relu',
 32: 'layer2.1.conv2',
 33: 'layer2.1.bn2',
 34: 'layer2.1.relu',
 35: 'layer2.1',
 36: 'layer2',
 37: 'layer3.0.conv1',
 38: 'layer3.0.bn1',
 39: 'layer3.0.relu',
 40: 'layer3.0.conv2',
 41: 'layer3.0.bn2',
 42: 'layer3.0.downsample.0',
 43: 'layer3.0.downsample.1',
 44: 'layer3.0.downsample',
 45: 'layer3.0.relu',
 46: 'layer3.0',
 47: 'layer3.1.conv1',
 48: 'layer3.1.bn1',
 49: 'layer3.1.relu',
 50: 'layer3.1.conv2',
 51: 'layer3.1.bn2',
 52: 'layer3.1.relu',
 53: 'layer3.1',
 54: 'layer3',
 55: 'layer4.0.conv1',
 56: 'layer4.0.bn1',
 57: 'layer4.0.relu',
 58: 'layer4.0.conv2',
 59: 'layer4.0.bn2',
 60: 'layer4.0.downsample.0',
 61: 'layer4.0.downsample.1',
 62: 'layer4.0.downsample',
 63: 'layer4.0.relu',
 64: 'layer4.0',
 65: 'layer4.1.conv1',
 66: 'layer4.1.bn1',
 67: 'layer4.1.relu',
 68: 'layer4.1.conv2',
 69: 'layer4.1.bn2',
 70: 'layer4.1.relu',
 71: 'layer4.1',
 72: 'layer4',
 73: 'avgpool',
 74: 'fc'}
```

It is very important to register the hooks while traversing the `named_modules()`.

Registered hooks will execute once we calculate the module output. Effectively this will set the `resnet.name_ids` and `resnet.modules`:

* `resnet.name_ids` contains the module unique names
* `resnet.modules` contains the module object pointers

## Bonus : Inspecting using `inspect` package

**Example** : Inspecting models using `inspect` package

```python
import inspect
import torchvision
model = torchvision.models.resnet18()
print(inspect.getsource(model.layer1[0].forward))
```

Out:
```
def forward(self, x):
    identity = x

    out = self.conv1(x)
    out = self.bn1(out)
    out = self.relu(out)

    out = self.conv2(out)
    out = self.bn2(out)

    if self.downsample is not None:
        identity = self.downsample(x)

    out += identity
    out = self.relu(out)

    return out
```