import React from 'react';

import css from './grid.styles.css';

const GridComponent = ({ children }) => (
  <div className={css.wrapper}>
    {children}
  </div>
);

export const Grid = GridComponent;
