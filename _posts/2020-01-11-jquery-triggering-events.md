---
id: 2379
title: JQuery triggering events.
date: 2014-08-13 18:28:16
author: taimane
layout: post
permalink: /jquery/triggering-events/
redirect_from: /jquery-triggering-events/
published: true
categories:
   -
tags:
   -
---
jQuery has super easy method for creating (issuing) events = trigger method.

```javascript
$('.el').trigger('your_event_name', [arg0, arg1, ..., argN]);
```



You can handle the event like this:


```javascript
$('.el').on('your_event_name',
function (objectEvent, [arg0, arg1, ..., argN]){
  alert ("showcase trigger");
});
```


