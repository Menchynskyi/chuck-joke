import { ApiJoke, Joke } from '../types';

export const calculateDateDiff = (currentDate: Date, lastUpdate: string) => {
  const lastUpdateDate = new Date(`${lastUpdate.replace(/\s/, 'T')}Z`);
  const convertedCurrentDate = new Date(currentDate.toISOString());
  const difference = Math.floor(
    (Number(convertedCurrentDate) - Number(lastUpdateDate)) / (1000 * 60 * 60)
  );

  return Number.isNaN(difference) ? null : difference;
};

export const transformJoke = (
  apiJoke: ApiJoke,
  favouriteList?: Joke[]
): Joke => {
  const updateTime = calculateDateDiff(new Date(), apiJoke.updated_at);
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
