import React from 'react';
import { shallow } from 'enzyme';
import { JokeList } from '.';
import { JokesContext, JokesContextState, initialState } from '../../contexts';
import { jokeList } from '../../__mocks__';

describe('JokeList component', () => {
  it('should renders without crashing', () => {
    const contextState = {
      state: { ...initialState, jokeList, isLoaded: true },
      dispatch: jest.fn(),
    };
    const wrapper = shallow(
      <JokesContext.Provider value={contextState as JokesContextState}>
        <JokeList />
      </JokesContext.Provider>
    );
    expect(wrapper.find('li').length()).toBe(4);
  });
});
