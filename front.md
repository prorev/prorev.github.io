---
id: 12971
layout: page
title: Front
description: List of fronts
permalink: /front/
date: 2020-01-11
author: taimani
published: true
image: 
categories:
   -    
tags:
   - 
---
<ul>
{% for post in site.posts %}
  <a class="{{ post.categories | join: ' ' }}" href="{{ post.url }}">{{ post.title | join: '...' }}</a>
{% endfor %}
</ul>
*-)
<!-- 
{% assign list = site.categories[github] | where_exp: "post", "post.categories contains 'front'" %}
{{ assign_list }}
{% for item in assign_list %}
  {{ item }}        
{% endfor %}   -->
<!-- {% for post in site.posts and %}
  <article>
    <h2>
      <a href="{{ post.url }}">
        {{ post.title }}
      </a>
    </h2>    
  </article>
{% endfor %} -->