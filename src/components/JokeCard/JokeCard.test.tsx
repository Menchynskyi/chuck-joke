import React from 'react';
import { shallow } from 'enzyme';
import { JokeCard } from '.';
import { transformedJoke } from '../../__mocks__';
import { JokesProvider } from '../../contexts';
import { Category, TimeContainer } from './JokeCardStyled';

describe('JokeCard component', () => {
  it('should render without crashing', () => {
    const wrapper = shallow(
      <JokesProvider>
        <JokeCard joke={transformedJoke} />
      </JokesProvider>
    );
    expect(wrapper.find(JokeCard).exists()).toBe(true);
  });

  it('should not render category if joke is favourite', () => {
    const wrapper = shallow(
      <JokesProvider>
        <JokeCard joke={transformedJoke} isFavourite />
      </JokesProvider>
    );
    expect(wrapper.find(Category).exists()).toBe(false);
  });

  it('should not render last update if it is null', () => {
    const joke = { ...transformedJoke, updateTime: null };
    const wrapper = shallow(
      <JokesProvider>
        <JokeCard joke={joke} />
      </JokesProvider>
    );
    expect(wrapper.find(TimeContainer).exists()).toBe(false);
    expect(wrapper.find(JokeCard).text()).not.toContain('Last update:');
  });
});
