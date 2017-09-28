import React from 'react';

import css from './info.styles.css';

const InfoComponent = ({ title, description, imageSrc, imageAlt }) => (
  <div className={css.wrapper}>
    {/* <div className={css.image}> */}
      <img src={imageSrc} alt={imageAlt} />
    {/* </div> */}
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

export const Info = InfoComponent;
