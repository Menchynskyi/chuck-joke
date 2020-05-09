import React, { useEffect } from 'react';
import { FavouriteListItem, FavouriteListStyled } from './FavouriteListStyled';
import { JokeCard } from '../JokeCard';
import { useJokesState, useJokesDispatch } from '../../contexts';
import { Message } from '../Message';
import { updateFavouriteJokes } from '../../api';

export const FavouriteList = () => {
  const dispatch = useJokesDispatch();
  const { favouriteList } = useJokesState();

  useEffect(() => {
    updateFavouriteJokes(dispatch, favouriteList);
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    localStorage.setItem('favouriteList', JSON.stringify(favouriteList));
  }, [favouriteList]);

  if (favouriteList.length === 0) {
    return (
      <Message>
        You don&apos;t have any favourite jokes yet.
        <br />
        Let&apos;s add some!
      </Message>
    );
  }

  return (
    <FavouriteListStyled>
      {favouriteList.map((joke) => (
        <FavouriteListItem key={joke.id}>
          <JokeCard isFavourite joke={joke} />
        </FavouriteListItem>
      ))}
    </FavouriteListStyled>
  );
};
