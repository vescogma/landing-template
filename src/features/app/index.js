import React from 'react';

import { sendEmail } from './app.actions';

import { Grid, Section, Header, Info } from '../../global/components';

const AppComponent = () => (
  <div>
    <Header
      title="my big title"
      subtitle="my small tiny title"
      imageSrc={require('../../global/assets/test.jpg')}
      imageAlt="big image"
    />
    <Grid>
      <Info
        title="test grid 1"
        description="hello this is a test image and i'd like to see it in all its glory ok? ok love meeee plx."
        imageSrc={require('../../global/assets/test.jpg')}
        imageAlt="test image 1"
      />
      <Info
        title="test grid 2"
        description="hello this is a test image and i'd like to see it in all its glory ok? ok love meeee plx."
        imageSrc={require('../../global/assets/test.jpg')}
        imageAlt="test image 2"
      />
      <Info
        title="test grid 3"
        description="hello this is a test image and i'd like to see it in all its glory ok? ok love meeee plx."
        imageSrc={require('../../global/assets/test.jpg')}
        imageAlt="test image 3"
      />
    </Grid>
    <Section
      title="test grid 3"
      description="hello this is a test image and i'd like to see it in all its glory ok? ok love meeee plx."
      imageSrc={require('../../global/assets/test.jpg')}
      imageAlt="test image 3"
    />
    <button onClick={sendEmail}>
      TEST EMAIL
    </button>
  </div>
);

export const App = AppComponent;
