import React from 'react';
import { JokesProvider } from './contexts';
import { JokeList, FavouriteList, JokeForm } from './components';
import {
  MainContainer,
  AsideContainer,
  HeaderTitle,
  AsideTitle,
  SectionTitle,
  TextContainer,
  HeaderStyled,
} from './AppStyled';

export const App: React.FC = () => {
  return (
    <JokesProvider>
      <HeaderStyled>
        <HeaderTitle>MSI 2020</HeaderTitle>
      </HeaderStyled>
      <MainContainer>
        <section>
          <SectionTitle>Hey!</SectionTitle>
          <TextContainer>Let’s try to find a joke for you:</TextContainer>
          <JokeForm />
          <JokeList />
        </section>
      </MainContainer>
      <AsideContainer>
        <AsideTitle>Favourite</AsideTitle>
        <FavouriteList />
      </AsideContainer>
    </JokesProvider>
  );
};
