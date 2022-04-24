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
- [What is the state in React Native?](#what-is-the-state-in-react-native)
- [React vs. React Native](#react-vs-react-native)
- [Render method](#render-method)
- [React Components](#react-components)
- [Component in a component](#component-in-a-component)
- [Props](#props)
- [Events](#events)
- [Lists](#lists)
- [Routing](#routing)
- [Hooks](#hooks)
- [useState hook](#usestate-hook)
- [useEffect hook](#useeffect-hook)
- [Other hooks](#other-hooks)
 
## What is the state in React Native?
 
There are two types of data that control a component: props and state.
 
Props are set by the parent and are read only.
State is used for data that will change.
 
 
*Example: Click on text to alter state*
 
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
 
 
## React vs. React Native
 
React is for websites.
React Native is for mobile applications, allowing you to build native mobile applications for different platforms.
 
React manipulates virtual DOM in memory.
 
To create React app use `create-react-app` that includes tools such as:
* webpack
* Babel and
* ESLint
 
 
## Render method
 
React renders HTML to the web page by using a function called `ReactDOM.render()`.
 
The function takes two arguments:
 
* HTML code and
* an HTML element
 
The purpose of the function is to display the specified HTML code inside the specified HTML element.
 
Example:
 
```js
ReactDOM.render(<p>Hello</p>, document.getElementById('root'));
```
 
## React Components
 
React components return HTML.
I can think of Class components and Function components. Component name _**must**_ start with upper case letters.
 
Class component includes the `extends React.Component` part.
 
```js
class Car extends React.Component {
  render() {
    return <h2>Hi, I am a Car!</h2>;
  }
}
```
Functional component for the same output HTML is shorter:
 
```js
function Car() {
  return <h2>Hi, I am a Car!</h2>;
}
```
 
To use components in React apps just write: `<Car />`.
 
 
## Component in a component
 
You can create two components
```js
function Bike() {
  return <h2>I am a Bike!</h2>;
}
 
function Garage() {
  return (
    <>
      <h1>Who lives in my Garage?</h1>
      <Bike />
    </>
  );
}
```
 
## Props
 
Props are like function arguments.
Props are passed via HTML attributes.
Props are passed into React components.
 
 
Example: Property as HTML attribute
 
```js
function Car(props) {
  return <h2>I am a { props.brand }!</h2>;
}
 
function Garage() {
  return (
    <>
      <h1>Who lives in my garage?</h1>
      <Car brand="Ford" />
    </>
  );
}
 
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Garage />);
```
 
Example: Create a variable carName
 
```js
function Car(props) {
  return <h2>I am a { props.brand }!</h2>;
}
 
function Garage() {
  const carName = "Ford";
  return (
    <>
      <h1>Who lives in my garage?</h1>
      <Car brand={ carName } />
    </>
  );
}
 
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Garage />);
```
 
 
## Events
 
Use camelCase syntax to define React events and use
`{}`  after the event name:
 
```js
<button onClick={shoot}>Take the Shot!</button>
```
 
In here the onClick function is called `shoot` and it is set inside the `Ball` component:
 
```js
function Ball() {
  const shoot = () => {
    alert("Great Shot!");
  }
 
  return (
    <button onClick={shoot}>Take the shot!</button>
  );
}
 
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Ball />);
```
 
## Lists
 
```js
function Car(props) {
  return <li>I am a { props.brand }</li>;
}
 
function Garage() {
  const cars = ['Ford', 'BMW', 'Audi'];
  return (
    <>
      <h1>Who lives in my garage?</h1>
      <ul>
        {cars.map((car) => <Car brand={car} />)}
      </ul>
    </>
  );
}
 
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Garage />);
```
## Routing
 
 
create-react-app doesn't include page routing.
Use React Router for routing.
 
To add react router:
 
```
npm i -D react-router-dom
```
 
Now use react router to route to pages based on URL:
 
```js
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";
import NoPage from "./pages/NoPage";
 
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
 
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
```
 
Single route is inside `<Route>` and multiple routes are inside `<Routes>` tag.
 
`<BrowserRouter>` is called the context.
 
Setting the path to `*` will catch undefined URLs.
 
## Hooks
 
A Hook is a special function that lets you hook into React features.
 
`useState` is a hook to add react state to function components.
 
If you write a function component and realize you need to add some state to it, previously you had to convert it to a class, but now you can use a hook.
 
## useState hook
 
You can save the state inside the class:
 
```js
class Example extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }
 
  render() {
    return (
      <div>
        <p>You clicked {this.state.count} times</p>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Click me
        </button>
      </div>
    );
  }
}
```
 
But effectively you can achieve the same with hooks.
 
```js
import React, { useState } from 'react';
 
function Example() {
  // Declare a new state variable, which we'll call "count"  
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
```
 
Note we used the `useState` hook in the previous example.
```js
import { useState } from "react";
```
 
`useState` accepts an initial state and returns two values:
 
* the current state
* a function to update the state
 
_Example: Multiple state hooks_
 
```js
import { useState } from "react";
import ReactDOM from "react-dom";
 
function Car() {
  const [brand, setBrand] = useState("Ford");
  const [model, setModel] = useState("Mustang");
  const [year, setYear] = useState("1964");
  const [color, setColor] = useState("red");
 
  return (
    <>
      <h1>My {brand}</h1>
      <p>
        It is a {color} {model} from {year}.
      </p>
    </>
  )
}
 
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Car />);
```
 
## useEffect hook
 
The `useEffect` hook allows you to perform side effects in your components.
 
```js
import { useState, useEffect } from "react";
import ReactDOM from "react-dom";
 
function Timer() {
  const [count, setCount] = useState(0);
 
  useEffect(() => {
    setTimeout(() => {
      setCount((count) => count + 1);
    }, 1000);
  });
 
  return <h1>I've rendered {count} times!</h1>;
}
 
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Timer />);
```
 
## Other hooks
 
Other popular hooks start with the "use" word:
* useMemo
* useRef
* useReducer
* useCallback
* useContext
* use***