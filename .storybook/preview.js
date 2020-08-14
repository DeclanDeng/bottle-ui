import React from 'react';
import { configure, addDecorator, addParameters } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import '../src/styles/index.scss';
import "./fix_info_style.scss";

const wrapperStyle = {
  padding: '20px 40px',
  width: '500px'
}

const storyWrapper = (storyFn) => (
  <div style={wrapperStyle}>
    <h3>Component</h3>
    {storyFn()}
  </div>
);
addDecorator(storyWrapper);
addDecorator(withInfo); 
addParameters({info: { inline: true, header: false }})

const loaderFn = () => {
  return [
    require('../src/welcome.stories.tsx'),
    require('../src/components/Button/button.stories.tsx'),
    // require('../src/components/Alert/alert.stories.tsx'),
    // require('../src/components/Menu/menu.stories.tsx'),
    // require('../src/components/Tabs/tabs.stories.tsx'),
    // require('../src/components/Icon/icon.stories.tsx'),
    require('../src/components/Input/input.stories.tsx'),
    require('../src/components/AutoComplete/autoComplete.stories.tsx'),
    // require('../src/components/Select/select.stories.tsx'),
    require('../src/components/Upload/upload.stories.tsx'),
  ]
}


// automatically import all files ending in *.stories.js
configure(loaderFn, module);