import React from 'react';
import Layout from './src/components/Layout';

// Same wrapper on the server, so the shell is in the static HTML rather than
// only appearing after hydration.
export const wrapPageElement = ({ element, props }) => (
  <Layout {...props}>{element}</Layout>
);
