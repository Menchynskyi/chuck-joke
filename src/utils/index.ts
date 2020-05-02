/* eslint-disable @typescript-eslint/no-explicit-any */
export const calculateDateDiff = (currentDate: number, lastUpdate: string) => {
  const lastUpdateDate: any = new Date(lastUpdate);
  const difference = Math.floor(
    (currentDate - lastUpdateDate) / (1000 * 60 * 60)
  );
  return difference;
};
