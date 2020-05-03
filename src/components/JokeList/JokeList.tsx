import React from 'react';
import { JokeCard } from '../JokeCard';
import { useJokesState } from '../../contexts';
import { JokeListItem, JokeListStyled } from './JokeListStyled';

export const JokeList: React.FC = () => {
  const { isLoaded, jokeList } = useJokesState();

  return (
    <JokeListStyled>
      {isLoaded &&
        jokeList.map((joke) => (
          <JokeListItem key={joke.id}>
            <JokeCard isLarge joke={joke} />
          </JokeListItem>
        ))}
    </JokeListStyled>
  );
};
