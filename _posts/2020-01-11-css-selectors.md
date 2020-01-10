---
id: 1433
title: css selectors
date: 2013-04-11 22:23:29
author: taimane
layout: post
permalink: /css-selectors/
published: true
categories:
   -
tags:
   -
---
&nbsp;
<table width="665" border="0" cellspacing="0" cellpadding="2"><colgroup><col width="124" /> <col width="121" /> <col width="366" /> <col width="37" /> </colgroup>
<tbody>
<tr>
<td bgcolor="#555555" width="124"><em><strong>Selector</strong></em></td>
<td bgcolor="#555555" width="121"><em><strong>Example</strong></em></td>
<td bgcolor="#555555" width="366"><em><strong>Example description</strong></em></td>
<td bgcolor="#555555" width="37"><em><strong>CSS</strong></em></td>
</tr>
<tr>
<td width="124">.class</td>
<td width="121">.intro</td>
<td width="366">Selects all elements with</td>
<td width="37">1</td>
</tr>
<tr>
<td width="124">#id</td>
<td width="121">#firstname</td>
<td width="366">Selects the element with id="firstname"</td>
<td width="37">1</td>
</tr>
<tr>
<td width="124">*</td>
<td width="121">*</td>
<td width="366">Selects all elements</td>
<td width="37">2</td>
</tr>
<tr>
<td width="124">element</td>
<td width="121">p</td>
<td width="366">Selects all &lt;p&gt; elements</td>
<td width="37">1</td>
</tr>
<tr>
<td width="124">element,element</td>
<td width="121">div,p</td>
<td width="366">Selects all &lt;div&gt; elements and all &lt;p&gt; elements</td>
<td width="37">1</td>
</tr>
<tr>
<td width="124">element element</td>
<td width="121">div p</td>
<td width="366">Selects all &lt;p&gt; elements inside &lt;div&gt; elements</td>
<td width="37">1</td>
</tr>
<tr>
<td width="124">element&gt;element</td>
<td width="121">div&gt;p</td>
<td width="366">Selects all &lt;p&gt; elements where the parent is a &lt;div&gt; element</td>
<td width="37">2</td>
</tr>
<tr>
<td width="124">element+element</td>
<td width="121">div+p</td>
<td width="366">Selects all &lt;p&gt; elements that are placed immediately after &lt;div&gt; elements</td>
<td width="37">2</td>
</tr>
<tr>
<td width="124">[attribute]</td>
<td width="121">[target]</td>
<td width="366">Selects all elements with a target attribute</td>
<td width="37">2</td>
</tr>
<tr>
<td width="124">[attribute=value]</td>
<td width="121">[target=_blank]</td>
<td width="366">Selects all elements with target="_blank"</td>
<td width="37">2</td>
</tr>
<tr>
<td width="124">[attribute~=value]</td>
<td width="121">[title~=flower]</td>
<td width="366">Selects all elements with a title attribute containing the word "flower"</td>
<td width="37">2</td>
</tr>
<tr>
<td width="124">[attribute|=value]</td>
<td width="121">[lang|=en]</td>
<td width="366">Selects all elements with a lang attribute value starting with "en"</td>
<td width="37">2</td>
</tr>
<tr>
<td width="124">:link</td>
<td width="121">a:link</td>
<td width="366">Selects all unvisited links</td>
<td width="37">1</td>
</tr>
<tr>
<td width="124">:visited</td>
<td width="121">a:visited</td>
<td width="366">Selects all visited links</td>
<td width="37">1</td>
</tr>
<tr>
<td width="124">:active</td>
<td width="121">a:active</td>
<td width="366">Selects the active link</td>
<td width="37">1</td>
</tr>
<tr>
<td width="124">:hover</td>
<td width="121">a:hover</td>
<td width="366">Selects links on mouse over</td>
<td width="37">1</td>
</tr>
<tr>
<td width="124">:focus</td>
<td width="121">input:focus</td>
<td width="366">Selects the input element which has focus</td>
<td width="37">2</td>
</tr>
<tr>
<td width="124">:first-letter</td>
<td width="121">p:first-letter</td>
<td width="366">Selects the first letter of every &lt;p&gt; element</td>
<td width="37">1</td>
</tr>
<tr>
<td width="124">:first-line</td>
<td width="121">p:first-line</td>
<td width="366">Selects the first line of every &lt;p&gt; element</td>
<td width="37">1</td>
</tr>
<tr>
<td width="124">:first-child</td>
<td width="121">p:first-child</td>
<td width="366">Selects every &lt;p&gt; element that is the first child of its parent</td>
<td width="37">2</td>
</tr>
<tr>
<td width="124">:before</td>
<td width="121">p:before</td>
<td width="366">Insert content before  the content of every &lt;p&gt; element</td>
<td width="37">2</td>
</tr>
<tr>
<td width="124">:after</td>
<td width="121">p:after</td>
<td width="366">Insert content after every &lt;p&gt; element</td>
<td width="37">2</td>
</tr>
<tr>
<td width="124">:lang(language)</td>
<td width="121">p:lang(it)</td>
<td width="366">Selects every &lt;p&gt; element with a lang attribute value starting with "it"</td>
<td width="37">2</td>
</tr>
<tr>
<td width="124">element1~element2</td>
<td width="121">p~ul</td>
<td width="366">Selects every &lt;ul&gt; element that are preceded by a &lt;p&gt; element</td>
<td width="37">3</td>
</tr>
<tr>
<td width="124">[attribute^=value]</td>
<td width="121">a[src^="https"]</td>
<td width="366">Selects every &lt;a&gt; element whose src attribute value begins with "https"</td>
<td width="37">3</td>
</tr>
<tr>
<td width="124">[attribute$=value]</td>
<td width="121">a[src$=".pdf"]</td>
<td width="366">Selects every &lt;a&gt; element whose src attribute value ends with ".pdf"</td>
<td width="37">3</td>
</tr>
<tr>
<td width="124">[attribute*=value]</td>
<td width="121">a[src*="w3schools"]</td>
<td width="366">Selects every &lt;a&gt; element whose src attribute value contains the substring "w3schools"</td>
<td width="37">3</td>
</tr>
<tr>
<td width="124">:first-of-type</td>
<td width="121">p:first-of-type</td>
<td width="366">Selects every &lt;p&gt; element that is the first &lt;p&gt; element of its parent</td>
<td width="37">3</td>
</tr>
<tr>
<td width="124">:last-of-type</td>
<td width="121">p:last-of-type</td>
<td width="366">Selects every &lt;p&gt; element that is the last &lt;p&gt; element of its parent</td>
<td width="37">3</td>
</tr>
<tr>
<td width="124">:only-of-type</td>
<td width="121">p:only-of-type</td>
<td width="366">Selects every &lt;p&gt; element that is the only &lt;p&gt; element of its parent</td>
<td width="37">3</td>
</tr>
<tr>
<td width="124">:only-child</td>
<td width="121">p:only-child</td>
<td width="366">Selects every &lt;p&gt; element that is the only child of its parent</td>
<td width="37">3</td>
</tr>
<tr>
<td width="124">:nth-child(n)</td>
<td width="121">p:nth-child(2)</td>
<td width="366">Selects every &lt;p&gt; element that is the second child of its parent</td>
<td width="37">3</td>
</tr>
<tr>
<td width="124">:nth-last-child(n)</td>
<td width="121">p:nth-last-child(2)</td>
<td width="366">Selects every &lt;p&gt; element that is the second child of its parent, counting from the last child</td>
<td width="37">3</td>
</tr>
<tr>
<td width="124">:nth-of-type(n)</td>
<td width="121">p:nth-of-type(2)</td>
<td width="366">Selects every &lt;p&gt; element that is the second &lt;p&gt; element of its parent</td>
<td width="37">3</td>
</tr>
<tr>
<td width="124">:nth-last-of-type(n)</td>
<td width="121">p:nth-last-of-type(2)</td>
<td width="366">Selects every &lt;p&gt; element that is the second &lt;p&gt; element of its parent, counting from the last child</td>
<td width="37">3</td>
</tr>
<tr>
<td width="124">:last-child</td>
<td width="121">p:last-child</td>
<td width="366">Selects every &lt;p&gt; element that is the last child of its parent</td>
<td width="37">3</td>
</tr>
<tr>
<td width="124">:root</td>
<td width="121">:root</td>
<td width="366">Selects the document’s root element</td>
<td width="37">3</td>
</tr>
<tr>
<td width="124">:empty</td>
<td width="121">p:empty</td>
<td width="366">Selects every &lt;p&gt; element that has no children (including text nodes)</td>
<td width="37">3</td>
</tr>
<tr>
<td width="124">:target</td>
<td width="121">#news:target</td>
<td width="366">Selects the current active #news element (clicked on a URL containing that anchor name)</td>
<td width="37">3</td>
</tr>
<tr>
<td width="124">:enabled</td>
<td width="121">input:enabled</td>
<td width="366">Selects every enabled &lt;input&gt; element</td>
<td width="37">3</td>
</tr>
<tr>
<td width="124">:disabled</td>
<td width="121">input:disabled</td>
<td width="366">Selects every disabled &lt;input&gt; element</td>
<td width="37">3</td>
</tr>
<tr>
<td width="124">:checked</td>
<td width="121">input:checked</td>
<td width="366">Selects every checked &lt;input&gt; element</td>
<td width="37">3</td>
</tr>
<tr>
<td width="124">:not(selector)</td>
<td width="121">:not(p)</td>
<td width="366">Selects every element that is not a &lt;p&gt; element</td>
<td width="37">3</td>
</tr>
<tr>
<td width="124">::selection</td>
<td width="121">::selection</td>
<td width="366">Selects the portion of an element that is selected by a user</td>
<td width="37">3</td>
</tr>
</tbody>
</table>
<span style="color: #000000;"><span style="font-family: 'Times New Roman';"><span style="font-size: large;"><b>
</b></span></span></span>  

