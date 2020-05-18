---
layout: post
title: Vercel DNS
image: img/verceldns.png
author: NickFoden
draft: false
date: 2020-05-18T10:00:00.000Z
tags:
  - Vercel
  - DNS
  - Zeit
  - NextJS
  - React
---

## How to update your DNS settings

If your nameservers are pointed at Vercel then similar to myself you might find you need to update the DNS settings from time to time. . .

The CLI tool ( [Vercel DNS](https://vercel.com/docs/cli#commands/dns) ) states "Advanced use only", but I think this might be the only option? Yet to find another way to update dns records.

And I found if you also need to set the key then it goes before the type.

```javascript
vercel dns add yoursite.com theKey CNAME theValue
```

Simple. If you hit the error invalid number of arguments you may have left off the key for the record you are updating. I imagine handling the dns settings may be part of the dashboard soon enough.
