import { useEffect } from 'react';
import { useJokesContext } from '../../../contexts';
import { updateFavouriteJokes } from '../../../api';

export const useFavouriteList = () => {
  const { dispatch, state } = useJokesContext();
  const { favouriteList } = state;

  useEffect(() => {
    if (favouriteList.length > 0) {
      updateFavouriteJokes(dispatch, favouriteList);
    }
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    localStorage.setItem('favouriteList', JSON.stringify(favouriteList));
  }, [favouriteList]);

  return favouriteList;
};
