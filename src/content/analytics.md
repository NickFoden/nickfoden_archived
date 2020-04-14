---
layout: post
title: 'Data without the cookies'
image: img/analysis.jpg
author: NickFoden
draft: false
date: 2020-04-14T10:00:00.000Z
tags:
  - Analytics
  - Google
---

Google analytics is the go to analytics for many people, small business owners and enterprise as well. And if you are using the default settings, your site is/will be required to have that unattractive accept cookies banner.

To help with your GDPR compliace, advanced settings let you anonymize your users:

```javascript
gtag('config', '<GA_MEASUREMENT_ID>', { anonymize_ip: true });
```

But you are still setting cookies. . . So you still need a cookies banner for the [Cookie Law](https://www.cookielaw.org/the-cookie-law/).

Or maybe don't allow google to store cookies:

```javascript
gtag('config', '<GA_MEASUREMENT_ID>', { anonymize_ip: true, storage: 'none' });
```

But, then google analytics doesn't work/report any information.

I'd like to make the case for this style of unobtrusive analytics where you don't know your "user's identity", but take it another step and also don't set any cookies/local storage. Your users will flow right into the site and not have to click through on any "attractive" cookies banners. And the data and analytics will be valuable, annnddd with maybe more users since no cookies banner? (A/B Test in near future)

Over the weekend I set up my own proof of concept for unobtrusive analytics with developer friendly functions for easy logging of user events.

Platform and dashboard coming soon.

Image by <a href="https://pixabay.com/users/Pexels-2286921/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=1841158">Pexels</a> from <a href="https://pixabay.com/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=1841158">Pixabay</a>
