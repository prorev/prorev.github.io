---
id: 2987
title: Vim Quiz Questions
date: 2020-12-06 14:02:58
author: taimane
layout: post
permalink: /linux/vim
published: true
categories:
   - linux
tags:
   - quiz

---
- [1. Who created Vi?](#1-who-created-vi)
- [2. Is this true?](#2-is-this-true)
- [3. How many modes Vim have?](#3-how-many-modes-vim-have)
- [4. To delete a single character under the cursor you would use:](#4-to-delete-a-single-character-under-the-cursor-you-would-use)
- [5. To display registers in Vim you use?](#5-to-display-registers-in-vim-you-use)
- [6. Is `""""p` the same as `p` in normal mode?](#6-is-p-the-same-as-p-in-normal-mode)
- [7. How to delete the whole line under the cursor in normal mode?](#7-how-to-delete-the-whole-line-under-the-cursor-in-normal-mode)
- [8. How to copy a line under the cursor in normal mode?](#8-how-to-copy-a-line-under-the-cursor-in-normal-mode)
- [9. How to copy from the cursor till the end of line?](#9-how-to-copy-from-the-cursor-till-the-end-of-line)
- [10. How do you open a new file `hello` in Vim?](#10-how-do-you-open-a-new-file-hello-in-vim)
- [11. How can you set line numbers in Vim?](#11-how-can-you-set-line-numbers-in-vim)
- [12. How to enable syntax highlighting in Vim?](#12-how-to-enable-syntax-highlighting-in-vim)
- [13. Vim supports coloring schemes?](#13-vim-supports-coloring-schemes)
- [14. How to get the list of items you can preset using the `set` command?](#14-how-to-get-the-list-of-items-you-can-preset-using-the-set-command)
- [15. Which one you will select to save changes (if any) and close the file after that?](#15-which-one-you-will-select-to-save-changes-if-any-and-close-the-file-after-that)
- [16. Find the intruder?](#16-find-the-intruder)
- [17. What is short for `:quit`?](#17-what-is-short-for-quit)
- [18. `:exit` is the extended form for the `:x` command?](#18-exit-is-the-extended-form-for-the-x-command)
- [19. If you start Vim with `-Z` option this will?](#19-if-you-start-vim-with--z-option-this-will)
- [20. What will happen if you write `:new` in Vim?](#20-what-will-happen-if-you-write-new-in-vim)
- [21. You have multiple opened buffers inside Vim. You would like to close them all and save the changes if possible. What you will write?](#21-you-have-multiple-opened-buffers-inside-vim-you-would-like-to-close-them-all-and-save-the-changes-if-possible-what-you-will-write)
- [22. You are inside the Vim help. What will the `ctrl-]` command do?](#22-you-are-inside-the-vim-help-what-will-the-ctrl--command-do)
- [23. You would like to run the `pwd` Linux command from Vim. What you should type?](#23-you-would-like-to-run-the-pwd-linux-command-from-vim-what-you-should-type)
- [24. Which command will substitute word `cat` with word `dog` through the entire opened buffer?](#24-which-command-will-substitute-word-cat-with-word-dog-through-the-entire-opened-buffer)
- [25. You would like to select the block of text and substitute all occurrences of the word `cat` with the word `dog` inside that block. What would you use?](#25-you-would-like-to-select-the-block-of-text-and-substitute-all-occurrences-of-the-word-cat-with-the-word-dog-inside-that-block-what-would-you-use)
- [26. You search the string `cat` using this command `/cat`. You found a match. How can you position the cursor to the next match?](#26-you-search-the-string-cat-using-this-command-cat-you-found-a-match-how-can-you-position-the-cursor-to-the-next-match)
- [27. You just replaced the word `cat` with the word `dog`. You would like to undo. What do you do?](#27-you-just-replaced-the-word-cat-with-the-word-dog-you-would-like-to-undo-what-do-you-do)
- [28. When you delete something using `d`, `x`, `dd` the text you deleted is saved?](#28-when-you-delete-something-using-d-x-dd-the-text-you-deleted-is-saved)
- [29. How to get help on hypothetical `asdf` command in Vim?](#29-how-to-get-help-on-hypothetical-asdf-command-in-vim)
- [30. Vim buffers can have?](#30-vim-buffers-can-have)
- [31. How to list all the buffers?](#31-how-to-list-all-the-buffers)
- [32. What would be the correct way to delete the buffer with the id 1?](#32-what-would-be-the-correct-way-to-delete-the-buffer-with-the-id-1)
- [33. In Vim you can combine multiple windows into:](#33-in-vim-you-can-combine-multiple-windows-into)
- [34. Yanking in Vim is another name for?](#34-yanking-in-vim-is-another-name-for)
- [35. You like to delete the text from the cursor current position to the end of the file. What you will use?](#35-you-like-to-delete-the-text-from-the-cursor-current-position-to-the-end-of-the-file-what-you-will-use)
- [36. You need to substitute word `text` into `{text}`. Is it possible in Vim just by pressing `F1` key?](#36-you-need-to-substitute-word-text-into-text-is-it-possible-in-vim-just-by-pressing-f1-key)
- [37. Commands have different meaning depending on Vim mode?](#37-commands-have-different-meaning-depending-on-vim-mode)
- [38. You can only select a block of text in:](#38-you-can-only-select-a-block-of-text-in)
- [39. How can you list all Vim maps?](#39-how-can-you-list-all-vim-maps)
- [40. You would like to select the column. What do you do?](#40-you-would-like-to-select-the-column-what-do-you-do)
- [41. You would like to copy the block of text you just selected in visual mode. What do you do?](#41-you-would-like-to-copy-the-block-of-text-you-just-selected-in-visual-mode-what-do-you-do)
- [42. You would like to center the text. What you would do?](#42-you-would-like-to-center-the-text-what-you-would-do)
- [43. You would like to sort the whole Vim active buffer alphabetically without using external shell commands. What you would do?](#43-you-would-like-to-sort-the-whole-vim-active-buffer-alphabetically-without-using-external-shell-commands-what-you-would-do)
- [44.What will the next code do:](#44what-will-the-next-code-do)
- [45. Go to the end of document?](#45-go-to-the-end-of-document)
- [46. Go to the start of document?](#46-go-to-the-start-of-document)
- [47. You need to select the whole buffer text in Vim. What is the correct solution?](#47-you-need-to-select-the-whole-buffer-text-in-vim-what-is-the-correct-solution)
- [48. You would like to see the history of the command mode in Vim? What would you type?](#48-you-would-like-to-see-the-history-of-the-command-mode-in-vim-what-would-you-type)
- [49. You would like to view file in hexadecimal notation in Linux. What would be correct?](#49-you-would-like-to-view-file-in-hexadecimal-notation-in-linux-what-would-be-correct)
- [50. Vim has a built-in tutorial?](#50-vim-has-a-built-in-tutorial)


![Unity](/wp-content/uploads/2020/12/vim.jpg)

## 1. Who created Vi?
☑ **Bill Joy** ☐  Bram Moolenaar ☐  Chuck Haley ☐  Vi Emacs

The original code for Vi was written by Bill Joy in 1976. 

Chuck Haleyex is known for writing Ex editor. Bram Moolenaar is known for making (Vi improved) or Vim editor.


## 2. Is this true?

☐ Vim is a superset of Vi ☐  Vim includes multi level undo/redo ☐  Vim allows screen split for editing multiple files ☑ **All correct**


Vim is a superset of Vi editor.

Vim includes support for syntax highlighting, file diff, code folding, screen splitting, tabs, multi level undo-redo, files over SSH...
It can be set to supports `cscope` or `ctag` navigation.

Vim supports plugins and can be scripted using `vimscript`, or using some external scripting language like `python`, `perl`, ...


## 3. How many modes Vim have?

☐ 3   ☑ **6**   ☐ more than 6   ☐ less than 6

There are 6 modes in Vim.
You can use `help` for more details.
```
:help Normal-mode
:help Insert-mode
:help Visual-mode
:help Select-mode
:help Command-line-mode
:help Ex-mode
```

## 4. To delete a single character under the cursor you would use:

☑ **x**   ☐ X   ☐ dw   ☐ r

Using `x` you will delete the single character under the cursor when in normal mode.

`X` will delete character to the left, `r` replaces the character, `dw` will delete the next word.

## 5. To display registers in Vim you use?

☐ :di   ☐ :reg    ☐ :display   ☑ **all would work**

You can use either `:di`, `:display`, `:reg` or `:registers` to display what is in Vim registers.

Note: When you delete, copy or cut stuff, it gets saved to registers. You can pull stuff from registers at a later time.

Here is how it works to directly write/append to register `a`:
`""ayy` will replace register `a` with the current line.
`""Ayy` append to the register `a` the content from the current line.

## 6. Is `""""p` the same as `p` in normal mode?

☑ **YES** ☐  NO

It is the same to use `p` or `""""p`.

This is called a default register in Vim. The content of this register is overwritten most frequently since any change, delete, replace, yank operation will alter it.



## 7. How to delete the whole line under the cursor in normal mode?

☑ **dd**   ☐ DD   ☐ d   ☐ D

`dd` is the correct answer. It will delete the whole line under the cursor.

`d` means nothing per se.
`D` will delete the character under the cursor and everything to the end of line.
`DD` will execute as `D` followed by `D`


## 8. How to copy a line under the cursor in normal mode?

☑ **yy**   ☐ y$   ☐ yw  ☐ y

`yy` is the correct answer. It will copy the hole line under the cursor.

`y` means nothing per se. `y` is the operator.
`yw` will yank the word to the right.
`y$` will yank the text from the cursor till the end of the line.



## 9. How to copy from the cursor till the end of line?

☐ yy ☐  YY  ☑ **y$**  ☐ yyy

`y$` is the correct answer. It will copy from the cursor position till the end of line.

`yy` will copy the whole line.
`Y` is the same as `yy` so `YY` will be like calling `Y` `Y`.
`yyy` is the same as `yy` followed by `y`. Not a solution.

Note: The `yy` command yanks a whole line, just like `dd` deletes a whole line. Unexpectedly, while `D` deletes from the cursor to the end of the line, `Y` works like `yy`, it yanks the whole line.

Watch out for this inconsistency! Use `y$` to yank to the end of the line.



## 10. How do you open a new file `hello` in Vim?

☑ **vim hello** ☐  hello vim ☐  :edit hello ☐  something other

Just `vim hello` works.

`:edit hello` is the command to open file `hello` but when you have vim already running.



## 11. How can you set line numbers in Vim?

☐ :set numbers ☑ **:set number** ☐ :set num   ☐ :set ln

Just `:set number` will work.

`:set numbers `, `:set num` or `:set ln` will not work.


## 12. How to enable syntax highlighting in Vim?

☑ **:syntax on** ☐  :syntax off ☐  :set syntax ☐  :set syntaxon

Just `:syntax on ` will work.

` :syntax off`, ` :set syntax` or ` :set syntaxon` are wrong.


## 13. Vim supports coloring schemes?
☑ **YES**   ☐ NO

Vim supports multiple color schemes. The default color scheme is called `default`.

To get the list of all coloring schemes you type:
` :colorscheme [space] [tab] `

## 14. How to get the list of items you can preset using the `set` command?

☐ Read the manual ☐  :set [space][ctrl-d] ☐  :set [space][tab] ☑ **all good**

You can use :
`:set [space][ctrl-d]` or
`:set [space][tab]`
to get the list of possible settings for the `:set` command.

Of course, you can read the manual to get the same.


## 15. Which one you will select to save changes (if any) and close the file after that?

☐ :q ☐  :q! ☑ **:x**   ☐  :wq

`:x` is the correct way.

`:q` close file if no changes, else it will yield.
`:q!` close file, ignoring the changes.
`:x` save changes if there were changes and close.
`:wq` always write to a file and close file.

## 16. Find the intruder?

☐ :wq ☐  :x ☐  ZZ ☑ **:w**

Commands `:wq`  `:x` or `ZZ`  will try to close the file.

The command `:w` is the intruder because it will not try to close the file. It will try only to save the file.

## 17. What is short for `:quit`?

☑ **:q**   ☐ :q!

Correct would be `:q`.

`:q!` is short for `:quit!`.

## 18. `:exit` is the extended form for the `:x` command?

☑ **True**   ☐ False

`:x` is a short notation for the `:exit` command.

This command will save the file if needed and close the file in the exiting Vim editor.

## 19. If you start Vim with `-Z` option this will?

☐ start Vim in read-only mode ☐  start Vim in easy-mode ☑ **start Vim in restricted mode** ☐  start Vim in EX mode

Vim started with the `-Z` option will open in `restricted` mode.

That mode cannot start shell commands.

## 20. What will happen if you write `:new` in Vim?

☐ It will open the new instance of Vim ☐  it will open a new empty buffer in a new tab ☑ **it will open a new empty buffer in horizontal split** ☐  it will open a new empty file in vertical split 

When we write `:new` in Vim a new non named buffer will be created. A buffer is the in-memory file. The idea is to create a file from this buffer later.

When we write `:new` Vim will provide a new window associated to a new buffer. The window will horizontally split with the active window.

Note: All opened files are associated with a buffer, but there are also buffers not associated with any file.

## 21. You have multiple opened buffers inside Vim. You would like to close them all and save the changes if possible. What you will write?

☐ :qall   ☐  :wall ☑ **:wqall** ☐  smt. other

`:qall` is the command to close all opened buffers.
`:wall` command will save the changes for each buffer.

If buffers do not have the name there is a problem. Use `:w name` to save individual buffers to a file.

## 22. You are inside the Vim help. What will the `ctrl-]` command do?

☑ **Will follow the link under the cursor** ☐  Nothing since you should use :tag {link} ☐  Nothing since ctrl-] is the default Telnet command ☐  Undefined

`ctrl-]` will jump to the definition of the keyword under the cursor.

Same as you type `:tag {link}`, where {link} is the keyword under or after cursor.

`ctrl-]` is the default telnet escape key but this is not related to Vim.

If you type `:set mouse=a` you can use mouse to jump.


## 23. You would like to run the `pwd` Linux command from Vim. What you should type?

☐ :) pwd ☑ **:!pwd** ☐  :>pwd ☐  :~pwd

Correct is to use `:!pwd`.

Wrong would be to use any of these:
```
:)pwd
:>pwd 
:~pwd 
```



## 24. Which command will substitute word `cat` with word `dog` through the entire opened buffer?

☑ **:%s/cat/dog/g** ☐  :substitute/cat/dog/g ☐ :s/cat/dog  ☐  :s/cat/dog/g 

Just the command ` :%s/cat/dog/g ` works.
When doing substitutions Vim traverses line by line.

`%s ` at the very beginning means to substitute through the opened buffer.
`/g ` at the end of the command means replace all occurrences inside a line.

`:s` is equal to `:substitute` however, this will work only for the line under the cursor. This is why we need to use `:%s` to work for all lines.

## 25. You would like to select the block of text and substitute all occurrences of the word `cat` with the word `dog` inside that block. What would you use?

☐ :s/cat/dog/g  ☑ **:'<,'>s/cat/dog/g** ☐  :g/cat/s/cat/dog/g ☐ :'<,'>:g/cat/s/cat/dog/2

Yes, you would use the Vim visual mode.

To enter Vim visual mode do `V` command while in Normal mode.
You can also use ` ctrl-v ` to enter `visual block mode` or ` shift-v ` to enter the `visual line mode` if this works.

Then you can issue the command: `:'<,'>s/cat/dog/g`.



## 26. You search the string `cat` using this command `/cat`. You found a match. How can you position the cursor to the next match?

☑ **n** ☐  N

The `n` command will position the cursor to the **next** match.
The `N` command will do the opposite. It will move the cursor to the previous match.


## 27. You just replaced the word `cat` with the word `dog`. You would like to undo. What do you do?

☐ type :u ☑ **press u**

To undo the changes, since you are still in `normal` Vim mode you just need to press the `u` command, and you will revert all replacements.


## 28. When you delete something using `d`, `x`, `dd` the text you deleted is saved?

☑ **True**   ☐ False

You can paste it back by using the `p` command.
The `p` command means `paste` and it will paste to the right from the current cursor position.


## 29. How to get help on hypothetical `asdf` command in Vim?

☑ **Write :help asdf** ☐  Use vimtutor program ☐  Read the manual ☐  all true

The correct way would be:
`:help asdf `.

If you cannot recall the exact command `asdf` use `:helpgrep asdf`.

Also note the help system works for different modes:

```
:help asdf (normal)
:help v_asdf (visual)
:help i_<Esc> (insert)
:help :quit (command line)
:help c_<Del> (command-line editing)
:help -r (vim command argument)
:help 'textwidth' (option)
```

Also type `:help asdf`, then hit `ctrl-d` to see matching help entries for `asdf`.

To exit the help type `:q`.

`vimtutor` helps you learn vim commands, but it is external program to Vim editor.


## 30. Vim buffers can have?

☐ only the name (filename) ☐  only the number (id) ☑ **the name and the id number** ☐  something other

Vim buffers are identified using the name and id number. The name of the buffer is the name of the file associated with that buffer.

The buffer id number is a unique sequential number assigned by Vim. This buffer id number will not change during the Vim session.

Some buffers not associated with any file on disk, but still they must have the id number.

## 31. How to list all the buffers?

☐ :ls ☐  :buffers ☐  :files ☑ **all works**

All the commands `:ls`, `:buffers`, ` :files` will do the same action.

They will list all the buffers in Vim. This list is called a **buffer list**.


## 32. What would be the correct way to delete the buffer with the id 1?

☑ **:1bdelete** ☐  :bdelete 1

`:1bdelete` would be the correct way to delete the buffer with id 1.

`:bdelete 1` would be incorrect.

The actual syntax for `:bdelete ` allows also deleting by name.

Delete by name: `:bdelete name1 name2`.


## 33. In Vim you can combine multiple windows into:

☐ buffers ☑ **screens** ☐ tabs ☐  splits

In Vim you can combine multiple windows into **tabs**.

You use `:split` and `:vsplit` to split current window in two, but they will use the same buffer.

Buffers represent the area in memory. You typically open a new empty buffer when you start Vim without any arguments.

You write from the buffer to the file when you save your file using `:w` or `:w filename`.



## 34. Yanking in Vim is another name for?

☐ pasting ☑ **copying** ☐  cutting ☐  overwriting

Yanking in Vim is another name for copying.

In Vim `normal mode` the `y` is a copy operator.
You write `yw` to copy the word to the buffer.

To copy the whole line you use `yy` command or the `Y` command. They are the same.


## 35. You like to delete the text from the cursor current position to the end of the file. What you will use?

☐ dw ☐  db ☑ **dG** ☐ dgg

`dG`  is the correct.

`dw` delete from cursor to next start of word.
`db` delete from cursor to previous start of word.
`dG` delete until the end of the file
`dgg` delete until the start of the file



## 36. You need to substitute word `text` into `{text}`. Is it possible in Vim just by pressing `F1` key?

☑ **YES**  ☐ NO

Adding the curly braces around words just by hitting a single key is possible if we use Vim mappings.

By using the `:map` command it is possible to associate the `F1` key as we need:

`:map <F1> i{<Esc>ea}<Esc>`

The part `i{<Esc>ea}<Esc>` should read:

1. enter the insert mode `i`
2. write `{`
3. then press the `<Esc>`
4. go to the end of the word `e`
5. append with the `}`
6. again press `<Esc>`.


## 37. Commands have different meaning depending on Vim mode?

☑ **True**    ☐ False

Vim commands can have totally different meaning depending on the Vim mode.

For example, the key `u` in the Vim normal state means `undo last action`.

In the Vim visual mode `u` means `make highlighted text lowercase`.

## 38. You can only select a block of text in:

☑ **Visual mode** ☐  Normal mode ☐  Ex mode ☐  Restricted mode

Visual mode is flexible and easy way to select a block of text.

You can enter this mode with `ctrl-v`, ` v ` or ` V `.

`ctrl-v` is the only way to select a block of text.
`v` is blockwise visual mode.
`V` is linewise visual mode.



## 39. How can you list all Vim maps?

☑ **:map** ☐  :nmap ☐  :vmap ☐  :imap

You can do that with the `:map` command.
There are few `:map` variants.

`:nmap` for normal mode mappings
`:vmap` for visual mode mappings
`:imap` for insert mode mappings


## 40. You would like to select the column. What do you do?

☑ **ctrl-v** ☐  V ☐  v☐  gv

Get out of insert mode with [Esc], hit ` ctrl-v ` and you should see the selected text highlighted.

The other options have the meaning:

`V` selects entire lines
`v` selects range of text
`gv` reselect block


## 41. You would like to copy the block of text you just selected in visual mode. What do you do?

☐ yy ☑ **y**

You simple press `y` once you are in visual mode to yank the text to the default buffer.

`yy` would be wrong here.

## 42. You would like to center the text. What you would do?

☑ **:center** ☐  this is not possible

It is possible since Vim supports that using the `:center` command.

To center the line under cursor use `:center` command. To center the whole document use `:%center` command.

## 43. You would like to sort the whole Vim active buffer alphabetically without using external shell commands. What you would do?

☐ :%sort n ☑ **:%sort** ☐  :%sort! ☐  :%sort u

`:%sort` is the correct way.

`:%sort!` will sort in reverse order.
`:%sort u` will remove duplicate lines.
`:%sort n` is numeric sort.

## 44.What will the next code do:
```
:set listchars=eol:¬,tab:>·,space:·
:set list
```

☐ make some setup for using bulleted lists ☑ **make the spaces and tabs visible**

In Vim, `list` is a boolean option that defaults to off.

If `list` is on, whitespace characters are made visible. The `listchars` option can be used to customize the way whitespace characters are shown.

The default displays `^I` for each tab, and `$` at each EOL (end of line, so trailing whitespace can be seen).

The command `:set list` displays hidden characters, while `:set nolist` returns to normal.

## 45. Go to the end of document?

☐ gg   ☐ GG  ☐ G ☑ **GA**

Simple `GA` works best.

`gg` will do the opposite.
`GG` would be `G` followed by `G`.
`G` is not perfect because it hits the last line but not the end of the last line.


## 46. Go to the start of document?

☑ **gg**   ☐ GG   ☐ G   ☐ g

`gg` is the goto line and when no line entered then it goes to the first line to the first non blank character. `gg` is one of many jump motions.

Here is the list of all jump motions:
`'`, \`, `G`, `/`, `?`, `n`, `N`, `%`, `(`, `)`, ` [[ `, ` ]] `, `{`, `}`, `:s`, `:tag`, `L`, `M`, `H` and the commands that start editing a new file.

If you make the cursor jump with one of these commands, the position of the cursor before the jump is remembered.

You can return to that position with the ` ' ` and ```` command, unless the line containing that position was changed or deleted.

## 47. You need to select the whole buffer text in Vim. What is the correct solution?

☑ **ggVG** ☐ gg""+yG ☐  :%y+ ☐  all works

You should use `ggVG` from normal mode.

Or create this map:
`:map<C-a> <Esc>ggVG<CR>`

Even to append `.vimrc` file with that map.

Other commands do copy all text, not just select:
`:%y+`
`gg""+yG`





## 48. You would like to see the history of the command mode in Vim? What would you type?

☐ :q ☑ **q:**

The `q:` will show you the history of command line mode. Same as `:hist`. This is limited to the last 20 commands by default.

The `:q` command is to close the file.

You can also traverse the history if you use `: ↑` or `: ↓` (arrow keys).




## 49. You would like to view file in hexadecimal notation in Linux. What would be correct?

☑ **:%!xxd **   ☐ :%!hex

`:%!xxd` is correct.

`:` enters command-line mode
`%` matches whole file as a range
`!` filters that range through an external command.

`xxd` is a Unix/Linux shell command. It creates a hex dump of a given file or standard input. It can also convert a hex dump back to its original binary form.

`hex` is not a standard Unix/Linux command.


## 50. Vim has a built-in tutorial?

☑ **True** ☐  False

Vim installs with a built-in tutorial system called the `vimtutor` to help you learn vim commands.

It is a 30 minute tutorial that teaches the most basic Vim functionality.

On Unix and Linux, if vim has been properly installed, you can start it from the command line by running the command: `vimtutor`.

On Microsoft Windows you can find it in the Programs/Vim menu, or you can run vimtutor.bat in the directory where Vim was installed.



