import axios from 'axios';
import { Joke, ApiJoke } from '../types';
import { Action } from '../contexts';
import { transformJoke } from '../utils';

const apiUrl = 'https://api.chucknorris.io/jokes/';

export const getRandomJoke = async (
  dispatch: React.Dispatch<Action>,
  favouriteList: Joke[]
) => {
  dispatch({ type: 'startFetching' });
  try {
    const { data } = await axios.get(`${apiUrl}random`);
    const isLiked = favouriteList.some(({ id }) => id === data.id);
    const joke = transformJoke(data, isLiked);
    dispatch({ type: 'getRandomJoke', payload: joke });
  } catch (error) {
    dispatch({ type: 'errorFetching' });
    throw new Error(error.message);
  }
};

export const getJokeByCategory = async (
  dispatch: React.Dispatch<Action>,
  favouriteList: Joke[],
  category: string
) => {
  if (!category) return;
  dispatch({ type: 'startFetching' });
  try {
    const { data } = await axios.get(`${apiUrl}random?category=${category}`);
    const isLiked = favouriteList.some(({ id }) => id === data.id);
    const joke = transformJoke(data, isLiked);
    dispatch({ type: 'getRandomJoke', payload: joke });
  } catch (error) {
    dispatch({ type: 'errorFetching' });
    throw new Error(error.message);
  }
};

export const getJokeBySearch = async (
  dispatch: React.Dispatch<Action>,
  favouriteList: Joke[],
  searchInput: string
) => {
  if (!searchInput) return;
  dispatch({ type: 'startFetching' });
  try {
    const { data } = await axios.get(`${apiUrl}search?query=${searchInput}`);
    const jokeList: Joke[] = data.result.map((joke: ApiJoke) => {
      const isLiked = favouriteList.some(({ id }) => id === joke.id);
      return transformJoke(joke, isLiked);
    });
    const shortJokeList = jokeList.slice(0, 5);
    dispatch({ type: 'getJokesBySearch', payload: shortJokeList });
  } catch (error) {
    dispatch({ type: 'errorFetching' });
    throw new Error(error.message);
  }
};

export const fetchCategories = async () => {
  try {
    const { data } = await axios.get(`${apiUrl}categories`);
    return data as string[];
  } catch (error) {
    throw new Error(error.message);
  }
};
