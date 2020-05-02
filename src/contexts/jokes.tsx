import React, { createContext, useReducer, useContext } from 'react';
import { Joke } from '../types';

type State = {
  jokeList: Joke[] | null;
  isError: boolean;
  isLoading: boolean;
  isLoaded: boolean;
};

export type Action =
  | { type: 'getRandomJoke'; payload: Joke }
  | { type: 'startFetching' }
  | { type: 'errorFetching' };

type JokesContextState = {
  state: State;
  dispatch: React.Dispatch<Action>;
};

type JokesProviderProps = { children: React.ReactNode };

const initialState: State = {
  jokeList: null,
  isError: false,
  isLoaded: false,
  isLoading: false,
};

const jokesReducer = (state: State, action: Action) => {
  switch (action.type) {
    case 'getRandomJoke': {
      return {
        ...state,
        isLoaded: true,
        isLoading: false,
        isError: false,
        jokeList: [action.payload],
      };
    }
    case 'startFetching': {
      return {
        ...state,
        isLoading: true,
      };
    }
    case 'errorFetching': {
      return {
        ...state,
        isError: true,
      };
    }
    default: {
      return state;
    }
  }
};

const JokesContext = createContext<JokesContextState | undefined>(undefined);

export const JokesProvider = ({ children }: JokesProviderProps) => {
  const [state, dispatch] = useReducer(jokesReducer, initialState);
  return (
    <JokesContext.Provider value={{ state, dispatch }}>
      {children}
    </JokesContext.Provider>
  );
};

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
