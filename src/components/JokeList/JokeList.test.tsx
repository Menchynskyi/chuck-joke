import React from 'react';
import { mount, shallow } from 'enzyme';
import { JokeList } from '.';
import {
  JokesContext,
  JokesContextState,
  initialState,
  JokesProvider,
} from '../../contexts';
import { jokeList } from '../../__mocks__';
import { Theme } from '../../theme';

describe('JokeList component', () => {
  it('should render without crashing', () => {
    const wrapper = shallow(
      <JokesProvider>
        <JokeList />
      </JokesProvider>
    );
    expect(wrapper.exists()).toBe(true);
  });

  it('should render correct number of jokes from context', () => {
    const contextState = {
      state: { ...initialState, jokeList, isLoaded: true },
      dispatch: jest.fn(),
    };
    const wrapper = mount(
      <Theme>
        <JokesContext.Provider value={contextState as JokesContextState}>
          <JokeList />
        </JokesContext.Provider>
      </Theme>
    );
    expect(wrapper.find('li').length).toBe(3);
  });

  it('should render message if isLoaded true and jokeList is empty', () => {
    const contextState = {
      state: { ...initialState, isLoaded: true },
      dispatch: jest.fn(),
    };
    const wrapper = mount(
      <Theme>
        <JokesContext.Provider value={contextState as JokesContextState}>
          <JokeList />
        </JokesContext.Provider>
      </Theme>
    );
    expect(wrapper.find('div').text()).toContain('Try something else!');
  });

  it('should not render if jokeList is empty and isLoaded false', () => {
    const wrapper = mount(
      <JokesProvider>
        <JokeList />
      </JokesProvider>
    );
    expect(wrapper.find('ul').exists()).toBe(false);
  });
});
