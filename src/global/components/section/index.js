import React from 'react';

import css from './section.styles.css';

const SectionComponent = ({ title, description, imageSrc, imageAlt }) => (
  <section className={css.wrapper}>
    <div className={css.title}>
      {title}
    </div>
    <div className={css.image}>
      <img src={imageSrc} alt={imageAlt} />
    </div>
    <div className={css.description}>
      {description}
    </div>
  </section>
);

export const Section = SectionComponent;
