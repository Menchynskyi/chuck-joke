import axios from 'axios';
import { Joke } from '../types';
import { Action } from '../contexts';
import { calculateDateDiff } from '../utils';

export const getRandomJoke = async (dispatch: React.Dispatch<Action>) => {
  dispatch({ type: 'startFetching' });
  try {
    const { data } = await axios.get('https://api.chucknorris.io/jokes/random');
    const lastUpdateTime = calculateDateDiff(Date.now(), data.updated_at);
    const jokeData: Joke = {
      id: data.id,
      url: data.url,
      text: data.value,
      updateTime: lastUpdateTime,
      category: data.categories[0],
    };
    dispatch({ type: 'getRandomJoke', payload: jokeData });
  } catch (error) {
    dispatch({ type: 'errorFetching' });
  }
};
