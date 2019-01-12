---
layout: default
---

<article class="post">
    <hgroup>
        <h1>{{ page.title }}</h1>
        <h6>Posted <time datetime="{{ page.date | date: "%Y-%m-%d" }}">{{ page.date | date_to_long_string }}</time></h6>
        <ul>
            {% for tag in page.tags %}
            <li><svg><use xlink:href="{{ '/assets/icons.svg#tags' | relative_url }}"></use></svg>{{ tag }}</li>
            {% endfor %}
        </ul>
    </hgroup>
    {{ content }}
</article>