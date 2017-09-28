import React from 'react';

import css from './header.styles.css';

const HeaderComponent = ({ title, subtitle, imageSrc, imageAlt }) => (
  <div
    className={css.base}
    style={{ backgroundImage: `url(${imageSrc})` }}
  >
    <div className={css.wrapper}>
      <div className={css.title}>
        {title}
      </div>
      <div className={css.subtitle}>
        {subtitle}
      </div>
    </div>
  </div>
);

export const Header = HeaderComponent;
