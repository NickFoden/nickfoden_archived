---
layout: post
title: 'Getting logged out creating new firebase users'
image: img/firebaseAuth.png
author: NickFoden
draft: false
date: 2019-06-20T10:00:00.000Z
tags:
  - Firebase
  - Auth
---

## Create a new firebase user & stay logged in ?

If you have a firebase project and you want to have an admin user that can approve a new user to be a member of your platform you might hit a "small" issue that at first seems like a major problem with the flow of firebase, but in fact there is an easy way around this.

While creating the new user with the firebase method of `createUserWithEmailAndPassword`
you get signed out of the app because upon creating the new user firebase will also log them in.

```javascript
firebase
  .auth()
  .createUserWithEmailAndPassword(email, password)
  .then(authUser => {
    //Now they are signed in and you are signed out !!
    //
    // here we do whatever we need to start a user record in db
    // with their uid maybe write a "createUser" function
    createUser(authUser.user.uid, signUpFormDataMaybeAsAnObject);
  })
  .catch(err => {
    //Handle the errors like email already in use etc
    console.error('Error creating a new user ' + err.message);
  });
```

So what do you do? Check stack overflow. . . And you will find you can instantiate a second firebase auth.

<h3>We heard you like apps so much we put an App within your App.</h3>

![Xzibit meme blank](img/xzibit.png)

<br/>
In your firebase config file add / initialize a 2nd app that is using the same configuration. Pretty simple right. Can call it whatever. I have called it secondApp and it initializes a new firebase instance I am calling "Second".
<br/>
<br/>

```javascript
//your firebase config file maybe looks something like this

const config = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
};

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}
//can set a second app !
const secondApp = firebase.initializeApp(config, 'Second');

export { secondApp };
```

And then you can just import it where you need it and then use it as you normally would use your firebase instance.

```javascript
import { secondApp } from '../../firebase';
secondApp
  .auth()
  .createUserWithEmailAndPassword(email, password)
  .then(authUser => {
    //do whatever you need to start a user record in db
    // with their uid maybe write a "createUser" function
    createUser(authUser.user.uid, signUpFormDataMaybeAsAnObject);
  })
  .catch(err => {
    //Handle the errors like email already in use etc
    console.error('Error creating a new user ' + err.message);
  });
```

This way you or your "admin user" can stay logged in while creating new users with this "Second" app that is using the same auth and same config and same everything. Found this was an easy way to handle the problem of creating new users from within an app.

\*\* If a user with an email already in auth signs up again you will want to alert them in the register form or wherever they are signing up for your platform to save time having to filter or check them in your list of users to add / approve.
