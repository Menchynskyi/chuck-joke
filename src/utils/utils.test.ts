import { transformJoke, calculateDateDiff } from '.';
import { apiJoke, transformedJoke, favouriteList } from '../__mocks__';

describe('Calculate date difference function:', () => {
  it('should return correct number of difference in hours', () => {
    const earlierDate = '2020-05-17 15:42:19.576875';
    const laterDate = new Date(
      'Sun May 17 2020 20:43:19 GMT+0300 (Eastern European Summer Time)'
    );

    expect(calculateDateDiff(laterDate, earlierDate)).toBe(2);
  });

  it('should return null if date format is not correct', () => {
    const earlierDate = '2020051715:42:19.576875';
    const laterDate = new Date(
      'Sun May 17 2020 20:43:19 GMT+0300 (Eastern European Summer Time)'
    );

    expect(calculateDateDiff(laterDate, earlierDate)).toBe(null);
    expect(calculateDateDiff(laterDate, earlierDate)).toBeFalsy();
  });
});

describe('Transform api joke object function:', () => {
  it('should return correctly transformed joke object', () => {
    const transformed = {
      ...transformJoke(apiJoke, favouriteList),
      updateTime: transformedJoke.updateTime,
    };

    expect(transformed).toEqual(transformedJoke);
  });

  it(`should return not liked joke if favourite list doesn't contain object with such id`, () => {
    const { isLiked } = transformJoke(apiJoke, favouriteList);
    expect(isLiked).toBe(false);
  });

  it('should return liked joke if favourite list contain object with such id', () => {
    const favList = [...favouriteList, transformedJoke];
    const { isLiked } = transformJoke(apiJoke, favList);
    expect(isLiked).toBe(true);
  });

  it('should return liked joke if favourite list not passed', () => {
    const { isLiked } = transformJoke(apiJoke);
    expect(isLiked).toBe(true);
  });
});
