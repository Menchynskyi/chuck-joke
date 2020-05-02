import React, { useEffect } from 'react';
import { JokeCard } from '../JokeCard';
import { useJokesContext } from '../../contexts';
import { JokeListItem, JokeListStyled } from './JokeListStyled';
import { getRandomJoke } from '../../api';

export const JokeList: React.FC = () => {
  const { dispatch, state } = useJokesContext();
  useEffect(() => {
    getRandomJoke(dispatch);
  }, [dispatch]);
  return (
    <JokeListStyled>
      {state.jokeList &&
        state.jokeList.map((joke) => (
          <JokeListItem key={joke.id}>
            <JokeCard isLarge joke={joke} />
          </JokeListItem>
        ))}
    </JokeListStyled>
  );
};