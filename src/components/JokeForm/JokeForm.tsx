import React from 'react';
import {
  LabelStyled,
  SubmitButton,
  FormStyled,
  SearchInput,
  CategoriesList,
  CategoriesListItem,
  CategoryButton,
  RadioInput,
  ErrorMessageContainer,
} from './JokeFormStyled';
import { Message } from '../Message';
import { useJokeForm } from './hooks';

export const JokeForm = () => {
  const {
    formState,
    errorMessage,
    handleSubmit,
    handleRadioChange,
    handleCategoryChange,
    handleSearchChange,
    activeRadio,
    tooltipMessage,
    isDisabled,
  } = useJokeForm();

  const { isRandom, isByCategory, isBySearch } = activeRadio;

  const renderCategories = (categoriesArray: string[]) => {
    return categoriesArray.map((category) => {
      const isActive = category === formState.category;
      const handleClick = () => {
        handleCategoryChange(category);
      };
      return (
        <CategoriesListItem key={category}>
          <CategoryButton
            type="button"
            onClick={handleClick}
            isActive={isActive}
          >
            {category}
          </CategoryButton>
        </CategoriesListItem>
      );
    });
  };

  return (
    <FormStyled onSubmit={handleSubmit}>
      <LabelStyled isChecked={isRandom} htmlFor="random">
        <RadioInput
          id="random"
          type="radio"
          name="random"
          value="random"
          checked={isRandom}
          onChange={handleRadioChange}
        />
        Random
      </LabelStyled>
      <LabelStyled isChecked={isByCategory} htmlFor="category">
        <RadioInput
          id="category"
          type="radio"
          name="category"
          value="category"
          checked={isByCategory}
          onChange={handleRadioChange}
        />
        From categories
      </LabelStyled>
      {isByCategory && (
        <CategoriesList>
          {renderCategories(formState.categories)}
        </CategoriesList>
      )}
      <LabelStyled isChecked={isBySearch} htmlFor="search">
        <RadioInput
          id="search"
          type="radio"
          name="search"
          value="search"
          checked={isBySearch}
          onChange={handleRadioChange}
        />
        Search
      </LabelStyled>
      {isBySearch && (
        <>
          <SearchInput
            isError={!!errorMessage}
            value={formState.search}
            onChange={handleSearchChange}
            placeholder="Free text search..."
          />
          <ErrorMessageContainer>
            <Message size="small" color="danger">
              {errorMessage}
            </Message>
          </ErrorMessageContainer>
        </>
      )}
      <SubmitButton disabled={isDisabled} type="submit" label={tooltipMessage}>
        Get a joke
      </SubmitButton>
    </FormStyled>
  );
};
