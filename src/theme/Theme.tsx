import React from 'react';
import { ThemeProvider } from 'styled-components';
import { lightTheme } from './lightTheme';

export const Theme: React.FC = ({ children }) => {
  return <ThemeProvider theme={lightTheme}>{children}</ThemeProvider>;
};
