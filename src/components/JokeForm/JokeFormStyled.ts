import styled from 'styled-components';

export const FormStyled = styled.form`
  margin-bottom: 40px;
`;

export const LabelStyled = styled.label`
  display: block;
  margin-bottom: 10px;
  font-size: ${({ theme }) => theme.fontSize.text.extraLarge};
  color: ${({ theme }) => theme.colors.text.primary};
  line-height: 26px;

  &:hover {
    cursor: pointer;
  }
`;

export const SubmitButton = styled.button`
  padding: 10px 40px;
  background: ${({ theme }) =>
    `linear-gradient(92.01deg, ${theme.colors.blue.primary} 0%, ${theme.colors.blue.secondary} 100%)`};
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius.regular};
  font-weight: bold;
  font-size: ${({ theme }) => theme.fontSize.text.large};
  color: ${({ theme }) => theme.colors.background.primary};
  line-height: 22px;
  transition: all 0.2s;

  &:hover {
    cursor: pointer;
    opacity: ${({ theme }) => theme.hoverOpacity};
  }

  &:focus {
    outline: none;
  }
`;

export const SearchInput = styled.input`
  display: block;
  width: 100%;
  margin: 10px 0 20px 0;
  padding: 10px 15px;
  font-size: ${({ theme }) => theme.fontSize.text.large};
  color: ${({ theme }) => theme.colors.text.primary};
  border: 2px solid ${({ theme }) => theme.colors.text.primary};
  border-radius: ${({ theme }) => theme.borderRadius.regular};

  &::placeholder {
    color: ${({ theme }) => theme.colors.text.secondary};
  }

  &:focus {
    outline: none;
  }
`;
