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
    };
    fontFamily: string;
    fontSize: {
      text: {
        regular: string;
      };
    };
  }
}
