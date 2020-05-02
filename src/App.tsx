import React from 'react';
import { JokesProvider } from './contexts';
import { JokeList } from './components';

export const App: React.FC = () => {
  return (
    <JokesProvider>
      <div>Chuck Joke App</div>
      <JokeList />
    </JokesProvider>
  );
};
