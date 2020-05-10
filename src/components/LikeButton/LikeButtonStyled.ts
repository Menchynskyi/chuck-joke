import styled, { keyframes, css } from 'styled-components';
import { Animation } from './LikeButton';

type ButtonProps = { animation: Animation };

const heartBeat = keyframes`
  0% {
    transform: scale(1)
  }
  25% {
    transform: scale(1.1)
  }
  40% {
    transform: scale(1)
  }
`;

const heartShake = keyframes`
  0% {
    transform: translateX(0);
  }

  6.5% {
    transform: translateX(-2px) rotateY(-3deg);
  }

  18.5% {
    transform: translateX(2px) rotateY(3deg);
  }

  31.5% {
    transform: translateX(-1px) rotateY(-2deg);
  }

  43.5% {
    transform: translateX(1px) rotateY(1deg);
  }

  50% {
    transform: translateX(0);
  }
`;

const heartBeatAnimation = css`
  animation: ${heartBeat} 0.8s ease-in-out;
`;

const hearthShakeAnimation = css`
  animation: ${heartShake} 0.8s ease-in-out;
`;

export const Button = styled.button<ButtonProps>`
  display: flex;
  padding: 2px;
  background-color: transparent;
  border: none;
  border-radius: 50%;
  transition: all 0.2s;

  &:hover {
    cursor: pointer;
    opacity: ${({ theme }) => theme.hoverOpacity};
  }

  &:focus {
    outline: none;
  }

  & svg {
    ${({ animation }) =>
      !!animation &&
      (animation === 'heartShake' ? hearthShakeAnimation : heartBeatAnimation)};
  }
`;
