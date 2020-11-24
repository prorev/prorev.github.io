---
id: 12971
title: Python strings
date: 2020-11-24
author: taimane
layout: post
permalink: /python/subprocess
published: true
image: 
categories: 
   - python
tags:
   - subprocess
---
- [What is subprocess?](#what-is-subprocess)
- [Using `subprocess.call()`](#using-subprocesscall)
- [Using `subprocess.run()`](#using-subprocessrun)
- [Using `subprocess.Popen()`](#using-subprocesspopen)
  - [Get the process id of the command](#get-the-process-id-of-the-command)
  - [Get the output and standard error](#get-the-output-and-standard-error)
  - [Write out to to a file based on file handle](#write-out-to-to-a-file-based-on-file-handle)
  - [`Popen()` waiting for the subprocess to finish](#popen-waiting-for-the-subprocess-to-finish)
- [Using `check_output()`](#using-check_output)
- [Using `getoutput()`](#using-getoutput)
![str](/wp-content/uploads/2020/11/subprocess-art.jpg)


## What is subprocess?

A subprocess is a child process created by another process that executes a child program concurrently. Passing a string to a subprocess provides input for the subprocess to work with.

To use subprocess module write:
```python
import subprocess
```

This module allows you to spawn processes, connect to their input/output/error pipes, and obtain their return codes.

Type `dir(subprocess)` for more details.


Clearly `call()` and `run()`  and `Popen()` are the often used methods. 

`subprocess.call()` can run a subprocess and get just the return code. 

`subprocess.run()` is more powerful, it can return the output.

`subprocess.Popen()` is even more powerful that `run()`.


## Using `subprocess.call()`

This command waits for command to complete or to timeout, then returns the return code.

*Example:*
```python
import subprocess
subprocess.call(["ls", "-all"])
# returns 0 (success)
```


## Using `subprocess.run()`


*Example:*
```python
import subprocess
from subprocess import PIPE
cp = subprocess.run(["ls","-all"], universal_newlines=True, stdout=PIPE, stderr=PIPE)
print(cp.args)
print(cp.returncode)
print(cp.stdout)
print(cp.stderr)
```

*Out:*
```
['ls', '-all']
0
drwxr-xr-x 1 root root 4096 Nov 13 17:33 .
drwxr-xr-x 1 root root 4096 Nov 24 11:51 ..
drwxr-xr-x 1 root root 4096 Nov 13 17:33 tenor
drwxr-xr-x 1 root root 4096 Nov 13 17:33 baritone
drwxr-xr-x 1 root root 4096 Nov 13 17:33 bass
```

*Example:*  Error
```python
import subprocess
from subprocess import PIPE
cp = subprocess.run(["ls", "soprano" ,"-all"], universal_newlines=True, stdout=PIPE, stderr=PIPE)

print(cp.args)
print(cp.returncode)
print(cp.stdout)
print(cp.stderr)
```

*Out:*
```
['ls', 'soprano', '-all']
2

ls: cannot access 'soprano': No such file or directory

```


## Using `subprocess.Popen()`

`subprocess.Popen()` has complex syntax vs. `call()` and `run()` but brings more control.

### Get the process id of the command

*Example:* PID
```python
import subprocess
from subprocess import PIPE
p = Popen(["ls","-all"], stdout=PIPE, stderr=PIPE, universal_newlines=True)
pid = p.pid
pid # 313
```

### Get the output and standard error

*Example:* Output or Error
```python
import subprocess
from subprocess import PIPE
p = Popen(["ls","-all"], stdout=PIPE, stderr=PIPE, universal_newlines=True)
out, err = p.communicate()
print(out, err)
```

### Write out to to a file based on file handle

```python
import subprocess
from subprocess import Popen
from subprocess import PIPE
tmp = '/tmp/tmp.1.txt'
fh = open(tmp,'w+')
p = Popen(["ls","-all"], universal_newlines=True, stdout=fh, stderr=PIPE)
out, err = p.communicate()
print(out, err) 
```
*Out:*
```
None
```
The output is inside the file:
```
$> cat /tmp/tmp.1.txt

drwxr-xr-x 1 root root 4096 Nov 13 17:33 .
drwxr-xr-x 1 root root 4096 Nov 24 11:51 ..
drwxr-xr-x 1 root root 4096 Nov 13 17:33 tenor
drwxr-xr-x 1 root root 4096 Nov 13 17:33 baritone
drwxr-xr-x 1 root root 4096 Nov 13 17:33 bass
```

### `Popen()` waiting for the subprocess to finish

By default, calls to `Popen()` creates a subprocess in the background and don't wait for it to terminate. You can wait for the subprocess to finish like this:

```python
from subprocess import Popen
p = Popen(["ls","-all"])
p.wait()
```

## Using `check_output()`


*Example:*

```python
import subprocess
r = subprocess.check_output(["ls", "-all"], universal_newlines=True)
print(r)
```

<sub>Works only for the output, check the next method that works for bout output and error.</sub>


## Using `getoutput()`

This method returns both the output in case no error and the error in case of error.

*Example:* Returns the output
```python
import subprocess
r = subprocess.getoutput('ls -all')
print(r)
```

Out:
```
drwxr-xr-x 1 root root 4096 Nov 13 17:33 .
drwxr-xr-x 1 root root 4096 Nov 24 11:51 ..
drwxr-xr-x 1 root root 4096 Nov 13 17:33 tenor
drwxr-xr-x 1 root root 4096 Nov 13 17:33 baritone
drwxr-xr-x 1 root root 4096 Nov 13 17:33 bass
```

*Example:* Returns the error in case of error
```python
import subprocess
r = subprocess.getoutput('ls soprano -all')
print(r) 
```

*Out:*
```
ls: cannot access 'soprano': No such file or directory
```



