---
id: 3152
title: React and React Native part 3
date: 2016-09-22 19:12:56
author: taimane
layout: post
permalink: /react-and-react-native-3/
published: true
categories:
   - javascript
tags:
   - react-native
   - react
---
- [Transpiling JSX](#transpiling-jsx)
- [The View in React Native](#the-view-in-react-native)
- [Text component](#text-component)
- [Dealing with Images](#dealing-with-images)
- [Styles](#styles)
- [Inline styles](#inline-styles)
- [A Button](#a-button)
- [Image picker and image sharing](#image-picker-and-image-sharing)
 
## Transpiling JSX
 
Browsers can't understand JSX directly.
React uses compilers like Babel or TypeScript to transform JSX code into regular JavaScript.
 
Toolkits like **create-React-app** or **Next.js** include a JSX transpiling.
 
Example: [The transpiling of JSX](https://babeljs.io/repl#?browsers=defaults%2C%20not%20ie%2011%2C%20not%20ie_mob%2011&build=&builtIns=false&corejs=3.21&spec=false&loose=false&code_lz=JYWwDg9gTgLgBAJQKYEMDG8BmUIjgcilQ3wG4AoczAVwDsNgJa4BBMMACgEo4BvcuHCIxqUZgB4AFgEYAfAAkkAGyUQ4AdWhKAJuID0M2RQC-QA&debug=false&forceAllTransforms=false&shippedProposals=false&circleciRepo=&evaluate=false&fileSize=false&timeTravel=false&sourceType=module&lineWrap=true&presets=react%2Cstage-2%2Ctypescript&prettier=false&targets=&version=7.17.9&externalPlugins=&assumptions=%7B%7D):
 
```jsx
import React from 'react';
 
function App() {
  return <h1>Hello World</h1>;
}
```
 
Will convert to:
 
```js
import React from 'react';
 
function App() {
  return /*#__PURE__*/React.createElement("h1", null, "Hello World");
}
```
 
Note: Transpiling is transforming the source code written in one language and into another language.
 
 
 
 
## The View in React Native
 
The view is a container.
 
It maps directly to the native view to whatever platform the React Native app is running on.
 
View is designed to be nested inside other views and can have 0 to many children of any type.
 
Views are designed to be used with StyleSheet, although inline styles are also supported.
 
Learn more about [View Props](https://reactnative.dev/docs/view#props).
 
There are many view props. Some of them are for Android exclusively, some are for IOS, but mostly for both.
 
Note: React Native currently supports both iOS and Android, and has the potential to expand to future platforms as well.
 
To inject a view inside your app you need to have this line inside JSX:
 
```jsx
import { View } from 'react-native'
```
 
## Text component
 
If you plan to show the text in React native you should use the Text component.
 
This is probably the first component you will use.
 
```jsx
import { Text } from 'react-native'
```
 
 
## Dealing with Images
 
If you plan to show the image in React native you should use the Image component.
 
But the image won't be visible if you don't explicitly specify a width and height.
 
```jsx
import React from 'react';
import { Image,  StyleSheet, Text, View } from 'react-native';
import logo from './assets/logo.png';
 
export default function App() {
  return (
    <View style={styles.container}>
      <Image source={logo} style={ { width: 305, height: 159 } } />
 
      <Text style={ {color: '#888', fontSize: 18} }>
        To share a photo from your phone with a friend, just press the button below!
      </Text>
    </View>
  );
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
```
 
You can load an image directly from URL if you use Image _**source**_ attribute like this:
 
```jsx
import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
 
export default function App() {
  return (
    <View style={styles.container}>
      <Image source={ { uri: "https://i.imgur.com/TkIrScD.png" } } style={ { width: 305, height: 199 } } />
   
      <Text style={ {color: '#888', fontSize: 18} }>
        To share a photo from your phone with a friend, just press the button below!
      </Text>
    </View>
  );
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#bac',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
```
 
## Styles
 
You create styles variables to represent the styles. You can add View attribute `style={styles.container}`:
 
 
```jsx
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
 
export default function App() {
  return (
    <View style={styles.container}>
      <Text>To share a photo from your phone with a friend, just press the button below!</Text>
    </View>
  );
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#bac',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
```
 
## Inline styles
 
The example with inline styles use `{ {} }` double brackets set on a Text component:
 
`{ {color: '#888', fontSize: 18} }`
 
```jsx
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
 
export default function App() {
  return (
    <View style={styles.container}>
      <Text style={ {color: '#888', fontSize: 18} }>
        To share a photo from your phone with a friend, just press the button below!
      </Text>
    </View>
  );
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#bac',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
 
```
 
## A Button
 
You can use `TouchableOpacity` for the button in React native.
 
`TouchableOpacity` increases the lightness of a button when touched while `TouchableHighlight` increases the darkness of a button when touched.
 
`TouchableHighlight` adds a view to the view hierarchy and `TouchableOpacity` works without changing the view hierarchy.
 
If you like you can use [React Native Elements](https://reactnativeelements.com/) `Button` as well.
 
 
 
```jsx
import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
 
export default function App() {
  return (
    <View style={styles.container}>
      <Image source={ { uri: 'https://i.imgur.com/TkIrScD.png' } } style={styles.logo} />
      <Text style={styles.instructions}>
        To share a photo from your phone with a friend, just press the button below!
      </Text>
 
      <TouchableOpacity onPress={() => alert('Hello')} style={styles.button}>
        <Text style={styles.buttonText}>Pick a photo</Text>
      </TouchableOpacity>
    </View>
  );
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 305,
    height: 159,
    marginBottom: 20,
  },
  instructions: {
    color: '#888',
    fontSize: 18,
    marginHorizontal: 15,
    marginBottom: 10,
  },
  button: {
    backgroundColor: "blue",
    padding: 20,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 20,
    color: '#fff',
  },
});
```
 
## Image picker and image sharing
 
React native does not provide perfect image picker and image sharing.
 
The solution is to install and use:
* `expo-image-picker` and
* `expo-sharing`
 
 
```jsx
import * as ImagePicker from 'expo-image-picker';
import * as Sharing from 'expo-sharing';
```
