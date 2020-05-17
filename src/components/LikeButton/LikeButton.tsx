import React, { useState } from 'react';
import { Button } from './LikeButtonStyled';
import { Heart, HeartFilled } from '../../assets';

type LikeButtonProps = {
  onToggle: () => void;
  isLiked: boolean;
};

export type Animation = 'heartBeat' | 'heartShake' | '';

export const LikeButton: React.FC<LikeButtonProps> = ({
  onToggle,
  isLiked,
}) => {
  const [animation, setAnimation] = useState<Animation>('');

  const handleClick = () => {
    const animationType = isLiked ? 'heartShake' : 'heartBeat';
    setAnimation(animationType);
    onToggle();
  };

  const handleAnimationEnd = () => {
    setAnimation('');
  };

  const likeIcon = isLiked ? <HeartFilled /> : <Heart />;

  return (
    <Button
      animation={animation}
      onAnimationEnd={handleAnimationEnd}
      type="button"
      onClick={handleClick}
    >
      {likeIcon}
    </Button>
  );
};
