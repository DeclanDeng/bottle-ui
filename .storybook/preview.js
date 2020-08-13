import React from 'react';
import { addDecorator, addParameters } from '@storybook/react';
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

// const styles = {
//   textAlign: 'center',
// };

// const CenterDecorator = (storyFn) => <div style={styles}>{storyFn()}</div>

// addDecorator(CenterDecorator); 