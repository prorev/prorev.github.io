---
layout: default
title: Index
description: Helps and makes your programming easier. 
---

<form method="get" id="search-google" action="https://www.google.com/search" target="_blank">
<input type="hidden" name="sitesearch" value="programming-review.com" />
<input type="text" name="q" maxlength="255" value="" placeholder="Google search" class="form-control" />
<button type="submit" form="search-google" value="Submit">GO</button>
</form>

<br style="clear:both" />

<div class="home">

{% for category in site.categories %}
  {% assign cat = category | first | strip %}      
  
    {% if cat != empty and cat !='sr' %} 
    <h3>{{ cat | upcase }} ({{ category[1].size }})</h3>
    
    <ul>
      {% for post in category[1] %}
        <li><a href="{{ post.url }}">{{ post.title }}</a></li>
      {% endfor %}
    </ul>
    {% endif %}

{% endfor %}

</div>