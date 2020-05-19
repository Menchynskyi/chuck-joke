import React from 'react';
import { shallow } from 'enzyme';
import { JokeForm } from '.';
import { SearchInput } from './JokeFormStyled';
import { JokesProvider } from '../../contexts';
import { Theme } from '../../theme';

describe('JokeForm component', () => {
  it('should render without crashing', () => {
    const wrapper = shallow(
      <JokesProvider>
        <JokeForm />
      </JokesProvider>
    );
    expect(wrapper.find(JokeForm).exists()).toBe(true);
  });
});
