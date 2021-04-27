import React from 'react';
import { Layout } from './src/components';
import './src/styles/scroll.css';

const transitionDelay = 100;

export const shouldUpdateScroll = ({ routerProps: { location }, getSavedScrollPosition }) => {
  if (location.action === 'PUSH') {
    window.setTimeout(() => window.scrollTo(0, 0), transitionDelay);
    document.getElementById('___container').scrollIntoView();
  } else {
    window.setTimeout(() => window.scrollTo(0, 0), transitionDelay);
    document.getElementById('___container').scrollIntoView();
  }
  return false;
};

export const onClientEntry = () => {
  // IntersectionObserver polyfill for gatsby-background-image (Safari, IE)
  if (!(`IntersectionObserver` in window)) {
    return import(`intersection-observer`);
  }
};

export const wrapPageElement = ({ element, props }) => {
  return <Layout {...props}>{element}</Layout>;
};
