import React from 'react';
import { shallow } from 'enzyme';
import { FavouriteList } from '.';
import { JokesProvider } from '../../contexts';

describe('FavouriteList component', () => {
  it('should renders without crashing', () => {
    const wrapper = shallow(
      <JokesProvider>
        <FavouriteList />
      </JokesProvider>
    );
    expect(wrapper.exists()).toBe(true);
  });
});
