import React from 'react';

import css from './section.styles.css';

const SectionComponent = ({ title, description, imageSrc, imageAlt }) => (
  <div
    className={css.wrapper}
    title={imageAlt}
    style={{ backgroundImage: `url(${imageSrc})` }}
  >
    <div className={css.content}>
      <div className={css.title}>
        {title}
      </div>
      <div className={css.description}>
        {description}
      </div>
    </div>
  </div>
);

export const Section = SectionComponent;
