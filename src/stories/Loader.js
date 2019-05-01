import React from 'react';
import { storiesOf } from '@storybook/react';
import Loader from '../components/Loader'

storiesOf('Loader', module)
.add('Logo Loader', () =>
  <div style={{width: '100%', height: '50vh' }} ><Loader /> </div>
)