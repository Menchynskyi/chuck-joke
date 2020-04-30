import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      background: {
        primary: string;
        secondary: string;
      };
      text: {
        primary: string;
        secondary: string;
      };
      red: string;
      blue: string;
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
    boxShadow: string;
    borderRadius: {
      small: string;
      regular: string;
      large: string;
    };
  }
}
