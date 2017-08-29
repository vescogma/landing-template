import React from 'react';

import css from './app.styles.css';
import { sendEmail } from './app.actions';

const AppComponent = () => (
  <div>
    <div className={css.text}>
      HELLO WORLD!
    </div>
    <button onClick={sendEmail}>
      TEST EMAIL
    </button>
  </div>
);

export const App = AppComponent;
