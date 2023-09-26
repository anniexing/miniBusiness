import * as React from 'react';
import {createRoot} from 'react-dom/client';
import App from './App';

const rootDiv = document.getElementById('container');
const root = createRoot(rootDiv);
root.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
  );
