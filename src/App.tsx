import React from 'react';
import { JokesProvider } from './contexts';
import { JokeList, FavouriteList } from './components';
import {
  MainContainer,
  AsideContainer,
  PageTitle,
  AsideTitle,
  SectionStyled,
  SectionTitle,
  TextContainer,
} from './AppStyled';

export const App: React.FC = () => {
  return (
    <JokesProvider>
      <MainContainer>
        <PageTitle>MSI 2020</PageTitle>
        <SectionStyled>
          <SectionTitle>Hey!</SectionTitle>
          <TextContainer>Let’s try to find a joke for you:</TextContainer>
          <JokeList />
        </SectionStyled>
      </MainContainer>
      <AsideContainer>
        <AsideTitle>Favourite</AsideTitle>
        <FavouriteList />
      </AsideContainer>
    </JokesProvider>
  );
};
