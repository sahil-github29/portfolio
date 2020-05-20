import React from 'react';
import './index.scss';
import sprite from '../logo-and-icons/skill-logo-and-icons.svg';

export default () => {
  const icons = [
    {
      icon: 'linkedin',
      value: 'https://www.linkedin.com/in/mohd-sahil-fullstack-developer/',
    },
    { icon: 'paperplane', value: 'sahil242927@gmail.com' },
    { icon: 'phone', value: '+91 9250483367' },
  ];
  return (
    <section className="footer">
      <div>
        Copywrite@2020, Mohd Sahil,
        <div className="contact-links">
          {icons.map((obj) => (
            <div className="link-container" key={obj.icon}>
              <span>
                <svg>
                  <use href={`${sprite}#${obj.icon}`} />
                </svg>
              </span>
              <span>{obj.value}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
