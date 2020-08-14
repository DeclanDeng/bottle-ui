import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { AutoComplete, DataSourceType } from './autoComplete';

interface LakerPlayerProps {
  value: string;
  number: number;
}

interface GithubUserProps {
  login: string;
  url: string;
  avatar_url: string;
}

const simpleComplete = () => {
  const lakers = ['bradley', 'pope', 'caruso', 'cook', 'cousins', 'james', 'AD', 'green', 'howard', 'kuzma', 'McGee', 'rando']
  const handleFetch = (query: string) => {
    return lakers.filter(name => name.includes(query)).map(name => ({ value: name }));
  }

  return (
    <AutoComplete
      fetchSuggestions={handleFetch}
      onSelect={action('selected')}
      placeholder="Input Laker player's English name."
    />
  )
}

const textComplete = `
  ~~~javascript
  ### Demo code
  const lakers = ['bradley', 'pope', 'caruso', 'cook', 'cousins', 'james', 'AD', 'green', 'howard', 'kuzma', 'McGee', 'rando']
  const handleFetch = (query: string) => {
    return lakers.filter(name => name.includes(query)).map(name => ({ value: name }));
  }

  return (
    <AutoComplete
      fetchSuggestions={handleFetch}
      onSelect={action('selected')}
      placeholder="Input Laker player's English name."
    />
  )
  ~~~
`

const customComplete = () => {
  const lakersWithNumber = [
    { value: 'bradley', number: 11 },
    { value: 'pope', number: 1 },
    { value: 'caruso', number: 4 },
    { value: 'cook', number: 2 },
    { value: 'cousins', number: 15 },
    { value: 'james', number: 23 },
    { value: 'AD', number: 3 },
    { value: 'green', number: 14 },
    { value: 'howard', number: 39 },
    { value: 'kuzma', number: 0 },
  ];

  const handleFetch = (query: string) => {
    return lakersWithNumber.filter(player => player.value.includes(query));
  }

  const renderOption = (item: DataSourceType) => {
    const itemWithNumber = item as DataSourceType<LakerPlayerProps>
    return (
      <>
        <b>Name: {itemWithNumber.value}</b>&ensp;
        <span>Uniform Number: {itemWithNumber.number}</span>
      </>
    )
  }

  return (
    <AutoComplete
      fetchSuggestions={handleFetch}
      onSelect={action('selected')}
      placeholder="Input Laker player's English name. Customize option. "
      renderOption={renderOption}
    />
  )
}

const textCustom = `
### Demo code
~~~javascript
const lakersWithNumber = [
  { value: 'bradley', number: 11 },
  { value: 'pope', number: 1 },
  { value: 'caruso', number: 4 },
  { value: 'cook', number: 2 },
  { value: 'cousins', number: 15 },
  { value: 'james', number: 23 },
  { value: 'AD', number: 3 },
  { value: 'green', number: 14 },
  { value: 'howard', number: 39 },
  { value: 'kuzma', number: 0 },
];

const handleFetch = (query: string) => {
  return lakersWithNumber.filter(player => player.value.includes(query));
}

const renderOption = (item: DataSourceType) => {
  const itemWithNumber = item as DataSourceType<LakerPlayerProps>
  return (
    <>
      <b>Name: {itemWithNumber.value}</b>
      <span>Uniform Number: {itemWithNumber.number}</span>
    </>
  )
}

return (
  <AutoComplete
    fetchSuggestions={handleFetch}
    onSelect={action('selected')}
    placeholder="Input Laker player's English name. Customize option template. "
    renderOption={renderOption}
  />
)
~~~
`

const ajaxComplete = () => {
  const handleFetch = (query: string) => {
    return fetch(`https://api.github.com/search/users?q=${query}`)
      .then(res => res.json())
      .then(({ items }) => {
        console.log(items);
        return items.slice(0, 10).map((item: any) => ({ value: item.login, ...item }))
      })
  }

  const renderOption = (item: DataSourceType) => {
    const itemWithGithub = item as DataSourceType<GithubUserProps>
    return (
      <>
        <b>Name: {itemWithGithub.login}</b>&ensp;
        <span>Url: {itemWithGithub.url}</span>
      </>
    )
  }

  return (
    <AutoComplete 
      fetchSuggestions={handleFetch}
      placeholder="Input Github username."
      onSelect={action('selected')}
      renderOption={renderOption}
    />
  )
}

const textAjax = `
### Demo code
~~~javascript
const handleFetch = (query: string) => {
  return fetch('https://api.github.com/search/users?q='+ query)
    .then(res => res.json())
    .then(({ items }) => {
      console.log(items);
      return items.slice(0, 10).map((item: any) => ({ value: item.login, ...item }))
    })
}

const renderOption = (item: DataSourceType) => {
  const itemWithGithub = item as DataSourceType<GithubUserProps>
  return (
    <>
      <b>Name: {itemWithGithub.login}</b>
      <span>Url: {itemWithGithub.url}</span>
    </>
  )
}

return (
  <AutoComplete 
    fetchSuggestions={handleFetch}
    placeholder="Input Github username."
    onSelect={action('selected')}
    renderOption={renderOption}
  />
)
~~~
`

storiesOf('AutoComplete', module)
  .add('AutoComplete', simpleComplete, {info: {source: false, text: textComplete}})
  .add('Customize options', customComplete,  {info: {source: false, text: textCustom}})
  .add('Async request Github username', ajaxComplete, {info: {source: false, text: textAjax}})