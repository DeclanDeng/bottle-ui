import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Input } from './input';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
library.add(fas);

const ControlledInput = () => {
  const [value, setValue] = useState('');
  return <Input value={value} onChange={(e) => {setValue(e.target.value)}}></Input>
}

const defaultInput = () => (
  <>
  <Input
    placeholder="Default Input"
    onChange={action('changed')}
  />
  <ControlledInput/>
  </>
)
const disabledInput = () => (
  <Input
    placeholder="disabled input"
    disabled 
  />
)

const iconInput = () => (
  <Input
    placeholder="input with icon"
    icon="search"
  />  
)

const sizeInput = () => (
  <>
    <Input
      defaultValue="large size"
      size="lg"
    />
    <Input
      placeholder="small size"
      size="sm"
    />
  </>
)

const pandInput = () => (
  <>
    <Input
      defaultValue="prepend text"
      prepend="https://"
    />
    <Input
      defaultValue="google"
      append=".com"
    />
    
  </>
)


storiesOf('Input', module)
  .add('Input', defaultInput)
  .add('Disabled Input', disabledInput)
  .add('Input with icon', iconInput)
  .add('Different sizes of Input', sizeInput)
  .add('Input with prepend or append component', pandInput)
