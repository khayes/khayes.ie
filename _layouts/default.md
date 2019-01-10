<!--
Hello there!

This website uses Jekyll and is hosted on GitHub pages as it only needs a simple hosting platform.
Other than the image icons I have hand created all the markup and styles for this website.
I like to ensure my work is not just visually clean, but that the source is well thought through and is simple and semantic as possible.

If you are interested in viewing the source for this site you can find it on my GitHub account at https://github.com/khayes
If you have any questions or suggestions please reach out to me at kieran@khayes.ie
-->

<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Kieran Hayes {% if page.title %} {{ page.title }} {% endif %}</title>
    <meta http-equiv="Content-Security-Policy" content="block-all-mixed-content; default-src 'none'; img-src 'self'; style-src 'self';">
    <link rel="stylesheet" href="/assets/css/style.css" />
  </head>
  <body>
    <header id="header">
      <hgroup>
        <h1>Kieran Hayes</h1>
        <h2 class="subtitle">Software Engineer</h2>
      </hgroup>
      <nav class="icons">
        <a href="/about/">
          <svg><use xlink:href="{{ '/assets/minima-social-icons.svg#about' | relative_url }}"></use></svg> About
        </a>
        <a href="/resume/">
          <svg><use xlink:href="{{ '/assets/minima-social-icons.svg#résumé' | relative_url }}"></use></svg> Résumé
        </a>
      </nav>
    </header>
    <main id="content">{{ content }}</main>
    <footer id="footer">
      <nav class="icons">
        <a href="https://github.com/khayes/" title="GitHub" target="_blank">
          <svg><use xlink:href="{{ '/assets/minima-social-icons.svg#github' | relative_url }}"></use></svg> GitHub
        </a>
        <a href="https://www.linkedin.com/in/kieran-hayes/" title="LinkedIn" target="_blank">
          <svg><use xlink:href="{{ '/assets/minima-social-icons.svg#linkedin' | relative_url }}"></use></svg> LinkedIn
        </a>
      </nav>
    </footer>
  </body>
</html>