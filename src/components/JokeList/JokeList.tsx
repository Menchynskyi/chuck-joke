import React from 'react';
import { JokeCard } from '../JokeCard';
import { useJokesState } from '../../contexts';
import { JokeListItem, JokeListStyled } from './JokeListStyled';
import { Message } from '../Message';

export const JokeList: React.FC = () => {
  const { isLoaded, jokeList } = useJokesState();

  if (isLoaded && jokeList.length === 0) {
    return (
      <Message size="large" color="secondary">
        Such jokes haven&apos;t been made up yet. Try something else!
      </Message>
    );
  }

  return (
    <JokeListStyled>
      {isLoaded &&
        jokeList.map((joke) => (
          <JokeListItem key={joke.id}>
            <JokeCard joke={joke} />
          </JokeListItem>
        ))}
    </JokeListStyled>
  );
};
