import styled from 'styled-components';

type JokeCardStyledProps = { isLarge?: boolean };

export const JokeContainer = styled.div<JokeCardStyledProps>`
  display: flex;
  padding: ${({ isLarge }) => (isLarge ? '40px' : '20px')};
  background-color: ${({ theme, isLarge }) =>
    isLarge
      ? theme.colors.background.secondary
      : theme.colors.background.primary};
  box-shadow: ${({ theme, isLarge }) => !isLarge && theme.boxShadow};
  font-size: ${({ theme, isLarge }) =>
    isLarge ? theme.fontSize.text.extraLarge : theme.fontSize.text.regular};
  color: ${({ theme }) => theme.colors.text.primary};
  border-radius: ${({ theme, isLarge }) =>
    isLarge ? theme.borderRadius.large : theme.borderRadius.regular};
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
  background-color: ${({ theme, isLarge }) =>
    isLarge
      ? theme.colors.background.primary
      : theme.colors.background.secondary};
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
  line-height: 14px;
  font-weight: 500;
`;

export const JokeLink = styled.a`
  color: ${({ theme }) => theme.colors.blue};

  & > svg {
    margin-left: 5px;
  }
`;

export const InfoContainer = styled.div<JokeCardStyledProps>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: ${({ isLarge }) => (isLarge ? '23px' : '20px')};
`;

export const TextContainer = styled.div`
  padding-top: 5px;
  line-height: 26px;
`;

export const TimeContainer = styled.div`
  color: ${({ theme }) => theme.colors.text.secondary};
  font-size: ${({ theme }) => theme.fontSize.text.extraSmall};

  & > span:last-of-type {
    font-weight: 500;
  }
`;

export const Category = styled.div`
  padding: 6px 20px;
  background-color: ${({ theme }) => theme.colors.background.primary};
  border-radius: ${({ theme }) => theme.borderRadius.small};
  font-size: ${({ theme }) => theme.fontSize.text.extraSmall};
  text-transform: uppercase;
  letter-spacing: ${({ theme }) => theme.letterSpacing};
  font-weight: 500;
`;
