<!--
Hello there!

This website uses Jekyll and is hosted on GitHub pages as it only needs a simple hosting platform.
Other than the image icons I have hand created all the markup and styles for this website.
I like to ensure my work is not just visually clean, but that the source is well thought through and is simple and semantic as possible.

If you are interested in viewing the source for this site you can find it on my GitHub account at https://github.com/khayes
If you have any questions or suggestions please reach out to me at kieran@khayes.ie
-->

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <title>{% if page.title %} {{ page.title }} - {% endif %}Kieran Hayes</title>
    <meta http-equiv="Content-Security-Policy" content="block-all-mixed-content; default-src 'none'; img-src 'self'; style-src 'self';">
    <link rel="stylesheet" href="/assets/css/style.css" />
  </head>
  <body>
    <header id="header">
      <hgroup>
        <h2>Kieran Hayes</h2>
        <h3 class="subtitle">Software Engineer</h3>
      </hgroup>
      <nav class="icons">
        <a href="/blog/">
          <svg><use xlink:href="{{ '/assets/icons.svg#blog' | relative_url }}"></use></svg> Blog
        </a>
        <a href="/about/">
          <svg><use xlink:href="{{ '/assets/icons.svg#about' | relative_url }}"></use></svg> About
        </a>
        <a href="/resume/">
          <svg><use xlink:href="{{ '/assets/icons.svg#resume' | relative_url }}"></use></svg> Résumé
        </a>
      </nav>
      <div class="clear"><!-- Hack for IE layout as it does not support css grid. ---></div>
    </header>
    <main id="content">
      <div id="content-container">{{ content }}</div>
    </main>
    <footer id="footer">
      <nav class="icons">
        <a href="https://github.com/khayes/" title="GitHub" target="_blank">
          <svg><use xlink:href="{{ '/assets/icons.svg#github' | relative_url }}"></use></svg> GitHub
        </a>
        <a href="https://www.linkedin.com/in/kieran-hayes/" title="LinkedIn" target="_blank">
          <svg><use xlink:href="{{ '/assets/icons.svg#linkedin' | relative_url }}"></use></svg> LinkedIn
        </a>
      </nav>
    </footer>
  </body>
</html>