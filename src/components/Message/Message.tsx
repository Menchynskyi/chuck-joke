import React from 'react';
import { MessageStyled } from './MessageStyled';

export type MessageProps = {
  color?: 'primary' | 'secondary' | 'danger';
  size?: 'small' | 'regular' | 'large';
};

export const Message: React.FC<MessageProps> = ({ color, size, children }) => {
  return (
    <MessageStyled color={color} size={size}>
      {children}
    </MessageStyled>
  );
};

Message.defaultProps = {
  color: 'primary',
  size: 'regular',
};
