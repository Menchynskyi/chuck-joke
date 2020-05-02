import styled from 'styled-components';

export const Button = styled.button`
  display: flex;
  padding: 2px;
  background-color: transparent;
  border: none;
  transition: all 0.2s;

  &:hover {
    cursor: pointer;
    opacity: ${({ theme }) => theme.hoverOpacity};
  }

  &:focus {
    outline: none;
  }
`;
