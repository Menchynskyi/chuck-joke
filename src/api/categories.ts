import axios from 'axios';
import { Action } from '../contexts';

export const fetchCategories = async (dispatch: React.Dispatch<Action>) => {
  try {
    const { data } = await axios.get(
      'https://api.chucknorris.io/jokes/categories'
    );
    dispatch({ type: 'fetchCategories', payload: data });
  } catch (error) {
    throw new Error(error.message);
  }
};
