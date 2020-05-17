import React from 'react';
import { FavouriteListItem, FavouriteListStyled } from './FavouriteListStyled';
import { JokeCard } from '../JokeCard';
import { Message } from '../Message';
import { useFavouriteList } from './hooks';

export const FavouriteList: React.FC = () => {
  const favouriteList = useFavouriteList();

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
