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
    const joke = transformJoke(data, favouriteList);
    dispatch({ type: 'getRandomJoke', payload: joke });
  } catch (error) {
    dispatch({ type: 'errorFetching' });
    throw new Error(error);
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
    const joke = transformJoke(data, favouriteList);
    dispatch({ type: 'getRandomJoke', payload: joke });
  } catch (error) {
    dispatch({ type: 'errorFetching' });
    throw new Error(error);
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
      return transformJoke(joke, favouriteList);
    });
    const shortJokeList = jokeList.slice(0, 5);
    dispatch({ type: 'getJokesBySearch', payload: shortJokeList });
  } catch (error) {
    dispatch({ type: 'errorFetching' });
    throw new Error(error);
  }
};

export const getJokeById = async (jokeId: string) => {
  try {
    const { data } = await axios.get(`${apiUrl}${jokeId}`);
    return data;
  } catch (error) {
    throw new Error(error);
  }
};

export const updateFavouriteJokes = async (
  dispatch: React.Dispatch<Action>,
  favouriteList: Joke[]
) => {
  try {
    const data: ApiJoke[] = await Promise.all(
      favouriteList.map(({ id }) => getJokeById(id))
    );
    const updatedFavouriteList = data.map((joke) => transformJoke(joke));
    dispatch({ type: 'updateFavouriteJokes', payload: updatedFavouriteList });
  } catch (error) {
    throw new Error(error);
  }
};

export const fetchCategories = async () => {
  try {
    const { data } = await axios.get(`${apiUrl}categories`);
    return data as string[];
  } catch (error) {
    throw new Error(error);
  }
};
