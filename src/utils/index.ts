import { ApiJoke, Joke } from '../types';

export const calculateDateDiff = (currentDate: number, lastUpdate: string) => {
  const lastUpdateDate = Date.parse(lastUpdate.replace(/\s/, 'T'));
  const difference = Math.floor(
    (currentDate - lastUpdateDate) / (1000 * 60 * 60)
  );
  return difference;
};

export const transformJoke = (
  apiJoke: ApiJoke,
  favouriteList?: Joke[]
): Joke => {
  const updateTime = calculateDateDiff(Date.now(), apiJoke.updated_at);
  const isLiked = favouriteList
    ? favouriteList.some(({ id }) => id === apiJoke.id)
    : true;
  return {
    id: apiJoke.id,
    text: apiJoke.value,
    url: apiJoke.url,
    category: apiJoke.categories[0],
    updateTime,
    isLiked,
  };
};
