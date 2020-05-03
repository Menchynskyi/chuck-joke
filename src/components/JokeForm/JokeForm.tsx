import React, { useState, useEffect } from 'react';
import {
  LabelStyled,
  SubmitButton,
  FormStyled,
  SearchInput,
  CategoriesList,
  CategoriesListItem,
  CategoryButton,
} from './JokeFormStyled';
import { useJokesDispatch, useJokesState } from '../../contexts';
import {
  fetchCategories,
  getJokeByCategory,
  getRandomJoke,
  getJokeBySearch,
} from '../../api';

type JokeSearchType = 'random' | 'byCategory' | 'bySearch';

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
      case 'byCategory': {
        getJokeByCategory(dispatch, favouriteList, formState.category);
        break;
      }
      case 'bySearch': {
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
  const isByCategory = formState.type === 'byCategory';
  const isBySearch = formState.type === 'bySearch';

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

  return (
    <FormStyled onSubmit={handleSubmit}>
      <LabelStyled htmlFor="random">
        <input
          id="random"
          type="radio"
          name="random"
          value="random"
          checked={isRandom}
          onChange={handleRadioChange}
        />
        Random
      </LabelStyled>
      <LabelStyled htmlFor="byCategory">
        <input
          id="byCategory"
          type="radio"
          name="byCategory"
          value="byCategory"
          checked={isByCategory}
          onChange={handleRadioChange}
        />
        From categories
      </LabelStyled>
      {isByCategory && (
        <CategoriesList>{renderCategories(categories)}</CategoriesList>
      )}
      <LabelStyled htmlFor="bySearch">
        <input
          id="bySearch"
          type="radio"
          name="bySearch"
          value="bySearch"
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
      <SubmitButton type="submit">Get a joke</SubmitButton>
    </FormStyled>
  );
};
