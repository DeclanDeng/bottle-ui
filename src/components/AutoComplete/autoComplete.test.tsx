import React from 'react';
import { config } from 'react-transition-group';
import { render, RenderResult, fireEvent, waitFor } from '@testing-library/react';
import { AutoComplete, AutoCompleteProps } from './autoComplete';

config.disabled = true;

const testArray = [
  {value: 'ab', number: 11},
  {value: 'abc', number: 1},
  {value: 'b', number: 4},
  {value: 'c', number: 15},
]

const testProps: AutoCompleteProps = {
  fetchSuggestions: (query) => {return testArray.filter(item => item.value.includes(query))},
  onSelect: jest.fn(),
  placeholder: 'auto-complete'
}

let wrapper: RenderResult, inputNode: HTMLInputElement;
describe('test AutoComplete Component', () => {
  beforeEach(() => {
    wrapper = render(<AutoComplete {...testProps} />)
    inputNode = wrapper.getByPlaceholderText('auto-complete') as HTMLInputElement
  });

  it('test basic AutoComplete behavior', async () => {
    fireEvent.change(inputNode, {target: { value: 'a' }});
    // await waitFor(() => {
    //   expect(wrapper.queryByText('ab')).toBeInTheDocument();
    // })
  });

  it('should provide keyboard support', () => {

  });

  it('click outside should hide the dropdown', () => {

  });

  it('renderOption should generate the right template', () => {

  });

  it('async fetchSuggestion should works fine', () => {

  });
})


