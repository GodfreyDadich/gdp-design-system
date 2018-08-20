import { configure, addDecorator } from '@storybook/react';
import { withThemes } from 'storybook-styled-components'
import { withKnobs } from '@storybook/addon-knobs';

import GDPTheme from '../src/themes/GDPTheme'
import DarkTheme from '../src/themes/DarkTheme'


const themes = {
  'GDP': GDPTheme,
  'Dark': DarkTheme
}

addDecorator(withThemes(themes))
addDecorator(withKnobs)

function loadStories() {
  require('../src/stories');
}

configure(loadStories, module);
