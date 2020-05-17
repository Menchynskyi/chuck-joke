import { transformJoke, calculateDateDiff } from '.';
import { apiJoke, transformedJoke, favouriteList } from '../__mocks__';

describe('Calculate date difference function:', () => {
  it('should return number of hours', () => {
    // expect(calculateDateDiff(Date.now(), '')).toBe()
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
