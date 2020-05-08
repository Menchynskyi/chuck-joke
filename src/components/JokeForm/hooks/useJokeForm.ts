import { useState, useEffect } from 'react';
import { useJokesState, useJokesDispatch } from '../../../contexts';
import {
  getRandomJoke,
  getJokeByCategory,
  getJokeBySearch,
  fetchCategories,
} from '../../../api';

type JokeSearchType = 'random' | 'category' | 'search';

type FormState = {
  type: JokeSearchType;
  category: string;
  search: string;
};

export const useJokeForm = () => {
  const [formState, setFormState] = useState<FormState>({
    type: 'random',
    category: '',
    search: '',
  });
  const [errorMessage, setErrorMessage] = useState('');

  const dispatch = useJokesDispatch();
  const { categories, favouriteList } = useJokesState();

  useEffect(() => {
    fetchCategories(dispatch);
  }, [dispatch]);

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
        if (formState.search.length < 3) {
          setErrorMessage('At least 3 characters is required');
          return;
        }
        if (formState.search.length > 120) {
          setErrorMessage('Maximum search length is 120');
          return;
        }
        getJokeBySearch(dispatch, favouriteList, formState.search);
        break;
      }
      default: {
        throw new Error('Something went wrong');
      }
    }
  };

  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setFormState((prev) => ({ ...prev, type: value as JokeSearchType }));
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setFormState((prev) => ({ ...prev, search: value }));
    if (value.length > 2 && value.length < 120) {
      setErrorMessage('');
    }
  };

  const handleCategoryChange = (category: string) => {
    setFormState((prev) => ({ ...prev, category }));
  };

  const activeRadio = {
    isRandom: formState.type === 'random',
    isByCategory: formState.type === 'category',
    isBySearch: formState.type === 'search',
  };

  const tooltipMessage =
    formState.type === 'category' && !formState.category
      ? 'Choose category'
      : 'Search is required';

  const isDisabled =
    (formState.type === 'category' && !formState.category) ||
    (formState.type === 'search' && !formState.search);

  return {
    formState,
    errorMessage,
    handleSubmit,
    handleRadioChange,
    handleCategoryChange,
    handleSearchChange,
    activeRadio,
    tooltipMessage,
    isDisabled,
    categories,
  };
};
