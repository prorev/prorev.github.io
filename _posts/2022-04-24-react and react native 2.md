---
id: 3152
title: React and React Native part 2
date: 2016-09-22 19:12:56
author: taimane
layout: post
permalink: /react-and-react-native2/
published: true
categories:
   - javascript
tags:
   - react-native
   - react
---


## What is state in React Native?

There are two types of data that control a component: props and state. 

Props are set by the parent and readonly. 

State is used for data that is going to change.


*Example: Colored text*

The text itself is a prop. The color should be the state to change over time.


*Example: Click on text*

Now the text will be the state and if we click the original text the text will alter

```js
import React, {Component} from 'react';
import {Text, View} from 'react-native';

export default class App extends Component{
  state={
    myState: "React Native Interview Questions"
  }

updateState = () => this.setState({ myState: "React Native Interview Questions and Answers" })
render() {
  return (
    <View>
     <Text onPress ={this.updateState}> {this.state.myState} </Text>
    </View>
  );
 }
}
```

<div data-snack-id="@intelnovel/supportive-banana" data-snack-platform="web" data-snack-preview="true" data-snack-theme="light" style="overflow:hidden;background:#F9F9F9;border:1px solid var(--color-border);border-radius:4px;height:505px;width:100%"></div>
<script async src="https://snack.expo.dev/embed.js"></script>

## React vs. React Native

React is for websites.
React Native is for mobile applications, allowing you to build native mobile applications for different platforms.

<div data-snack-id="@intelnovel/supportive-banana-part-2" data-snack-platform="web" data-snack-preview="true" data-snack-theme="light" style="overflow:hidden;background:#F9F9F9;border:1px solid var(--color-border);border-radius:4px;height:505px;width:100%"></div>
<script async src="https://snack.expo.dev/embed.js"></script>