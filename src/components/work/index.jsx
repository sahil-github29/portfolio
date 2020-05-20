import React from 'react'
import './index.scss'

import { PageHeadingWithLines } from '../styled-components'

export default () => (
  <section className="work" id="work">
    <PageHeadingWithLines>Work</PageHeadingWithLines>

    <div className="projects">
      <img src="/img/project-1.jpg" alt="project-1" />
      <img src="/img/project-2.jpg" alt="project-2" />
      <img src="/img/project-3.jpg" alt="project-3" />
      <img src="/img/project-4.jpg" alt="project-4" />
      <img src="/img/project-5.jpg" alt="project-5" />
      <img src="/img/project-6.jpg" alt="project-6" />
    </div>
  </section>
)
