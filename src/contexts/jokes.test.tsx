import React from 'react';
import { mount } from 'enzyme';
import { JokesProvider, useJokesContext } from '.';
import { transformedJoke } from '../__mocks__';

describe('Jokes Context', () => {
  let joke: any;
  let likedJoke: any;

  beforeEach(() => {
    joke = transformedJoke;
    likedJoke = { ...transformedJoke, isLiked: true };
  });

  it('should add/remove joke from favourite list after like/dislike', () => {
    const TestComponent = () => {
      const { state, dispatch } = useJokesContext();
      const toggleLike = () => {
        if (joke.isLiked) {
          dispatch({ type: 'dislikeJoke', payload: joke });
          joke = transformedJoke;
        } else {
          dispatch({ type: 'likeJoke', payload: joke });
          joke = likedJoke;
        }
      };
      return (
        <>
          <div className="favList">{JSON.stringify(state.favouriteList)}</div>
          <button type="button" onClick={toggleLike}>
            Like/Dislike
          </button>
        </>
      );
    };

    const wrapper = mount(
      <JokesProvider>
        <TestComponent />
      </JokesProvider>
    );

    expect(wrapper.find('.favList').text()).not.toContain(joke.text);
    wrapper.find('button').simulate('click');
    expect(wrapper.find('.favList').text()).toContain(joke.text);
    wrapper.find('button').simulate('click');
    expect(wrapper.find('.favList').text()).not.toContain(joke.text);
  });
});
