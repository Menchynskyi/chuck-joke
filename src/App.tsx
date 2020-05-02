import React from 'react';
import { JokesProvider } from './contexts';
import { JokeList, FavouriteList } from './components';

export const App: React.FC = () => {
  return (
    <JokesProvider>
      <div>Chuck Joke App</div>
      <JokeList />
      <FavouriteList />
    </JokesProvider>
  );
};
