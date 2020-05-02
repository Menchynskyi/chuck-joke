import React from 'react';
import { ReactComponent as Heart } from './heart.svg';
import { ReactComponent as HeartFilled } from './heart-filled.svg';

type LikeProps = {
  isLiked?: boolean;
};

export const Like: React.FC<LikeProps> = ({ isLiked }) => {
  const icon = isLiked ? <HeartFilled /> : <Heart />;
  return icon;
};

Like.defaultProps = {
  isLiked: false,
};
