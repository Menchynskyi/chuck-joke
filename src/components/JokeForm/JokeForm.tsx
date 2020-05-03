import React, { useState } from 'react';
import {
  LabelStyled,
  SubmitButton,
  FormStyled,
  SearchInput,
} from './JokeFormStyled';

export const JokeForm = () => {
  const [radioState, setRadioState] = useState('random');
  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRadioState(event.target.value);
  };
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };
  return (
    <FormStyled onSubmit={handleSubmit}>
      <LabelStyled htmlFor="random">
        <input
          id="random"
          type="radio"
          name="random"
          value="random"
          checked={radioState === 'random'}
          onChange={handleRadioChange}
        />
        Random
      </LabelStyled>
      <LabelStyled htmlFor="category">
        <input
          id="category"
          type="radio"
          name="category"
          value="category"
          checked={radioState === 'category'}
          onChange={handleRadioChange}
        />
        From categories
      </LabelStyled>
      <LabelStyled htmlFor="search">
        <input
          id="search"
          type="radio"
          name="search"
          value="search"
          checked={radioState === 'search'}
          onChange={handleRadioChange}
        />
        Search
      </LabelStyled>
      {radioState === 'search' && (
        <SearchInput placeholder="Free text search..." />
      )}
      <SubmitButton type="submit">Get a joke</SubmitButton>
    </FormStyled>
  );
};
