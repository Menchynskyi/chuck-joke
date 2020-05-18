import React from 'react';
import { shallow } from 'enzyme';
import { LikeButton } from '.';

describe('LikeButton component', () => {
  let mockHandleToggle: any;

  beforeEach(() => {
    mockHandleToggle = jest.fn();
  });

  it('should renders without crashing', () => {
    const wrapper = shallow(
      <LikeButton isLiked onToggle={mockHandleToggle}>
        Like
      </LikeButton>
    );
    expect(wrapper.exists()).toBe(true);
  });

  it('should call toggle function on click', () => {
    const wrapper = shallow(
      <LikeButton isLiked onToggle={mockHandleToggle}>
        Like
      </LikeButton>
    );
    wrapper.simulate('click');
    expect(mockHandleToggle.mock.calls.length).toBe(1);
  });
});
