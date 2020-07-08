---
layout: post
title: Machine Learning
image: img/machine.jpg
author: NickFoden
draft: false
date: 2020-07-07T10:00:00.000Z
tags:
  - Machine Learning
  - Google Vision
  - Firebase
  - React
---

## Machine Learning with Google Vision

Getting going with machine learning can sound like a lot. Developing and training a model, spending time refining it and spinning up the infrastructure to run it.

But in reality we can jump in today using existing machine learning models. A powerful example is the GCP vision api. One thing the vision api enables us to do is take an image and analyze what objects are in the image, what popular logos might be in the image, and even pull out the text from the image.

Here is a code example: React + Firebase + GCP Vision

https://github.com/explorejs/gcp-vision-ai

When a new image file is uploaded to the real time database, this kicks off a cloud function and the vision api will analyse it and then update the db with the objects it "sees" in the image. You can see where the text analysis and logo analysis is commented out, but easily added as well. One thing to note is that each use counts as an api usage, so check the image for objects - 1, check the image for text - 2, check the image for logos - 3, that would count as 3 uses/api calls, so be aware of the usage and be efficient to cut down on a surprise bill. GCP is worlds better than AWS in this regard and has a very generous free tier, but setting budget alerts is still an important part of using gcp - both for any apis and firebase.

See the code deployed here https://googlevision.netlify.app/ you can upload an image here and see what objects it pulls out of the image.

Note that the response for object recognition also includes the vertices/location of the objects and a confidence score.
![Image of DB](https://i.gyazo.com/4723eed6c6973b3eb2d2576965f0d788.png)

Cover Image by <a href="https://pixabay.com/users/Elchinator-10722855/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=4280758">Elchinator</a> from <a href="https://pixabay.com/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=4280758">Pixabay</a>
