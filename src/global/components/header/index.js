import React from 'react';

import css from './header.styles.css';

const HeaderComponent = ({ title, subtitle, imageSrc, imageAlt }) => (
  <section className={css.wrapper}>
    <div className={css.image}>
      <img src={imageSrc} alt={imageAlt} />
    </div>
    <div className={css.title}>
      {title}
    </div>
    <div className={css.subtitle}>
      {subtitle}
    </div>
  </section>
);

export const Header = HeaderComponent;
