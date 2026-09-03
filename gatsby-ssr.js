import React from 'react';
import Layout from './src/components/Layout';

// Browsers would find /favicon.ico on their own, but declaring it (plus the
// SVG, which modern browsers prefer) makes the icon explicit and lets a
// changed file get picked up instead of a stale cached one.
export const onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    <link key="icon-svg" rel="icon" type="image/svg+xml" href="/favicon.svg" />,
    <link key="icon-ico" rel="icon" sizes="any" href="/favicon.ico" />,
  ]);
};

// Same wrapper on the server, so the shell is in the static HTML rather than
// only appearing after hydration.
export const wrapPageElement = ({ element, props }) => (
  <Layout {...props}>{element}</Layout>
);
