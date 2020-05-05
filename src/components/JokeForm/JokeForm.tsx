import React, { useState, useEffect } from 'react';
import {
  LabelStyled,
  SubmitButton,
  FormStyled,
  SearchInput,
  CategoriesList,
  CategoriesListItem,
  CategoryButton,
  RadioInput,
} from './JokeFormStyled';
import { useJokesDispatch, useJokesState } from '../../contexts';
import {
  fetchCategories,
  getJokeByCategory,
  getRandomJoke,
  getJokeBySearch,
} from '../../api';

type JokeSearchType = 'random' | 'category' | 'search';

type FormState = {
  type: JokeSearchType;
  category: string;
  search: string;
};

export const JokeForm = () => {
  const [formState, setFormState] = useState<FormState>({
    type: 'random',
    category: '',
    search: '',
  });

  const dispatch = useJokesDispatch();
  const { categories, favouriteList } = useJokesState();

  useEffect(() => {
    fetchCategories(dispatch);
  }, [dispatch]);

  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setFormState((prev) => ({ ...prev, type: value as JokeSearchType }));
  };
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    switch (formState.type) {
      case 'random': {
        getRandomJoke(dispatch, favouriteList);
        break;
      }
      case 'category': {
        getJokeByCategory(dispatch, favouriteList, formState.category);
        break;
      }
      case 'search': {
        if (formState.search.length < 3) return;
        getJokeBySearch(dispatch, favouriteList, formState.search);
        break;
      }
      default: {
        throw new Error('Something went wrong');
      }
    }
  };

  const isRandom = formState.type === 'random';
  const isByCategory = formState.type === 'category';
  const isBySearch = formState.type === 'search';

  const renderCategories = (categoriesArray: string[]) => {
    return categoriesArray.map((category) => {
      const isActive = category === formState.category;
      const handleClick = () => {
        setFormState((prev) => ({ ...prev, category }));
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

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setFormState((prev) => ({ ...prev, search: value }));
  };

  const labelText =
    formState.type === 'category' && !formState.category
      ? 'Choose category'
      : 'Search is required';

  const isDisabled =
    (formState.type === 'category' && !formState.category) ||
    (formState.type === 'search' && !formState.search);

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
        <CategoriesList>{renderCategories(categories)}</CategoriesList>
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
        <SearchInput
          value={formState.search}
          onChange={handleSearchChange}
          placeholder="Free text search..."
        />
      )}
      <SubmitButton disabled={isDisabled} type="submit" label={labelText}>
        Get a joke
      </SubmitButton>
    </FormStyled>
  );
};
