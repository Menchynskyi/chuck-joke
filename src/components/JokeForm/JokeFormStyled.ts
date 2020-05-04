import styled from 'styled-components';

export const FormStyled = styled.form`
  margin-bottom: 40px;
`;

export const RadioInput = styled.input`
  position: absolute;
  height: 1px;
  width: 1px;
  margin: -1px;
  padding: 0;
  border: 0;
  clip: rect(0 0 0 0);
  overflow: hidden;
`;

export const LabelStyled = styled.label<{ isChecked: boolean }>`
  position: relative;
  display: block;
  padding-left: 35px;
  margin-bottom: 10px;
  font-size: ${({ theme }) => theme.fontSize.text.extraLarge};
  color: ${({ theme }) => theme.colors.text.primary};
  line-height: 26px;

  &:hover {
    cursor: pointer;
  }

  &:before,
  &:after {
    position: absolute;
    content: '';
    border-radius: 50%;
    transition: all 0.2s ease;
  }

  &:before {
    top: 3px;
    left: 0;
    width: 16px;
    height: 16px;
    border: 2px solid ${({ theme }) => theme.colors.text.primary};
  }

  &:after {
    top: 8px;
    left: 5px;
    width: 10px;
    height: 10px;
    background-color: ${({ theme, isChecked }) =>
      isChecked ? theme.colors.text.primary : 'transparent'};
  }
`;

export const SubmitButton = styled.button`
  margin-top: 10px;
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
  width: 100%;
  margin: 10px 0;
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

export const CategoriesList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin: 0 0 20px 0;
  padding: 0;
`;

export const CategoriesListItem = styled.li`
  list-style: none;
  margin: 10px 10px 0 0;
`;

export const CategoryButton = styled.button<{ isActive: boolean }>`
  padding: 6px 15px;
  background-color: ${({ theme, isActive }) =>
    isActive
      ? theme.colors.background.secondary
      : theme.colors.background.primary};
  color: ${({ theme, isActive }) =>
    isActive ? theme.colors.text.primary : theme.colors.text.secondary};
  font-weight: 500;
  font-size: ${({ theme }) => theme.fontSize.text.small};
  text-transform: uppercase;
  line-height: 16px;
  letter-spacing: ${({ theme }) => theme.letterSpacing};
  border: 2px solid ${({ theme }) => theme.colors.background.secondary};
  border-radius: ${({ theme }) => theme.borderRadius.small};

  &:hover {
    cursor: pointer;
    opacity: ${({ theme }) => theme.hoverOpacity};
  }

  &:focus {
    outline: none;
  }
`;
