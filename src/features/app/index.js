import React from 'react';

import css from './app.styles.css';
import { sendEmail } from './app.actions';

import { Section } from '../../global/components/section';

const AppComponent = () => (
  <div>
    <div className={css.text}>
      Test all the landing pages
    </div>
    <button onClick={sendEmail}>
      TEST EMAIL
    </button>
    <Section
      title="my test section"
      description="hello this is a test image and i'd like to see it in all its glory ok? ok love meeee plx."
      imageSrc={require('../../global/assets/test.jpg')}
      imageAlt="test image"
    />
  </div>
);

export const App = AppComponent;
