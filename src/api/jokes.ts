import axios from 'axios';
import { Joke } from '../types';
import { Action } from '../contexts';

export const getRandomJoke = async (dispatch: React.Dispatch<Action>) => {
  dispatch({ type: 'startFetching' });
  try {
    const { data } = await axios.get('https://api.chucknorris.io/jokes/random');
    const jokeData: Joke = {
      id: data.id,
      url: data.url,
      text: data.value,
      updateTime: data.updated_at,
      category: data.categories[0],
    };
    dispatch({ type: 'getRandomJoke', payload: jokeData });
  } catch (error) {
    dispatch({ type: 'errorFetching' });
  }
};
