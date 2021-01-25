---
layout: post
title: 'Best Node version manager - Volta'
image: img/volta.png
author: NickFoden
draft: false
date: 2021-01-07T10:00:00.000Z
tags:
  - Volta
  - Node
  - Version
---

#Volta is the best Node version manager

(also great to manage versions for rest of your teams toolchain - Yarn, etc)

[https://volta.sh/](https://volta.sh/)

```
# install Volta
curl https://get.volta.sh | bash

# install Node
volta install node

# start using Node
node
```

Add version/set Node version in package.json

```
  "engines": {
    "node": "10"
  },
  "volta": {
    "node": "10.23.1"
  }
```

Off you go!

##Why?

```
PRODUCTION !== DEVELOPMENT
```

Your local development environment does not/will not match the production environment.

The more closely you replicate the production environment for development the better. Less surprises. More predictability. Avoid the "It works on my machine". Basically we all do less work debugging the inconsistencies across versions later. Win win win.

Common scenario is each team member's machine might be on a different version. Node 12, Node 14, etc, also your production environment generally is on an older <b>lts</b> (Long Term Support) version. Probably not going to run into much Node 8 anymore, still some Node 10 environments, more and more Node 12 available on cloud providers lately, but chances are your local machine is Node 14 or even Node 15 depending how/when you installed Node.

Nvm (Node Version Manager) is another tool/the defacto for managing versions, but Volta is much simpler install and don't have to fuss with helping teammates sort NVM and multiple Node installs on their machines. . .

Happy Coding!
