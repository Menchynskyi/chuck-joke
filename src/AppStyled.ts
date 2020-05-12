import styled from 'styled-components';

type BarsStatus = { isOpen: boolean };

export const AppContainer = styled.div`
  height: auto;
  min-height: 100vh;
  overflow: hidden;

  @media ${({ theme }) => theme.device.laptop} {
    display: grid;
    grid-template-areas: 'header aside' 'main aside';
    grid-template-columns: 1fr 480px;
    grid-template-rows: max-content 1fr;
  }
`;

export const HeaderStyled = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 20px 20px 0 20px;

  @media ${({ theme }) => theme.device.tablet} {
    margin: 40px 40px 0 40px;
  }

  @media ${({ theme }) => theme.device.laptop} {
    grid-area: header;
  }

  @media ${({ theme }) => theme.device.desktop} {
    margin: 40px 40px 0 140px;
  }
`;

export const HeaderTitle = styled.h1`
  margin: 0;
  font-weight: bold;
  font-size: ${({ theme }) => theme.fontSize.heading.small};
  line-height: 1.4em;
`;

export const MainContainer = styled.main`
  padding: 78px 20px 0 20px;

  @media ${({ theme }) => theme.device.tablet} {
    padding: 78px 40px 0 40px;
  }

  @media ${({ theme }) => theme.device.laptop} {
    grid-area: main;
  }

  @media ${({ theme }) => theme.device.desktop} {
    padding: 78px 40px 0 140px;
  }
`;

export const AsideContainer = styled.aside<BarsStatus>`
  position: fixed;
  top: 0;
  right: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
  width: 100%;
  z-index: 2;
  height: 100%;
  padding: 0 20px;
  background-color: ${({ theme }) => theme.colors.background.secondary};
  transition: all 0.2s ease-in-out;
  overflow: auto;

  @media ${({ theme }) => theme.device.tablet} {
    width: 480px;
    padding: 20px 40px;
  }

  @media ${({ theme }) => theme.device.laptop} {
    position: unset;
    grid-area: aside;
    width: auto;
    height: auto;
  }
`;

export const AsideTitle = styled.h2`
  display: none;
  margin: 20px 0 20px 0;
  color: ${({ theme }) => theme.colors.text.secondary};
  font-weight: 500;
  font-size: ${({ theme }) => theme.fontSize.heading.small};
  line-height: 1.4em;

  @media ${({ theme }) => theme.device.laptop} {
    display: block;
  }
`;

export const SectionStyled = styled.section`
  @media ${({ theme }) => theme.device.laptop} {
    max-width: 680px;
  }
`;

export const SectionTitle = styled.h2`
  margin: 0;
  font-weight: bold;
  font-size: ${({ theme }) => theme.fontSize.heading.large};
  line-height: 1.375em;
`;

export const TextContainer = styled.p`
  margin: 0 0 43px 0;
  font-weight: 500;
  font-size: ${({ theme }) => theme.fontSize.heading.regular};
  line-height: 1.83em;
`;

export const OpenBarsButton = styled.button<BarsStatus>`
  display: flex;
  background-color: transparent;
  padding: 0;
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius.regular};
  opacity: ${({ isOpen }) => (isOpen ? '0' : '1')};
  color: ${({ theme }) => theme.colors.text.secondary};
  font-size: ${({ theme }) => theme.fontSize.heading.small};
  font-weight: 500;
  line-height: 1.4em;
  transition: all 0.1s ease-in;

  &:hover {
    cursor: pointer;
  }

  &:focus {
    outline: none;
    box-shadow: ${({ theme }) => theme.boxShadow.focus};
  }

  & svg {
    margin-right: 10px;
  }

  @media ${({ theme }) => theme.device.laptop} {
    display: none;
  }
`;

export const CloseBarsButton = styled.button`
  display: flex;
  background-color: transparent;
  margin: 20px 0 40px auto;
  padding: 0;
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius.regular};
  color: ${({ theme }) => theme.colors.text.secondary};
  font-size: ${({ theme }) => theme.fontSize.heading.small};
  font-weight: 500;
  line-height: 1.4em;

  &:hover {
    cursor: pointer;
  }

  &:focus {
    outline: none;
    box-shadow: ${({ theme }) => theme.boxShadow.focus};
  }

  & svg {
    margin-right: 10px;
  }

  @media ${({ theme }) => theme.device.tablet} {
    margin: 20px 0 20px auto;
  }

  @media ${({ theme }) => theme.device.laptop} {
    display: none;
  }
`;

export const AsideBackground = styled.div<BarsStatus>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
  background-color: ${({ theme }) => theme.colors.background.transparent};

  @media ${({ theme }) => theme.device.laptop} {
    display: none;
  }
`;
