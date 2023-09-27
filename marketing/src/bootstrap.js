import * as React from 'react';
import {createRoot} from 'react-dom/client';
import App from './App';

// Mount function to start up the app
const mount = (el) => {
  const root = createRoot(el);
  root.render(<React.StrictMode><App/></React.StrictMode>);
};

// If we are in development and in isolation,
// call mount immediately
if (process.env.NODE_ENV === 'development') {
  const devRoot = document.getElementById('_marketing-dev-root');

  if (devRoot) {
    mount(devRoot);
  }
}

// We are running through container
// and we should export the mount function
export { mount };
