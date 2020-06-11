import React, { useState } from 'react';
import { JokeList, FavouriteList, JokeForm } from './components';
import { BarsIcon, CloseIcon } from './assets';
import {
  AppContainer,
  MainContainer,
  AsideContainer,
  HeaderTitle,
  AsideTitle,
  SectionTitle,
  TextContainer,
  HeaderStyled,
  OpenBarsButton,
  CloseBarsButton,
  AsideBackground,
  SectionStyled,
} from './AppStyled';
import { useLockBodyScroll } from './hooks';

export const App: React.FC = () => {
  const [barsIsOpen, setBarsIsOpen] = useState(false);

  useLockBodyScroll(barsIsOpen);

  const handleBarsOpen = () => {
    setBarsIsOpen(true);
  };

  const handleBarsClose = () => {
    setBarsIsOpen(false);
  };

  return (
    <AppContainer>
      <HeaderStyled>
        <HeaderTitle>MSI 2020</HeaderTitle>
        <OpenBarsButton isOpen={barsIsOpen} onClick={handleBarsOpen}>
          <BarsIcon />
          Favourite
        </OpenBarsButton>
      </HeaderStyled>
      <MainContainer>
        <SectionStyled>
          <SectionTitle>Hey!</SectionTitle>
          <TextContainer>Let’s try to find a joke for you:</TextContainer>
          <JokeForm />
          <JokeList />
        </SectionStyled>
      </MainContainer>
      <AsideContainer isOpen={barsIsOpen}>
        <AsideTitle>Favourite</AsideTitle>
        <CloseBarsButton onClick={handleBarsClose}>
          <CloseIcon />
          Favourite
        </CloseBarsButton>
        <FavouriteList />
      </AsideContainer>
      <AsideBackground onClick={handleBarsClose} isOpen={barsIsOpen} />
    </AppContainer>
  );
};
