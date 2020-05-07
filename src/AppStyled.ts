import styled from 'styled-components';

export const HeaderStyled = styled.header`
  margin: 40px 0 0 140px;
`;

export const HeaderTitle = styled.h1`
  margin: 0;
  font-weight: bold;
  font-size: ${({ theme }) => theme.fontSize.heading.small};
  line-height: 1.4em;
`;

export const MainContainer = styled.main`
  max-width: 680px;
  margin: 78px 620px 0 140px;
`;

export const AsideContainer = styled.aside`
  position: fixed;
  top: 0;
  right: 0;
  height: 100%;
  width: 480px;
  padding: 20px 40px;
  background-color: ${({ theme }) => theme.colors.background.secondary};
`;

export const AsideTitle = styled.h2`
  margin: 20px 0 20px 0;
  color: ${({ theme }) => theme.colors.text.secondary};
  font-weight: 500;
  font-size: ${({ theme }) => theme.fontSize.heading.small};
  line-height: 1.4em;
`;

export const SectionStyled = styled.section``;

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
