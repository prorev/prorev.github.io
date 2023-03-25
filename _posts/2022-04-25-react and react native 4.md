---
id: 3152
title: React and React Native part 4
date: 2016-09-22 19:12:56
author: taimane
layout: post
permalink: /react-and-react-native-4/
published: true
categories:
   - javascript
tags:
   - react-native
   - react
---
- [Competitors](#competitors)
- [React similar projects](#react-similar-projects)
- [Two types of components](#two-types-of-components)
- [Should I use functional components over class components?](#should-i-use-functional-components-over-class-components)
- [Render method](#render-method)
- [Before JSX](#before-jsx)
- [props and state](#props-and-state)
- [componentDidMount](#componentdidmount)
- [componentWillUnmount](#componentwillunmount)
- [Event system](#event-system)
- [Mouse events](#mouse-events)
- [Facebook Flux](#facebook-flux)
- [React Native Packager](#react-native-packager)
- [New React App](#new-react-app)
- [React.createElement](#reactcreateelement)
- [Uppercase names](#uppercase-names)
- [Define a component in 2 ways](#define-a-component-in-2-ways)
- [User defined components](#user-defined-components)
- [Pure component](#pure-component)
- [React top level API](#react-top-level-api)


## Competitors

There are few competitors to React Native.

* PhoneGap/Cordova 
* Ionic

Competitors use WebViews.

## React similar projects

React ART is a JavaScript library for drawing vector graphics using React.

React canvas allows you to draw DOM-like objects on canvas element.

## Two types of components

React has two types of components:

* Functional Components
* Class Components

Functional components are simply javascript functions.

```js
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}
```

The class components are based on ES6 class syntax.

```js
class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}
```

## Should I use functional components over class components?




Basic Hooks

    useState
    useEffect
    useContext




## Render method

Every React component need to have `render` method.

```jsx
render: function(){
  return(
    <h1 className="camel">Trophy</h1>
  );
}
```

## Before JSX

Before JSX you would write:

```js
var Compo = React.createClass({
  render: function(){
    ...
  }
});
```
With JSX we get
```jsx
class Compo extends React.Component{
  render(){
    ...
  }
}
```

JSX will never become part of JavaScript standard. You should use Babel to create JavaScript from JSX.


## props and state

React component get props from the parent. State on the other hand is what React component maintains.

Whenever React component is change the component will be re-rendered.

## componentDidMount

This is the event like constructor. You set what will happen. 

## componentWillUnmount

It's like the destructor. Do things to prevent eventual memory leaks. 


## Event system

React has custom event system.

The reason for having a specific event system is cross-browser compatibility. 

In React event handlers are called `SyntheticEvent`.

React events work identically across all browsers. 

```js
var PlayerList = React.createClass({
  getInitalState: function(){
    return{
      open: false
    }
  },
  toggleModal: function(){
    this.setState({open: !this.state.open}); // negation
  },
  render: function(){
    if(this.state.open){
      return <BootstrapModel />
    }
    return <BootstrapModel type="primary" onClick={this.toggleModal} />
  }
})
```

## Mouse events

The list of mouse events in React:

    onClick onContextMenu onDoubleClick onDrag onDragEnd onDragEnter onDragExit
    onDragLeave onDragOver onDragStart onDrop onMouseDown onMouseEnter onMouseLeave
    onMouseMove onMouseOut onMouseOver onMouseUp

Example:
```jsx
class Tickler extends React.Component {

  tickle = () => {
    console.log('Tee hee!');
  }

  render() {
    return (
      <button onClick={this.tickle}>Tickle me!</button>
    );
  }
}
```

## Facebook Flux

Flux is a pattern. 

Flux is the application architecture that Facebook uses for building client-side web applications.

It's alternative for MVC. 

After learning complexity and the instability of the MVC architecture, the Facebook dev team released Flux as an alternative to MVC architecture.

"Flux has shown us the right way to implement MVC" said Facebook. 

Renaming controller to dispatcher and creating store instead of models doesn't make you a completely new architecture, but a better structure. 

So yes, Flux is a better way than the existing MVC in client side.


## React Native Packager

The packager does a few things:

* Combines Javascript to a single file
* Translates Javascript new syntax into older syntax
* Converts image files into objects that can be displayed by an Image component

## New React App

Typically, new React apps have a single App component at the very top. 

Is there any difference between:

```jsx
function App() {
  // some code
}
```
and

```jsx
const App = () => {
  // some code
}
```

No. These are the same. Usually these are followed by `export default App;` which means that you can `import App from 'app'` without using `{}`s.

And the upper is almost similar as

```jsx
class App extends React.Component{
    // some code
}
```

## React.createElement

`React.createElement()` will create and return a new React element.

Code written with JSX will be converted to use `React.createElement()`. 

Note what the props are:

```js
React.createElement(
  type,
  [props],
  [...children]
)
```
Example: Transpiling

```jsx
<MyButton color="blue" shadowSize={2,2}>
  Click Me
</MyButton>
```

will convert into:

```js
/*#__PURE__*/
React.createElement(MyButton, {
  color: "blue",
  shadowSize: (2, 2)
}, "Click Me");
```


Use the self-closing form of the tag if there are no children.

```jsx
<div className="sidebar" />
```
will be transpiled into:

```js
/*#__PURE__*/
React.createElement("div", {
  className: "sidebar"
});
```

## Uppercase names

There is a difference in these two components:

```jsx
<Div className="sidebar" />
```
vs.
```jsx
<div className="sidebar" />
```

after transpiling:

```js
/*#__PURE__*/
React.createElement(Div, {
  className: "sidebar"
});
```
vs.
```js
/*#__PURE__*/
React.createElement("div", {
  className: "sidebar"
});
```

Lowercase elements result in passing a string to `React.createElement`, while uppercase elements result in component defined or imported to JavaScript file.

Recommend is to name components with a capital letter. 

## Define a component in 2 ways

Simple way to define a component in React is to create a function returning some HTML:

```jsx
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}
```

As you may guess after babel you will get this:

```js
function Welcome(props) {
  return /*#__PURE__*/React.createElement("h1", null, "Hello, ", props.name);
}
```

Why this function is a React component?

Becase it accepts a single "props" object argument and returns a React element. 


You call these components "function components".

It is possible to use ES6 do define a component.

```jsx
class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}
```

Babel will return:

```js
class Welcome extends React.Component {
  render() {
    return /*#__PURE__*/React.createElement("h1", null, "Hello, ", this.props.name);
  }
}
```

## User defined components

We can create user defined components as well:

```jsx
const element1 = <div />;
const element2 = <Welcome name="Aaron" />;
const element3 = <Person color="red" name="Aaron" age="man" />;
```

Transpiled it will become:

```js
const element1 = /*#__PURE__*/React.createElement("div", null);
const element2 = /*#__PURE__*/React.createElement("Welcome", {
  name: "Aaron"
});
const element3 = /*#__PURE__*/React.createElement(Person, {
  color: "red",
  name: "Aaron",
  age: "man"
});
```

## Pure component

`Component` doesn't implement `shouldComponentUpdate()`, while  `PureComponent` implements it.

A React component is considered pure if it renders the same output for the same state and props. 

Use pure Component when you want to avoid re-rendering if component props and state are not changed.

Note: All React components must act like pure functions with respect to their props.

Check more on:

* [`React.Component`](https://reactjs.org/docs/react-api.html#reactcomponent)
* [`React.PureComponent`](https://reactjs.org/docs/react-api.html#reactpurecomponent)


## React top level API

You can use either of these two options:

* Load React from a `<script>` tag
* Use ES6 with npm and `import React from 'react'`
* Use ES5 with npm, you can write `var React = require('react')`.

