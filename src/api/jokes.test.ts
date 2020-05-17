import axios from 'axios';
import { getJokeById } from '.';
import { apiJoke, categoriesList } from '../__mocks__';
import { fetchCategories } from './jokes';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('Get joke by id from api', () => {
  const response = { data: apiJoke };
  const { id } = apiJoke;

  it('should return data from api', async () => {
    mockedAxios.get.mockReturnValue(response as any);

    return getJokeById(id).then((res) => {
      expect(res).toEqual(apiJoke);
    });
  });
});

describe('Get categories from api', () => {
  const response = { data: categoriesList };

  it('should return data from api', async () => {
    mockedAxios.get.mockReturnValue(response as any);

    return fetchCategories().then((res) => {
      expect(res).toBe(categoriesList);
    });
  });
});
