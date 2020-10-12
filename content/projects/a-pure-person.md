---
path: /a-pure-person
date: 2020-10-12T11:23:21.310Z
title: A Pure Person
category: Web Development
featuredImage: /assets/screen-shot-2020-10-12-at-7.26.49-pm.png
skills: Product design, front-end development
tools: Javascript, HTML, CSS, Sass, GatsbyJS, CurtainsJS, Web Audio API
engagement_period: July 2020 - September 2020
description: "An interactive website to accompany an experimental album release:
  CurtainsJS powers audio visualizations for each track."
---
#### The Idea

The Lin Qiang & Guests production team wanted a website to accompany the release of their album. Priorities for the site included: 

1. A minimal design very close to the digital and physical album cover
2. A type of audio-visual interactivity for each track

Inspirations included [Holodec.world](http://www.holodec.world)'s very cool website by creative digital design and development agency Bureau Cool. The way the album was designed, however, begged a simpler design for the interactivity. 

Looking at the fairly minimal design, I proposed a type of audio visualization with the image associated with each track.

![Rippling image](/assets/screen-shot-2020-10-12-at-8.41.36-pm.png)

#### Research, Tools, and Processes

While I hadn't executed an interactive creative concept like this, I was very excited to dive in. Research and requirements led me to Web Audio API + CurtainsJS. 

I initialized the project with Gatsby.js thinking we would have more pages to work with, but as the album cover design was finalized, I stripped the structure of the site down to match. 

Combing through documentation for both Web Audio and CurtainsJS, I learned how to create a simple plane, loaded image textures, create audio analyzer nodes and accessed audio data. I connected audio data to the simple plane animation effects using audio frequencies and mouse delta values. 

The team wanted to use the website animation effect for the visual of the streamers, so I also helped the team create screen recordings for "streamers", or audio previews to be posted on Instagram and Youtube. 

Towards the end of the project, I tested and optimized the site for accessibility and improved performance with code-splitting and lazy loading. 

![Square Streamers](/assets/ig_streamers.png)

#### The Site 

For the soft launch and teaser, the team requested that only certain tracks be available before October 15th, the hard launch of the album. 

The project is currently live at [apureperson.com.](http://www.apureperson.com)