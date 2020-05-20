import React from 'react';
import ReactDOM from 'react-dom';
import { useInView } from 'react-intersection-observer';
import './index.scss';
import Home from './components/home';
import Navbar from './components/navbar';
import Skills from './components/skills';
import Work from './components/work';
import About from './components/about';
import Contact from './components/contact';
import Footer from './components/footer';

const App = () => {
  const [ref, inView] = useInView({
    threshold: 0,
  });
  return (
    <div id='container'>
      <Navbar inView={inView} />
      <Home ref={ref} />
      <Skills />
      <Work />
      <About />
      <Contact />
      <Footer />
      {/*  
     
     
     
     */}
    </div>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
