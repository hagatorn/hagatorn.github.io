---
layout: page
title: products
permalink: /products/
---
{% assign products = site.data.products %}

{% for product in products %}
{% assign p=product[1] %}

**{{p.name}}**
![My helpful screenshot](/images/{{ p.images[0] }})
{{p.description | markdownify }}

- Materials: {{p.materials | array_to_sentence_string }}
- Price: £{{p.price}}




{% endfor %} 
