import styled, { ThemedStyledProps, DefaultTheme } from 'styled-components';
import { MessageProps } from './Message';

type MessageStyledProps = ThemedStyledProps<
  React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > &
    MessageProps,
  DefaultTheme
>;

const setColor = ({ theme, color }: MessageStyledProps) => {
  switch (color) {
    case 'primary': {
      return theme.colors.text.primary;
    }
    case 'secondary': {
      return theme.colors.text.secondary;
    }
    case 'danger': {
      return theme.colors.red;
    }
    default: {
      return theme.colors.text.primary;
    }
  }
};

const setFontSize = ({ theme, size }: MessageStyledProps) => {
  switch (size) {
    case 'small': {
      return theme.fontSize.text.regular;
    }
    case 'regular': {
      return theme.fontSize.text.extraLarge;
    }
    case 'large': {
      return theme.fontSize.heading.regular;
    }
    default: {
      return theme.fontSize.text.extraLarge;
    }
  }
};

export const MessageStyled = styled.div<MessageProps>`
  text-align: center;
  color: ${setColor};
  font-size: ${setFontSize};
`;
