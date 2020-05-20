import React, { useState } from 'react';

import './index.scss';

export default ({ inView }) => {
  let [navLinks, setNavLinks] = useState([
    { link: '#home', text: 'home', status: 'inactive' },
    { link: '#skills', text: 'skills', status: 'inactive' },
    { link: '#work', text: 'work', status: 'inactive' },
    { link: '#about', text: 'about', status: 'inactive' },
    { link: '#contact', text: 'contact', status: 'inactive' },
  ]);

  const addClass = inView ? 'nav-bar' : 'nav-bar nav-bar-inverse';

  const makeActive = clickedLink => {
    const updatedLinks = [...navLinks];
    updatedLinks.forEach(link =>
      clickedLink === link.text
        ? (link.status = 'active')
        : (link.status = 'inactive')
    );
    setNavLinks(updatedLinks);
  };

  return (
    <nav className={addClass}>
      <div className='left-links'>
        <ul>
          {navLinks.map(nav => (
            <li className={nav.status} key={nav.text}>
              <a
                href={nav.link}
                onClick={event => makeActive(event.target.text)}
              >
                {nav.text}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};
