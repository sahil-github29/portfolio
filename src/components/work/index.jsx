import React from "react";
import "./index.scss";

import { PageHeadingWithLines } from "../styled-components";

export default () => (
  <section className="work" id="work">
    <PageHeadingWithLines>Work</PageHeadingWithLines>

    <div className="projects">
      {/* Using Art Direction method for responsive images */}
      <picture>
        <source
          media="(max-width:64em)"
          srcSet="/img/project-1-ipad-1x.jpg 1x, /img/project-1-ipad-2x.jpg 2x"
        />
        <img
          srcSet="/img/project-1.jpg 1x, /img/project-1.jpg 2x"
          alt="project-1"
          src="/img/project-1.jpg"
        />
      </picture>
      {/* Using Resolution Switching method for responsive images */}
      <img
        srcSet="/img/project-2.jpg 300w, /img/project-2.jpg 640w"
        sizes="(max-width:25em) 72vw , 280px"
        img="/img/project-2.jpg"
        alt="project-2"
      />

      {/* <img src="/img/project-2.jpg" alt="project-2" /> */}
      <img src="/img/project-3.jpg" alt="project-3" />
      <img src="/img/project-4.jpg" alt="project-4" />
      <img src="/img/project-5.jpg" alt="project-5" />
      <img src="/img/project-6.jpg" alt="project-6" />
    </div>
  </section>
);
