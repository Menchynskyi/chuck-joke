import React from 'react';
import { Joke } from '../../types';
import {
  JokeContainer,
  IconContainer,
  InnerContainer,
  IDContainer,
  Category,
  LikeContainer,
  MessageIconContainer,
  TimeContainer,
  TextContainer,
  InfoContainer,
  JokeLink,
} from './JokeCardStyled';
import { LikeButton } from '../LikeButton';
import { ReactComponent as MessageIcon } from './message-icon.svg';
import { ReactComponent as LinkIcon } from './link-icon.svg';
import { useJokesDispatch } from '../../contexts';

type JokeCardProps = {
  joke: Joke;
  isFavourite?: boolean;
};

export const JokeCard: React.FC<JokeCardProps> = ({ isFavourite, joke }) => {
  const dispatch = useJokesDispatch();

  const handleToggle = () => {
    if (joke.isLiked) {
      dispatch({ type: 'dislikeJoke', payload: joke });
    } else {
      dispatch({ type: 'likeJoke', payload: joke });
    }
  };

  return (
    <JokeContainer isFavourite={isFavourite}>
      <MessageIconContainer>
        <IconContainer isFavourite={isFavourite}>
          <MessageIcon />
        </IconContainer>
      </MessageIconContainer>
      <InnerContainer>
        <LikeContainer>
          <LikeButton isLiked={joke.isLiked} onToggle={handleToggle} />
        </LikeContainer>
        <IDContainer>
          <span>ID: </span>
          <JokeLink href={joke.url}>
            {joke.id}
            <LinkIcon />
          </JokeLink>
        </IDContainer>
        <TextContainer>{joke.text}</TextContainer>
        <InfoContainer>
          <TimeContainer>
            <span>Last update: </span>
            <span>{`${joke.updateTime} hours ago`}</span>
          </TimeContainer>
          {!isFavourite && joke.category && (
            <Category>{joke.category}</Category>
          )}
        </InfoContainer>
      </InnerContainer>
    </JokeContainer>
  );
};

JokeCard.defaultProps = {
  isFavourite: false,
};
