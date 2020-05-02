import React, { useState } from 'react';
import { Like } from '../Like';
import { Button } from './LikeButtonStyled';

type LikeButton = {
  onToggle: () => void;
};

export const LikeButton: React.FC<LikeButton> = ({ onToggle }) => {
  const [isLiked, setIsLiked] = useState(false);
  const handleClick = () => {
    setIsLiked((prev) => !prev);
    onToggle();
  };
  return (
    <Button type="button" onClick={handleClick}>
      <Like isLiked={isLiked} />
    </Button>
  );
};
