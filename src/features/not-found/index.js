import React from 'react';

import css from './not-found.styles.css';

const NotFoundComponent = ({ status }) => (
  <div>
    {status} page not found bitch
  </div>
);

export const NotFound = NotFoundComponent;
