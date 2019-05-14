import React from 'react';
import { storiesOf } from '@storybook/react';
import { text } from '@storybook/addon-knobs';
import Footer from '../components/Footer';

storiesOf('Footer', module)
  .add('Footer', () => <Footer
    title1={text('Title 1', 'Chris Baker')}
    subtitle1={text('Subtitle 1', 'Meet Leland Chee, the Star Wars franchise continuity cop')}
    title2={text('Title 2', 'Robert Caps')}
    subtitle2={text('Subtitle 2', 'Why things fail: from tires to helicopter blades, everything breaks eventually')}
  />)