import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

document.addEventListener('DOMContentLoaded', () => {
  const root: HTMLElement | null = document.getElementById('root');

  ReactDOM.render(<App />, root);
});
