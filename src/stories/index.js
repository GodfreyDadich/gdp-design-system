import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { withKnobs, text, boolean, number, array, color, select } from '@storybook/addon-knobs';

import { Button, Welcome } from '@storybook/react/demo';
import Select from '../components/Select'

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('Button', module)
  .addDecorator(withKnobs)
  .add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)
  .add('with some emoji', () => (
    <Button onClick={action('clicked')} disabled={boolean('Disabled', false)}>
      <span role="img" aria-label="so cool">
        😀 😎 👍 💯
      </span>
    </Button>
  ));

storiesOf('Select', module)
  .addDecorator(withKnobs)
  .add(
    'basic select', 
    () => <Select
    backgroundColor={color('Background Color', '#fff')}
    placeholder={text('Placeholder', 'Options')} 
    options={array('Options', ['option1', 'option2', 'option3'])}
    selectPadding={number('Padding', 5)}
    textColor={color('Text Color', '#000')}
    borderWidth={number('Border Width', 1)}
    borderColor={color('Border Color', '#000')}
    fontSize={number('Font Size', 12)}
    selectIcon={select('Icon', ['triangle','caret','chevron'], 'triangle')}
    />
  )
