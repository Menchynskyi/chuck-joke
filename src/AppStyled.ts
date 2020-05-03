import styled from 'styled-components';

export const MainContainer = styled.main`
  max-width: 680px;
  margin-right: 620px;
  margin-left: 140px;
`;

export const PageTitle = styled.h1`
  margin: 40px 0 0 0;
  font-weight: bold;
  font-size: ${({ theme }) => theme.fontSize.heading.small};
  line-height: 28px;
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
  font-weight: 500;
  font-size: ${({ theme }) => theme.fontSize.heading.small};
  line-height: 28px;
  color: ${({ theme }) => theme.colors.text.secondary};
`;

export const SectionStyled = styled.section`
  margin-top: 78px;
`;

export const SectionTitle = styled.h2`
  margin: 0;
  font-weight: bold;
  font-size: ${({ theme }) => theme.fontSize.heading.large};
  line-height: 44px;
`;

export const TextContainer = styled.p`
  margin: 0 0 43px 0;
  font-weight: 500;
  font-size: ${({ theme }) => theme.fontSize.heading.regular};
  line-height: 44px;
`;