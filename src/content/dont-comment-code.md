---
layout: post
title: 'Dont comment shared code'
image: img/markus-spiske-cvBBO4PzWPg-unsplash.jpg
author: NickFoden
draft: false
date: 2022-01-25T10:00:00.000Z
tags:
  - Code
  - BestPractices
---

<strong>WAIT WHAT?</strong>

<br/>
  

No code comments ? What the heck, <em>Nick has lost it</em>.  

```javascript
// intenseFunction will blow up server side 
// because it depends on X library that leverages window
const intenseFunction = () => {

```

Think we are all taught / learn / assume that code comments are great. They help us remember our thinking when we come back months later to review our own code and leave helpful insights for fellow teammates right?

hmmmmm ....

Recently I thought would be smart to leave a brief comment about how to leverage a semi complex tracking function and raised a pr with this. Received feedback to remove the code comments because <strong>comments are dangerous</strong>

This was a what the heck moment. I was thinking hold on, comments are good !

Then talking this through in more detail and was enlightened to a different perspective, that if we leave comments a new teammate will come along and read the comment and make an assumption, instead of following the code/verifying their change etc. By omitting the comments we ensure future engineers will have to take a minute longer to follow code and validate their assumptions. Seems kinda uncool to knowingly sort of leave teammates in the lurch, but thinking on this more and I like this more and more. 

If documentation is really needed, then there are readmes, docs etc where have no shortage of ink, but in the actual files / in the code, we leave it without guidance so that every engineer will get closer to becoming a subject matter expert for the file/codebase. This helps to proliferate larger understanding and strengthens their understanding of the codebase and a more informed team. 

Sure there is great discussion to be had here with some counterpoints. At moment I am leaning to no comments in shared codebase. 

But. . always a but . .  if you are a startup/mvp and code is changing a lot each month, comments galore definitely could make sense.


Whatever works best for your org/team size and codebase. 


Photo by <a href="https://unsplash.com/@markusspiske?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Markus Spiske</a> on <a href="https://unsplash.com/s/photos/code?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
  