import React from 'react';
import { storiesOf } from '@storybook/react';
import { array } from '@storybook/addon-knobs';

import Chips from '../components/Chips'

const chips = [
  'chip 1',
  'chip 2',  
  'chip 3',
]

const chipRemove = toRemove => {
  chips.splice(toRemove,1)
}

storiesOf('Chips', module)
  .add(
    'chips',
    () => <Chips 
      chips={array('Chips', chips, ',')}
      closeCallback={chipRemove}
    />
  )