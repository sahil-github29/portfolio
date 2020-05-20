import React from 'react';
import './index.scss';

export default React.forwardRef((props, ref) => (
  <section className='home mb-md' ref={ref} id='home'>
    <div className='text-container'>
      <span className='banner-text-1'>Hi,</span>
      <span className='banner-text-2'>I&apos;m Sahil,</span>
      <span className='banner-text-3'>Web Developer,</span>
      <span className='banner-text-4'>
        Front End Web Developer / Lead / JavaScript Expert / C2H (Contract to
        hire)
      </span>
    </div>
  </section>
));
