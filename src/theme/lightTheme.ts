import { DefaultTheme } from 'styled-components';

export const lightTheme: DefaultTheme = {
  fontFamily: `'Roboto', 'Arial', sans-serif`,
  colors: {
    background: {
      primary: '#FFFFFF',
      secondary: '#F8F8F8',
    },
    text: {
      primary: '#333333',
      secondary: '#ABABAB',
    },
    red: '#FF6767',
    blue: '#8EA7FF',
  },
  fontSize: {
    heading: {
      small: '20px',
      regular: '24px',
      large: '32px',
    },
    text: {
      extraSmall: '10px',
      small: '12px',
      regular: '14px',
      large: '16px',
      extraLarge: '18px',
    },
  },
  boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
  borderRadius: {
    small: '6px',
    regular: '10px',
    large: '20px',
  },
};
