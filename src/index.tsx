import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import { Theme } from './theme';
import { JokesProvider } from './contexts';

ReactDOM.render(
  <React.StrictMode>
    <Theme>
      <JokesProvider>
        <App />
      </JokesProvider>
    </Theme>
  </React.StrictMode>,
  document.getElementById('root')
);
