import styled from 'styled-components';

export const MainContainer = styled.main`
  max-width: 680px;
  margin-right: 620px;
  margin-left: 140px;
`;

export const AsideContainer = styled.aside`
  position: fixed;
  top: 0;
  right: 0;
  height: 100%;
  width: 480px;
  padding: 40px;
  background-color: ${({ theme }) => theme.colors.background.secondary};
`;
