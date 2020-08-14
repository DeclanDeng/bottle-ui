import React from 'react';
import { storiesOf } from '@storybook/react';

const markdownText = `
### Bottle-UI

React components for faster and simpler web development. Build your own design system, or start with Bottle Design.  

### Installation

~~~javascript
npm install bottle-ui --save
~~~


### Usage

~~~javascript
// Import css file
import 'bottle-ui/dist/index.css'
// Import component
import { Button } from 'bottle-ui'
~~~

### Highlight

* 🔥 Typescript with React Hooks
* ⛑️ Implemented unit tests by using react-testing-library
* 📚 Debugging and displaying components by using storybook
* 📚 Created documents by using react-doc-gen
* 📦 Developed components by using react-fontawesome, react-transition-group
* 🌹 Designed components style by Sass
* 🎉 The project includes npm publish，using husky to prevent bad git commit，and travis CI/CD
`

storiesOf('Welcome page', module)
  .add('welcome', () => {
    return (
      <h2>Welcome to Bottle UI</h2>
    )
  }, { info: { text: markdownText, source: false }});