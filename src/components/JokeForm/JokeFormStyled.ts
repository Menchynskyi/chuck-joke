import styled from 'styled-components';

type CategoryButtonProps = { isActive: boolean };
type SubmitButtonProps = { label: string };
type SearchInputProps = { isError: boolean };
type LabelStyledProps = { isChecked: boolean };

export const FormStyled = styled.form`
  margin: 0 0 40px 0;
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

export const LabelStyled = styled.label<LabelStyledProps>`
  position: relative;
  display: block;
  padding-left: 35px;
  margin-bottom: 10px;
  font-size: ${({ theme }) => theme.fontSize.text.extraLarge};
  color: ${({ theme }) => theme.colors.text.primary};
  line-height: 1.45em;
  transition: all 0.2s ease;

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

  &:focus-within {
    &:before {
      box-shadow: ${({ theme }) => theme.boxShadow.focus};
    }
  }
`;

export const SubmitButton = styled.button<SubmitButtonProps>`
  position: relative;
  margin-top: 10px;
  padding: 10px 40px;
  background-image: ${({ theme, disabled }) =>
    `linear-gradient(92.01deg, ${
      disabled ? theme.colors.text.secondary : theme.colors.blue.primary
    } 0%, ${
      disabled ? theme.colors.text.secondary : theme.colors.blue.secondary
    } 100%)`};
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius.regular};
  font-weight: bold;
  font-size: ${({ theme }) => theme.fontSize.text.large};
  color: ${({ theme }) => theme.colors.background.primary};
  line-height: 1.375em;
  transition: all 0.2s;
  user-select: none;

  &:hover {
    cursor: ${({ disabled }) => !disabled && 'pointer'};
    opacity: ${({ theme, disabled }) => !disabled && theme.hoverOpacity};
  }

  &[disabled] {
    &:hover:before,
    &:hover:after {
      position: absolute;
      opacity: ${({ theme }) => theme.hoverOpacity};
    }

    &:hover:before {
      top: calc(100% + 1px);
      left: calc(50% - 5px);
      width: 0;
      height: 0;
      border-style: solid;
      border-width: 0 5px 5px 5px;
      border-color: ${({ theme }) =>
        `transparent transparent ${theme.colors.text.primary} transparent`};
      content: '';
    }

    &:hover:after {
      top: calc(100% + 6px);
      left: 15px;
      width: calc(100% - 40px);
      padding: 2.5px;
      background-color: ${({ theme }) => theme.colors.text.primary};
      border-radius: ${({ theme }) => theme.borderRadius.small};
      color: ${({ theme }) => theme.colors.background.primary};
      font-size: ${({ theme }) => theme.fontSize.text.small};
      font-weight: normal;
      content: attr(label);
    }
  }

  &:focus {
    outline: none;
    box-shadow: inset 0px 0px 0px 2px rgba(0, 0, 0, 0.15);
  }
`;

export const SearchInput = styled.input<SearchInputProps>`
  width: 100%;
  margin: 17px 0 0 0;
  padding: 10px 15px;
  border: 2px solid
    ${({ theme, isError }) =>
      isError ? theme.colors.red : theme.colors.text.primary};
  border-radius: ${({ theme }) => theme.borderRadius.regular};
  color: ${({ theme }) => theme.colors.text.primary};
  font-size: ${({ theme }) => theme.fontSize.text.large};
  transition: all 0.2s;

  &::placeholder {
    color: ${({ theme }) => theme.colors.text.secondary};
  }

  &:focus {
    outline: none;
    box-shadow: ${({ theme }) => theme.boxShadow.focus};
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

export const CategoryButton = styled.button<CategoryButtonProps>`
  padding: 6px 15px;
  background-color: ${({ theme, isActive }) =>
    isActive
      ? theme.colors.background.secondary
      : theme.colors.background.primary};
  border: 2px solid ${({ theme }) => theme.colors.background.secondary};
  border-radius: ${({ theme }) => theme.borderRadius.small};
  color: ${({ theme, isActive }) =>
    isActive ? theme.colors.text.primary : theme.colors.text.secondary};
  font-weight: 500;
  font-size: ${({ theme }) => theme.fontSize.text.small};
  text-transform: uppercase;
  line-height: 1.33em;
  letter-spacing: ${({ theme }) => theme.letterSpacing};
  user-select: none;

  &:hover {
    cursor: pointer;
    opacity: ${({ theme }) => theme.hoverOpacity};
  }

  &:focus {
    outline: none;
    box-shadow: ${({ theme }) => theme.boxShadow.focus};
  }
`;

export const ErrorMessageContainer = styled.div`
  display: flex;
  height: 1em;
  margin: 3px 0 0 0;
  padding-left: 2px;
  font-size: ${({ theme }) => theme.fontSize.text.regular};
`;
