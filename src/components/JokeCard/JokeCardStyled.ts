import styled from 'styled-components';

type JokeCardStyledProps = { isFavourite?: boolean };

export const JokeContainer = styled.div<JokeCardStyledProps>`
  display: flex;
  padding: ${({ isFavourite }) => (isFavourite ? '20px' : '40px')};
  background-color: ${({ theme, isFavourite }) =>
    isFavourite
      ? theme.colors.background.primary
      : theme.colors.background.secondary};
  box-shadow: ${({ theme, isFavourite }) => isFavourite && theme.boxShadow};
  border-radius: ${({ theme, isFavourite }) =>
    isFavourite ? theme.borderRadius.regular : theme.borderRadius.large};
  font-size: ${({ theme, isFavourite }) =>
    isFavourite ? theme.fontSize.text.regular : theme.fontSize.text.extraLarge};
  color: ${({ theme }) => theme.colors.text.primary};
`;

export const MessageIconContainer = styled.div`
  padding-top: 27px;
`;

export const IconContainer = styled.div<JokeCardStyledProps>`
  display: flex;
  width: 40px;
  height: 40px;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme, isFavourite }) =>
    isFavourite
      ? theme.colors.background.secondary
      : theme.colors.background.primary};
  border-radius: 50%;
`;

export const LikeContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const InnerContainer = styled.div`
  flex-grow: 1;
  display: flex;
  flex-flow: column wrap;
  padding-left: 20px;
`;

export const IDContainer = styled.div`
  padding-top: 10px;
  color: ${({ theme }) => theme.colors.text.secondary};
  font-size: ${({ theme }) => theme.fontSize.text.extraSmall};
  line-height: 1.4em;
  font-weight: 500;
`;

export const JokeLink = styled.a`
  color: ${({ theme }) => theme.colors.blue.primary};

  & > svg {
    margin-left: 5px;
  }

  &:hover {
    opacity: ${({ theme }) => theme.hoverOpacity};
  }
`;

export const InfoContainer = styled.div<JokeCardStyledProps>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: ${({ isFavourite }) => (isFavourite ? '20px' : '23px')};
`;

export const TextContainer = styled.div<JokeCardStyledProps>`
  padding-top: 5px;
  line-height: ${({ isFavourite }) => (isFavourite ? '1.43em' : '1.44em')};
  overflow-wrap: break-word;
  word-wrap: break-word;
  word-break: break-word;
  -ms-hyphens: auto;
  -moz-hyphens: auto;
  -webkit-hyphens: auto;
  hyphens: auto;
`;

export const TimeContainer = styled.div`
  color: ${({ theme }) => theme.colors.text.secondary};
  font-size: ${({ theme }) => theme.fontSize.text.extraSmall};
  line-height: 1.4em;

  & > span:last-of-type {
    font-weight: 500;
  }
`;

export const Category = styled.div`
  padding: 6px 20px;
  background-color: ${({ theme }) => theme.colors.background.primary};
  border-radius: ${({ theme }) => theme.borderRadius.small};
  font-size: ${({ theme }) => theme.fontSize.text.extraSmall};
  font-weight: 500;
  line-height: 1.4em;
  text-transform: uppercase;
  letter-spacing: ${({ theme }) => theme.letterSpacing};
`;
