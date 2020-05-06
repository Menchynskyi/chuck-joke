/* eslint-disable @typescript-eslint/no-explicit-any */
import { ApiJoke, Joke } from '../types';

export const calculateDateDiff = (currentDate: number, lastUpdate: string) => {
  const lastUpdateDate: any = new Date(lastUpdate);
  const difference = Math.floor(
    (currentDate - lastUpdateDate) / (1000 * 60 * 60)
  );
  return difference;
};

export const transformJoke = (apiJoke: ApiJoke, isLiked: boolean): Joke => {
  const updateTime = calculateDateDiff(Date.now(), apiJoke.updated_at);
  return {
    id: apiJoke.id,
    text: apiJoke.value,
    url: apiJoke.url,
    category: apiJoke.categories[0],
    updateTime,
    isLiked,
  };
};
