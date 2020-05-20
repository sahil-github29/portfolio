import React from 'react';
import './index.scss';
import { PageHeading, Paragraph } from '../styled-components';
export default () => (
  <section className='about' id='about'>
    <div>
      <PageHeading>About Me</PageHeading>
      <Paragraph>
        Well-organised person, problem solver, independent employee with high
        attention to detail. Fan of MMA, outdoor activities, TV series and,
        recently, English literature. A family person, father of two fractious
        girls, therefore remote employment is preferred.
      </Paragraph>
    </div>
    <div className='aboutme-img' />
  </section>
);
