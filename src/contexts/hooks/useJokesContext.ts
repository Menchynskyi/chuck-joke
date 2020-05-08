import { useContext } from 'react';
import { JokesContext } from '..';

export const useJokesContext = () => {
  const context = useContext(JokesContext);
  if (context === undefined) {
    throw new Error('useJokesContext must be used within a JokesProvider');
  }
  return context;
};

export const useJokesState = () => {
  const context = useContext(JokesContext);
  if (context === undefined) {
    throw new Error('useJokesState must be used within a JokesProvider');
  }
  return context.state;
};

export const useJokesDispatch = () => {
  const context = useContext(JokesContext);
  if (context === undefined) {
    throw new Error('useJokesDispatch must be used within a JokesProvider');
  }
  return context.dispatch;
};
