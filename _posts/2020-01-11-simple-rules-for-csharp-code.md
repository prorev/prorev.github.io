---
id: 33
title: Simple rules for writing tidy, clean, well tested and documented C# code
date: 2011-02-28 09:20:01
author: taimane
layout: post
permalink: /simple-rules-for-csharp-code/
published: true
categories:
   -
tags:
   -
---
You need to produce high quality C# code. Here are some rules you may follow.
<h3>Keep everything simple and clean whatever you do.</h3>
Avoid complex coding that brings a lot of your attention to it. If this is your case, because the structure of the task you are working on is complex, then use your time for analysis and divide your problem to subtasks.
<h3>Be consistent whatever you do.</h3>
Be consistent as much as possible whatever you do. This is especially important when writing your code against your coding rules — coding standard.
<h3>Have a coding standard.</h3>
A coding standard defines how you write you code. <a href="http://blogs.msdn.com/brada/articles/361363.aspx">Here</a> are some Microsoft guidelines from the coding standard:

Guideline #1. For class names us PascalCasing

<pre class="prettyprint">class WebHelper

Guideline #2. For function names use PascalCasing
static public string CreateSlug(string input)

Guideline #3. For properties use PascalCasing
public class Foo
{
int bar;
public int Bar
{
get { return bar; }
set { bar = value; }
}
}
</pre>
&nbsp;

Guideline #4. Use camelCasing for member variables, parameters, local variables.

Guideline #5. To distinguish between local and member variables use “this” keyword and don’t use Hungarian and notations having “_”, “m_”, “s_” for your local or member variables.
<h3>Use <a href="http://en.wikipedia.org/wiki/Revision_control">Revision Control system</a></h3>
Use Revision Control system to manage changes of your documents (source code).
Generally you may use any Revision Control system (Visual SourceSafe, Team Foundation Server, Vault, GIT).
Revision control is not only useful when you work in team, but also when you work alone.
You can start by installing TortoiseSVN — a free Subversion client for Windows. Install it from here.
<h3>Write helper classes and make them reusable</h3>
Although this rule sounds simple and natural some programmers don’t follow it. Programmers tend to be lazy — and they forget to group their code properly once it works.
Be not like that, and write your helper classes now and benefit later.
I will name just a few ideas what can become a helper class:

RegularExpressionHelper — a class that works with text, finds occurrences of some text pattern, replaces text,…

XMLHelper — a class that works with XML files, reads-parses-writes xml files.

LINQHelper — a class that uses all kinds of language-integrated queries

DialogHelper — a class that wraps all common dialogs

FileHelper — a class that reads all kind of files, big ones as well as small ones and works further with them

RegistryHelper — a class that works with operating system database

DatabaseHelper — a class that works all kind of operations with a specific database such as SQLServer

WPFHelper — a class that helps when working with WPF

WebHelper — a class that has routines for working with HTTP, FTP requests and like.

ProcessHelper — a class that initiates new processes, controls them, enumerates them.

ThreadHelper — a class that initiates new threads and controls them

MemoryHelper— a class that examines system memory

Once you create all these helper classes which will take about 1 month you are ready to go and start coding, but you will experience a great bust.
<h3>Write functions that take parameters and return non void.</h3>
Writing helper classes kills many programming evils. It kills also a common evil when you write a method without parameters that returns void. Although, this is possible in C#

<pre class="prettyprint">void MyFunctions()
{
//do something
}
</pre>

I believe this is not a good practice. Your functions should return non-void. For instance you can return bool — true if successful execution occurred — otherwise false. If there is something you should return set an output parameter like this:

<pre class="prettyprint">bool MyNewFunction(object input, object output)
{
// do something
}
</pre>

<h3>Comment and document your code</h3>
You use comments in C# via “//” or “/**/”. Why not to go a step ahead and use “///” also.
Visual Studio as well as Sharp Develop environments can comment your methods and classes using “///” notation. Before your method enter “/” for 3 times and add additional comment info.

<pre class="prettyprint">
///
/// Grab the tags for a term
///
///term /// tags
public static string YahooTags(string str)
{}
</pre>
&nbsp;

Once you done that you can create a CHM or HTML help documents via 3-rd party tools.
<h3>Test your code</h3>
Use some Unit Testing tools with Visual Studio. TypeMock is not bad, but you can use Visual Studio unit testing support out of the box.

Thanks.  

