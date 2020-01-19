---
id: 411
title: HTML doctypes introduction
date: 2011-05-27 17:36:54
author: taimane
layout: post
permalink: /html/doctypes-introduction/
redirect_from: /html-doctypes-introduction/
published: true
categories:
   -
tags:
   -
---
### Q. What's the Doctype basic idea?

To separate HTML, CSS (no inline CSS), and JavaScript (no inline JavaScript). The preferred way is to have separate CSS and JavaScript files.


### Q. What if we don't set the doctype?

Using an incomplete or outdated DOCTYPE — or no DOCTYPE at all — modern web browsers will work in "<strong>Quirks </strong>mode", where the browser assumes you've written old-fashioned, invalid markup and code per the depressing industry norms of the late 1990s. —<em>Jeffrey Zeldman</em>



### Q. What doctypes do we have?

Currently there are about 15 doctypes. Some examples:



**Microsoft, Bing**

```html
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" 

"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
```

**Wikipedia and Google doctype that supports HTML5**

```html
<!DOCTYPE html>
```

**www.w3.org doctype**

```
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
```


### Q. What doctypes are telling us?

The better question is what they should tell us, because although they tell use something about the rules for writing the HTML, usually the rules are not obeyed and there are no penalties for that.


### Q. How MIME relates to doctype?

MIME type for html documents is usually "text/html" even in cases when the doctype `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">` is used.

 But this is not quite in accord with the original idea W3C consortium had when introducing XHTML. They introduced XHTML just because there were so many errors in the HTML markup and they planned that XHTML browser rendering should be similar as XML rendering => if there is an error in the markup the error should occur in browser. But this is not the case. Why?
 
  Because when web server is serving XML file it uses MIME <code>"text/xhtml+xml"</code>, and when web server is serving XHTML it uses MIME <code>"text/html"</code>. This is not quite correct MIME according to W3C, but this is reality. 
  
  And this is OK, because taken from the "HTML 5 up and running" book over 99% of websites are having 1 or more W3C HTML errors.



### Q. W3C HTML errors and SEO?

Good thing W3C HTML errors do not have any impact on web site SEO nor on how the website will be rendered in the browser. Every time your browser requests a page the web server sends a number of headers before it sends the actual page markup. 



### Q. Explain HTML5 doctype?

Looks like this:
```html
<!DOCTYPE html>
```

It allows:

* the new semantic tags "header", "footer", "section"
* 2D drawing
* Offline web applications
* Geolocation
* Improved HTML web forms
* Microdata


### Q. Where can I find Doctype tag rules ?

<img src="https://programming-review.com/wp-content/uploads/2011/05/doctyperules.png" alt="" title="doctyperules" width="611" height="163" class="alignnone size-full wp-image-413" />

* http://www.w3schools.com/tags/ref_html_dtd.asp
* http://newmanic.com/xhtml-doctypes.asp


