import React from 'react';
import { JokesProvider } from './contexts';
import { JokeList, FavouriteList } from './components';
import { MainContainer, AsideContainer } from './AppStyled';

export const App: React.FC = () => {
  return (
    <JokesProvider>
      <MainContainer>
        <JokeList />
      </MainContainer>
      <AsideContainer>
        <FavouriteList />
      </AsideContainer>
    </JokesProvider>
  );
};
