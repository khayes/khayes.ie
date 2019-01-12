---
layout: post
title:  "Using Jekyll With Docker"
date:   2019-01-11 19:43:00 +0000
tags: ruby jekyll docker
---

<h3>Installing Ruby gems can be slow</h3>
<p>Creating this website is the first time I have used either GitHub pages or Ruby.<br />
One of the main pain points I hit is that installing/upgrading Ruby gems can take a <em>very</em> long time.<br />
In particularly the <a href="https://www.google.ie/search?q=nokogiri+install+slow">Nokogiri package is terribly slow to install</a>, at times it took ~30 minutes to install!<br />
There are documented ways to improve that by <a href="https://stackoverflow.com/questions/29782968/how-to-gem-install-nokogiri-use-system-libraries-via-gemfile">using system libraries</a>, but I found this unintuitive and the default behaviour shouldn't require this.</p>

<h3>Using Docker</h3>
<p>After a while trying to setup the <a href="https://docs.microsoft.com/en-us/windows/wsl/about">WSL</a> for development, I found myself thinking this must all be easier to work with if everything was just in Docker.<br />
I did find the <a href="https://hub.docker.com/r/jekyll/jekyll">official Docker images</a> and my assumption would be using them would also resolve the concern of dependencies being super slow to install.<br />

<p>It seemed reasonable the base image would come with them installed and you could just mount your site into it.<br />
What I hadn't realized initially is that packages such as Nokogiri are part of your application and not Jekyll itself.<br />
So they are only being installed when your app runs, and that can really slow down your development cycle.<br />
</p>

<!--read_more-->

<p>The <a href="https://github.com/envygeeks/jekyll-docker/blob/master/README.md">README for the Docker images</a> mentioned you can cache these dependencies, and it suggests mounting them to a volume.<br />
The problem I have with this is that it's not idiomatic to Docker, and now you are just exposing the containers internal requirements out to your host.<br />
Instead a better solution in my view is to create your own Dockerfile that is a combination of Jekyll and your applications dependencies.</p>

<p>
  To do this you need to make a Dockerfile with the following content:<br />
  <section class="code-block">
    <h6>Dockerfile</h6>
    <code>FROM jekyll/jekyll
COPY Gemfile Gemfile.lock /srv/jekyll/
RUN bundle install</code>
  </section>
</p>

<p>
  Then you can make a docker-compose.yml file with this content:<br />
  <section class="code-block">
    <h6>docker-compose.yml</h6>
    <code>version: '3'
services:
  jekyll:
      build:
          context: .
          dockerfile: Dockerfile
      environment:
          - JEKYLL_ENV=docker
      command: jekyll serve --force_polling --livereload 
      ports:
          - 4000:4000
          - 35729:35729
      volumes:
          - .:/srv/jekyll</code>
    </section>
</p>

<p>
  Finally you can just start and stop your site using:<br />
  <section class="code-block">
    <code>docker-compose up
docker-compose down</code>
  </section>
</p>

<p>Your image will be built and cached as long as you do not change your dependencies.<br />
Your website is served out of port 4000 and it supports live reloading!<br />
So now your environment is clean and your development cycle is extremely quick after your initial install.</p>