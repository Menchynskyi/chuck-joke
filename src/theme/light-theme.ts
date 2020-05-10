import { DefaultTheme } from 'styled-components';
import { size } from './breakpoints';

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
    blue: {
      primary: '#8EA7FF',
      secondary: '#7291FF',
    },
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
  boxShadow: {
    main: '0px 4px 6px rgba(0, 0, 0, 0.1)',
    focus: '0px 0px 2px 2px #8EA7FF',
  },
  borderRadius: {
    small: '6px',
    regular: '10px',
    large: '20px',
  },
  device: {
    mobileS: `only screen and (max-width: ${size.mobile - 1}px)`,
    mobile: `only screen and (max-width: ${size.tablet - 1}px)`,
    tablet: `only screen and (min-width: ${size.tablet}px)`,
    tabletOnly: `only screen and (min-width: ${
      size.tablet
    }px) and (max-width: ${size.laptop - 1}px)`,
    laptop: `only screen and (min-width: ${size.laptop}px)`,
    laptopOnly: `only screen and (min-width: ${
      size.laptop
    }px) and (max-width: ${size.desktop - 1}px)`,
    desktop: `only screen and (min-width: ${size.desktop}px)`,
  },
  hoverOpacity: '0.85',
  letterSpacing: '2px',
};
