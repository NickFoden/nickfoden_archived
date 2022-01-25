---
layout: post
title: 'Environment Variables for Google App Engine'
image: img/GoogleAppEngine.png
author: NickFoden
draft: false
date: 2021-04-20T10:00:00.000Z
tags:
  - GoogleCloud
  - AppEngine
  - CloudBuild
  - NodeJS
---

TLDR: Cloud Build + `printenv`



** this post is about a NodeJS deployment

When working with app engine, you can setup an automated deployment with cloud build. This works well for creating your own CICD pipeline. I hit some bumps with wanting to supply different `env` vars for prod that had to be obfuscated. 

To deploy on app engine you will need to add `app.yaml` in the root of your project

 https://cloud.google.com/appengine/docs/flexible/nodejs/configuring-your-app-with-app-yaml

```javascript
// my app.yaml below
// this is actually a real simple file for the standard environment that will scale to zero
```

```javascript
# Copyright 2017, Google, Inc.
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#    http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.

# [START gae_quickstart_yaml]
runtime: nodejs14
# [END gae_quickstart_yaml]
```

And then after you setup cloudbuild will have another yaml file 
`cloudbuild.yaml`

https://cloud.google.com/build/docs/set-up

```javascript
// example of a cloudbuild.yaml below
```

```javascript
steps:
  - name: node
    entrypoint: npm
    args: ["run", "create-env"]
    env:
      - 'MYSQL_HOST=${_MYSQL_HOST}'
      - 'MYSQL_DATABASE=${_MYSQL_DATABASE}'
      - 'MYSQL_USERNAME=${_MYSQL_USERNAME}'
      - 'MYSQL_PASSWORD=${_MYSQL_PASSWORD}'
      - 'MYSQL_PORT=${_MYSQL_PORT}'
  - name: "gcr.io/cloud-builders/gcloud"
    args: ["app", "deploy"]
    timeout: "1600s"
```

So this cloudbuild file has some default stuff, but also i added the `env` values. So this is what we want to swap in at build time. And Cloud Build will require you name your env variables starting with an underscore `_A_VALUE`. 

And quick note that you can see in the cloudbuild file i added a first step and i named it node, which could be improved, but the args are important `run create-env` and so in my `package.json` this will use `printenv` to print the environment variables to a file `.env` before building the project. 

```javascript
  "scripts": {
    "build": "tsc --project ./",
    "create-env": "printenv > .env",
    "dev": "nodemon server.ts",
    "gcp-build": "tsc --project ./",
    "start": "node ./build/server.js",
    "validate": "tsc --noEmit"
  },
```
Notice the `gcp-build` script in my package file as well. This is an important script that GCP will run to build your app. 

So now you can go to your cloud build job in the gcp console and setup your `.env` vars for prod and cloud build will add a `.env` file to your project when building with the variables. 

This is the first draft of this post. Thinking to use some more examples of screenshots of the gcp cloud console, but need to setup an example project that i don't mind exposing first. 

Any questions hit me up, also i can configure your build pipeline for $ :-). This was an annoying thing, but once i discovered `printenv` command it all clicked. 
