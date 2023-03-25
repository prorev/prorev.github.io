---
id: 3152
title: Tools for JS and Node
date: 2016-09-22 19:12:56
author: taimane
layout: post
permalink: /tools-for-js-node/
published: true
categories:
   - javascript
tags:
   - node
   - gulp
   - grunt
   - browserify
---
- [Pick a tool](#pick-a-tool)
- [Stateless and Stateful components](#stateless-and-stateful-components)

## Pick a tool
What Tool to Use:

* webpack
* Gulp
* Grunt or
* Browserify

this is the question now?

## Stateless and Stateful components

Component in react can be both:
* stateless
* stateful

Example of the stateless component:
```js
const HelloWorld = () => (
<SomeComponent />
)
```

Example of the stateful component:
```js
class HelloWorld extends React.Component {
constructor() {
super()
this.state = { name: 'Chris' }
}
render () {
return (
<SomeComponent />
)
}
}
```



