import React, { createContext, useReducer } from 'react';
import { Joke } from '../types';

type State = {
  jokeList: Joke[];
  favouriteList: Joke[];
  isError: boolean;
  isLoading: boolean;
  isLoaded: boolean;
};

export type Action =
  | { type: 'getRandomJoke'; payload: Joke }
  | { type: 'getJokesBySearch'; payload: Joke[] }
  | { type: 'startFetching' }
  | { type: 'errorFetching' }
  | { type: 'likeJoke'; payload: Joke }
  | { type: 'dislikeJoke'; payload: Joke };

type JokesContextState = {
  state: State;
  dispatch: React.Dispatch<Action>;
};

type JokesProviderProps = { children: React.ReactNode };

const initialState: State = {
  jokeList: [],
  favouriteList: JSON.parse(localStorage.getItem('favouriteList') || '[]'),
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
    case 'getJokesBySearch': {
      return {
        ...state,
        isLoaded: true,
        isLoading: false,
        isError: false,
        jokeList: action.payload,
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
    case 'likeJoke': {
      const likedJoke = { ...action.payload, isLiked: true };
      const jokeId = state.jokeList.findIndex(
        ({ id }) => id === action.payload.id
      );
      const jokeList = [
        ...state.jokeList.slice(0, jokeId),
        likedJoke,
        ...state.jokeList.slice(jokeId + 1),
      ];
      return {
        ...state,
        jokeList,
        favouriteList: [likedJoke, ...state.favouriteList],
      };
    }
    case 'dislikeJoke': {
      const dislikedJoke = { ...action.payload, isLiked: false };
      const jokeId = state.jokeList.findIndex(
        ({ id }) => id === action.payload.id
      );
      const jokeList = [
        ...state.jokeList.slice(0, jokeId),
        dislikedJoke,
        ...state.jokeList.slice(jokeId + 1),
      ];
      const favouriteList = state.favouriteList.filter(
        ({ id }) => id !== action.payload.id
      );
      return {
        ...state,
        favouriteList,
        jokeList: jokeId === -1 ? state.jokeList : jokeList,
      };
    }
    default: {
      return state;
    }
  }
};

export const JokesContext = createContext<JokesContextState | undefined>(
  undefined
);

export const JokesProvider = ({ children }: JokesProviderProps) => {
  const [state, dispatch] = useReducer(jokesReducer, initialState);
  return (
    <JokesContext.Provider value={{ state, dispatch }}>
      {children}
    </JokesContext.Provider>
  );
};
