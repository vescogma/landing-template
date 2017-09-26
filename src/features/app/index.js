import React from 'react';

import css from './app.styles.css';
import { sendEmail } from './app.actions';

import { Grid, Section, Header } from '../../global/components';

const AppComponent = () => (
  <div>
    <div className={css.text}>
      Test all the landing pages
    </div>
    <button onClick={sendEmail}>
      TEST EMAIL
    </button>
    <Header
      title="my big title"
      subtitle="my small tiny title"
      imageSrc={require('../../global/assets/test.jpg')}
      imageAlt="big image"
    />
    <Grid>
      <Section
        title="test grid 1"
        description="hello this is a test image and i'd like to see it in all its glory ok? ok love meeee plx."
        imageSrc={require('../../global/assets/test.jpg')}
        imageAlt="test image 1"
      />
      <Section
        title="test grid 2"
        description="hello this is a test image and i'd like to see it in all its glory ok? ok love meeee plx."
        imageSrc={require('../../global/assets/test.jpg')}
        imageAlt="test image 2"
      />
      <Section
        title="test grid 3"
        description="hello this is a test image and i'd like to see it in all its glory ok? ok love meeee plx."
        imageSrc={require('../../global/assets/test.jpg')}
        imageAlt="test image 3"
      />
    </Grid>
  </div>
);

export const App = AppComponent;
