import React, { useState } from 'react';

export const JokeForm = () => {
  const [radioState, setRadioState] = useState('random');
  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRadioState(event.target.value);
  };
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="random">
        <input
          id="random"
          type="radio"
          name="random"
          value="random"
          checked={radioState === 'random'}
          onChange={handleRadioChange}
        />
        Random
      </label>
      <label htmlFor="category">
        <input
          id="category"
          type="radio"
          name="category"
          value="category"
          checked={radioState === 'category'}
          onChange={handleRadioChange}
        />
        From categories
      </label>
      <label htmlFor="search">
        <input
          id="search"
          type="radio"
          name="search"
          value="search"
          checked={radioState === 'search'}
          onChange={handleRadioChange}
        />
        Search
      </label>
      <button type="submit">Get a joke</button>
    </form>
  );
};
