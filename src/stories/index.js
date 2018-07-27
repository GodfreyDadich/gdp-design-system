import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { withKnobs, text, boolean, number, array } from '@storybook/addon-knobs';

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
  .add('basic bitches', () => <Select placeholder={text('Placeholder', 'Options')} options={array('Select Options', ['option1', 'option2', 'option3'])}/>)
