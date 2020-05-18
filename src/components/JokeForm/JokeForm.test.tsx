import React from 'react';
import { shallow } from 'enzyme';
import { JokeForm } from '.';
import { JokesProvider } from '../../contexts';

describe('JokeForm component', () => {
  it('should render without crashing', () => {
    const wrapper = shallow(
      <JokesProvider>
        <JokeForm />
      </JokesProvider>
    );
    expect(wrapper.exists()).toBe(true);
  });
});
