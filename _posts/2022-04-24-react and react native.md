---
id: 3152
title: React and React Native
date: 2016-09-22 19:12:56
author: taimane
layout: post
permalink: /react-and-react-native/
published: true
categories:
   - javascript
tags:
   - react-native
   - react
---
- [What are the features of React?](#what-are-the-features-of-react)
- [What is JSX?](#what-is-jsx)
- [Can web browsers read JSX directly?](#can-web-browsers-read-jsx-directly)
- [What is the virtual DOM?](#what-is-the-virtual-dom)
- [Why use React instead of other frameworks, like Angular?](#why-use-react-instead-of-other-frameworks-like-angular)
- [What is the difference between the ES6 and ES5 standards?](#what-is-the-difference-between-the-es6-and-es5-standards)
- [How do you create a React app?](#how-do-you-create-a-react-app)
- [What is a JavaScript toolchain?](#what-is-a-javascript-toolchain)
- [React vs. React Native](#react-vs-react-native)
 
## What are the features of React?
There is a nice set of features in React:
 
* JSX (JavaScript Syntax Extension)
* Virtual DOM
* One-way data binding
* Performance
* Extensions
* Conditional statements
* Components
* Simplicity
 
JSX stands for JavaScript XML. JSX allows us to write HTML in React. JSX makes it easier to write and add HTML in React.
 
## What is JSX?
 
JSX is a React extension to the JavaScript language.
 
JSX allows you to write HTML in React by converting HTML into React components, helping you to more easily create user interfaces for your web applications.
 
Example: JSX write expressions inside curly braces `{}`:
```jsx
const myElement = <h1>React is {5 + 5} times better with JSX</h1>;
```
 
Note: JSX will throw an error if the HTML is not correct, or if the HTML misses a parent element.
 
However you can use fragments:
 
```jsx
const myElement = (
  <>
    <p>I am a paragraph.</p>
    <p>I am a paragraph too.</p>
  </>
);
```
 
A fragment is just an empty HTML tag: `<></>`.
 
There are no `class` strings in JSX. The `class` keyword is used in HTML, but `class` is reserved word in JavaScript; you cannot use it in JSX. Use `className` instead.
 
```jsx
const myElement = <h1 className="myclass">Hello World</h1>;
```
 
JSX does not support `if` statement:
 
```js
const x = 5;
let text = "Goodbye";
if (x < 10) {
  text = "Hello";
}
```
 
Now this is JSX:
```jsx
const myElement = <h1>{text}</h1>;
```
 
## Can web browsers read JSX directly?
 
No. JSX is not intended to be implemented by the engines or browsers, it is intended to be used by various **_transpilers_** to transform these JSX into valid JavaScript code.
 
 
## What is the virtual DOM?
 
React creates a tree of custom objects instead of actual HTML elements. For instance, for the `div` there is a `React.div` object, for the `ul` there is a `React.ul` object, etc.
 
It can manipulate these objects quickly without actually touching the real DOM or going through the DOM API.
 
When rendering a component, it uses this virtual DOM to figure out what it needs to do with the real DOM, and this happens to be fast.
 
 
 
## Why use React instead of other frameworks, like Angular?
 
Angular and React are fundamentally different, and it is hard to compare them.
 
However, we can say react is mobile cross-platform compared to Angular.
 
 
 
## What is the difference between the ES6 and ES5 standards?
 
ES5 added:
* `"strict mode"`
* JSON support
* `String.trim()`
* `Array.isArray()`
* Array iteration methods
 
 
ES6 added:
* `let` and `const`
* default parameter values
* `Array.find()`
* `Array.findIndex()`
 
React uses ES6. Stay familiar with features like:
 
* Classes
* Arrow Functions
* Variables (`let`, `const`, `var`)
* Array Methods like `.map()`
* Destructuring
* Modules
* Ternary Operator
* Spread Operator
 
 
 
## How do you create a React app?
 
```js
npx create-react-app my-app
cd my-app
npm start
```
 
The npx stands for Node Package Execute and it comes with the npm. It is an npm package runner that can execute any package that you want from the npm registry without even installing that package.
 
Create React App (create-react-app) is a comfortable environment for learning React, and is probably the best way to start building a new single-page application in React.
 
There are other ways:
* Next.js
* Gatsby
* Neutrino
* Nx
* Parcel
* Razzle
 
## What is a JavaScript toolchain?
 
A JavaScript toolchain typically is:
 
* A package manager, such as Yarn or npm.
* A bundler, such as webpack or Parcel, lets you write modular code and bundle it together into small packages to optimize load time.
* A compiler such as Babel. It lets you write modern JavaScript code that still works in older browsers.
 
 
## React vs. React Native
 
React is basically a JavaScript library and React Native is the entire framework.
 
If React is optimal for creating apps with high functionality and complex calculations, then React Native is ideal to give a native feeling to your mobile apps.
 
 
Learning React before working with the React Native is necessary. React is for web and the native version is for mobile and desktop development.
 
On top of React, React Native gives you more features to help you make mobile and desktop native apps.