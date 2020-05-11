import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      background: {
        primary: string;
        secondary: string;
        transparent: string;
      };
      text: {
        primary: string;
        secondary: string;
      };
      red: string;
      blue: {
        primary: string;
        secondary: string;
      };
    };
    fontFamily: string;
    fontSize: {
      heading: {
        small: string;
        regular: string;
        large: string;
      };
      text: {
        extraSmall: string;
        small: string;
        regular: string;
        large: string;
        extraLarge: string;
      };
    };
    hoverOpacity: string;
    boxShadow: {
      main: string;
      focus: string;
    };
    borderRadius: {
      small: string;
      regular: string;
      large: string;
    };
    device: {
      mobileS: string;
      mobile: string;
      tablet: string;
      tabletOnly: string;
      laptop: string;
      laptopOnly: string;
      desktop: string;
    };
    letterSpacing: string;
  }
}
