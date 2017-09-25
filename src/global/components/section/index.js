import React from 'react';

import css from './section.styles.css';


const SectionComponent = ({ title, description, imageSrc, imageAlt }) => (
  <div className="section">
    <div className="title">{title}</div>
    <div className="image">
      <img src={imageSrc} alt={imageAlt} />
    </div>
    <div className="description">{description}</div>
  </div>
);

export const Section = SectionComponent;
