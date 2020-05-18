import React from 'react';
import { shallow } from 'enzyme';
import { LikeButton } from '.';
import { Heart, HeartFilled } from '../../assets';

describe('LikeButton component', () => {
  let mockHandleToggle: any;

  beforeEach(() => {
    mockHandleToggle = jest.fn();
  });

  it('should render without crashing', () => {
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

  it('should render filled heart svg if liked', () => {
    const wrapper = shallow(<LikeButton isLiked onToggle={mockHandleToggle} />);
    expect(wrapper.find(HeartFilled).exists()).toBe(true);
    expect(wrapper.find(Heart).exists()).toBe(false);
  });

  it('should render not filled heart svg if not liked', () => {
    const wrapper = shallow(
      <LikeButton isLiked={false} onToggle={mockHandleToggle} />
    );
    expect(wrapper.find(Heart).exists()).toBe(true);
    expect(wrapper.find(HeartFilled).exists()).toBe(false);
  });
});
