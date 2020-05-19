import React from 'react';
import { shallow, mount } from 'enzyme';
import { FavouriteList } from '.';
import { Message } from '../Message';
import { JokesProvider } from '../../contexts';
import { Theme } from '../../theme';

describe('FavouriteList component', () => {
  it('should render without crashing', () => {
    const wrapper = shallow(
      <JokesProvider>
        <FavouriteList />
      </JokesProvider>
    );
    expect(wrapper.find(FavouriteList).exists()).toBe(true);
  });

  it('should render Message if favourite list is empty', () => {
    const wrapper = mount(
      <Theme>
        <JokesProvider>
          <FavouriteList />
        </JokesProvider>
      </Theme>
    );
    expect(wrapper.find(Message).exists()).toBe(true);
    expect(wrapper.find('ul').exists()).toBe(false);
  });
});
