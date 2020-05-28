import React, { Suspense, lazy } from 'react';
import { useInView } from 'react-intersection-observer';
import { Route } from 'react-router-dom';

import Home from './components/home';
import Navbar from './components/navbar';
import Skills from './components/skills';
import Work from './components/work';
import About from './components/about';
import Contact from './components/contact';
import Footer from './components/footer';
import Spinner from './components/spinner';

const AboutWebsite = lazy(() => import('./components/about-website'));

export default () => {
  const [ref, inView] = useInView({
    threshold: 0,
  });
  return (
    <div id='container'>
      <Suspense fallback={<Spinner />}>
        <Navbar inView={inView} />
        <Home ref={ref} />
        <Skills />
        <Work />
        <About />
        <Route path='/website/*' component={AboutWebsite} />
        <Contact />
        <Footer />
      </Suspense>
    </div>
  );
};
