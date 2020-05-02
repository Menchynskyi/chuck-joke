import React from 'react';
import { Button } from './LikeButtonStyled';
import { ReactComponent as Heart } from './heart.svg';
import { ReactComponent as HeartFilled } from './heart-filled.svg';

type LikeButton = {
  onToggle: () => void;
  isLiked: boolean;
};

export const LikeButton: React.FC<LikeButton> = ({ onToggle, isLiked }) => {
  const handleClick = () => {
    onToggle();
  };
  const likeIcon = isLiked ? <HeartFilled /> : <Heart />;
  return (
    <Button type="button" onClick={handleClick}>
      {likeIcon}
    </Button>
  );
};
