import React, { useEffect } from 'react';
import { FavouriteListItem, FavouriteListStyled } from './FavouriteListStyled';
import { JokeCard } from '../JokeCard';
import { useJokesState } from '../../contexts';

export const FavouriteList = () => {
  const { favouriteList } = useJokesState();

  useEffect(() => {
    localStorage.setItem('favouriteList', JSON.stringify(favouriteList));
  }, [favouriteList]);

  return (
    <FavouriteListStyled>
      {favouriteList.map((joke) => (
        <FavouriteListItem key={joke.id}>
          <JokeCard joke={joke} />
        </FavouriteListItem>
      ))}
    </FavouriteListStyled>
  );
};
