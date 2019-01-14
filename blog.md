---
title: Blog
permalink: /blog/
---

<div>
  {% for post in site.posts %}
    <article class="post">
        <h1>{{ post.title }}</h1>
        <h6>Posted <time datetime="{{ post.date | date: "%Y-%m-%d" }}">{{ post.date | date_to_long_string }}</time></h6>
        <section>
          <p>{{ post.excerpt }}</p>
          <p><a href="{{ post.url}}">Read full post...</a></p>
        </section>
    </article>
  {% endfor %}
</div>