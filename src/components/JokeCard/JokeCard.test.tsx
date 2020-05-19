import React from 'react';
import { shallow } from 'enzyme';
import { JokeCard } from '.';
import { transformedJoke } from '../../__mocks__';
import { JokesProvider } from '../../contexts';

describe('JokeCard component', () => {
  it('should render without crashing', () => {
    const wrapper = shallow(
      <JokesProvider>
        <JokeCard joke={transformedJoke} />
      </JokesProvider>
    );
    expect(wrapper.find(JokeCard).exists()).toBe(true);
  });
});
