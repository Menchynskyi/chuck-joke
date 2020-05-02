import React from 'react';
import { Like } from '../Like';
import { Button } from './LikeButtonStyled';

type LikeButton = {
  onToggle: () => void;
  isLiked: boolean;
};

export const LikeButton: React.FC<LikeButton> = ({ onToggle, isLiked }) => {
  const handleClick = () => {
    onToggle();
  };
  return (
    <Button type="button" onClick={handleClick}>
      <Like isLiked={isLiked} />
    </Button>
  );
};
