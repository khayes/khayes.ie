---
title: Blog
permalink: /blog/
---

<div>
  {% for post in site.posts %}
    <article>
        <hgroup>
            <h1>{{ post.title }}</h1>
            <time datetime="{{ post.date | date: "%Y-%m-%d" }}">{{ post.date | date_to_long_string }}</time>
        </hgroup>
        <p>{{ post.excerpt }}</p>
        <p><a href="{{ post.url}}">Read full post...</a></p>
    </article>
  {% endfor %}
</div>