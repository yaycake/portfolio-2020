---
path: /stickermachine
date: 2018-12-17T16:00:00.000Z
title: Sticker Machine
category: Mini Program
featuredImage: /assets/stibanner.png
skills: UX design, UI Design, front-end development, WXML, WXSS, HTML, CSS, Javascript
tools: Sketch, Figma, Invision, WeChat IDE
engagement_period: December 2018 to 2019
description: A WeChat mini program to discover, share, or save stickers; powered by Giphy.
---


## WeChat Stickers

are a fun, witty, and cultural treasure trove for everyday social interactions. From private conversations to group banter, it is a badge of coolness and hilarity in the digital community when you produce the perfect sticker at the perfect time.

<iframe width="560" height="315" src="https://www.youtube.com/embed/LnJNU5GrPpQ" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## The Opportunity

WeChat users discover stickers through adding them from a conversation where it's posted. When you're browsing other kinds of content like sticker galleries, websites, blogs, or Twitter, it's a challenge to be able to add the gif to your WeChat collection due to its size, format, or cross-app compatibility.

![Sticker Machine Fans](/assets/sticker_4.png "Sticker Machine Fans")

## Designing Sticker Machine

As WeChat provided the social infrastructure for sharing, I focused on optimizing the visual experience to encourage 'shopping' and sharing stickers at their leisure.

The redesigns between versions 1 & 2 took the margins between stickers away and provided a fuller screen experience.

We decided on 'sticking' the search bar on the bottom (vs. the top) for better access to the human hand holding their mobile device.

![Evolution of Sticker Machine Brand](/assets/sticker_1.png "Evolution of Sticker Machine Brand")



![Sticker Machine Version 1 & 2](/assets/sticker_2.png "Sticker Machine Version 1 & 2")

## Building The Mini Program

The Giphy API was easy to work with, and well-documented. The MVP was up in less than two days– the challenges that followed were unique to building a product in China (see: Challenges).

## Challenges

Publishing a Mini Program requires the ID of a Chinese citizen– we worked with a friend to administer and publish our mini program.

The Great Chinese Firewall was the main challenge: publishing content in China requires a business license.

We solved this by re-routing our calls through a middle man server– our friend's server, which is based in China.

This affected performance– speed of the load and sticker lag– which prompted us to cache common searches through Redis.

The language translation feature was later implemented, but could be improved: cross cultural translations and references was something we did not anticipate, but could very well become a worthy mission.



## Sticker Machine reached upwards of 10,000 visits within the 3-4 days from launch.

## Launch

We hard-launched Sticker Machine at the end of August, 2018 to positive and enthusiastic reception. Sticker Machine reached upwards of 10,000 visits within 3-4 days from launch.

![Sticker Machine Insights](/assets/sticker_3.png "Sticker Machine Insights")

Generally, people find stickers through WeChat sticker share groups. While that is convenient enough, the stilted, large-group conversation format (300+ people) is inconvenient and not optimal for finding the perfect 'zing' to decorate your wit in an ongoing chat.

## GIPHY

[Giphy](https://www.giphy.com/) is a website hosting a database of stickers. Accessing Giphy in China does not require a VPN.

![Powered By Giphy](/assets/sticker_5.png "Powered By Giphy")

## Unique Users

A little over a year from launch, Sticker Machine reached 5000 unique users. This is all organic growth: we successfully addressed an existing WeChat limitation/pain point with a fun, easy-to -use, intuitive and effective solution. 

Unfortunately, due to the ever evolving bureaucratic hoops of Doing Business In China, Sticker Machine was shut down by Tencent in 2019. Our guess was the re-routing of content through an ICP didn't make the cut for content-streaming legitimacy within the Great Firewall. 

Sticker Machine was an awesome learning experience and super fun project to deploy; it was also very cool to witness the increase in unique and return visitors every month. 

## Press

## \
[How to Use WeChat Like A Local](https://mp.weixin.qq.com/s/frnl2ZKI6URYJfF00cuq1g)

[WeChat Mini Program Sticker Machine Surpasses 5000 Unique Users](https://www.linkedin.com/pulse/wechat-mini-program-sticker-machine-surpasses-5000-unique-grace-yang/?trackingId=bpLEFw1Tit87G9%2BMxjhjFg%3D%3D)