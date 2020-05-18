import React from 'react';
import { shallow } from 'enzyme';
import { Message } from '.';

describe('Message component', () => {
  it('should render without crashing', () => {
    const wrapper = shallow(<Message />);
    expect(wrapper.exists()).toBe(true);
  });
});
