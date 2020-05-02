import React from 'react';
import { LikeButton } from './components';

export const App: React.FC = () => {
  return (
    <div>
      Chuck Joke App
      <LikeButton
        onToggle={() => {
          console.log('test');
        }}
      />
    </div>
  );
};
