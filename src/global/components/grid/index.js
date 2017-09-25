import React from 'react';

import css from './grid.styles.css';

const GridComponent = ({ children }) => (
  <section className={css.wrapper}>
    {children}
  </section>
);

export const Grid = GridComponent;
