import React from 'react';

import './index.scss';
import { PageHeading, Paragraph } from '../styled-components';
export default () => (
  <section className='about-website' id='tech'>
    <div>
      <PageHeading>About the web stack</PageHeading>
      <Paragraph>
        This website is built on React JS and are{' '}
        <strong>equiupped with the in demand features.</strong>
      </Paragraph>

      <div className='tech-stack'>
        <h2 className='list-heading'>JavsScript</h2>
        <ul>
          <li> Fixed all the ESLint Errors</li>
          <li> No warning and conosole error</li>
          <li> Code is formatted by standard Airbnb style guide</li>
          <li> ES6 syntax</li>
        </ul>
      </div>
      <div className='tech-stack'>
        <h2 className='list-heading'>CSS</h2>
        <ul>
          <li> CSS Variables </li>
          <li> Used modern CSS grid for layout</li>
          <li>
            SCSS for modularize code like using Mixins, functions, and extends
          </li>
          <li> Mostly used ES6 syntax</li>
          <li> CSS animations</li>
          <li> CSS gradient</li>
          <li> Clip Path</li>
          <li> CSS Filter property</li>
          <li> Responsive Images</li>
          <li> Using SVG sprite to reduce network request.</li>
          <li>
            {' '}
            Stirctly no use of <strong>!important</strong>
          </li>
          <li> Not using any CSS framework because of extra load</li>
          <li>
            This project is build on pure CSS3 features and is{' '}
            <strong>fully responsive</strong>
          </li>
        </ul>
        <img src='/img/about-website/css-grid.png' alt='styled components' />
      </div>
      <div className='tech-stack'>
        <h2 className='list-heading'>React JS</h2>
        <ul>
          <li>React Hooks</li>
          <li>Suspense & Lazy Lodaing</li>
          <li>Code Splitting</li>
          <li>Well organized functional components and proper use of state</li>
          <li>Higher Order Function</li>
          <li>
            Intersection Observer API using Hooks for changing navbar on
            scrolling
          </li>
          <li>CSS styled components</li>
          <li>Webpack</li>
          <li>Server Side Rendering for SEO</li>
        </ul>
        <img
          src='/img/about-website/airbnb-style-eslint.png'
          alt='airbnb style'
        />
        <img
          src='/img/about-website/eslint-fixed-error.png'
          alt='airbnb style'
        />
        <img
          src='/img/about-website/styled-components.png'
          alt='styled components'
        />
        <img src='/img/about-website/server-side.png' alt='styled components' />
        <img src='/img/about-website/wireframes.jpeg' alt='styled components' />
      </div>
    </div>
    <div className='aboutme-img' />
  </section>
);
