import axios from 'axios';
import { Joke } from '../types';
import { Action } from '../contexts';
import { calculateDateDiff } from '../utils';

export const getRandomJoke = async (
  dispatch: React.Dispatch<Action>,
  favouriteList: Joke[]
) => {
  dispatch({ type: 'startFetching' });
  try {
    const { data } = await axios.get('https://api.chucknorris.io/jokes/random');
    const lastUpdateTime = calculateDateDiff(Date.now(), data.updated_at);
    const isLiked = favouriteList.some(({ id }) => id === data.id);
    const jokeData: Joke = {
      id: data.id,
      url: data.url,
      text: data.value,
      updateTime: lastUpdateTime,
      category: data.categories[0],
      isLiked,
    };
    dispatch({ type: 'getRandomJoke', payload: jokeData });
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
    const { data } = await axios.get(
      `https://api.chucknorris.io/jokes/random?category=${category}`
    );
    const lastUpdateTime = calculateDateDiff(Date.now(), data.updated_at);
    const isLiked = favouriteList.some(({ id }) => id === data.id);
    const jokeData: Joke = {
      id: data.id,
      url: data.url,
      text: data.value,
      updateTime: lastUpdateTime,
      category: data.categories[0],
      isLiked,
    };
    dispatch({ type: 'getRandomJoke', payload: jokeData });
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
  dispatch({ type: 'startFetching' });
  try {
    const { data } = await axios.get('https://api.chucknorris.io/jokes/random');
    const lastUpdateTime = calculateDateDiff(Date.now(), data.updated_at);
    const isLiked = favouriteList.some(({ id }) => id === data.id);
    const jokeData: Joke = {
      id: data.id,
      url: data.url,
      text: data.value,
      updateTime: lastUpdateTime,
      category: data.categories[0],
      isLiked,
    };
    dispatch({ type: 'getRandomJoke', payload: jokeData });
  } catch (error) {
    dispatch({ type: 'errorFetching' });
    throw new Error(error.message);
  }
};
