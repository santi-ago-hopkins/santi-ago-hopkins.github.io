import "@fontsource/montserrat"
import "@fontsource/montserrat/400.css"; // Regular
import "@fontsource/montserrat/700.css"; // Bold
import '/src/fonts/fonts.css'
import React from 'react';
import App from './src/app.js';

export const wrapPageElement = ({ element, props }) => {
  return <App {...props}>{element}</App>;
};
